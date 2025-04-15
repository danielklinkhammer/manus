# HTML/CSS Grundlagen-Wiederholung

Diese Zusammenfassung dient als Auffrischung der wichtigsten HTML- und CSS-Konzepte für Studierende mit wenig technischem Vorwissen, bevor sie mit Bootstrap beginnen.

## HTML Grundlagen

### Was ist HTML?
HTML (Hypertext Markup Language) ist die Standardsprache zur Erstellung von Webseiten. HTML beschreibt die Struktur einer Webseite durch Elemente, die dem Browser mitteilen, wie der Inhalt angezeigt werden soll.

### HTML-Dokumentstruktur
```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meine Webseite</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Hier kommt der sichtbare Inhalt -->
    <h1>Überschrift</h1>
    <p>Ein Absatz mit Text.</p>
</body>
</html>
```

### Wichtige HTML-Elemente

#### Überschriften
```html
<h1>Hauptüberschrift</h1>
<h2>Unterüberschrift</h2>
<h3>Weitere Unterüberschrift</h3>
<!-- bis h6 -->
```

#### Text-Formatierung
```html
<p>Ein Absatz mit Text.</p>
<strong>Fettgedruckter Text</strong>
<em>Kursiver Text</em>
<br> <!-- Zeilenumbruch -->
<hr> <!-- Horizontale Linie -->
```

#### Listen
```html
<!-- Ungeordnete Liste -->
<ul>
    <li>Listenelement 1</li>
    <li>Listenelement 2</li>
</ul>

<!-- Geordnete Liste -->
<ol>
    <li>Erster Punkt</li>
    <li>Zweiter Punkt</li>
</ol>
```

#### Links
```html
<a href="https://www.beispiel.de">Link-Text</a>
<a href="kontakt.html">Interne Seite</a>
<a href="#abschnitt">Sprung zum Abschnitt</a>
```

#### Bilder
```html
<img src="bild.jpg" alt="Beschreibung des Bildes">
```

#### Div und Span
```html
<div>Container für Blockelemente</div>
<span>Inline-Container für Text</span>
```

#### Formulare
```html
<form action="/submit" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name">
    
    <label for="email">E-Mail:</label>
    <input type="email" id="email" name="email">
    
    <button type="submit">Absenden</button>
</form>
```

## CSS Grundlagen

### Was ist CSS?
CSS (Cascading Style Sheets) ist eine Stylesheet-Sprache, die das Aussehen und die Formatierung von HTML-Dokumenten beschreibt. Mit CSS können Farben, Layouts, Schriftarten und Animationen gesteuert werden.

### CSS einbinden

#### Inline CSS
```html
<p style="color: blue; font-size: 16px;">Dieser Text ist blau.</p>
```

#### Internal CSS
```html
<head>
    <style>
        p {
            color: blue;
            font-size: 16px;
        }
    </style>
</head>
```

#### External CSS (empfohlen)
```html
<head>
    <link rel="stylesheet" href="styles.css">
</head>
```

In der Datei `styles.css`:
```css
p {
    color: blue;
    font-size: 16px;
}
```

### CSS-Selektoren

#### Element-Selektor
```css
p {
    color: blue;
}
```

#### Klassen-Selektor
```css
.button {
    background-color: green;
    color: white;
}
```

#### ID-Selektor
```css
#header {
    background-color: black;
    color: white;
}
```

#### Kombinierte Selektoren
```css
/* Alle Absätze innerhalb eines Divs mit der Klasse 'content' */
div.content p {
    margin-bottom: 10px;
}
```

### Das Box-Modell
Jedes HTML-Element wird als rechteckige Box dargestellt, bestehend aus:
- Content (Inhalt)
- Padding (Innenabstand)
- Border (Rahmen)
- Margin (Außenabstand)

```css
div {
    width: 300px;
    padding: 20px;
    border: 1px solid black;
    margin: 30px;
}
```

### Wichtige CSS-Eigenschaften

#### Textformatierung
```css
p {
    font-family: Arial, sans-serif;
    font-size: 16px;
    font-weight: bold;
    color: #333333;
    text-align: center;
    line-height: 1.5;
}
```

#### Hintergrund
```css
div {
    background-color: #f0f0f0;
    background-image: url('hintergrund.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
}
```

#### Layout
```css
.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
```

#### Positionierung
```css
.box {
    position: relative; /* oder absolute, fixed, sticky */
    top: 20px;
    left: 30px;
    z-index: 1;
}
```

### Responsive Design Grundlagen

#### Media Queries
```css
/* Styles für Bildschirme kleiner als 768px */
@media (max-width: 768px) {
    .container {
        flex-direction: column;
    }
    
    .box {
        width: 100%;
    }
}
```

#### Flexible Einheiten
```css
.container {
    width: 80%; /* Prozentuale Breite */
    font-size: 1.2em; /* Relative Schriftgröße */
    padding: 2rem; /* Relative zum Root-Element */
}
```

## Übergang zu Bootstrap

Die oben genannten HTML- und CSS-Grundlagen sind wichtig, um Bootstrap zu verstehen. Bootstrap baut auf diesen Konzepten auf und bietet:

1. Ein vorgefertigtes Grid-System für responsive Layouts
2. Konsistente Styling-Komponenten
3. Vordefinierte Klassen für häufig verwendete Designs
4. JavaScript-Komponenten für interaktive Elemente

Mit Bootstrap können Sie viele der manuellen CSS-Aufgaben durch einfaches Hinzufügen von Klassen zu Ihren HTML-Elementen ersetzen.

### Beispiel: Vergleich von reinem CSS und Bootstrap

#### Reines CSS
```html
<div class="container">
    <div class="row">
        <div class="column">Spalte 1</div>
        <div class="column">Spalte 2</div>
        <div class="column">Spalte 3</div>
    </div>
</div>
```

```css
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.row {
    display: flex;
    flex-wrap: wrap;
}

.column {
    flex: 1;
    padding: 15px;
    border: 1px solid #ddd;
}

@media (max-width: 768px) {
    .column {
        flex: 100%;
    }
}
```

#### Mit Bootstrap
```html
<div class="container">
    <div class="row">
        <div class="col-md-4">Spalte 1</div>
        <div class="col-md-4">Spalte 2</div>
        <div class="col-md-4">Spalte 3</div>
    </div>
</div>
```

Keine zusätzliche CSS-Datei erforderlich!
