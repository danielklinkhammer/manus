# Konzept: Interaktive Station "Solarstrom managen"

## Übersicht

Die interaktive Station "Solarstrom managen" ist eine hands-on Ausstellungsinstallation, die Besuchern ermöglicht, die Funktionsweise und das Management von Solarstrom in einem Haushalt zu erleben. Durch die direkte Interaktion mit Licht, Solarzellen und virtuellen Haushaltsgeräten können Besucher die Zusammenhänge zwischen Stromerzeugung, -verbrauch und -speicherung verstehen und verschiedene Strategien zum Umgang mit überschüssigem Solarstrom ausprobieren.

## Konzeptioneller Aufbau

### Physische Struktur

Die Station besteht aus folgenden Hauptkomponenten:

1. **Solarpanel-Modul**:
   - Mehrere kleine, funktionsfähige Solarzellen, montiert auf einer geneigten Fläche
   - Transparente Schutzabdeckung, die Berührung erlaubt, aber vor Beschädigung schützt
   - Integrierte Lichtsensoren zur präzisen Messung der Lichtintensität

2. **Interaktionspult**:
   - Großer Touchscreen (mindestens 32 Zoll) für die Hauptvisualisierung
   - Physische Schalter und Drehregler für die intuitive Steuerung von Geräten
   - Halterungen für die Taschenlampen mit automatischer Ladung bei Nichtbenutzung

3. **Beleuchtungssystem**:
   - Mehrere robuste, helligkeitsregulierbare LED-Taschenlampen
   - Optionale Lichtfilter zur Simulation verschiedener Lichtbedingungen
   - Sicherheitskabel zur Befestigung der Taschenlampen am Pult

4. **Hausmodell**:
   - Dreidimensionales Modell eines Hauses mit sichtbaren Energieflüssen
   - LED-Beleuchtung zur Visualisierung der aktiven Geräte und Energiepfade
   - Integrierte Miniaturversionen der Haushaltsgeräte und Speichersysteme

### Digitale Komponenten

1. **Hauptvisualisierungssystem**:
   - Echtzeit-Darstellung der Energieerzeugung und -flüsse
   - Interaktive Benutzeroberfläche für die Gerätesteuerung
   - Animierte Grafiken zur Veranschaulichung der Energieumwandlungsprozesse

2. **Simulationssoftware**:
   - Physikalisch korrekte Berechnung der Energieerzeugung basierend auf Lichtintensität
   - Realistische Simulation des Energieverbrauchs verschiedener Haushaltsgeräte
   - Zeitrafferfunktion zur Darstellung von Tages- und Jahresverläufen

3. **Datenerfassungssystem**:
   - Sensoren zur Messung der tatsächlichen Lichtintensität und des erzeugten Stroms
   - Schnittstelle zur Einbindung von Echtzeitdaten der PV-Anlage des Energieparks
   - Anonymisierte Speicherung von Nutzungsdaten für statistische Auswertungen

## Interaktionsdesign

### Benutzerführung

1. **Einführungsphase**:
   - Kurze Animation auf dem Hauptbildschirm erklärt die Grundprinzipien
   - Aufforderung, eine Taschenlampe zu nehmen und auf die Solarzellen zu richten
   - Einfache Anleitung zur Bedienung der Steuerelemente

2. **Hauptinteraktionsphase**:
   - Freie Exploration der verschiedenen Möglichkeiten
   - Kontextbezogene Hinweise bei längerer Inaktivität
   - Fortschrittsanzeige für bereits entdeckte Funktionen und Szenarien

3. **Abschlussphase**:
   - Zusammenfassung der getroffenen Entscheidungen und deren Auswirkungen
   - Personalisierte Empfehlungen für nachhaltiges Energiemanagement
   - Möglichkeit, die Ergebnisse per QR-Code auf dem Smartphone zu speichern

### Feedback-Mechanismen

1. **Visuelle Rückmeldungen**:
   - Farbcodierte Anzeigen für Energieüberschuss oder -mangel
   - Animierte Stromflüsse zwischen Erzeugung, Verbrauch und Speicherung
   - Grafische Darstellung der Umweltauswirkungen verschiedener Entscheidungen

2. **Akustische Signale**:
   - Dezente Töne zur Bestätigung von Aktionen
   - Unterschiedliche Klangmuster für verschiedene Energiezustände
   - Optional zuschaltbare Spracherklärungen für zusätzliche Informationen

3. **Haptisches Feedback**:
   - Vibration der Steuerelemente bei kritischen Energiesituationen
   - Unterschiedliche Widerstandsstufen bei Drehreglern je nach Energieverfügbarkeit
   - Physische Anzeigen durch LED-Beleuchtung im Hausmodell

## Szenarien und Lernmodule

### Grundszenario: "Tagesablauf eines solarbetriebenen Haushalts"

