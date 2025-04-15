# Praktische Übungen und Beispiele für Bootstrap-Kurs

Diese Sammlung enthält praktische Übungen und Beispiele für einen Bootstrap-Kurs für UX Design Studierende mit wenig technischem Vorwissen. Die Übungen sind nach Schwierigkeitsgrad geordnet und decken verschiedene Aspekte von Bootstrap ab.

## Übung 1: Erste Schritte mit Bootstrap Grid

**Ziel:** Verstehen und Anwenden des Bootstrap Grid-Systems

**Aufgabe:**
1. Erstelle eine einfache Webseite mit einem responsiven Layout
2. Verwende das Bootstrap Grid-System, um folgendes Layout zu erstellen:
   - Auf mobilen Geräten: Eine Spalte mit allen Elementen untereinander
   - Auf Tablets: Zwei Spalten mit gleicher Breite
   - Auf Desktops: Drei Spalten mit gleicher Breite

**Starter-Code:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .box {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-bottom: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container mt-4">
        <h1 class="mb-4">Bootstrap Grid Übung</h1>
        
        <!-- Hier dein Grid-System einfügen -->
        
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Lösung:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Grid Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .box {
            background-color: #f8f9fa;
            border: 1px solid #dee2e6;
            padding: 20px;
            margin-bottom: 20px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container mt-4">
        <h1 class="mb-4">Bootstrap Grid Übung</h1>
        
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4">
                <div class="box">
                    <h2>Box 1</h2>
                    <p>Inhalt für Box 1</p>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="box">
                    <h2>Box 2</h2>
                    <p>Inhalt für Box 2</p>
                </div>
            </div>
            <div class="col-12 col-md-12 col-lg-4">
                <div class="box">
                    <h2>Box 3</h2>
                    <p>Inhalt für Box 3</p>
                </div>
            </div>
        </div>
        
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Übung 2: Bootstrap Komponenten - Navbar und Cards

**Ziel:** Erstellen einer Navigationsleiste und Inhalts-Cards mit Bootstrap

**Aufgabe:**
1. Erstelle eine Webseite mit einer responsiven Navbar
2. Füge ein Logo und Navigationslinks hinzu
3. Erstelle drei Cards mit Bildern, Titeln und Beschreibungen
4. Stelle sicher, dass die Navbar auf mobilen Geräten zu einem Hamburger-Menü wird

**Starter-Code:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Komponenten Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Hier die Navbar einfügen -->
    
    <div class="container mt-4">
        <h1 class="mb-4">Unsere Produkte</h1>
        
        <!-- Hier die Cards einfügen -->
        
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Lösung:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Komponenten Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">
                <!-- Platzhalter für Logo -->
                <svg width="30" height="30" class="d-inline-block align-top" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" fill="#007bff"/>
                    <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="70">B</text>
                </svg>
                MyShop
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Produkte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Über uns</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    
    <div class="container mt-4">
        <h1 class="mb-4">Unsere Produkte</h1>
        
        <div class="row">
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Produkt 1">
                    <div class="card-body">
                        <h5 class="card-title">Produkt 1</h5>
                        <p class="card-text">Eine kurze Beschreibung des ersten Produkts.</p>
                        <a href="#" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Produkt 2">
                    <div class="card-body">
                        <h5 class="card-title">Produkt 2</h5>
                        <p class="card-text">Eine kurze Beschreibung des zweiten Produkts.</p>
                        <a href="#" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-4">
                <div class="card">
                    <img src="https://via.placeholder.com/300x200" class="card-img-top" alt="Produkt 3">
                    <div class="card-body">
                        <h5 class="card-title">Produkt 3</h5>
                        <p class="card-text">Eine kurze Beschreibung des dritten Produkts.</p>
                        <a href="#" class="btn btn-primary">Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Übung 3: Bootstrap Formulare

**Ziel:** Erstellen eines responsiven Kontaktformulars mit Bootstrap

**Aufgabe:**
1. Erstelle ein Kontaktformular mit folgenden Feldern:
   - Name (Textfeld)
   - E-Mail (E-Mail-Feld)
   - Betreff (Dropdown mit Optionen)
   - Nachricht (Textarea)
   - Datenschutz-Checkbox
   - Absenden-Button
2. Verwende Bootstrap-Formular-Klassen für das Styling
3. Füge Validierungshinweise hinzu

**Starter-Code:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Formular Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Kontaktformular</h1>
        
        <!-- Hier das Formular einfügen -->
        
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Lösung:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Formular Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1 class="mb-4">Kontaktformular</h1>
        
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <form class="needs-validation" novalidate>
                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" required>
                                <div class="invalid-feedback">
                                    Bitte geben Sie Ihren Namen ein.
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="email" class="form-label">E-Mail</label>
                                <input type="email" class="form-control" id="email" required>
                                <div class="invalid-feedback">
                                    Bitte geben Sie eine gültige E-Mail-Adresse ein.
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="subject" class="form-label">Betreff</label>
                                <select class="form-select" id="subject" required>
                                    <option value="" selected disabled>Bitte wählen...</option>
                                    <option value="allgemein">Allgemeine Anfrage</option>
                                    <option value="support">Support</option>
                                    <option value="feedback">Feedback</option>
                                    <option value="other">Sonstiges</option>
                                </select>
                                <div class="invalid-feedback">
                                    Bitte wählen Sie einen Betreff aus.
                                </div>
                            </div>
                            
                            <div class="mb-3">
                                <label for="message" class="form-label">Nachricht</label>
                                <textarea class="form-control" id="message" rows="5" required></textarea>
                                <div class="invalid-feedback">
                                    Bitte geben Sie Ihre Nachricht ein.
                                </div>
                            </div>
                            
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="privacy" required>
                                <label class="form-check-label" for="privacy">Ich stimme der Datenschutzerklärung zu</label>
                                <div class="invalid-feedback">
                                    Sie müssen der Datenschutzerklärung zustimmen.
                                </div>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">Absenden</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // JavaScript für die Formularvalidierung
        (function () {
            'use strict'
            
            // Alle Formulare auswählen, die die Klasse 'needs-validation' haben
            var forms = document.querySelectorAll('.needs-validation')
            
            // Schleife über die Formulare und Verhindern der Übermittlung
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }
                        
                        form.classList.add('was-validated')
                    }, false)
                })
        })()
    </script>
