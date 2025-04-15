# Visual Studio Code Einrichtungsanleitung für Bootstrap-Entwicklung

Diese Anleitung führt Studierende mit wenig technischem Vorwissen durch die Installation und Konfiguration von Visual Studio Code für die Bootstrap-Entwicklung.

## 1. Installation von Visual Studio Code

### Für Windows
1. Besuche die [Visual Studio Code Website](https://code.visualstudio.com/)
2. Klicke auf den blauen "Download für Windows" Button
3. Führe die heruntergeladene .exe-Datei aus
4. Folge den Anweisungen des Installationsassistenten
   - Empfohlene Einstellungen:
     - Erstelle einen Desktop-Shortcut
     - Füge "Code mit VS Code öffnen" zum Kontextmenü hinzu
     - Registriere VS Code als Editor für unterstützte Dateitypen

### Für macOS
1. Besuche die [Visual Studio Code Website](https://code.visualstudio.com/)
2. Klicke auf den blauen "Download für Mac" Button
3. Öffne die heruntergeladene .zip-Datei
4. Ziehe die Visual Studio Code App in deinen Applications-Ordner
5. Starte VS Code aus dem Applications-Ordner oder über Spotlight (Cmd+Space)

### Für Linux
1. Besuche die [Visual Studio Code Website](https://code.visualstudio.com/)
2. Wähle die entsprechende Linux-Distribution (.deb, .rpm, etc.)
3. Folge den distributionsspezifischen Installationsanweisungen

## 2. Erste Schritte mit VS Code

### Benutzeroberfläche kennenlernen
Nach dem ersten Start von VS Code siehst du folgende Hauptelemente:

![VS Code Benutzeroberfläche](https://code.visualstudio.com/assets/docs/getstarted/userinterface/hero.png)

- **Aktivitätsleiste**: Links, enthält Buttons für verschiedene Ansichten
- **Seitenleiste**: Zeigt verschiedene Inhalte je nach ausgewählter Aktivität
- **Editor**: Zentraler Bereich, in dem du Code bearbeitest
- **Statusleiste**: Unten, zeigt Informationen über das geöffnete Projekt und die Datei

### Wichtige Tastenkombinationen
- `Ctrl+N` (Windows/Linux) oder `Cmd+N` (Mac): Neue Datei
- `Ctrl+S` (Windows/Linux) oder `Cmd+S` (Mac): Speichern
- `Ctrl+Shift+P` (Windows/Linux) oder `Cmd+Shift+P` (Mac): Befehlspalette öffnen
- `Ctrl+Space`: IntelliSense (Code-Vervollständigung) aktivieren

## 3. Installation wichtiger Erweiterungen für Bootstrap

VS Code kann durch Erweiterungen an deine Bedürfnisse angepasst werden. Für die Bootstrap-Entwicklung sind folgende Erweiterungen besonders nützlich:

### Bootstrap 5 Snippets
Diese Erweiterung bietet Code-Snippets für Bootstrap 5 Komponenten.

1. Klicke auf das Erweiterungssymbol in der Aktivitätsleiste (oder drücke `Ctrl+Shift+X`)
2. Suche nach "Bootstrap 5 Snippets"
3. Wähle die Erweiterung von "Anbuselvan Rocky" aus
4. Klicke auf "Installieren"

### Live Server
Diese Erweiterung ermöglicht es dir, deine HTML-Seiten mit Live-Reload im Browser anzuzeigen.

1. Klicke auf das Erweiterungssymbol in der Aktivitätsleiste
2. Suche nach "Live Server"
3. Wähle die Erweiterung von "Ritwick Dey" aus
4. Klicke auf "Installieren"

### HTML CSS Support
Diese Erweiterung verbessert die HTML- und CSS-Bearbeitung mit Autovervollständigung.

1. Klicke auf das Erweiterungssymbol in der Aktivitätsleiste
2. Suche nach "HTML CSS Support"
3. Wähle die Erweiterung von "ecmel" aus
4. Klicke auf "Installieren"

### IntelliSense for CSS class names
Diese Erweiterung bietet Autovervollständigung für CSS-Klassennamen in HTML.

1. Klicke auf das Erweiterungssymbol in der Aktivitätsleiste
2. Suche nach "IntelliSense for CSS class names"
3. Wähle die Erweiterung von "Zignd" aus
4. Klicke auf "Installieren"

## 4. Einrichtung eines Bootstrap-Projekts

### Methode 1: Einfaches Projekt mit CDN

1. **Projektordner erstellen**
   - Klicke auf "Datei" > "Ordner öffnen"
   - Wähle einen Ordner für dein Projekt oder erstelle einen neuen

2. **HTML-Datei erstellen**
   - Klicke auf "Datei" > "Neue Datei" (oder `Ctrl+N`)
   - Speichere die Datei als "index.html" (`Ctrl+S`)

3. **Bootstrap-Template einfügen**
   - Tippe `!` und drücke `Tab` für ein HTML-Grundgerüst
   - Füge die Bootstrap-CDN-Links ein:

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Bootstrap-Projekt</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h1>Hallo Bootstrap!</h1>
        <p>Dies ist mein erstes Bootstrap-Projekt.</p>
    </div>

    <!-- Bootstrap Bundle mit Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>
```

4. **Projekt im Browser anzeigen**
   - Rechtsklick auf die HTML-Datei
   - Wähle "Mit Live Server öffnen"
   - Dein Projekt wird im Browser geöffnet und aktualisiert sich automatisch bei Änderungen

### Methode 2: Projekt mit Bootstrap-Erweiterung

Wenn du die Bootstrap 5 Snippets-Erweiterung installiert hast, kannst du Bootstrap-Komponenten schnell einfügen:

1. Erstelle eine neue HTML-Datei
2. Tippe `b5-` und du siehst eine Liste verfügbarer Snippets
3. Wähle z.B. `b5-template-starter` für ein vollständiges Bootstrap-Starter-Template

## 5. Verwendung von Bootstrap-Snippets

Die Bootstrap 5 Snippets-Erweiterung bietet viele vorgefertigte Komponenten:

### Grundlegende Snippets
- `b5-grid-container`: Erstellt einen Bootstrap-Container
- `b5-grid-row`: Erstellt eine Bootstrap-Zeile
- `b5-grid-col`: Erstellt Bootstrap-Spalten

### Komponenten-Snippets
- `b5-navbar`: Erstellt eine Navigationsleiste
- `b5-card`: Erstellt eine Karte
- `b5-form`: Erstellt ein Formular
- `b5-button`: Erstellt einen Button
- `b5-modal`: Erstellt ein Modal-Fenster

### Verwendungsbeispiel
1. Öffne deine HTML-Datei
2. Platziere den Cursor an der Stelle, wo du eine Komponente einfügen möchtest
3. Tippe z.B. `b5-navbar` und drücke `Tab`
4. Die Navbar-Komponente wird automatisch eingefügt

## 6. Eigene CSS-Datei hinzufügen

Für benutzerdefinierte Styles:

1. **CSS-Datei erstellen**
   - Klicke auf "Datei" > "Neue Datei"
   - Speichere die Datei als "styles.css"

2. **CSS-Datei in HTML einbinden**
   - Füge folgenden Code im `<head>`-Bereich deiner HTML-Datei ein, nach dem Bootstrap-CSS-Link:

```html
<link rel="stylesheet" href="styles.css">
```

3. **Eigene Styles hinzufügen**
   - Öffne die styles.css-Datei
   - Füge eigene CSS-Regeln hinzu, z.B.:

```css
body {
    padding-top: 20px;
}

.custom-container {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 5px;
}
```

## 7. Arbeiten mit dem VS Code-Terminal

Das integrierte Terminal ist nützlich für fortgeschrittenere Aufgaben:

1. **Terminal öffnen**
   - Drücke ``Ctrl+` `` (Backtick) oder
   - Wähle "Terminal" > "Neues Terminal" aus dem Menü

2. **Grundlegende Befehle**
   - Verzeichnis anzeigen: `dir` (Windows) oder `ls` (Mac/Linux)
   - Verzeichnis wechseln: `cd Verzeichnisname`
   - Zurück zum übergeordneten Verzeichnis: `cd ..`

## 8. Integration mit Figma

Wenn du Designs aus Figma in VS Code umsetzen möchtest:

1. **Exportiere den Code aus Figma**
   - Nutze den Figma Dev Mode oder das Figma to Bootstrap 5 Plugin
   - Kopiere den generierten Code

2. **Füge den Code in VS Code ein**
   - Öffne deine HTML-Datei in VS Code
   - Füge den Code an der gewünschten Stelle ein
   - Passe den Code bei Bedarf an

3. **Bilder und Assets**
   - Exportiere Bilder und Icons aus Figma
   - Erstelle einen "images" oder "assets" Ordner in deinem Projekt
   - Speichere die exportierten Dateien in diesem Ordner
   - Aktualisiere die Pfade in deinem HTML-Code

## 9. Debugging in VS Code

### HTML und CSS debuggen
1. Öffne deine Seite mit Live Server
2. Drücke F12 im Browser, um die Entwicklertools zu öffnen
3. Untersuche und bearbeite HTML/CSS direkt im Browser
4. Kehre zu VS Code zurück, um dauerhafte Änderungen vorzunehmen

### JavaScript debuggen
1. Setze Breakpoints in deinem JavaScript-Code, indem du auf die Zeilennummer klickst
2. Starte das Debugging mit F5
3. Wähle "Web App (Chrome)" oder "Web App (Edge)" als Umgebung
4. VS Code öffnet den Browser und stoppt an deinen Breakpoints

## 10. Praktisches Beispiel: Bootstrap-Projekt in VS Code

Hier ist ein vollständiges Beispiel für ein einfaches Bootstrap-Projekt in VS Code:

1. **Projektstruktur erstellen**
   - Erstelle einen neuen Ordner für dein Projekt
   - Öffne den Ordner in VS Code

2. **Dateien erstellen**
   - index.html (Hauptseite)
   - styles.css (Eigene Styles)
   - script.js (Optional für JavaScript)
   - Ordner "images" für Bilder

3. **Bootstrap einbinden**
   - Füge die Bootstrap-CDN-Links in index.html ein

4. **Inhalte hinzufügen**
   - Nutze Bootstrap-Komponenten für dein Layout
   - Passe die Styles in styles.css an

5. **Vorschau mit Live Server**
   - Starte Live Server, um deine Seite im Browser zu sehen
   - Bearbeite den Code und sieh die Änderungen in Echtzeit

### Beispiel-Code für index.html

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mein Portfolio</title>
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <!-- Eigenes CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">Mein Portfolio</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Projekte</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Über mich</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Kontakt</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <header class="hero-section text-center py-5">
        <div class="container">
            <h1 class="display-4">Willkommen in meinem Portfolio</h1>
            <p class="lead">UX Designer & Frontend-Entwickler</p>
        </div>
    </header>

    <!-- Projekte -->
    <section class="projects py-5">
        <div class="container">
            <h2 class="text-center mb-4">Meine Projekte</h2>
            <div class="row">
                <div class="col-md-4 mb-4">
                    <div class="card project-card">
                        <img src="images/project1.jpg" class="card-img-top" alt="Projekt 1">
                        <div class="card-body">
                            <h5 class="card-title">Projekt 1</h5>
                            <p class="card-text">Beschreibung des ersten Projekts.</p>
                            <a href="#" class="btn btn-primary">Mehr erfahren</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card project-card">
                        <img src="images/project2.jpg" class="card-img-top" alt="Projekt 2">
                        <div class="card-body">
                            <h5 class="card-title">Projekt 2</h5>
                            <p class="card-text">Beschreibung des zweiten Projekts.</p>
                            <a href="#" class="btn btn-primary">Mehr erfahren</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 mb-4">
                    <div class="card project-card">
                        <img src="images/project3.jpg" class="card-img-top" alt="Projekt 3">
                        <div class="card-body">
                            <h5 class="card-title">Projekt 3</h5>
                            <p class="card-text">Beschreibung des dritten Projekts.</p>
                            <a href="#" class="btn btn-primary">Mehr erfahren</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Kontakt -->
    <section class="contact py-5 bg-light">
        <div class="container">
            <h2 class="text-center mb-4">Kontakt</h2>
            <div class="row justify-content-center">
                <div class="col-md-6">
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">E-Mail</label>
                            <input type="email" class="form-control" id="email">
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Nachricht</label>
                            <textarea class="form-control" id="message" rows="4"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Absenden</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
        <div class="container">
            <p class="mb-0">© 2025 Mein Portfolio. Alle Rechte vorbehalten.</p>
        </div>
    </footer>

    <!-- Bootstrap Bundle mit Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <!-- Eigenes JavaScript -->
    <script src="script.js"></script>
</body>
</html>
```

### Beispiel-Code für styles.css

```css
/* Allgemeine Styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Hero Section */
.hero-section {
    background-color: #f8f9fa;
    padding: 80px 0;
}

/* Projekt-Karten */
.project-card {
    transition: transform 0.3s ease;
    height: 100%;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* Kontaktformular */
.contact {
    background-color: #f8f9fa;
}
```

## 11. Tipps und Tricks für VS Code

### Produktivitätstipps
- **Emmet-Abkürzungen**: Tippe z.B. `div.container>div.row>div.col*3` und drücke Tab
- **Multi-Cursor-Bearbeitung**: Halte Alt (Windows) oder Option (Mac) gedrückt und klicke an verschiedenen Stellen
- **Zeilen duplizieren**: Shift+Alt+Pfeil nach unten (Windows) oder Shift+Option+Pfeil nach unten (Mac)
- **Zeilen verschieben**: Alt+Pfeil nach oben/unten (Windows) oder Option+Pfeil nach oben/unten (Mac)
- **Schnelle Dateisuche**: Ctrl+P (Windows) oder Cmd+P (Mac)

### Nützliche Einstellungen
1. **Auto-Speichern aktivieren**
   - Gehe zu "Datei" > "Einstellungen" > "Einstellungen"
   - Suche nach "Auto Save"
   - Setze es auf "afterDelay" oder "onFocusChange"

2. **Zeilennummern anzeigen**
   - Gehe zu "Datei" > "Einstellungen" > "Einstellungen"
   - Suche nach "Line Numbers"
   - Stelle sicher, dass es aktiviert ist

3. **Formatierung beim Speichern**
   - Gehe zu "Datei" > "Einstellungen" > "Einstellungen"
   - Suche nach "Format On Save"
   - Aktiviere die Option

## 12. Fehlerbehebung

### Häufige Probleme und Lösungen

#### Problem: Live Server startet nicht
**Lösung**: 
- Überprüfe, ob die Erweiterung korrekt installiert ist
- Stelle sicher, dass du eine HTML-Datei geöffnet hast
- Versuche VS Code neu zu starten

#### Problem: Bootstrap-Styles werden nicht angewendet
**Lösung**:
- Überprüfe die Bootstrap-CDN-Links
- Prüfe die Netzwerkverbindung
- Überprüfe, ob deine eigenen CSS-Regeln die Bootstrap-Styles überschreiben

#### Problem: Bootstrap-JavaScript-Komponenten funktionieren nicht
**Lösung**:
- Stelle sicher, dass du das Bootstrap-Bundle mit Popper eingebunden hast
- Überprüfe die Konsole im Browser auf JavaScript-Fehler
- Überprüfe, ob die data-bs-* Attribute korrekt gesetzt sind

#### Problem: IntelliSense für Bootstrap-Klassen funktioniert nicht
**Lösung**:
- Stelle sicher, dass die "IntelliSense for CSS class names"-Erweiterung installiert ist
- Öffne und schließe die HTML-Datei erneut
- Überprüfe, ob die Bootstrap-CSS-Datei korrekt eingebunden ist

## 13. Ressourcen und weiterführende Links

### Offizielle Dokumentationen
- [Visual Studio Code Dokumentation](https://code.visualstudio.com/docs)
- [Bootstrap 5 Dokumentation](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

### Tutorials und Lernressourcen
- [VS Code Einführungsvideo](https://code.visualstudio.com/docs/introvideos/basics)
- [Bootstrap 5 Tutorial auf W3Schools](https://www.w3schools.com/bootstrap5/)
- [Bootstrap 5 Crash Course auf YouTube](https://www.youtube.com/watch?v=4sosXZsdy-s)

### Nützliche Erweiterungen
- [Prettier - Code Formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
- [Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

## 14. Zusammenfassung

Visual Studio Code ist eine leistungsstarke und flexible Entwicklungsumgebung für Bootstrap-Projekte. Mit den richtigen Erweiterungen und Einstellungen kannst du deinen Workflow erheblich verbessern und effizienter arbeiten.

Die wichtigsten Schritte für den Einstieg sind:
1. VS Code installieren
2. Nützliche Erweiterungen hinzufügen (Bootstrap 5 Snippets, Live Server)
3. Ein Bootstrap-Projekt erstellen
4. Bootstrap-Komponenten mit Snippets einfügen
5. Eigene Styles hinzufügen
6. Mit Live Server die Vorschau anzeigen

Mit etwas Übung wirst du schnell in der Lage sein, deine Figma-Designs effizient in Bootstrap-Code umzusetzen und ansprechende, responsive Websites zu erstellen.