Besucher erleben einen typischen Tag mit wechselnden Wetterbedingungen und Verbrauchsmustern:
- Morgens: Geringe Solarproduktion, hoher Verbrauch (Frühstück zubereiten)
- Mittags: Maximale Solarproduktion, geringer Verbrauch (niemand zu Hause)
- Abends: Abnehmende Solarproduktion, hoher Verbrauch (Kochen, Unterhaltungselektronik)
- Nachts: Keine Solarproduktion, geringer Verbrauch (nur Grundlast)

### Spezialszenario 1: "Extremwetterereignisse"

Simulation verschiedener Wetterbedingungen und deren Auswirkungen:
- Hitzewelle: Hohe Solarproduktion, aber auch hoher Stromverbrauch durch Klimaanlagen
- Bewölkter Winter: Geringe Solarproduktion über mehrere Tage
- Wechselhaftes Wetter: Schnelle Schwankungen in der Energieerzeugung

### Spezialszenario 2: "Zukunftstechnologien"

Einblick in kommende Entwicklungen:
- Bidirektionales Laden von Elektrofahrzeugen (Vehicle-to-Grid)
- Intelligente Haushaltsgeräte mit automatischer Lastverschiebung
- Nachbarschaftliche Energiegemeinschaften und lokaler Stromhandel

## Technische Umsetzung

### Hardware-Architektur

1. **Steuerungssystem**:
   - Leistungsfähiger Mini-PC mit dedizierter Grafikkarte
   - Arduino-basierte Sensorik für die Lichtmessung und Gerätesteuerung
   - Robuste Touchscreen-Technologie für intensive Nutzung

2. **Energiemessung**:
   - Kalibrierte Photosensoren zur präzisen Lichtmessung
   - Echte Solarzellen mit Messschaltung für den erzeugten Strom
   - Simulierte Verbrauchswerte basierend auf realistischen Geräteprofilen

3. **Ausgabesystem**:
   - Hochauflösender Touchscreen für die Hauptvisualisierung
   - Zusätzliche LED-Anzeigen im Hausmodell
   - Kompaktes Audiosystem für akustisches Feedback

### Software-Architektur

1. **Basisschicht**:
   - Linux-basiertes Betriebssystem für Stabilität
   - Echtzeit-Datenerfassung von Sensoren
   - Datenbank für Simulationsparameter und Nutzungsstatistiken

2. **Simulationsschicht**:
   - Physikalisches Modell der Solarstromerzeugung
   - Realistische Simulation des Energieverbrauchs
   - Zeitrafferfunktion mit variabler Geschwindigkeit

3. **Präsentationsschicht**:
   - Intuitive grafische Benutzeroberfläche
   - Responsive Animationen und Visualisierungen
   - Mehrsprachige Texteinblendungen und Erklärungen

## Pädagogisches Konzept

### Lernziele

1. **Wissen vermitteln**:
   - Grundprinzipien der Photovoltaik verstehen
   - Zusammenhänge zwischen Energieerzeugung und -verbrauch erkennen
   - Verschiedene Speicher- und Nutzungsoptionen kennenlernen

2. **Kompetenzen fördern**:
   - Systemisches Denken im Energiekontext entwickeln
   - Entscheidungsfähigkeit bei komplexen Energiefragen stärken
   - Bewusstsein für den eigenen Energieverbrauch schärfen

3. **Einstellungen prägen**:
   - Wertschätzung für erneuerbare Energien fördern
   - Motivation zum nachhaltigen Energiehandeln stärken
   - Offenheit für innovative Energietechnologien entwickeln

### Didaktische Methoden

1. **Entdeckendes Lernen**:
   - Freie Exploration der verschiedenen Möglichkeiten
   - Unmittelbares Feedback zu getroffenen Entscheidungen
   - Selbstgesteuerter Lernprozess ohne vorgegebenen Pfad

2. **Spielerisches Lernen**:
   - Herausforderungen mit steigendem Schwierigkeitsgrad
   - Belohnungssystem für effiziente Energienutzung
   - Wettbewerbselemente für Gruppenbesuche

3. **Kontextualisiertes Lernen**:
   - Verbindung zu realen Alltagssituationen
   - Bezug zu aktuellen Energiethemen und -debatten
   - Übertragbarkeit auf die eigene Lebenssituation

## Designkonzept

### Ästhetik

1. **Formsprache**:
   - Klare, moderne Linien
   - Organische Elemente für Energieflüsse
   - Transparente Komponenten zur Sichtbarmachung der Technik

2. **Farbkonzept**:
   - Hauptfarbe: Blau (Solarenergie, Technologie)
   - Akzentfarbe: Gelb (Sonne, Licht)
   - Zusatzfarben: Grün (Nachhaltigkeit), Rot (Verbrauch)

