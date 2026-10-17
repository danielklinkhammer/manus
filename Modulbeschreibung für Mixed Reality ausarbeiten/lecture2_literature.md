# Literaturrecherche für Vorlesung 2: Mixed Reality-Hardware und -Technologien

## Akademische Literatur

### Grundlagenwerke (Bücher)

1. **Schmalstieg, D., & Höllerer, T. (2016). _Augmented Reality: Principles and Practice_. Addison-Wesley Professional.**
   - Kapitel zu Hardware-Komponenten und Tracking-Technologien
   - Detaillierte Erklärungen zu Displays, Sensoren und Rendering-Techniken
   - Vergleich verschiedener AR/MR-Geräte und deren technische Spezifikationen

2. **Craig, A. B. (2013). _Understanding Augmented Reality: Concepts and Applications_. Morgan Kaufmann.**
   - Technische Grundlagen von AR/MR-Hardware
   - Erklärung verschiedener Tracking-Methoden und deren Vor- und Nachteile
   - Kapitel zu Sensoren und Eingabemethoden

3. **Billinghurst, M., Clark, A., & Lee, G. (2014). _A Survey of Augmented Reality_. Now Publishers Inc.**
   - Umfassender Überblick über AR/MR-Hardware und -Technologien
   - Historische Entwicklung von Tracking-Technologien
   - Vergleich verschiedener Display-Typen und deren Anwendungsbereiche

### Wissenschaftliche Paper (ACM, IEEE)

1. **Benko, H., Ofek, E., Zheng, F., & Wilson, A. D. (2018). MRTouch: Adding Touch Input to Head-Mounted Mixed Reality. _IEEE Transactions on Visualization and Computer Graphics_, 24(4), 1653-1660.**
   - Beschreibt eine innovative Eingabemethode für Mixed Reality
   - Kombination von Touch-Input mit Head-Mounted Displays
   - Technische Details zur Implementierung und Evaluation

2. **Azuma, R., Baillot, Y., Behringer, R., Feiner, S., Julier, S., & MacIntyre, B. (2001). Recent advances in augmented reality. _IEEE Computer Graphics and Applications_, 21(6), 34-47.**
   - Klassisches Paper zu Fortschritten in der AR-Technologie
   - Überblick über Tracking-Technologien, Displays und Rendering
   - Grundlegende Konzepte, die auch für moderne MR-Systeme relevant sind

3. **Kress, B. C., & Cummings, W. J. (2017). Towards the Ultimate Mixed Reality Experience: HoloLens Display Architecture Choices. _SID Symposium Digest of Technical Papers_, 48(1), 127-131.**
   - Detaillierte Analyse der Display-Architektur der Microsoft HoloLens
   - Technische Herausforderungen und Lösungsansätze
   - Einblicke in die Entwicklung moderner MR-Headsets

4. **Grubert, J., Langlotz, T., Zollmann, S., & Regenbrecht, H. (2017). Towards Pervasive Augmented Reality: Context-Awareness in Augmented Reality. _IEEE Transactions on Visualization and Computer Graphics_, 23(6), 1706-1724.**
   - Untersuchung kontextbewusster AR-Systeme
   - Sensoren und Tracking-Technologien für Umgebungserkennung
   - Technische Anforderungen an moderne MR-Hardware

5. **Lindlbauer, D., & Wilson, A. D. (2022). Video See-Through Mixed Reality with Focus Cues. _IEEE Transactions on Visualization and Computer Graphics_, 28(5), 2052-2062.**
   - Innovative Ansätze für Video-See-Through Mixed Reality
   - Technische Details zu Fokus-Hinweisen in MR-Displays
   - Hardware- und Berechnungskomponenten für fortschrittliche MR-Systeme

## Hardware und Technologien

### Mixed Reality-Geräte

1. **Microsoft HoloLens 2**
   - Offizielle Dokumentation: https://learn.microsoft.com/en-us/hololens/
   - Technische Spezifikationen und Funktionen
   - Anwendungsbereiche und Fallstudien
   - Entwicklungsressourcen und Best Practices