</body>
</html>
```

## Übung 4: Bootstrap Utilities und Komponenten

**Ziel:** Anwenden von Bootstrap Utilities und Komponenten für ein ansprechendes Layout

**Aufgabe:**
1. Erstelle eine Webseite mit einem Hero-Bereich (Jumbotron-Stil)
2. Füge eine Feature-Sektion mit Icons und Text hinzu
3. Verwende Bootstrap Utilities für Abstände, Farben und Text-Ausrichtung
4. Füge eine Testimonial-Sektion mit Zitaten hinzu

**Starter-Code:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Utilities Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</head>
<body>
    <!-- Hier den Hero-Bereich einfügen -->
    
    <!-- Hier die Feature-Sektion einfügen -->
    
    <!-- Hier die Testimonial-Sektion einfügen -->
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Lösung:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap Utilities Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Bootstrap Icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</head>
<body>
    <!-- Hero-Bereich -->
    <div class="bg-primary text-white py-5">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-8 mx-auto text-center">
                    <h1 class="display-4 fw-bold mb-3">Willkommen auf unserer Website</h1>
                    <p class="lead mb-4">Eine moderne Webseite erstellt mit Bootstrap 5 Utilities und Komponenten.</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-light btn-lg px-4 me-sm-3">Mehr erfahren</button>
                        <button type="button" class="btn btn-outline-light btn-lg px-4">Kontakt</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Feature-Sektion -->
    <div class="container py-5">
        <div class="row text-center">
            <div class="col-lg-4 mb-4 mb-lg-0">
                <div class="p-4">
                    <i class="bi bi-laptop fs-1 text-primary mb-3"></i>
                    <h3 class="h4 mb-3">Responsive Design</h3>
                    <p class="text-muted mb-0">Unsere Webseiten sehen auf allen Geräten großartig aus.</p>
                </div>
            </div>
            <div class="col-lg-4 mb-4 mb-lg-0">
                <div class="p-4">
                    <i class="bi bi-graph-up fs-1 text-primary mb-3"></i>
                    <h3 class="h4 mb-3">Leistungsoptimiert</h3>
                    <p class="text-muted mb-0">Schnelle Ladezeiten für ein besseres Nutzererlebnis.</p>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="p-4">
                    <i class="bi bi-shield-check fs-1 text-primary mb-3"></i>
                    <h3 class="h4 mb-3">Sicher & Zuverlässig</h3>
                    <p class="text-muted mb-0">Wir legen großen Wert auf Sicherheit und Datenschutz.</p>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Testimonial-Sektion -->
    <div class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-5">Was unsere Kunden sagen</h2>
            <div class="row">
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="d-flex mb-3">
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                            </div>
                            <p class="card-text mb-3">"Ich bin begeistert von der Qualität und dem Service. Absolut empfehlenswert!"</p>
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">MS</div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Max Schmidt</h6>
                                    <small class="text-muted">CEO, TechFirma</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4 mb-md-0">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="d-flex mb-3">
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                            </div>
                            <p class="card-text mb-3">"Die Zusammenarbeit war unkompliziert und das Ergebnis hat unsere Erwartungen übertroffen."</p>
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">LM</div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Laura Müller</h6>
                                    <small class="text-muted">Marketing Manager</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card h-100 border-0 shadow-sm">
                        <div class="card-body p-4">
                            <div class="d-flex mb-3">
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-fill text-warning me-1"></i>
                                <i class="bi bi-star-half text-warning"></i>
                            </div>
                            <p class="card-text mb-3">"Professionelle Umsetzung unserer Ideen. Wir sind sehr zufrieden mit dem Ergebnis."</p>
                            <div class="d-flex align-items-center">
                                <div class="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center" style="width: 40px; height: 40px;">TK</div>
                                <div class="ms-3">
                                    <h6 class="mb-0">Thomas Klein</h6>
                                    <small class="text-muted">Projektleiter</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Übung 5: Von Figma zu Bootstrap

**Ziel:** Umsetzung eines Figma-Designs in Bootstrap-Code

**Aufgabe:**
1. Analysiere das bereitgestellte Figma-Design (vereinfachtes Beispiel unten)
2. Setze das Design mit Bootstrap-Komponenten und -Utilities um
3. Achte auf Responsivität und korrekte Abstände

**Figma-Design (vereinfachte Beschreibung):**
- Header mit Logo links und Navigation rechts
- Hero-Bereich mit Überschrift, Text und Call-to-Action-Button
- Drei Feature-Boxen mit Icons, Überschriften und Text
- Kontaktformular mit Name, E-Mail, Nachricht und Absenden-Button
- Footer mit Copyright-Text und Social-Media-Icons

**Starter-Code:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Figma zu Bootstrap Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <style>
        /* Hier können benutzerdefinierte Styles hinzugefügt werden */
    </style>
</head>
<body>
    <!-- Hier das Design umsetzen -->
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Lösung:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Figma zu Bootstrap Übung</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <style>
        /* Benutzerdefinierte Styles basierend auf Figma-Design */
        :root {
            --primary-color: #4e57ef;
            --secondary-color: #f8f9fa;
            --text-color: #333333;
        }
        
        body {
            color: var(--text-color);
            font-family: 'Inter', sans-serif;
        }
        
        .btn-custom {
            background-color: var(--primary-color);
            border-color: var(--primary-color);
            color: white;
            padding: 10px 24px;
            border-radius: 6px;
        }
        
        .btn-custom:hover {
            background-color: #3a42d1;
            border-color: #3a42d1;
            color: white;
        }
        
        .hero-section {
            background-color: var(--secondary-color);
            padding: 100px 0;
        }
        
        .feature-box {
            padding: 30px;
            border-radius: 8px;
            transition: transform 0.3s ease;
        }
        
        .feature-box:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            margin-right: 10px;
            transition: opacity 0.3s ease;
        }
        
        .social-icon:hover {
            opacity: 0.8;
            color: white;
        }
    </style>
</head>
<body>
    <!-- Header -->
    <header class="py-3 border-bottom">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <a href="#" class="text-decoration-none">
                    <h1 class="h4 mb-0 text-primary">DesignCo</h1>
                </a>
                <nav class="d-none d-md-flex">
                    <ul class="nav">
                        <li class="nav-item"><a href="#" class="nav-link px-3">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-3">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-3">Über uns</a></li>
                        <li class="nav-item"><a href="#" class="nav-link px-3">Kontakt</a></li>
                    </ul>
                </nav>
                <button class="navbar-toggler d-md-none" type="button">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <h1 class="display-4 fw-bold mb-4">Kreative Lösungen für Ihr Unternehmen</h1>
                    <p class="lead mb-4">Wir helfen Ihnen, Ihre Ideen in die Realität umzusetzen. Mit unserer Expertise bringen wir Ihr Unternehmen auf das nächste Level.</p>
                    <button class="btn btn-custom btn-lg">Jetzt starten</button>
                </div>
                <div class="col-lg-6">
                    <img src="https://via.placeholder.com/600x400" alt="Hero Image" class="img-fluid rounded">
                </div>
            </div>
        </div>
    </section>

    <!-- Features Section -->
    <section class="py-5">
        <div class="container">
            <div class="text-center mb-5">
                <h2 class="fw-bold">Unsere Features</h2>
                <p class="lead">Was uns auszeichnet</p>
            </div>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="feature-box bg-white border">
                        <div class="text-primary mb-3">
                            <i class="bi bi-lightbulb fs-1"></i>
                        </div>
                        <h3 class="h5 mb-3">Kreative Ideen</h3>
                        <p class="mb-0 text-muted">Wir entwickeln innovative Lösungen, die Ihr Unternehmen voranbringen.</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="feature-box bg-white border">
                        <div class="text-primary mb-3">
                            <i class="bi bi-gear fs-1"></i>
                        </div>
                        <h3 class="h5 mb-3">Technische Expertise</h3>
                        <p class="mb-0 text-muted">Unser Team verfügt über umfassendes technisches Know-how.</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="feature-box bg-white border">
                        <div class="text-primary mb-3">
                            <i class="bi bi-graph-up fs-1"></i>
                        </div>
                        <h3 class="h5 mb-3">Messbare Ergebnisse</h3>
                        <p class="mb-0 text-muted">Wir liefern Lösungen, die zu messbaren Geschäftsergebnissen führen.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="text-center mb-5">
                        <h2 class="fw-bold">Kontaktieren Sie uns</h2>
                        <p class="lead">Wir freuen uns auf Ihre Nachricht</p>
                    </div>
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4 p-md-5">
                            <form>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" required>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="email" class="form-label">E-Mail</label>
                                        <input type="email" class="form-control" id="email" required>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Nachricht</label>
                                    <textarea class="form-control" id="message" rows="5" required></textarea>
                                </div>
                                <div class="text-center">
                                    <button type="submit" class="btn btn-custom">Nachricht senden</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 bg-dark text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 mb-3 mb-md-0">
                    <p class="mb-0">© 2025 DesignCo. Alle Rechte vorbehalten.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Übung 6: Bootstrap JavaScript-Komponenten

**Ziel:** Implementierung interaktiver Bootstrap-Komponenten mit JavaScript

**Aufgabe:**
1. Erstelle eine Webseite mit folgenden interaktiven Komponenten:
   - Modal-Fenster
   - Dropdown-Menü
   - Tabs
   - Tooltip
   - Carousel
2. Stelle sicher, dass alle Komponenten korrekt funktionieren

**Starter-Code:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap JavaScript Komponenten</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container py-5">
        <h1 class="mb-5">Bootstrap JavaScript Komponenten</h1>
        
        <!-- Hier die Komponenten einfügen -->
        
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Lösung:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bootstrap JavaScript Komponenten</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container py-5">
        <h1 class="mb-5">Bootstrap JavaScript Komponenten</h1>
        
        <div class="row mb-5">
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Modal</h5>
                        <p class="card-text">Klicken Sie auf den Button, um ein Modal-Fenster zu öffnen.</p>
                        <!-- Button zum Öffnen des Modals -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Modal öffnen
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Dropdown</h5>
                        <p class="card-text">Klicken Sie auf den Button, um ein Dropdown-Menü zu öffnen.</p>
                        <!-- Dropdown -->
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown-Button
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Option 1</a></li>
                                <li><a class="dropdown-item" href="#">Option 2</a></li>
                                <li><a class="dropdown-item" href="#">Option 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Tooltip</h5>
                        <p class="card-text">Bewegen Sie den Mauszeiger über den Button, um einen Tooltip zu sehen.</p>
                        <!-- Tooltip -->
                        <button type="button" class="btn btn-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Dies ist ein Tooltip!">
                            Tooltip anzeigen
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="row mb-5">
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Tabs</h5>
                        <p class="card-text">Klicken Sie auf die Tabs, um zwischen den Inhalten zu wechseln.</p>
                        <!-- Tabs -->
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profil</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Kontakt</button>
                            </li>
                        </ul>
                        <div class="tab-content p-3 border border-top-0 rounded-bottom" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <p>Dies ist der Inhalt des Home-Tabs. Hier können Sie Informationen über die Startseite anzeigen.</p>
                            </div>
                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                <p>Dies ist der Inhalt des Profil-Tabs. Hier können Sie Informationen über das Benutzerprofil anzeigen.</p>
                            </div>
                            <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <p>Dies ist der Inhalt des Kontakt-Tabs. Hier können Sie Kontaktinformationen anzeigen.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-6 mb-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">Carousel</h5>
                        <p class="card-text">Ein Bildkarussell mit automatischem Wechsel.</p>
                        <!-- Carousel -->
                        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div class="carousel-inner rounded">
                                <div class="carousel-item active">
                                    <img src="https://via.placeholder.com/800x400/007bff/ffffff?text=Slide+1" class="d-block w-100" alt="Slide 1">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/800x400/28a745/ffffff?text=Slide+2" class="d-block w-100" alt="Slide 2">
                                </div>
                                <div class="carousel-item">
                                    <img src="https://via.placeholder.com/800x400/dc3545/ffffff?text=Slide+3" class="d-block w-100" alt="Slide 3">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Zurück</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Weiter</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modal-Titel</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Schließen"></button>
                </div>
                <div class="modal-body">
                    <p>Dies ist der Inhalt des Modal-Fensters. Hier können Sie beliebigen Text oder HTML-Inhalt einfügen.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Schließen</button>
                    <button type="button" class="btn btn-primary">Speichern</button>
                </div>
            </div>
        </div>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Tooltips initialisieren
        var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    </script>
</body>
</html>
```