3. **Materialien**:
   - Recycelte und nachhaltige Materialien wo möglich
   - Robuste Oberflächen für intensive Nutzung
   - Kontrastreiche Materialien für bessere Wahrnehmbarkeit

### Zugänglichkeit

1. **Physische Zugänglichkeit**:
   - Höhenverstellbare Komponenten für verschiedene Nutzergruppen
   - Barrierefreier Zugang für Rollstuhlfahrer
   - Ergonomische Gestaltung der Bedienelemente

2. **Kognitive Zugänglichkeit**:
   - Mehrsprachige Benutzerführung
   - Verschiedene Komplexitätsstufen wählbar
   - Klare, verständliche Symbolik und Beschriftung

3. **Sensorische Zugänglichkeit**:
   - Hohe Kontraste für sehbeeinträchtigte Besucher
   - Taktile Elemente zur Orientierung
   - Akustische Signale als Ergänzung zu visuellen Informationen

## Implementierungsplan

### Entwicklungsphasen

1. **Konzeptphase** (abgeschlossen mit diesem Dokument)
2. **Prototypenphase**: Entwicklung eines funktionsfähigen Grundmodells
3. **Testphase**: Nutzertests mit verschiedenen Zielgruppen
4. **Optimierungsphase**: Anpassung basierend auf Testergebnissen
5. **Produktionsphase**: Herstellung der finalen Installation
6. **Installationsphase**: Aufbau und Inbetriebnahme in der Ausstellung

### Zeitlicher Rahmen

- Prototypenphase: 2-3 Monate
- Testphase: 1 Monat
- Optimierungsphase: 1-2 Monate
- Produktionsphase: 2-3 Monate
- Installationsphase: 2 Wochen

### Ressourcenbedarf

1. **Personal**:
   - Projektleitung: Koordination und Qualitätssicherung
   - Technische Entwicklung: Hardware- und Softwareentwicklung
   - Gestalterische Umsetzung: Design und Konstruktion
   - Pädagogische Begleitung: Konzeption der Lernmodule

2. **Material**:
   - Elektronische Komponenten (Computer, Sensoren, Displays)
   - Konstruktionsmaterialien (Gehäuse, Modelle)
   - Solarzellen und Beleuchtungssysteme

3. **Externe Dienstleistungen**:
   - Spezialisierte Fertigung komplexer Komponenten
   - Professionelle Grafik- und Animationserstellung
   - Wissenschaftliche Beratung zu Energiethemen

## Evaluationskonzept

### Evaluationsmethoden

1. **Beobachtung**:
   - Systematische Beobachtung der Nutzerinteraktion
   - Analyse von Verweildauer und Nutzungsintensität
   - Identifikation von Problemstellen und Hindernissen

2. **Befragung**:
   - Kurze Interviews mit Besuchern nach der Nutzung
   - Standardisierte Fragebögen zur Bewertung verschiedener Aspekte
   - Fokusgruppen mit ausgewählten Zielgruppen

3. **Datenanalyse**:
   - Auswertung der anonymisierten Nutzungsdaten
   - Analyse der gewählten Optionen und Szenarien
   - Identifikation von Nutzungsmustern und Präferenzen

### Erfolgskriterien

1. **Nutzungsintensität**:
   - Hohe Verweildauer an der Station
   - Vollständige Durchführung der Hauptszenarien
   - Wiederholte Nutzung durch dieselben Besucher

2. **Lerneffekt**:
   - Verständnis der grundlegenden Konzepte
   - Fähigkeit, effiziente Energiemanagement-Entscheidungen zu treffen
   - Transfer des Gelernten auf eigene Lebenssituation

3. **Besucherzufriedenheit**:
   - Positive Bewertung der Interaktionserfahrung
   - Weiterempfehlung an andere Besucher
   - Wunsch nach weiteren ähnlichen Installationen

## Fazit und Ausblick

Die interaktive Station "Solarstrom managen" bietet eine innovative und ansprechende Möglichkeit, komplexe Zusammenhänge der Solarenergienutzung erfahrbar zu machen. Durch die Kombination aus physischer Interaktion, digitaler Simulation und anschaulicher Visualisierung werden abstrakte Konzepte greifbar und verständlich.

Die Station hat das Potenzial, nicht nur Wissen zu vermitteln, sondern auch Einstellungen zu prägen und Handlungskompetenzen zu fördern. Sie kann einen wichtigen Beitrag zur Energiebildung leisten und das Bewusstsein für die Möglichkeiten und Herausforderungen der Energiewende stärken.

Zukünftige Erweiterungsmöglichkeiten umfassen die Vernetzung mit anderen Stationen zu erneuerbaren Energien, die Integration aktueller Technologieentwicklungen und die Anpassung an sich verändernde energiepolitische Rahmenbedingungen.
