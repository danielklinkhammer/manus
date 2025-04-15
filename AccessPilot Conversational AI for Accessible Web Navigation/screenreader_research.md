# Screenreader & Webhilfsmittel Recherche

## Vergleich der marktführenden Screenreader

Basierend auf dem Artikel von CSS-Tricks (2022) und weiteren Quellen:

### JAWS (Job Access With Speech)
- **Betriebssystem**: Windows
- **Preis**: $90 - $1695 (jährliche oder Dauerlizenz)
- **Marktanteil**: ca. 50% der Screenreader-Nutzer
- **Vorteile**:
  - Umfangreich anpassbar
  - Viele Navigationsoptionen
  - Industriestandard mit breiter Akzeptanz
  - Große Nutzerbasis und entsprechender Support
- **Nachteile**:
  - Komplexere Bedienung als NVDA oder VoiceOver
  - Teilweise nicht-intuitive Befehle
  - Viele Befehle zu lernen (steile Lernkurve)
  - Nicht für Mac verfügbar
  - Kostenpflichtig
  - Unterschiedliche Tastenkombinationen für Desktop und Laptop

### NVDA (NonVisual Digital Access)
- **Betriebssystem**: Windows
- **Preis**: Kostenlos (Open Source)
- **Marktanteil**: ca. 30% der Screenreader-Nutzer
- **Vorteile**:
  - Liefert zuverlässige Informationen zum Bildschirminhalt
  - Einfach zu erlernende Tastenkombinationen
  - Open Source (Community kann Updates und Fixes beitragen)
  - Kostenlos, daher gute Option für Windows-Nutzer
- **Nachteile**:
  - Nicht für Mac verfügbar

### VoiceOver
- **Betriebssystem**: macOS
- **Preis**: Kostenlos (vorinstalliert)
- **Marktanteil**: ca. 6% der Screenreader-Nutzer
- **Vorteile**:
  - Einfach zu bedienen und zu erlernen
  - Intuitive Befehle
  - Vorinstalliert auf allen macOS-Geräten
- **Nachteile**:
  - Nicht für Windows verfügbar
  - Keine eigenständige App, Updates nur mit macOS-Updates

## Typische Probleme mit Screenreadern

1. **Lineare Struktur**: Screenreader lesen Webseiten typischerweise linear vor, was die Orientierung und das Verständnis der Gesamtstruktur erschwert.

2. **Fehlende Kontextinformationen**: Nutzer erhalten oft nicht genügend Kontext über die Gesamtstruktur einer Webseite oder App.

3. **Navigationsprobleme**: Die Navigation durch komplexe Webseiten kann zeitaufwändig und frustrierend sein.

4. **Fehlende Task-Fokussierung**: Screenreader bieten keine aufgabenorientierte Navigation, sondern erfordern vom Nutzer, die relevanten Informationen selbst zu finden.

5. **Lernkurve**: Besonders bei umfangreichen Screenreadern wie JAWS gibt es eine steile Lernkurve mit vielen zu erlernenden Befehlen.

6. **Plattformbeschränkungen**: Die meisten Screenreader sind auf ein Betriebssystem beschränkt (Windows oder macOS).

7. **Inkonsistente Erfahrung**: Die Benutzererfahrung kann je nach Webseite und deren Zugänglichkeit stark variieren.

## Navigationsmethoden

Laut einer Studie von Heydon Pickering (2016) navigieren die meisten Screenreader-Nutzer neue Seiten primär über Überschriften. Weitere Navigationsmethoden umfassen:

- Tastenkombinationen für das Springen zu bestimmten Elementen (z.B. Überschriften, Links, Formularfelder)
- Nutzung von Pfeiltasten zur sequentiellen Navigation
- Spezielle Befehle für das Auffinden von Suchfeldern und Navigationsbereichen

## Relevanz für AccessPilot

Die identifizierten Probleme unterstreichen die Notwendigkeit eines Ansatzes wie AccessPilot, der:

1. Webinhalte intelligent strukturiert statt linear vorzulesen
2. Kontextinformationen bereitstellt
3. Eine konversationelle Schnittstelle bietet, die weniger Befehle erfordert
4. Aufgabenorientierte Navigation ermöglicht

Diese Erkenntnisse bilden eine wichtige Grundlage für die Entwicklung von AccessPilot als Alternative zu traditionellen Screenreadern.

## Quellen
- CSS-Tricks (2022). A Brief Introduction to JAWS, NVDA, and VoiceOver.
- WebAIM (2021). Screen Reader User Survey.
- Pickering, H. (2016). Inclusive Design Patterns.
