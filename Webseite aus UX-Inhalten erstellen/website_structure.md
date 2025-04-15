# Webseiten-Struktur für UX/HCI-Literatur

## Hauptseiten

1. **Startseite (index.html)**
   - Einführung in die Webseite
   - Hervorhebung wichtiger Bücher
   - Navigation zu allen Hauptkategorien
   - Suchfunktion

2. **Bücherkategorien (categories.html)**
   - Übersicht aller Kategorien mit kurzen Beschreibungen
   - Verlinkung zu den einzelnen Kategorie-Seiten

3. **Über das Projekt (about.html)**
   - Informationen über den Zweck der Webseite
   - Methodik der Buchauswahl und -analyse

4. **Neuerscheinungen (new-releases.html)**
   - Aktuelle und kommende Bücher im UX/HCI-Bereich
   - Trends und Entwicklungen

## Kategorie-Seiten

1. **Grundlegende Designprinzipien (principles.html)**
   - Bücher zu fundamentalen Design-Konzepten
   - Verlinkung zu einzelnen Buchseiten

2. **Psychologie und Nutzerverhalten (psychology.html)**
   - Bücher über kognitive Aspekte und Nutzerverhalten
   - Verlinkung zu einzelnen Buchseiten

3. **Forschungsmethoden und Nutzertests (research.html)**
   - Bücher zu Forschungsmethoden und Usability-Tests
   - Verlinkung zu einzelnen Buchseiten

4. **Interface-Design und Patterns (interface.html)**
   - Bücher zu UI-Design und Designmustern
   - Verlinkung zu einzelnen Buchseiten

5. **Produktdesign und -strategie (product.html)**
   - Bücher zu Produktentwicklung und -strategie
   - Verlinkung zu einzelnen Buchseiten

6. **Interaktionsdesign (interaction.html)**
   - Bücher zu Interaktionsdesign
   - Verlinkung zu einzelnen Buchseiten

7. **Praktische Anleitungen und Methoden (practical.html)**
   - Praxisorientierte Bücher und Anleitungen
   - Verlinkung zu einzelnen Buchseiten

8. **Umfassende Referenzwerke (reference.html)**
   - Umfassende Nachschlagewerke und Handbücher
   - Verlinkung zu einzelnen Buchseiten

## Spezielle Listen-Seiten

1. **Für Anfänger empfohlen (beginners.html)**
   - Einsteigerfreundliche Bücher
   - Lernpfade für Anfänger

2. **Für Fortgeschrittene empfohlen (advanced.html)**
   - Bücher für erfahrene Designer
   - Vertiefende Konzepte

3. **Für Forscher empfohlen (researchers.html)**
   - Akademische und forschungsorientierte Werke
   - Methodische Grundlagen

4. **Höchstbewertete Bücher (top-rated.html)**
   - Bücher mit den besten Bewertungen
   - Community-Favoriten

5. **Klassiker (classics.html)**
   - Zeitlose Grundlagenwerke
   - Historisch bedeutsame Bücher

## Einzelne Buchseiten

Für jedes detailliert beschriebene Buch wird eine eigene Seite erstellt:

1. **The Design of Everyday Things (design-everyday-things.html)**
2. **Don't Make Me Think (dont-make-me-think.html)**
3. **Universal Principles of Design (universal-principles.html)**
4. **Laws of UX (laws-of-ux.html)**
5. **100 Things Every Designer Needs to Know About People (100-things.html)**
6. **Designing with the Mind in Mind (designing-mind.html)**
7. **The User Experience Team of One (ux-team-one.html)**
8. **Inclusive Design for a Digital World (inclusive-design.html)**
9. **UX Magic (ux-magic.html)**

## Komponenten für alle Seiten

1. **Header**
   - Logo/Titel der Webseite
   - Hauptnavigation
   - Suchfunktion

2. **Footer**
   - Copyright-Informationen
   - Links zu wichtigen Seiten
   - Kontaktinformationen

3. **Seitenleiste**
   - Kategorien-Navigation
   - Beliebte Bücher
   - Filter-Optionen

## Technische Struktur

1. **Verzeichnisstruktur**
   ```
   /
   ├── index.html
   ├── css/
   │   ├── style.css
   │   └── responsive.css
   ├── js/
   │   ├── main.js
   │   └── search.js
   ├── img/
   │   ├── book-covers/
   │   ├── icons/
   │   └── ui/
   ├── pages/
   │   ├── categories/
   │   ├── books/
   │   └── lists/
   └── data/
       └── books.json
   ```

2. **Responsive Design**
   - Mobile-first Ansatz
   - Breakpoints für verschiedene Gerätetypen
   - Flexible Layouts für optimale Lesbarkeit

3. **Interaktive Elemente**
   - Filterbare Buchlisten
   - Suchfunktion
   - Kategorie-Tabs
   - Responsive Navigation
