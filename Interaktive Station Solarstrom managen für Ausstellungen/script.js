// Solarstrom managen - Interactive Simulation Script

// Global simulation state
const simulationState = {
    // Solar panel and power generation
    lightIntensity: 50, // 0-100%
    currentPower: 0, // Watts
    maxPower: 5000, // Maximum power output in Watts
    
    // Energy flows
    solarToHouse: 0, // Watts
    houseToGrid: 0, // Watts
    houseToBattery: 0, // Watts
    gridToHouse: 0, // Watts
    batteryToHouse: 0, // Watts
    
    // Energy totals
    totalProduction: 0, // kWh
    totalConsumption: 0, // kWh
    gridFeed: 0, // kWh
    gridDraw: 0, // kWh
    
    // Battery
    batteryCapacity: 10, // kWh
    batteryLevel: 20, // %
    
    // Devices status and power consumption
    devices: {
        fridge: { active: true, power: 100, essential: true },
        tv: { active: false, power: 150, essential: false },
        washing: { active: false, power: 2000, essential: false },
        oven: { active: false, power: 2500, essential: false },
        lights: { active: false, power: 200, essential: false },
        car: { active: false, power: 3700, essential: false }
    },
    
    // Energy management preferences
    surplusManagement: 'grid', // 'grid', 'battery', 'heat'
    deficitManagement: 'grid', // 'grid', 'battery', 'reduce'
    
    // Time simulation
    timeSimulation: false,
    currentTime: new Date(2025, 2, 25, 8, 0), // Start at 8:00 AM
    timeSpeed: 60, // 1 hour per second
    
    // Weather simulation
    weatherCondition: 'sunny', // 'sunny', 'partly_cloudy', 'cloudy', 'rainy'
    
    // Language
    language: 'de'
};

// Device translations
const translations = {
    de: {
        devices: {
            fridge: 'Kühlschrank',
            tv: 'Fernseher',
            washing: 'Waschmaschine',
            oven: 'Herd',
            lights: 'Beleuchtung',
            car: 'E-Auto'
        },
        ui: {
            reset: 'Simulation zurücksetzen',
            startTimeSimulation: 'Zeitraffer starten',
            stopTimeSimulation: 'Zeitraffer stoppen',
            simulationTime: 'Simulationszeit:',
            currentPower: 'Aktuelle Leistung',
            solarToHouse: 'Solar → Haus',
            houseToGrid: 'Haus → Netz',
            houseToBattery: 'Haus → Batterie',
            gridToHouse: 'Netz → Haus',
            batteryToHouse: 'Batterie → Haus',
            totalProduction: 'Erzeugung',
            totalConsumption: 'Verbrauch',
            gridFeed: 'Netzeinspeisung',
            gridDraw: 'Netzbezug',
            batteryLevel: 'Batterieladung',
            selfSufficiency: 'Autarkie',
            lightIntensity: 'Lichtintensität:',
            surplusOptions: {
                grid: 'Ins Netz einspeisen',
                battery: 'In Batterie speichern',
                heat: 'In Wärme umwandeln'
            },
            deficitOptions: {
                grid: 'Aus dem Netz beziehen',
                battery: 'Aus Batterie beziehen',
                reduce: 'Verbrauch reduzieren'
            }
        }
    },
    en: {
        devices: {
            fridge: 'Refrigerator',
            tv: 'Television',
            washing: 'Washing Machine',
            oven: 'Stove',
            lights: 'Lighting',
            car: 'Electric Car'
        },
        ui: {
            reset: 'Reset Simulation',
            startTimeSimulation: 'Start Time Lapse',
            stopTimeSimulation: 'Stop Time Lapse',
            simulationTime: 'Simulation Time:',
            currentPower: 'Current Power',
            solarToHouse: 'Solar → House',
            houseToGrid: 'House → Grid',
            houseToBattery: 'House → Battery',
            gridToHouse: 'Grid → House',
            batteryToHouse: 'Battery → House',
            totalProduction: 'Production',
            totalConsumption: 'Consumption',
            gridFeed: 'Grid Feed-in',
            gridDraw: 'Grid Draw',
            batteryLevel: 'Battery Level',
            selfSufficiency: 'Self-sufficiency',
            lightIntensity: 'Light Intensity:',
            surplusOptions: {
                grid: 'Feed into grid',
                battery: 'Store in battery',
                heat: 'Convert to heat'
            },
            deficitOptions: {
                grid: 'Draw from grid',
                battery: 'Use battery',
                reduce: 'Reduce consumption'
            }
        }
    }
};

