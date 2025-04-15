# Bootstrap 5 Einführung

Diese Einführung vermittelt die Grundlagen von Bootstrap 5 für UX Design Studierende mit wenig technischem Vorwissen.

## Was ist Bootstrap?

Bootstrap ist ein kostenloses, Open-Source-Frontend-Framework für die Entwicklung responsiver, mobilfähiger Websites. Es wurde ursprünglich von Twitter entwickelt und ist heute eines der beliebtesten CSS-Frameworks weltweit.

### Vorteile von Bootstrap

- **Schnelle Entwicklung**: Vorgefertigte Komponenten beschleunigen den Entwicklungsprozess
- **Responsives Design**: Integriertes Grid-System für verschiedene Bildschirmgrößen
- **Konsistenz**: Einheitliches Erscheinungsbild über verschiedene Browser und Geräte hinweg
- **Anpassbarkeit**: Kann an eigene Designanforderungen angepasst werden
- **Große Community**: Umfangreiche Dokumentation und Support

## Bootstrap 5 einbinden

Es gibt mehrere Möglichkeiten, Bootstrap in ein Projekt einzubinden:

### 1. CDN (Content Delivery Network)

Die einfachste Methode ist die Einbindung über CDN-Links:

```html
<!doctype html>
<html lang="de">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Bootstrap Beispiel</title>
  </head>
  <body>
    <h1>Hallo, Bootstrap!</h1>

    <!-- Bootstrap Bundle mit Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>
```

### 2. Lokale Installation

Für fortgeschrittenere Projekte kann Bootstrap lokal installiert werden:

```bash
# Mit npm
npm install bootstrap

# Mit yarn
yarn add bootstrap
```

## Das Grid-System

Das Grid-System ist das Herzstück von Bootstrap und ermöglicht responsive Layouts.

### Container

Container sind die grundlegendsten Layout-Elemente in Bootstrap und werden benötigt, um das Grid-System zu nutzen.

```html
<!-- Feste Breite, zentriert -->
<div class="container">
  <!-- Inhalt hier -->
</div>

<!-- Volle Breite, alle Viewport-Größen -->
<div class="container-fluid">
  <!-- Inhalt hier -->
</div>
```

### Reihen und Spalten

Das Grid-System basiert auf einem 12-Spalten-Layout:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <!-- Nimmt 6 von 12 Spalten auf mittleren Geräten ein -->
      Spalte 1
    </div>
    <div class="col-md-6">
      <!-- Nimmt 6 von 12 Spalten auf mittleren Geräten ein -->
      Spalte 2
    </div>
  </div>
</div>
```

### Responsive Breakpoints

Bootstrap 5 verwendet folgende Breakpoints:

| Breakpoint | Klassenpräfix | Dimension |
|------------|---------------|-----------|
| Extra small | `col-` | <576px |
| Small | `col-sm-` | ≥576px |
| Medium | `col-md-` | ≥768px |
| Large | `col-lg-` | ≥992px |
| Extra large | `col-xl-` | ≥1200px |
| Extra extra large | `col-xxl-` | ≥1400px |

Beispiel für responsives Layout:

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-4">
      <!-- Volle Breite auf Mobilgeräten, 
           Halbe Breite auf Tablets, 
           Ein Drittel auf Desktop -->
      Spalte 1
    </div>
    <div class="col-12 col-md-6 col-lg-4">
      Spalte 2
    </div>
    <div class="col-12 col-md-12 col-lg-4">
      Spalte 3
    </div>
  </div>
</div>
```

## Utility-Klassen

Bootstrap bietet zahlreiche Utility-Klassen für häufig verwendete Styling-Aufgaben.

### Margin und Padding

```html
<!-- Margin (m) -->
<div class="m-2">Margin 0.5rem auf allen Seiten</div>
<div class="mt-3">Margin-top 1rem</div>
<div class="mb-4">Margin-bottom 1.5rem</div>
<div class="ms-5">Margin-left 3rem</div>
<div class="me-auto">Margin-right auto</div>

<!-- Padding (p) -->
<div class="p-2">Padding 0.5rem auf allen Seiten</div>
<div class="pt-3">Padding-top 1rem</div>
<div class="pb-4">Padding-bottom 1.5rem</div>
<div class="ps-5">Padding-left 3rem</div>
<div class="pe-auto">Padding-right auto</div>
```

### Farben

```html
<!-- Text-Farben -->
<p class="text-primary">Primärfarbe</p>
<p class="text-secondary">Sekundärfarbe</p>
<p class="text-success">Erfolg</p>
<p class="text-danger">Gefahr</p>
<p class="text-warning">Warnung</p>
<p class="text-info">Information</p>
<p class="text-light">Hell</p>
<p class="text-dark">Dunkel</p>

<!-- Hintergrund-Farben -->
<div class="bg-primary">Primärfarbe</div>
<div class="bg-secondary">Sekundärfarbe</div>
<div class="bg-success">Erfolg</div>
<div class="bg-danger">Gefahr</div>
<div class="bg-warning">Warnung</div>
<div class="bg-info">Information</div>
<div class="bg-light">Hell</div>
<div class="bg-dark">Dunkel</div>
```