## Abschlussprojekt: Portfolio-Website

**Ziel:** Erstellung einer vollständigen Portfolio-Website mit Bootstrap

**Aufgabe:**
1. Erstelle eine mehrseitige Portfolio-Website mit folgenden Seiten:
   - Startseite mit Hero-Bereich, Über mich und Projekten
   - Projektdetailseite
   - Kontaktseite mit Formular
2. Verwende Bootstrap-Komponenten und -Utilities
3. Stelle sicher, dass die Website responsiv ist
4. Integriere mindestens eine JavaScript-Komponente

**Starter-Code für die Startseite:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Hier die Startseite erstellen -->
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Lösung für die Startseite:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <style>
        /* Benutzerdefinierte Styles */
        :root {
            --primary-color: #4e57ef;
            --secondary-color: #f8f9fa;
            --dark-color: #212529;
        }
        
        body {
            font-family: 'Inter', sans-serif;
        }
        
        .hero-section {
            padding: 120px 0;
            background-color: var(--secondary-color);
        }
        
        .project-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            height: 100%;
        }
        
        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .skill-badge {
            background-color: var(--primary-color);
            color: white;
            border-radius: 20px;
            padding: 5px 15px;
            margin-right: 10px;
            margin-bottom: 10px;
            display: inline-block;
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            margin-right: 10px;
            transition: opacity 0.3s ease;
        }
        
        .social-icon:hover {
            opacity: 0.8;
            color: white;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="index.html">Max Mustermann</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#projects">Projekte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">Über mich</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 mb-5 mb-lg-0">
                    <h1 class="display-4 fw-bold mb-4">Hi, ich bin Max Mustermann</h1>
                    <p class="lead mb-4">UX Designer & Frontend-Entwickler mit Leidenschaft für benutzerfreundliche und ästhetische Webdesigns.</p>
                    <div class="d-flex flex-wrap">
                        <a href="#projects" class="btn btn-primary me-3 mb-3">Meine Projekte</a>
                        <a href="contact.html" class="btn btn-outline-primary mb-3">Kontakt aufnehmen</a>
                    </div>
                </div>
                <div class="col-lg-6">
                    <img src="https://via.placeholder.com/600x600" alt="Max Mustermann" class="img-fluid rounded-circle shadow">
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 mb-4 mb-lg-0">
                    <h2 class="fw-bold mb-4">Über mich</h2>
                    <p class="mb-4">Als UX Designer und Frontend-Entwickler mit über 5 Jahren Erfahrung habe ich mich auf die Erstellung benutzerfreundlicher und ästhetisch ansprechender Webdesigns spezialisiert. Mein Ziel ist es, digitale Erlebnisse zu schaffen, die sowohl funktional als auch visuell ansprechend sind.</p>
                    <p class="mb-4">Ich arbeite eng mit Kunden zusammen, um ihre Visionen zu verstehen und in erfolgreiche digitale Produkte umzusetzen. Mein Ansatz kombiniert kreatives Design mit technischem Know-how, um optimale Ergebnisse zu erzielen.</p>
                    <a href="contact.html" class="btn btn-primary">Lass uns zusammenarbeiten</a>
                </div>
                <div class="col-lg-6">
                    <h3 class="fw-bold mb-4">Meine Fähigkeiten</h3>
                    <div class="mb-4">
                        <span class="skill-badge">HTML5</span>
                        <span class="skill-badge">CSS3</span>
                        <span class="skill-badge">JavaScript</span>
                        <span class="skill-badge">Bootstrap</span>
                        <span class="skill-badge">Figma</span>
                        <span class="skill-badge">Adobe XD</span>
                        <span class="skill-badge">UI/UX Design</span>
                        <span class="skill-badge">Responsive Design</span>
                        <span class="skill-badge">Prototyping</span>
                        <span class="skill-badge">Usability Testing</span>
                    </div>
                    <div class="mb-4">
                        <h4 class="h5 mb-3">UX Design</h4>
                        <div class="progress mb-3">
                            <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="h5 mb-3">Frontend-Entwicklung</h4>
                        <div class="progress mb-3">
                            <div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="h5 mb-3">Figma</h4>
                        <div class="progress mb-3">
                            <div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <h4 class="h5 mb-3">Bootstrap</h4>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-5 bg-light">
        <div class="container">
            <h2 class="fw-bold text-center mb-5">Meine Projekte</h2>
            <div class="row">
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card project-card border-0 shadow-sm h-100">
                        <img src="https://via.placeholder.com/600x400" class="card-img-top" alt="E-Commerce Website">
                        <div class="card-body">
                            <h5 class="card-title">E-Commerce Website</h5>
                            <p class="card-text">Ein modernes E-Commerce-Design mit Fokus auf Benutzerfreundlichkeit und Conversion-Optimierung.</p>
                            <div class="d-flex mt-3">
                                <span class="badge bg-primary me-2">UX Design</span>
                                <span class="badge bg-secondary me-2">Figma</span>
                                <span class="badge bg-info">Bootstrap</span>
                            </div>
                        </div>
                        <div class="card-footer bg-white border-0">
                            <a href="project1.html" class="btn btn-outline-primary">Details ansehen</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card project-card border-0 shadow-sm h-100">
                        <img src="https://via.placeholder.com/600x400" class="card-img-top" alt="Portfolio Website">
                        <div class="card-body">
                            <h5 class="card-title">Portfolio Website</h5>
                            <p class="card-text">Eine elegante Portfolio-Website für einen Fotografen mit Galerie und Kontaktformular.</p>
                            <div class="d-flex mt-3">
                                <span class="badge bg-primary me-2">Web Design</span>
                                <span class="badge bg-secondary me-2">HTML/CSS</span>
                                <span class="badge bg-info">JavaScript</span>
                            </div>
                        </div>
                        <div class="card-footer bg-white border-0">
                            <a href="project2.html" class="btn btn-outline-primary">Details ansehen</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-lg-4 mb-4">
                    <div class="card project-card border-0 shadow-sm h-100">
                        <img src="https://via.placeholder.com/600x400" class="card-img-top" alt="Mobile App">
                        <div class="card-body">
                            <h5 class="card-title">Mobile App</h5>
                            <p class="card-text">Eine Fitness-App mit Tracking-Funktionen und personalisierten Trainingsplänen.</p>
                            <div class="d-flex mt-3">
                                <span class="badge bg-primary me-2">UI Design</span>
                                <span class="badge bg-secondary me-2">Prototyping</span>
                                <span class="badge bg-info">Figma</span>
                            </div>
                        </div>
                        <div class="card-footer bg-white border-0">
                            <a href="project3.html" class="btn btn-outline-primary">Details ansehen</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center mt-4">
                <a href="#" class="btn btn-primary">Alle Projekte ansehen</a>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-5 bg-primary text-white">
        <div class="container text-center">
            <h2 class="fw-bold mb-4">Bereit für Ihr nächstes Projekt?</h2>
            <p class="lead mb-4">Lassen Sie uns zusammenarbeiten, um Ihre Vision zum Leben zu erwecken.</p>
            <a href="contact.html" class="btn btn-light btn-lg">Kontakt aufnehmen</a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 bg-dark text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 mb-3 mb-md-0">
                    <p class="mb-0">© 2025 Max Mustermann. Alle Rechte vorbehalten.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

**Lösung für die Kontaktseite:**
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt - Mein Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <style>
        /* Benutzerdefinierte Styles */
        :root {
            --primary-color: #4e57ef;
            --secondary-color: #f8f9fa;
            --dark-color: #212529;
        }
        
        body {
            font-family: 'Inter', sans-serif;
        }
        
        .page-header {
            padding: 80px 0;
            background-color: var(--secondary-color);
        }
        
        .social-icon {
            width: 40px;
            height: 40px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: var(--primary-color);
            color: white;
            border-radius: 50%;
            margin-right: 10px;
            transition: opacity 0.3s ease;
        }
        
        .social-icon:hover {
            opacity: 0.8;
            color: white;
        }
        
        .contact-info-item {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
        }
        
        .contact-info-item i {
            font-size: 1.5rem;
            color: var(--primary-color);
            margin-right: 15px;
        }
    </style>
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
        <div class="container">
            <a class="navbar-brand fw-bold text-primary" href="index.html">Max Mustermann</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#projects">Projekte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index.html#about">Über mich</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="contact.html">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Page Header -->
    <header class="page-header">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 mx-auto text-center">
                    <h1 class="fw-bold mb-3">Kontakt</h1>
                    <p class="lead">Haben Sie Fragen oder möchten Sie an einem Projekt zusammenarbeiten? Kontaktieren Sie mich!</p>
                </div>
            </div>
        </div>
    </header>

    <!-- Contact Section -->
    <section class="py-5">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 mb-5 mb-lg-0">
                    <h2 class="fw-bold mb-4">Kontaktinformationen</h2>
                    <p class="mb-5">Füllen Sie das Formular aus oder kontaktieren Sie mich direkt über die folgenden Kanäle:</p>
                    
                    <div class="contact-info-item">
                        <i class="bi bi-envelope"></i>
                        <div>
                            <h3 class="h5 mb-1">E-Mail</h3>
                            <p class="mb-0">max.mustermann@example.com</p>
                        </div>
                    </div>
                    
                    <div class="contact-info-item">
                        <i class="bi bi-telephone"></i>
                        <div>
                            <h3 class="h5 mb-1">Telefon</h3>
                            <p class="mb-0">+49 123 456789</p>
                        </div>
                    </div>
                    
                    <div class="contact-info-item">
                        <i class="bi bi-geo-alt"></i>
                        <div>
                            <h3 class="h5 mb-1">Standort</h3>
                            <p class="mb-0">Berlin, Deutschland</p>
                        </div>
                    </div>
                    
                    <h3 class="h5 mt-5 mb-3">Folgen Sie mir</h3>
                    <div>
                        <a href="#" class="social-icon text-decoration-none">
                            <i class="bi bi-facebook"></i>
                        </a>
                        <a href="#" class="social-icon text-decoration-none">
                            <i class="bi bi-twitter"></i>
                        </a>
                        <a href="#" class="social-icon text-decoration-none">
                            <i class="bi bi-instagram"></i>
                        </a>
                        <a href="#" class="social-icon text-decoration-none">
                            <i class="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
                <div class="col-lg-7">
                    <div class="card border-0 shadow-sm">
                        <div class="card-body p-4 p-md-5">
                            <h2 class="fw-bold mb-4">Senden Sie mir eine Nachricht</h2>
                            <form class="needs-validation" novalidate>
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" class="form-control" id="name" required>
                                        <div class="invalid-feedback">
                                            Bitte geben Sie Ihren Namen ein.
                                        </div>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                        <label for="email" class="form-label">E-Mail</label>
                                        <input type="email" class="form-control" id="email" required>
                                        <div class="invalid-feedback">
                                            Bitte geben Sie eine gültige E-Mail-Adresse ein.
                                        </div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="subject" class="form-label">Betreff</label>
                                    <input type="text" class="form-control" id="subject" required>
                                    <div class="invalid-feedback">
                                        Bitte geben Sie einen Betreff ein.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label for="message" class="form-label">Nachricht</label>
                                    <textarea class="form-control" id="message" rows="5" required></textarea>
                                    <div class="invalid-feedback">
                                        Bitte geben Sie Ihre Nachricht ein.
                                    </div>
                                </div>
                                <div class="mb-3 form-check">
                                    <input type="checkbox" class="form-check-input" id="privacy" required>
                                    <label class="form-check-label" for="privacy">Ich stimme der Datenschutzerklärung zu</label>
                                    <div class="invalid-feedback">
                                        Sie müssen der Datenschutzerklärung zustimmen.
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Nachricht senden</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <section class="py-5 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="fw-bold text-center mb-4">Standort</h2>
                    <div class="ratio ratio-21x9">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d155421.70640284067!2d13.259927771594342!3d52.50697379784324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin!5e0!3m2!1sde!2sde!4v1616661305905!5m2!1sde!2sde" allowfullscreen="" loading="lazy" class="border-0 rounded shadow-sm"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="py-4 bg-dark text-white">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-6 mb-3 mb-md-0">
                    <p class="mb-0">© 2025 Max Mustermann. Alle Rechte vorbehalten.</p>
                </div>
                <div class="col-md-6 text-md-end">
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-facebook"></i>
                    </a>
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="#" class="social-icon text-decoration-none">
                        <i class="bi bi-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // JavaScript für die Formularvalidierung
        (function () {
            'use strict'
            
            // Alle Formulare auswählen, die die Klasse 'needs-validation' haben
            var forms = document.querySelectorAll('.needs-validation')
            
            // Schleife über die Formulare und Verhindern der Übermittlung
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        } else {
                            event.preventDefault()
                            // Hier würde normalerweise der AJAX-Call zum Senden des Formulars stehen
                            alert('Vielen Dank für Ihre Nachricht! Ich werde mich so schnell wie möglich bei Ihnen melden.')
                            form.reset()
                        }
                        
                        form.classList.add('was-validated')
                    }, false)
                })
        })()
    </script>