// DOM Elements
const elements = {
    // Light controls
    lightIntensitySlider: document.getElementById('light-intensity'),
    lightValue: document.querySelector('.light-value'),
    solarCells: document.querySelectorAll('.cell'),
    
    // Power meter
    powerMeterValue: document.querySelector('.meter-value'),
    powerMeterFill: document.querySelector('.meter-fill'),
    
    // Energy flows
    solarHouseFlow: document.querySelector('.flow-indicator.solar-house .flow-value'),
    houseGridFlow: document.querySelector('.flow-indicator.house-grid .flow-value'),
    houseBatteryFlow: document.querySelector('.flow-indicator.house-battery .flow-value'),
    
    // SVG flow indicators
    solarToHousePath: document.getElementById('solar-to-house'),
    houseToGridPath: document.getElementById('house-to-grid'),
    houseToBatteryPath: document.getElementById('house-to-battery'),
    batteryElement: document.getElementById('battery'),
    
    // Devices
    deviceSwitches: document.querySelectorAll('.device .switch input'),
    deviceElements: document.querySelectorAll('.device'),
    
    // Energy management
    surplusOptions: document.querySelectorAll('input[name="surplus"]'),
    deficitOptions: document.querySelectorAll('input[name="deficit"]'),
    
    // Dashboard
    totalProduction: document.getElementById('total-production'),
    totalConsumption: document.getElementById('total-consumption'),
    gridFeed: document.getElementById('grid-feed'),
    gridDraw: document.getElementById('grid-draw'),
    batteryLevel: document.getElementById('battery-level'),
    selfSufficiency: document.getElementById('self-sufficiency'),
    
    // Simulation controls
    resetButton: document.getElementById('reset-simulation'),
    timeToggleButton: document.getElementById('time-toggle'),
    timeValue: document.querySelector('.time-value'),
    
    // Language
    languageButtons: document.querySelectorAll('.language-selector button')
};

// Initialize the simulation
function initSimulation() {
    // Set initial values
    updateLightIntensityDisplay();
    updateSolarCells();
    updateDeviceDisplay();
    updateEnergyManagementOptions();
    
    // Calculate initial power values
    calculatePowerGeneration();
    calculateEnergyFlows();
    updateDisplays();
    
    // Set up event listeners
    setupEventListeners();
}

// Set up all event listeners
function setupEventListeners() {
    // Light intensity slider
    elements.lightIntensitySlider.addEventListener('input', function() {
        simulationState.lightIntensity = parseInt(this.value);
        updateLightIntensityDisplay();
        updateSolarCells();
        calculatePowerGeneration();
        calculateEnergyFlows();
        updateDisplays();
    });
    
    // Device switches
    elements.deviceSwitches.forEach((switchElement, index) => {
        const deviceElement = elements.deviceElements[index];
        const deviceId = deviceElement.dataset.device;
        
        switchElement.addEventListener('change', function() {
            simulationState.devices[deviceId].active = this.checked;
            updateDeviceDisplay();
            calculateEnergyFlows();
            updateDisplays();
        });
    });
    
    // Energy management options
    elements.surplusOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.checked) {
                simulationState.surplusManagement = this.value;
                calculateEnergyFlows();
                updateDisplays();
            }
        });
    });
    
    elements.deficitOptions.forEach(option => {
        option.addEventListener('change', function() {
            if (this.checked) {
                simulationState.deficitManagement = this.value;
                calculateEnergyFlows();
                updateDisplays();
            }
        });
    });
    
    // Reset button
    elements.resetButton.addEventListener('click', resetSimulation);
    
    // Time toggle button
    elements.timeToggleButton.addEventListener('click', toggleTimeSimulation);
    
    // Language buttons
    elements.languageButtons.forEach(button => {
        button.addEventListener('click', function() {
            changeLanguage(this.dataset.lang);
        });
    });
}