2. **Meta Quest 2/3/Pro**
   - Mixed Reality-Fähigkeiten durch Passthrough-Technologie
   - Vergleich mit dedizierten MR-Headsets
   - Anwendungsfälle für Mixed Reality auf Quest-Geräten

3. **Apple Vision Pro**
   - Neueste Entwicklung im Bereich Mixed Reality
   - Innovative Tracking- und Eingabemethoden
   - Vergleich mit bestehenden MR-Lösungen

### Tracking-Technologien

1. **Inside-Out Tracking**
   - Definition und Funktionsweise: https://xinreality.com/wiki/Inside-out_tracking
   - Vorteile: Keine externen Sensoren, höhere Mobilität
   - Nachteile: Potentiell geringere Präzision, Probleme bei schlechten Lichtverhältnissen
   - Beispiele: Microsoft HoloLens, Meta Quest, moderne VR-Headsets

2. **Outside-In Tracking**
   - Definition und Funktionsweise
   - Vorteile: Höhere Präzision, stabiles Tracking
   - Nachteile: Benötigt externe Hardware, eingeschränkter Bewegungsradius
   - Beispiele: Ältere VR-Systeme, professionelle Motion-Capture-Systeme

3. **Markerbasiertes Tracking**
   - Definition und Funktionsweise
   - Anwendungsbereiche in Mixed Reality
   - Vor- und Nachteile im Vergleich zu markerlosen Systemen
   - Beispiele: ARCore, ARKit, Vuforia

4. **Hybride Tracking-Systeme**
   - Kombination verschiedener Tracking-Methoden
   - Vorteile und technische Herausforderungen
   - Aktuelle Forschung und Entwicklung

### Sensoren und Eingabemethoden

1. **Optische Sensoren**
   - Kameras für Umgebungserfassung und Tracking
   - Tiefensensoren (Time-of-Flight, strukturiertes Licht)
   - Infrarotsensoren für Hand- und Gestenerkennung

2. **Inertiale Messeinheiten (IMU)**
   - Beschleunigungssensoren, Gyroskope, Magnetometer
   - Rolle bei der Positionsbestimmung und Orientierung
   - Integration mit anderen Sensoren für präzises Tracking

3. **Gesten- und Handerkennung**
   - Technologien zur Erfassung von Handgesten
   - Implementierung in aktuellen MR-Geräten
   - Herausforderungen und Lösungsansätze

4. **Spracheingabe und Eye-Tracking**
   - Integration von Spracherkennung in MR-Systeme
   - Eye-Tracking-Technologien und deren Anwendung
   - Multimodale Eingabemethoden in Mixed Reality

### Displays und Rendering

1. **Optische See-Through-Displays**
   - Funktionsweise und technische Herausforderungen
   - Anwendung in Geräten wie HoloLens
   - Vor- und Nachteile gegenüber anderen Display-Typen

2. **Video See-Through-Displays**
   - Funktionsweise und technische Umsetzung
   - Anwendung in Geräten wie Meta Quest
   - Vor- und Nachteile gegenüber anderen Display-Typen

3. **Rendering-Techniken für Mixed Reality**
   - Spezielle Anforderungen an Rendering in MR
   - Techniken zur Integration virtueller Objekte in reale Umgebungen
   - Optimierungen für mobile MR-Geräte

## Praktische Ressourcen und Tutorials

1. **Microsoft Learn: HoloLens 2 fundamentals**
   - URL: https://learn.microsoft.com/en-us/training/paths/beginner-hololens-2-tutorials/
   - Offizielle Tutorials zur Entwicklung von Mixed Reality-Anwendungen
   - Grundlegende Konzepte und Best Practices
   - Praktische Übungen und Codebeispiele

2. **Microsoft Learn: Mixed reality feature samples and apps**
   - URL: https://learn.microsoft.com/en-us/windows/mixed-reality/develop/features-and-samples
   - Beispielanwendungen und Funktionsmuster
   - Demonstrationen verschiedener MR-Funktionen
   - Integration mit Azure-Diensten