</body>
</html>
```

## Tipps für die Übungen

1. **Schrittweise vorgehen**: Beginne mit der Grundstruktur und füge dann nach und nach Komponenten hinzu.
2. **Bootstrap-Dokumentation nutzen**: Die [offizielle Bootstrap-Dokumentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/) ist eine hervorragende Ressource.
3. **Responsives Design testen**: Überprüfe deine Übungen in verschiedenen Bildschirmgrößen (Desktop, Tablet, Smartphone).
4. **Konsistente Abstände**: Verwende die Bootstrap-Spacing-Utilities (m-* und p-*) für konsistente Abstände.
5. **Komponenten kombinieren**: Experimentiere mit der Kombination verschiedener Bootstrap-Komponenten.
6. **Eigene Styles hinzufügen**: Ergänze die Bootstrap-Styles mit eigenen CSS-Regeln, um ein individuelles Design zu erstellen.
7. **Validierung nutzen**: Implementiere Formularvalidierung für eine bessere Benutzererfahrung.
8. **Barrierefreiheit beachten**: Achte auf barrierefreie Implementierung (z.B. alt-Attribute für Bilder, aria-Labels).

## Ressourcen für weitere Übungen

- [Bootstrap 5 Beispiele](https://getbootstrap.com/docs/5.0/examples/)
- [Bootstrap 5 Cheatsheet](https://bootstrap-cheatsheet.themeselection.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [Figma Bootstrap 5 UI Kit](https://www.figma.com/community/file/1230908175282365161/bootstrap-5-ui-kit)
- [Bootstrap Themes](https://themes.getbootstrap.com/)
- [CodePen Bootstrap Beispiele](https://codepen.io/tag/bootstrap-5)