// Update light intensity display
function updateLightIntensityDisplay() {
    elements.lightValue.textContent = `${simulationState.lightIntensity}%`;
    elements.lightIntensitySlider.value = simulationState.lightIntensity;
}

// Update solar cells based on light intensity
function updateSolarCells() {
    const activeCells = Math.round((simulationState.lightIntensity / 100) * elements.solarCells.length);
    
    elements.solarCells.forEach((cell, index) => {
        if (index < activeCells) {
            cell.classList.add('active');
        } else {
            cell.classList.remove('active');
        }
    });
}

// Update device display
function updateDeviceDisplay() {
    elements.deviceElements.forEach(deviceElement => {
        const deviceId = deviceElement.dataset.device;
        const isActive = simulationState.devices[deviceId].active;
        
        if (isActive) {
            deviceElement.classList.add('active');
        } else {
            deviceElement.classList.remove('active');
        }
    });
}

// Update energy management options
function updateEnergyManagementOptions() {
    // Set surplus management option
    document.querySelector(`input[name="surplus"][value="${simulationState.surplusManagement}"]`).checked = true;
    
    // Set deficit management option
    document.querySelector(`input[name="deficit"][value="${simulationState.deficitManagement}"]`).checked = true;
}

// Calculate power generation based on light intensity
function calculatePowerGeneration() {
    // Base calculation with some randomness to simulate real-world conditions
    const baseGeneration = (simulationState.lightIntensity / 100) * simulationState.maxPower;
    const randomFactor = 0.9 + Math.random() * 0.2; // Random factor between 0.9 and 1.1
    
    // Apply time of day factor if time simulation is active
    let timeOfDayFactor = 1;
    if (simulationState.timeSimulation) {
        const hour = simulationState.currentTime.getHours();
        // Peak generation around noon, lower in morning and evening
        if (hour < 6 || hour > 20) {
            timeOfDayFactor = 0;
        } else if (hour < 9) {
            timeOfDayFactor = (hour - 6) / 3; // Ramp up from 6-9 AM
        } else if (hour > 17) {
            timeOfDayFactor = 1 - ((hour - 17) / 3); // Ramp down from 5-8 PM
        } else if (hour >= 9 && hour <= 17) {
            timeOfDayFactor = 1; // Full power from 9 AM to 5 PM
        }
    }
    
    // Apply weather condition factor
    let weatherFactor = 1;
    switch (simulationState.weatherCondition) {
        case 'partly_cloudy':
            weatherFactor = 0.7;
            break;
        case 'cloudy':
            weatherFactor = 0.3;
            break;
        case 'rainy':
            weatherFactor = 0.1;
            break;
    }
    
    simulationState.currentPower = Math.round(baseGeneration * randomFactor * timeOfDayFactor * weatherFactor);
}

