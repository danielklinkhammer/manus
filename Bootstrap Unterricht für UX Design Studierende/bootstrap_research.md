# Bootstrap 5 Grundlagen

## Einführung
Bootstrap ist ein leistungsstarkes Frontend-Framework für die Entwicklung responsiver, mobilfähiger Websites. Es bietet vorgefertigte Komponenten und Utilities, die die Webentwicklung beschleunigen.

## Einrichtung
Es gibt mehrere Möglichkeiten, Bootstrap in ein Projekt einzubinden:

### CDN-Einbindung
```html
<!-- CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

<!-- JavaScript Bundle mit Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
```

### Separate JavaScript-Dateien
```html
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
```

## Wichtige Grundlagen

### HTML5 Doctype
Bootstrap erfordert die Verwendung des HTML5 Doctype:
```html
<!doctype html>
<html lang="en">
  ...
</html>
```

### Responsive Meta-Tag
Für korrekte Darstellung auf allen Geräten:
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

### Box-Sizing
Bootstrap ändert das globale `box-sizing` von `content-box` zu `border-box`, was die CSS-Größenberechnung vereinfacht.

## Starter-Template
```html
<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <!-- Bootstrap Bundle mit Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  </body>
</html>
```

## JavaScript-Komponenten
Folgende Komponenten benötigen JavaScript:
- Alerts (zum Schließen)
- Buttons (für Zustandswechsel)
- Carousel (für Slide-Verhalten)
- Collapse (zum Ein-/Ausblenden)
- Dropdowns (benötigt auch Popper)
- Modals
- Navbar (responsive Verhalten)
- Toasts
- Tooltips und Popovers (benötigt auch Popper)
- Scrollspy