3. **YouTube: HoloLens 2 Mixed Reality Hand Menus With Magnetism Solvers**
   - URL: https://www.youtube.com/watch?v=0T27lZxBtw0
   - Praktisches Tutorial zu Interaktionstechniken
   - Implementierung von Hand-Menüs in Mixed Reality
   - Verwendung von MRTK-Komponenten

4. **Medium: MRTK 101: Utilizing MRTK for Quest 2 Development**
   - URL: https://medium.com/@taha.m.gokdemir/mrtk-101-utilizing-mrtk-for-quest-2-development-part-1-27d91d675f83
   - Tutorial zur Verwendung des Mixed Reality Toolkit mit Meta Quest
   - Schritt-für-Schritt-Anleitung zur Einrichtung und Implementierung
   - Praktische Beispiele und Codeausschnitte

5. **Theorem: Getting started with HoloLens Mixed Reality in Engineering**
   - URL: https://www.theorem.com/theorem-xr/getting-started-with-mixed-reality
   - Leitfaden zur Verwendung von Mixed Reality in technischen Anwendungen
   - Fokus auf CAD-Daten und Engineering-Anwendungsfälle
   - Praktische Tipps für den Einstieg

## Fallstudien und Anwendungsbeispiele

1. **UnboundXR: Microsoft HoloLens 2 Use Cases & Best Practices**
   - URL: https://unboundxr.eu/blogs/microsoft-hololens-2-use-case-scenarios
   - Reale Anwendungsbeispiele der HoloLens 2
   - Erfahrungsberichte von Kunden
   - Best Practices für verschiedene Branchen

2. **CapsuleSight: Real Examples and Use Cases of Mixed Reality in Training**
   - URL: https://capsulesight.com/mixedreality/real-examples-and-use-cases-of-mixed-reality-in-training/
   - Fallstudien zum Einsatz von Mixed Reality in der Ausbildung
   - Vorteile und Herausforderungen
   - Erfolgsgeschichten und Lessons Learned

3. **YouTube: The HoloLens 2 Tour - Discover How Holograms Look In Real Life**
   - URL: https://www.youtube.com/watch?v=nSAWBcqxke4
   - Visuelle Demonstration von Hologrammen in realen Umgebungen
   - Praktische Anwendungsbeispiele
   - Einblicke in die Benutzererfahrung

## Zusammenfassung und Empfehlungen

Für die zweite Vorlesung "Mixed Reality-Hardware und -Technologien" empfehle ich folgende Kernquellen:

### Für theoretische Grundlagen:
- Schmalstieg & Höllerer (2016): Umfassendes Standardwerk mit Kapiteln zu Hardware und Tracking
- Azuma et al. (2001): Klassisches Paper zu AR-Technologien
- Kress & Cummings (2017): Detaillierte Analyse der HoloLens-Display-Architektur

### Für Tracking-Technologien:
- XinReality Wiki: Inside-Out Tracking und Markerless Inside-Out Tracking
- Pimax Blog: Vergleich von Outside-In und Inside-Out Tracking
- Grubert et al. (2017): Kontextbewusste AR-Systeme und Tracking-Technologien

### Für Sensoren und Eingabemethoden:
- Benko et al. (2018): MRTouch - Touch-Input für Mixed Reality
- Lindlbauer & Wilson (2022): Video See-Through Mixed Reality mit Fokus-Hinweisen

### Für praktische Demonstrationen:
- Microsoft Learn: HoloLens 2 fundamentals
- YouTube: HoloLens 2 Mixed Reality Hand Menus With Magnetism Solvers
- YouTube: The HoloLens 2 Tour

Diese Quellen bieten zusammen eine umfassende Grundlage für die zweite Vorlesung, die sowohl theoretische Konzepte als auch praktische Anwendungen und Demonstrationen abdeckt. Die Studierenden erhalten dadurch ein solides Verständnis der Mixed Reality-Hardware, Tracking-Technologien, Sensoren und Eingabemethoden sowie der technischen Grundlagen von Displays und Rendering.