// Calculate energy flows based on generation and consumption
function calculateEnergyFlows() {
    // Calculate total consumption
    let totalConsumption = 0;
    for (const deviceId in simulationState.devices) {
        if (simulationState.devices[deviceId].active) {
            totalConsumption += simulationState.devices[deviceId].power;
        }
    }
    
    // Reset all flows
    simulationState.solarToHouse = 0;
    simulationState.houseToGrid = 0;
    simulationState.houseToBattery = 0;
    simulationState.gridToHouse = 0;
    simulationState.batteryToHouse = 0;
    
    // Case 1: Generation exceeds consumption
    if (simulationState.currentPower >= totalConsumption) {
        // All consumption is covered by solar
        simulationState.solarToHouse = totalConsumption;
        
        // Handle surplus according to management preference
        const surplus = simulationState.currentPower - totalConsumption;
        
        if (surplus > 0) {
            switch (simulationState.surplusManagement) {
                case 'grid':
                    simulationState.houseToGrid = surplus;
                    break;
                case 'battery':
                    // Only store what the battery can accept
                    const maxCharge = (simulationState.batteryCapacity * (100 - simulationState.batteryLevel) / 100) * 1000; // Convert to W
                    simulationState.houseToBattery = Math.min(surplus, maxCharge);
                    
                    // If there's still excess after battery is full, send to grid
                    if (surplus > maxCharge) {
                        simulationState.houseToGrid = surplus - maxCharge;
                    }
                    break;
                case 'heat':
                    // Simulate heat conversion (no grid feed-in or battery charging)
                    // In a real system, this would activate a heating element
                    break;
            }
        }
    }
    // Case 2: Consumption exceeds generation
    else {
        // All generation goes to consumption
        simulationState.solarToHouse = simulationState.currentPower;
        
        // Handle deficit according to management preference
        const deficit = totalConsumption - simulationState.currentPower;
        
        if (deficit > 0) {
            switch (simulationState.deficitManagement) {
                case 'grid':
                    simulationState.gridToHouse = deficit;
                    break;
                case 'battery':
                    // Only draw what the battery has available
                    const availableBatteryPower = (simulationState.batteryCapacity * simulationState.batteryLevel / 100) * 1000; // Convert to W
                    simulationState.batteryToHouse = Math.min(deficit, availableBatteryPower);
                    
                    // If battery can't cover all deficit, draw from grid
                    if (deficit > availableBatteryPower) {
                        simulationState.gridToHouse = deficit - availableBatteryPower;
                    }
                    break;
                case 'reduce':
                    // Simulate load shedding by turning off non-essential devices
                    let remainingDeficit = deficit;
                    let reducedConsumption = 0;
                    
                    // First try to reduce consumption by turning off non-essential devices
                    for (const deviceId in simulationState.devices) {
                        if (simulationState.devices[deviceId].active && !simulationState.devices[deviceId].essential) {
                            // Turn off this device
                            simulationState.devices[deviceId].active = false;
                            reducedConsumption += simulationState.devices[deviceId].power;
                            
                            // Check if we've reduced enough
                            if (reducedConsumption >= remainingDeficit) {
                                break;
                            }
                        }
                    }
                    
                    // Update device display after turning off devices
                    updateDeviceDisplay();
                    
                    // If we still have a deficit after turning off all non-essential devices, draw from grid
                    if (reducedConsumption < remainingDeficit) {
                        simulationState.gridToHouse = remainingDeficit - reducedConsumption;
                    }
                    break;
            }
        }
    }
    
    // Update battery level based on charging/discharging
    if (simulationState.houseToBattery > 0) {
        // Convert W to kWh for 1 second of simulation time
        const chargeAmount = simulationState.houseToBattery / 1000 / 3600;
        const percentageIncrease = (chargeAmount / simulationState.batteryCapacity) * 100;
        simulationState.batteryLevel = Math.min(100, simulationState.batteryLevel + percentageIncrease);
    }
    
    if (simulationState.batteryToHouse > 0) {
        // Convert W to kWh for 1 second of simulation time
        const dischargeAmount = simulationState.batteryToHouse / 1000 / 3600;
        const percentageDecrease = (dischargeAmount / simulationState.batteryCapacity) * 100;
        simulationState.batteryLevel = Math.max(0, simulationState.batteryLevel - percentageDecrease);
    }
    
    // Update energy totals (only if time simulation is active)
    if (simulationState.timeSimulation) {
        // Convert W to kWh for the simulation time step
        const hourFraction = simulationState.timeSpeed / 3600;
        simulationState.totalProduction += (simulationState.currentPower / 1000) * hourFraction;
        simulationState.totalConsumption += (totalConsumption / 1000) * hourFraction;
        simulationState.gridFeed += (simulationState.houseToGrid / 1000) * hourFraction;
        simulationState.gridDraw += (simulationState.gridToHouse / 1000) * hourFraction;
    }
}

