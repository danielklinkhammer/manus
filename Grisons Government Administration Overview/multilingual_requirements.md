# Analyse der Mehrsprachigkeitsanforderungen

## Mehrsprachiger Kontext des Kantons Graubünden

Der Kanton Graubünden ist offiziell dreisprachig mit den Amtssprachen:
- Deutsch (DE)
- Rätoromanisch (RM)
- Italienisch (IT)

Diese Dreisprachigkeit stellt besondere Anforderungen an die digitale Präsenz des Kantons und muss bei der Migration in ein neues CMS besonders berücksichtigt werden.

## Implementierung der Mehrsprachigkeit auf gr.ch

### Hauptwebsite (gr.ch)

Die Hauptwebsite des Kantons Graubünden bietet eine durchgängige Dreisprachigkeit mit folgenden Merkmalen:

1. **Sprachumschaltung**
   - Prominente Platzierung der Sprachauswahl in der Kopfzeile
   - Konsistente Positionierung auf allen Unterseiten
   - Vollständige Übersetzung der Navigationselemente

2. **Inhaltsparität**
   - Strukturelle Gleichheit der Website in allen drei Sprachen
   - Identische Navigationspfade unabhängig von der gewählten Sprache
   - Konsistente URL-Struktur mit Sprachkennzeichnung

3. **Visuelle Konsistenz**
   - Einheitliches Design über alle Sprachversionen
   - Gleiche Bildsprache und visuelle Elemente
   - Anpassung von Layout-Elementen an unterschiedliche Textlängen

### ePortal

Das ePortal als zentrale Dienstleistungsplattform zeigt ebenfalls eine vollständige Dreisprachigkeit:

1. **Sprachumschaltung**
   - Dropdown-Menü für Sprachauswahl (DE, RM, IT)
   - Sofortige Umschaltung ohne Verlust des Navigationskontexts
   - Spracheinstellung bleibt über die Sitzung erhalten

2. **Übersetzung der Inhalte**
   - Vollständige Übersetzung aller Textelemente
   - Angepasste Terminologie für fachspezifische Begriffe
   - Kulturelle Anpassung von Beispielen und Erklärungen

3. **Dienstleistungsangebot**
   - Identisches Dienstleistungsangebot in allen Sprachen
   - Unterschiedliche Dienstleistungen je nach Sprachversion (z.B. in Romanisch andere Dienste als in Deutsch)
   - Mehrsprachige Formulare und Interaktionselemente

### Fachwebsites der Ämter

Bei den Websites der einzelnen Ämter und Fachstellen zeigt sich ein differenzierteres Bild:

1. **Grundstruktur**
   - Konsistente Dreisprachigkeit auf oberster Ebene
   - Einheitliche Sprachumschaltung analog zur Hauptwebsite
   - Teilweise unterschiedliche Inhaltstiefe je nach Sprache

2. **Inhaltsparität**
   - Vollständige Übersetzung der Kernfunktionalitäten
   - Teilweise reduzierter Inhalt in Romanisch und Italienisch
   - Unterschiedliche Aktualität der Inhalte in verschiedenen Sprachen

3. **Spezialanwendungen**
   - Mehrsprachige Benutzeroberflächen bei zentralen Anwendungen
   - Teilweise eingeschränkte Sprachunterstützung bei Fachanwendungen
   - Unterschiedliche Implementierungsgrade der Mehrsprachigkeit

## Beobachtungen und Herausforderungen

### Stärken der aktuellen Implementierung

1. **Konsequente Grundstruktur**
   - Durchgängiges Konzept der Dreisprachigkeit
   - Technisch einheitliche Implementierung der Sprachumschaltung
   - Konsistente visuelle Gestaltung über alle Sprachen

2. **Kulturelle Anpassung**
   - Nicht nur Übersetzung, sondern kulturelle Adaption der Inhalte
   - Berücksichtigung regionaler Besonderheiten
   - Sprachspezifische Beispiele und Erklärungen

3. **Technische Integration**
   - Einheitliche URL-Struktur mit Sprachkennzeichnung
   - Konsistente Metadaten in allen Sprachen
   - Sprachübergreifende Suchfunktionalität

### Herausforderungen

1. **Unterschiedliche Inhaltstiefe**
   - Teilweise geringerer Detaillierungsgrad in Romanisch und Italienisch
   - Verzögerte Aktualisierung von übersetzten Inhalten
   - Unterschiedliche Vollständigkeit bei Dokumenten und Formularen

