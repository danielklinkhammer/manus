// Main JavaScript for Solarstrom Managen Website

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navMenu && navMenu.classList.contains('active') && 
            !event.target.closest('nav') && 
            !event.target.closest('.mobile-menu-btn')) {
            navMenu.classList.remove('active');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    // Close mobile menu if open
                    if (navMenu && navMenu.classList.contains('active')) {
                        navMenu.classList.remove('active');
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Simulation functionality (if on simulation page)
    initSimulation();
    
    // Add animation classes on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    if (animatedElements.length > 0) {
        // Check if element is in viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
                rect.bottom >= 0
            );
        }
        
        // Add animation class when element is in viewport
        function checkAnimations() {
            animatedElements.forEach(element => {
                if (isInViewport(element) && !element.classList.contains('animated')) {
                    const animationClass = element.dataset.animation || 'fade-in';
                    element.classList.add(animationClass, 'animated');
                }
            });
        }
        
        // Check animations on scroll
        window.addEventListener('scroll', checkAnimations);
        
        // Check animations on page load
        checkAnimations();
    }
    
    // Documentation page functionality
    initDocumentationPage();
});

// Initialize solar simulation
function initSimulation() {
    const simulationContainer = document.querySelector('.simulation-container');
    if (!simulationContainer) return;
    
    // Elements
    const lightSlider = document.getElementById('light-intensity');
    const energyValue = document.querySelector('.energy-value');
    const deviceItems = document.querySelectorAll('.device-item');
    const batterySlider = document.getElementById('battery-storage');
    const batteryLevel = document.getElementById('battery-level');
    const gridExport = document.getElementById('grid-export');
    
    // Variables
    let solarProduction = 0;
    let consumption = 0;
    let batteryCapacity = 0;
    let batteryCharge = 0;
    
    // Update energy display
    function updateEnergyDisplay() {
        // Calculate net energy
        const netEnergy = solarProduction - consumption;
        
        // Update energy value display
        if (energyValue) {
            energyValue.textContent = netEnergy.toFixed(1);
            
            // Change color based on value
            if (netEnergy > 0) {
                energyValue.style.color = '#4CAF50'; // Green for positive
            } else if (netEnergy < 0) {
                energyValue.style.color = '#F44336'; // Red for negative
            } else {
                energyValue.style.color = '#2B5F9B'; // Blue for zero
            }
        }
        
        // Update battery level if we have excess energy
        if (batteryLevel && batterySlider) {
            batteryCapacity = parseInt(batterySlider.value);
            
            if (netEnergy > 0) {
                // Charge battery with excess energy
                batteryCharge = Math.min(batteryCharge + (netEnergy * 0.1), batteryCapacity);
            } else if (netEnergy < 0 && batteryCharge > 0) {
                // Discharge battery to cover deficit
                batteryCharge = Math.max(batteryCharge + (netEnergy * 0.1), 0);
            }
            
            // Update battery level display
            const batteryPercentage = batteryCapacity > 0 ? (batteryCharge / batteryCapacity) * 100 : 0;
            batteryLevel.textContent = batteryPercentage.toFixed(0) + '%';
        }
        
        // Update grid export display
        if (gridExport) {
            const exportValue = netEnergy > 0 ? netEnergy - (batteryCapacity > 0 ? Math.min(netEnergy * 0.1, batteryCapacity - batteryCharge) : 0) : 0;
            gridExport.textContent = exportValue.toFixed(1) + ' kW';
        }
    }
    
    // Light intensity slider
    if (lightSlider) {
        lightSlider.addEventListener('input', function() {
            const intensity = parseInt(this.value);
            solarProduction = intensity * 0.1; // 0-10 kW based on slider
            updateEnergyDisplay();
            
            // Visual feedback
            document.documentElement.style.setProperty('--light-intensity', intensity + '%');
        });
        
        // Initialize with default value
        solarProduction = parseInt(lightSlider.value) * 0.1;
    }
    
    // Device toggles
    if (deviceItems.length > 0) {
        deviceItems.forEach(device => {
            // Set data attribute for power consumption
            const power = Math.random() * 2 + 0.1; // Random power between 0.1 and 2.1 kW
            device.dataset.power = power.toFixed(1);
            
            // Add power consumption to device display
            const powerDisplay = document.createElement('div');
            powerDisplay.className = 'device-power';
            powerDisplay.textContent = power.toFixed(1) + ' kW';
            device.appendChild(powerDisplay);
            
            // Toggle device on/off
            device.addEventListener('click', function() {
                this.classList.toggle('active');
                
                // Update consumption
                if (this.classList.contains('active')) {
                    consumption += parseFloat(this.dataset.power);
                } else {
                    consumption -= parseFloat(this.dataset.power);
                }
                
                updateEnergyDisplay();
            });
        });
    }
    
    // Battery storage slider
    if (batterySlider) {
        batterySlider.addEventListener('input', function() {
            batteryCapacity = parseInt(this.value);
            updateEnergyDisplay();
        });
        
        // Initialize with default value
        batteryCapacity = parseInt(batterySlider.value);
    }
    
    // Initialize display
    updateEnergyDisplay();
}

// Initialize documentation page functionality
function initDocumentationPage() {
    const docContainer = document.querySelector('.doc-container');
    if (!docContainer) return;
    
    // Highlight active section in sidebar based on scroll position
    const sections = document.querySelectorAll('.doc-content section');
    const navLinks = document.querySelectorAll('.doc-nav a');
    
    if (sections.length > 0 && navLinks.length > 0) {
        // Check which section is in view
        function highlightActiveSection() {
            let currentSection = '';
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (window.scrollY >= sectionTop - 100 && 
                    window.scrollY < sectionTop + sectionHeight - 100) {
                    currentSection = '#' + section.getAttribute('id');
                }
            });
            
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
                
                // Add active class to current section link
                if (link.getAttribute('href') === currentSection) {
                    link.classList.add('active');
                }
            });
        }
        
        // Check active section on scroll
        window.addEventListener('scroll', highlightActiveSection);
        
        // Check active section on page load
        highlightActiveSection();
    }
    
    // Make tables responsive
    const tables = document.querySelectorAll('.doc-content table');
    tables.forEach(table => {
        const wrapper = document.createElement('div');
        wrapper.className = 'table-responsive';
        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
}