// Update all display elements
function updateDisplays() {
    // Update power meter
    elements.powerMeterValue.textContent = `${simulationState.currentPower} W`;
    const powerPercentage = (simulationState.currentPower / simulationState.maxPower) * 100;
    elements.powerMeterFill.style.width = `${Math.min(100, powerPercentage)}%`;
    
    // Update energy flows
    elements.solarHouseFlow.textContent = `${simulationState.solarToHouse} W`;
    elements.houseGridFlow.textContent = `${simulationState.houseToGrid} W`;
    elements.houseBatteryFlow.textContent = `${simulationState.houseToBattery} W`;
    
    // Update SVG flow indicators
    updateFlowAnimation(elements.solarToHousePath, simulationState.solarToHouse);
    updateFlowAnimation(elements.houseToGridPath, simulationState.houseToGrid);
    updateFlowAnimation(elements.houseToBatteryPath, simulationState.houseToBattery);
    
    // Update battery display
    updateBatteryDisplay();
    
    // Update dashboard
    elements.totalProduction.textContent = `${simulationState.totalProduction.toFixed(2)} kWh`;
    elements.totalConsumption.textContent = `${simulationState.totalConsumption.toFixed(2)} kWh`;
    elements.gridFeed.textContent = `${simulationState.gridFeed.toFixed(2)} kWh`;
    elements.gridDraw.textContent = `${simulationState.gridDraw.toFixed(2)} kWh`;
    elements.batteryLevel.textContent = `${Math.round(simulationState.batteryLevel)} %`;
    
    // Calculate and update self-sufficiency
    let selfSufficiency = 0;
    if (simulationState.totalConsumption > 0) {
        selfSufficiency = ((simulationState.totalConsumption - simulationState.gridDraw) / simulationState.totalConsumption) * 100;
    }
    elements.selfSufficiency.textContent = `${Math.round(selfSufficiency)} %`;
}

// Update flow animation in SVG
function updateFlowAnimation(pathElement, flowValue) {
    if (!pathElement) return;
    
    if (flowValue > 0) {
        // Make path visible and animate
        pathElement.style.opacity = '1';
        
        // Adjust stroke width based on flow value
        const maxStrokeWidth = 8;
        const minStrokeWidth = 2;
        const maxFlow = 5000; // Maximum expected flow in Watts
        
        const strokeWidth = minStrokeWidth + ((flowValue / maxFlow) * (maxStrokeWidth - minStrokeWidth));
        pathElement.style.strokeWidth = `${Math.min(maxStrokeWidth, strokeWidth)}px`;
        
        // Adjust animation speed based on flow value
        const dashLength = 10;
        const gapLength = 5;
        pathElement.style.strokeDasharray = `${dashLength}, ${gapLength}`;
        
        // Faster animation for higher flow
        const maxAnimationDuration = 10;
        const minAnimationDuration = 1;
        const animationDuration = maxAnimationDuration - ((flowValue / maxFlow) * (maxAnimationDuration - minAnimationDuration));
        
        pathElement.style.animation = `flowAnimation ${Math.max(minAnimationDuration, animationDuration)}s linear infinite`;
    } else {
        // Hide path when no flow
        pathElement.style.opacity = '0.2';
        pathElement.style.animation = 'none';
    }
}

// Update battery display
function updateBatteryDisplay() {
    if (!elements.batteryElement) return;
    
    // Update battery fill height based on level
    const batteryHeight = 20; // Height of battery SVG element
    const fillHeight = (simulationState.batteryLevel / 100) * batteryHeight;
    
    // Create or update battery fill rectangle
    let batteryFill = elements.batteryElement.querySelector('rect.battery-fill');
    if (!batteryFill) {
        batteryFill = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        batteryFill.setAttribute('class', 'battery-fill');
        batteryFill.setAttribute('x', '10');
        batteryFill.setAttribute('width', '10');
        elements.batteryElement.appendChild(batteryFill);
    }
    
    batteryFill.setAttribute('y', 130 + batteryHeight - fillHeight);
    batteryFill.setAttribute('height', fillHeight);
    batteryFill.setAttribute('fill', getBatteryColor(simulationState.batteryLevel));
}