2. **Ressourcenintensität**
   - Hoher Übersetzungs- und Pflegeaufwand für drei Sprachen
   - Koordinationsbedarf bei Aktualisierungen
   - Unterschiedliche Fachterminologie in den drei Sprachen

3. **Technische Komplexität**
   - Verwaltung dreisprachiger Inhalte in verschiedenen Systemen
   - Unterschiedliche technische Implementierungen bei Fachanwendungen
   - Herausforderungen bei der Integration externer Dienste

4. **Nutzererfahrung**
   - Teilweise Brüche bei Sprachwechsel in komplexen Prozessen
   - Unterschiedliche Benutzerführung je nach Sprache
   - Inkonsistente Terminologie über verschiedene Ämter hinweg

## Anforderungen an das neue CMS

### Grundlegende Mehrsprachigkeitsanforderungen

1. **Vollständige Dreisprachigkeit**
   - Unterstützung aller drei Amtssprachen auf allen Ebenen
   - Gleichwertige Behandlung aller Sprachen
   - Möglichkeit zur Erweiterung um zusätzliche Sprachen (z.B. Englisch für Tourismus)

2. **Zentrale Übersetzungsverwaltung**
   - Einheitliche Verwaltung von Übersetzungen
   - Workflow für Übersetzungsprozesse
   - Versionierung von mehrsprachigen Inhalten

3. **Flexible Inhaltsstruktur**
   - Möglichkeit für unterschiedliche Inhaltsstrukturen je nach Sprache
   - Unterstützung sprachspezifischer Metadaten
   - Verknüpfung äquivalenter Inhalte über Sprachgrenzen hinweg

### Technische Anforderungen

1. **Mehrsprachiges Content-Modell**
   - Klare Trennung von Inhalt und Präsentation
   - Sprachunabhängige Strukturierung von Inhalten
   - Unterstützung sprachspezifischer Formatierungen und Layouts

2. **Übersetzungsmanagement**
   - Integrierte Übersetzungswerkzeuge oder Schnittstellen
   - Statusverfolgung von Übersetzungen
   - Benachrichtigungssystem für ausstehende Übersetzungen

3. **Mehrsprachige Metadaten**
   - Unterstützung mehrsprachiger Taxonomien
   - Sprachübergreifende Suchfunktionalität
   - Mehrsprachige SEO-Optimierung

### Prozessanforderungen

1. **Effiziente Übersetzungsworkflows**
   - Automatisierte Prozesse für Übersetzungsanfragen
   - Priorisierung von Übersetzungen nach Relevanz
   - Integration von Übersetzungsdiensten oder -tools

2. **Qualitätssicherung**
   - Prüfmechanismen für Vollständigkeit und Konsistenz
   - Sprachspezifische Rechtschreib- und Grammatikprüfung
   - Review-Prozesse für Übersetzungen

3. **Governance**
   - Klare Verantwortlichkeiten für mehrsprachige Inhalte
   - Richtlinien für Übersetzungspriorisierung
   - Standards für mehrsprachige Terminologie

## Empfehlungen für die CMS-Migration

### Technologische Empfehlungen

1. **Komponenten-basierter Ansatz**
   - Modulare Inhaltskomponenten mit Sprachvarianten
   - Wiederverwendbare Übersetzungseinheiten
   - Flexible Kombination von Komponenten je nach Sprache

2. **Zentrale Terminologiedatenbank**
   - Einheitliche Verwaltung von Fachbegriffen in allen Sprachen
   - Konsistente Verwendung von Terminologie
   - Automatische Terminologieprüfung

3. **API-basierte Integration**
   - Standardisierte Schnittstellen für mehrsprachige Inhalte
   - Sprachunabhängige Datenmodelle
   - Flexible Integration von Fachanwendungen

### Organisatorische Empfehlungen

1. **Zentrales Übersetzungsmanagement**
   - Koordinierte Übersetzungsprozesse über alle Departemente
   - Gemeinsame Ressourcennutzung für Übersetzungen
   - Einheitliche Qualitätsstandards

2. **Priorisierungskonzept**
   - Klare Kriterien für die Priorisierung von Übersetzungen
   - Differenzierte Übersetzungstiefe je nach Zielgruppe und Relevanz
   - Transparente Kommunikation des Übersetzungsstatus

3. **Schulung und Sensibilisierung**
   - Bewusstsein für Mehrsprachigkeitsanforderungen bei allen Beteiligten
   - Schulung in mehrsprachiger Inhaltserstellung
   - Sensibilisierung für kulturelle Unterschiede