### Flexbox

```html
<div class="d-flex">
  <!-- Flexbox-Container -->
  <div>Element 1</div>
  <div>Element 2</div>
</div>

<div class="d-flex justify-content-between">
  <!-- Elemente mit Abstand dazwischen -->
  <div>Links</div>
  <div>Rechts</div>
</div>

<div class="d-flex align-items-center">
  <!-- Vertikal zentrierte Elemente -->
  <div>Element 1</div>
  <div>Element 2</div>
</div>
```

## Komponenten

Bootstrap bietet viele vorgefertigte Komponenten, die einfach zu implementieren sind.

### Buttons

```html
<button type="button" class="btn btn-primary">Primär</button>
<button type="button" class="btn btn-secondary">Sekundär</button>
<button type="button" class="btn btn-success">Erfolg</button>
<button type="button" class="btn btn-danger">Gefahr</button>
<button type="button" class="btn btn-warning">Warnung</button>
<button type="button" class="btn btn-info">Info</button>
<button type="button" class="btn btn-light">Hell</button>
<button type="button" class="btn btn-dark">Dunkel</button>
<button type="button" class="btn btn-link">Link</button>

<!-- Button-Größen -->
<button type="button" class="btn btn-primary btn-lg">Großer Button</button>
<button type="button" class="btn btn-primary">Standard Button</button>
<button type="button" class="btn btn-primary btn-sm">Kleiner Button</button>
```

### Navbar

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Preise</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

### Cards

```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Kartentitel</h5>
    <p class="card-text">Ein kurzer Beispieltext, der den Inhalt der Karte beschreibt.</p>
    <a href="#" class="btn btn-primary">Mehr erfahren</a>
  </div>
</div>
```

### Formulare

```html
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">E-Mail-Adresse</label>
    <input type="email" class="form-control" id="exampleInputEmail1">
    <div class="form-text">Wir werden Ihre E-Mail niemals weitergeben.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Passwort</label>
    <input type="password" class="form-control" id="exampleInputPassword1">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Absenden</button>
</form>
```

## JavaScript-Komponenten

Einige Bootstrap-Komponenten benötigen JavaScript, um zu funktionieren.

### Modal

```html
<!-- Button zum Öffnen des Modals -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Modal öffnen
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal-Titel</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        Hier steht der Inhalt des Modals.
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Schließen</button>
        <button type="button" class="btn btn-primary">Speichern</button>
      </div>
    </div>
  </div>
</div>
```

### Dropdown

```html
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown-Button
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Aktion 1</a></li>
    <li><a class="dropdown-item" href="#">Aktion 2</a></li>
    <li><a class="dropdown-item" href="#">Aktion 3</a></li>
  </ul>
</div>
```

### Carousel

```html
<div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Zurück</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Weiter</span>
  </button>
</div>
```

## Bootstrap anpassen

Bootstrap kann an eigene Designanforderungen angepasst werden:

### Überschreiben mit eigenem CSS

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="mein-eigenes-style.css" rel="stylesheet">
```

In `mein-eigenes-style.css`:
```css
/* Bootstrap-Variablen überschreiben */
:root {
  --bs-primary: #ff6600;
  --bs-primary-rgb: 255, 102, 0;
}

/* Bootstrap-Klassen überschreiben */
.btn-primary {
  background-color: #ff6600;
  border-color: #ff6600;
}

.btn-primary:hover {
  background-color: #e65c00;
  border-color: #e65c00;
}
```

## Praktisches Beispiel: Landing Page

Hier ist ein einfaches Beispiel für eine Landing Page mit Bootstrap 5:

```html
<!doctype html>
<html lang="de">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <title>Bootstrap Landing Page</title>
</head>
<body>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Meine Website</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Features</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Preise</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kontakt</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <header class="bg-primary text-white text-center py-5">
    <div class="container">
      <h1 class="display-4">Willkommen auf meiner Website</h1>
      <p class="lead">Eine einfache Landing Page mit Bootstrap 5</p>
      <button class="btn btn-light btn-lg">Mehr erfahren</button>
    </div>
  </header>

  <!-- Features Section -->
  <section class="py-5">
    <div class="container">
      <div class="row text-center">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Feature 1</h2>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Feature 2</h2>
              <p class="card-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="card-body">
              <h2 class="card-title">Feature 3</h2>
              <p class="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-4 bg-dark text-white">
    <div class="container text-center">
      <p class="mb-0">© 2025 Meine Website. Alle Rechte vorbehalten.</p>
    </div>
  </footer>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

## Ressourcen für weiteres Lernen

- [Offizielle Bootstrap-Dokumentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
- [Bootstrap-Beispiele](https://getbootstrap.com/docs/5.0/examples/)
- [Bootstrap-Icons](https://icons.getbootstrap.com/)
- [Bootstrap-Themes](https://themes.getbootstrap.com/)