// Get battery color based on level
function getBatteryColor(level) {
    if (level < 20) {
        return '#E53935'; // Red for low battery
    } else if (level < 50) {
        return '#FFC107'; // Yellow for medium battery
    } else {
        return '#4CAF50'; // Green for high battery
    }
}

// Reset simulation to initial state
function resetSimulation() {
    // Reset power generation
    simulationState.lightIntensity = 50;
    simulationState.currentPower = 0;
    
    // Reset energy flows
    simulationState.solarToHouse = 0;
    simulationState.houseToGrid = 0;
    simulationState.houseToBattery = 0;
    simulationState.gridToHouse = 0;
    simulationState.batteryToHouse = 0;
    
    // Reset energy totals
    simulationState.totalProduction = 0;
    simulationState.totalConsumption = 0;
    simulationState.gridFeed = 0;
    simulationState.gridDraw = 0;
    
    // Reset battery
    simulationState.batteryLevel = 20;
    
    // Reset devices (only fridge stays on)
    for (const deviceId in simulationState.devices) {
        simulationState.devices[deviceId].active = (deviceId === 'fridge');
    }
    
    // Reset energy management
    simulationState.surplusManagement = 'grid';
    simulationState.deficitManagement = 'grid';
    
    // Reset time
    simulationState.currentTime = new Date(2025, 2, 25, 8, 0);
    simulationState.timeSimulation = false;
    elements.timeToggleButton.textContent = translations[simulationState.language].ui.startTimeSimulation;
    
    // Reset weather
    simulationState.weatherCondition = 'sunny';
    
    // Update all displays
    updateLightIntensityDisplay();
    updateSolarCells();
    updateDeviceDisplay();
    updateEnergyManagementOptions();
    calculatePowerGeneration();
    calculateEnergyFlows();
    updateDisplays();
    updateTimeDisplay();
}

// Toggle time simulation
function toggleTimeSimulation() {
    simulationState.timeSimulation = !simulationState.timeSimulation;
    
    if (simulationState.timeSimulation) {
        elements.timeToggleButton.textContent = translations[simulationState.language].ui.stopTimeSimulation;
        runTimeSimulation();
    } else {
        elements.timeToggleButton.textContent = translations[simulationState.language].ui.startTimeSimulation;
    }
}

// Run time simulation
function runTimeSimulation() {
    if (!simulationState.timeSimulation) return;
    
    // Advance time
    simulationState.currentTime = new Date(simulationState.currentTime.getTime() + (simulationState.timeSpeed * 1000));
    
    // Update time display
    updateTimeDisplay();
    
    // Update weather based on time (simplified model)
    updateWeatherCondition();
    
    // Recalculate power generation and energy flows
    calculatePowerGeneration();
    calculateEnergyFlows();
    updateDisplays();
    
    // Continue simulation
    setTimeout(runTimeSimulation, 1000);
}

// Update time display
function updateTimeDisplay() {
    const hours = simulationState.currentTime.getHours().toString().padStart(2, '0');
    const minutes = simulationState.currentTime.getMinutes().toString().padStart(2, '0');
    elements.timeValue.textContent = `${hours}:${minutes} Uhr`;
}

// Update weather condition based on time
function updateWeatherCondition() {
    // Simplified weather model - random changes with time progression
    const hour = simulationState.currentTime.getHours();
    const random = Math.random();
    
    // More likely to be sunny during midday
    if (hour >= 10 && hour <= 14) {
        if (random < 0.7) {
            simulationState.weatherCondition = 'sunny';
        } else if (random < 0.9) {
            simulationState.weatherCondition = 'partly_cloudy';
        } else {
            simulationState.weatherCondition = 'cloudy';
        }
    } 
    // More variable in morning and afternoon
    else if (hour >= 7 && hour <= 18) {
        if (random < 0.4) {
            simulationState.weatherCondition = 'sunny';
        } else if (random < 0.7) {
            simulationState.weatherCondition = 'partly_cloudy';
        } else if (random < 0.9) {
            simulationState.weatherCondition = 'cloudy';
        } else {
            simulationState.weatherCondition = 'rainy';
        }
    }
    // More likely to be cloudy/rainy in early morning and evening
    else {
        if (random < 0.2) {
            simulationState.weatherCondition = 'sunny';
        } else if (random < 0.4) {
            simulationState.weatherCondition = 'partly_cloudy';
        } else if (random < 0.8) {
            simulationState.weatherCondition = 'cloudy';
        } else {
            simulationState.weatherCondition = 'rainy';
        }
    }
}

// Change language
function changeLanguage(lang) {
    if (lang !== 'de' && lang !== 'en') return;
    
    simulationState.language = lang;
    
    // Update active language button
    elements.languageButtons.forEach(button => {
        if (button.dataset.lang === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
    
    // Update UI text elements
    updateUIText();
}

// Update UI text based on selected language
function updateUIText() {
    const lang = simulationState.language;
    const text = translations[lang];
    
    // Update device names
    elements.deviceElements.forEach(deviceElement => {
        const deviceId = deviceElement.dataset.device;
        const nameElement = deviceElement.querySelector('.device-name');
        if (nameElement && text.devices[deviceId]) {
            nameElement.textContent = text.devices[deviceId];
        }
    });
    
    // Update button text
    elements.resetButton.textContent = text.ui.reset;
    elements.timeToggleButton.textContent = simulationState.timeSimulation ? 
        text.ui.stopTimeSimulation : text.ui.startTimeSimulation;
    
    // Update labels
    document.querySelector('.meter-label').textContent = text.ui.currentPower;
    document.querySelector('.flow-indicator.solar-house .flow-label').textContent = text.ui.solarToHouse;
    document.querySelector('.flow-indicator.house-grid .flow-label').textContent = text.ui.houseToGrid;
    document.querySelector('.flow-indicator.house-battery .flow-label').textContent = text.ui.houseToBattery;
    document.querySelector('.time-label').textContent = text.ui.simulationTime;
    document.querySelector('label[for="light-intensity"]').textContent = text.ui.lightIntensity;
    
    // Update dashboard labels
    document.querySelector('#total-production').parentElement.querySelector('.item-label').textContent = text.ui.totalProduction;
    document.querySelector('#total-consumption').parentElement.querySelector('.item-label').textContent = text.ui.totalConsumption;
    document.querySelector('#grid-feed').parentElement.querySelector('.item-label').textContent = text.ui.gridFeed;
    document.querySelector('#grid-draw').parentElement.querySelector('.item-label').textContent = text.ui.gridDraw;
    document.querySelector('#battery-level').parentElement.querySelector('.item-label').textContent = text.ui.batteryLevel;
    document.querySelector('#self-sufficiency').parentElement.querySelector('.item-label').textContent = text.ui.selfSufficiency;
    
    // Update radio button labels
    document.querySelectorAll('input[name="surplus"]').forEach(input => {
        const label = input.parentElement.querySelector('span');
        if (label && text.ui.surplusOptions[input.value]) {
            label.textContent = text.ui.surplusOptions[input.value];
        }
    });
    
    document.querySelectorAll('input[name="deficit"]').forEach(input => {
        const label = input.parentElement.querySelector('span');
        if (label && text.ui.deficitOptions[input.value]) {
            label.textContent = text.ui.deficitOptions[input.value];
        }
    });
}

// Add CSS animation for energy flow
const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes flowAnimation {
    from {
        stroke-dashoffset: 0;
    }
    to {
        stroke-dashoffset: -30;
    }
}
`;
document.head.appendChild(styleSheet);

// Initialize the simulation when the page loads
window.addEventListener('DOMContentLoaded', initSimulation);
