# Wartungs- und Betriebshandbuch: Interaktive Station "Solarstrom managen"

## Inhaltsverzeichnis

1. [Einführung](#1-einführung)
2. [Systemübersicht](#2-systemübersicht)
3. [Täglicher Betrieb](#3-täglicher-betrieb)
4. [Regelmäßige Wartung](#4-regelmäßige-wartung)
5. [Fehlerbehebung](#5-fehlerbehebung)
6. [Software-Updates](#6-software-updates)
7. [Sicherheitshinweise](#7-sicherheitshinweise)
8. [Ersatzteile und Verbrauchsmaterialien](#8-ersatzteile-und-verbrauchsmaterialien)
9. [Technischer Support](#9-technischer-support)
10. [Anhänge](#10-anhänge)

## 1. Einführung

### 1.1 Über dieses Handbuch

Dieses Wartungs- und Betriebshandbuch enthält alle notwendigen Informationen für den täglichen Betrieb, die regelmäßige Wartung und die Fehlerbehebung der interaktiven Station "Solarstrom managen". Es richtet sich an das Ausstellungspersonal, Techniker und Wartungspersonal.

### 1.2 Wichtige Kontaktinformationen

**Hersteller:**
Solarstrom Managen GmbH
Sonnenallee 123
12345 Solarstadt
Deutschland

**Support-Kontakt:**
- Technischer Support: support@solarstation.de
- Telefon: +49 (0)123 456789
- Support-Zeiten: Mo-Fr 9:00-17:00 Uhr
- Notfall-Hotline (24/7): +49 (0)123 456700

### 1.3 Dokumentversionen

| Version | Datum | Änderungen | Autor |
|---------|-------|------------|-------|
| 1.0 | 25.03.2025 | Erstversion | Solarstrom Managen GmbH |

## 2. Systemübersicht

### 2.1 Hauptkomponenten

Die interaktive Station "Solarstrom managen" besteht aus folgenden Hauptkomponenten:

1. **Basisgestell mit höhenverstellbarem Rahmen**
   - Trägt alle anderen Komponenten
   - Ermöglicht die Höhenanpassung für verschiedene Benutzergruppen

2. **Solarpaneel-Modul**
   - 4 monokristalline Silizium-Solarzellen
   - Lichtsensoren zur Messung der Lichtintensität
   - Verstellbarer Neigungswinkel

3. **Hausmodell**
   - 3D-Modell eines Hauses mit Solardach
   - LED-Beleuchtung zur Visualisierung der Energieflüsse
   - Miniaturversionen der Haushaltsgeräte

4. **Interaktionspult**
   - Integrierter Computer (Intel Core i5, 16 GB RAM, 512 GB SSD)
   - 32" Touchscreen-Display
   - Physische Schalter und Drehregler
   - Lautsprechersystem

5. **Beleuchtungssystem**
   - 3 LED-Taschenlampen mit Ladestation
   - Umgebungsbeleuchtung für das Hausmodell
   - Statusanzeigen durch LED-Beleuchtung

### 2.2 Softwarekomponenten

Die Station verwendet folgende Softwarekomponenten:

1. **Betriebssystem**
   - Ubuntu Linux 22.04 LTS

2. **Anwendungssoftware**
   - Solarstation Control Software v1.0
   - Sensor Interface Module v2.3
   - Visualization Engine v3.1
   - Energy Simulation Core v2.5

3. **Dienste**
   - solarstation.service: Hauptanwendung
   - sensors.service: Sensordatenerfassung
   - maintenance.service: Wartungsdienst
   - monitoring.service: Systemüberwachung

### 2.3 Technische Daten

| Parameter | Wert |
|-----------|------|
| Abmessungen (L×B×H) | 250 cm × 150 cm × 220 cm |
| Gewicht | ca. 120 kg |
| Stromversorgung | 230V AC, 50 Hz |
| Maximale Leistungsaufnahme | 800W |
| Typische Leistungsaufnahme | 350W |
| Betriebstemperatur | 15-30°C |
| Luftfeuchtigkeit | 30-70% (nicht kondensierend) |
| Schutzklasse | IP20 |

## 3. Täglicher Betrieb

### 3.1 Ein- und Ausschalten

#### 3.1.1 Einschalten der Station

1. Stellen Sie sicher, dass die Stromversorgung angeschlossen ist.
2. Drücken Sie den Hauptschalter an der rechten Seite des Interaktionspults.
3. Warten Sie, bis das System vollständig hochgefahren ist (ca. 2 Minuten).
4. Der Startbildschirm erscheint, wenn das System betriebsbereit ist.

#### 3.1.2 Ausschalten der Station

1. Drücken Sie den "Herunterfahren"-Button in der Wartungsansicht.
   - Zugang zur Wartungsansicht: Tippen Sie 5 Sekunden lang auf das Logo in der oberen linken Ecke.
   - Geben Sie das Wartungspasswort ein: "solar2025"
2. Warten Sie, bis das System vollständig heruntergefahren ist (ca. 30 Sekunden).
3. Schalten Sie den Hauptschalter aus.

#### 3.1.3 Notabschaltung

Im Notfall (Rauchentwicklung, Wasserschaden, etc.):
1. Drücken Sie den roten Not-Aus-Schalter an der Vorderseite des Interaktionspults.
2. Trennen Sie die Station von der Stromversorgung.
3. Informieren Sie umgehend den technischen Support.

### 3.2 Tägliche Überprüfungen

Führen Sie zu Beginn jedes Betriebstages folgende Überprüfungen durch:

#### 3.2.1 Visuelle Inspektion

1. Überprüfen Sie alle sichtbaren Komponenten auf Beschädigungen.
2. Stellen Sie sicher, dass alle Taschenlampen in der Ladestation sind und funktionieren.
3. Prüfen Sie, ob der Touchscreen sauber und unbeschädigt ist.
4. Kontrollieren Sie, ob alle Kabel ordnungsgemäß angeschlossen sind.

#### 3.2.2 Funktionstest

1. Starten Sie die Station wie in Abschnitt 3.1.1 beschrieben.
2. Führen Sie den Kurztest durch:
   - Tippen Sie 5 Sekunden lang auf das Logo in der oberen linken Ecke.
   - Geben Sie das Wartungspasswort ein: "solar2025"
   - Wählen Sie "Kurztest durchführen"
3. Überprüfen Sie, ob alle Taschenlampen funktionieren:
   - Nehmen Sie jede Taschenlampe aus der Ladestation.
   - Schalten Sie sie ein und richten Sie sie auf die Solarzellen.
   - Überprüfen Sie, ob die Anzeige auf dem Bildschirm reagiert.
4. Testen Sie die Touchscreen-Funktionalität:
   - Berühren Sie verschiedene Bereiche des Bildschirms.
   - Stellen Sie sicher, dass alle Berührungen korrekt erkannt werden.

#### 3.2.3 Reinigung

1. Reinigen Sie den Touchscreen mit dem mitgelieferten Mikrofasertuch.
   - Verwenden Sie bei Bedarf den speziellen Bildschirmreiniger (sparsam auftragen).
   - Sprühen Sie niemals direkt auf den Bildschirm.
2. Wischen Sie alle sichtbaren Oberflächen mit einem leicht feuchten Tuch ab.
3. Reinigen Sie die Solarzellen mit dem speziellen Solarzellen-Reinigungstuch.
4. Überprüfen Sie die Taschenlampen auf Fingerabdrücke und reinigen Sie sie bei Bedarf.

### 3.3 Benutzerbetreuung

#### 3.3.1 Einweisung der Besucher

Für eine optimale Benutzererfahrung sollten Besucher wie folgt eingewiesen werden:

1. Kurze Erklärung des Grundprinzips:
   - "Diese Station zeigt, wie Solarstrom erzeugt und im Haushalt genutzt werden kann."
   - "Sie können mit den Taschenlampen die Sonne simulieren und sehen, wie viel Strom erzeugt wird."

2. Demonstration der Grundfunktionen:
   - Zeigen Sie, wie die Taschenlampen auf die Solarzellen gerichtet werden.
   - Erklären Sie, wie Geräte über den Touchscreen ein- und ausgeschaltet werden können.
   - Demonstrieren Sie die verschiedenen Energiemanagement-Optionen.

3. Hinweise zur korrekten Nutzung:
   - "Bitte die Taschenlampen nach Gebrauch zurück in die Ladestation stellen."
   - "Der Touchscreen reagiert auf leichte Berührungen, kein starker Druck nötig."
   - "Bei Fragen oder Problemen wenden Sie sich bitte an das Ausstellungspersonal."

#### 3.3.2 Häufige Besucherfragen

Vorbereitung auf häufig gestellte Fragen:

1. **Wie viel Strom erzeugt eine echte Solaranlage?**
   - "Eine typische Hausanlage mit 10 kWp kann jährlich etwa 9.000-10.000 kWh Strom erzeugen, was dem Bedarf eines 3-4 Personen-Haushalts entspricht."

2. **Wie funktionieren Solarzellen?**
   - "Solarzellen wandeln Lichtenergie direkt in elektrische Energie um. Wenn Licht auf die Solarzelle trifft, werden Elektronen freigesetzt, die als elektrischer Strom fließen können."

3. **Was passiert bei schlechtem Wetter oder nachts?**
   - "Bei bewölktem Himmel erzeugen Solaranlagen weniger Strom. Nachts wird kein Strom erzeugt. Daher sind Speicherlösungen oder die Kombination mit anderen Energiequellen wichtig."

4. **Lohnt sich eine Solaranlage finanziell?**
   - "Ja, in den meisten Fällen. Die Amortisationszeit liegt typischerweise bei 8-12 Jahren, während die Lebensdauer 25-30 Jahre beträgt."

#### 3.3.3 Umgang mit Störungen während des Betriebs

Bei Störungen während des Betriebs:

1. Bitten Sie die Besucher höflich, kurz zurückzutreten.
2. Führen Sie einen Neustart der Anwendung durch:
   - Tippen Sie 5 Sekunden lang auf das Logo in der oberen linken Ecke.
   - Geben Sie das Wartungspasswort ein: "solar2025"
   - Wählen Sie "Anwendung neu starten"
3. Wenn das Problem weiterhin besteht, führen Sie einen Systemneustart durch:
   - Wählen Sie im Wartungsmenü "System neu starten"
4. Bei anhaltenden Problemen kontaktieren Sie den technischen Support.

### 3.4 Tagesabschluss

Am Ende des Betriebstages:

1. Führen Sie eine kurze visuelle Inspektion durch:
   - Überprüfen Sie, ob alle Taschenlampen in der Ladestation sind.
   - Kontrollieren Sie, ob der Touchscreen unbeschädigt ist.
   - Stellen Sie sicher, dass keine Gegenstände auf der Station liegen.

2. Reinigen Sie bei Bedarf den Touchscreen und andere Oberflächen.

3. Fahren Sie das System herunter:
   - Tippen Sie 5 Sekunden lang auf das Logo in der oberen linken Ecke.
   - Geben Sie das Wartungspasswort ein: "solar2025"
   - Wählen Sie "Herunterfahren"
   - Warten Sie, bis das System vollständig heruntergefahren ist.

4. Schalten Sie den Hauptschalter aus.

5. Decken Sie die Station bei Bedarf mit der mitgelieferten Staubschutzhülle ab.

## 4. Regelmäßige Wartung

### 4.1 Wartungsplan

| Intervall | Maßnahmen | Durchzuführen von |
|-----------|-----------|-------------------|
| Täglich | Visuelle Inspektion, Funktionstest, Reinigung | Ausstellungspersonal |
| Wöchentlich | Gründliche Reinigung, Softwareüberprüfung | Ausstellungspersonal |
| Monatlich | Systemdiagnose, Kalibrierungscheck, Sicherheitsüberprüfung | Techniker |
| Vierteljährlich | Vollständige Systemwartung, Hardwareüberprüfung | Servicetechniker |
| Jährlich | Komplette Überholung, Sicherheitsprüfung, Softwareupdate | Servicetechniker |

### 4.2 Wöchentliche Wartung

Führen Sie zusätzlich zu den täglichen Überprüfungen folgende Maßnahmen durch:

#### 4.2.1 Gründliche Reinigung

1. Schalten Sie die Station aus und trennen Sie sie von der Stromversorgung.
2. Reinigen Sie alle Oberflächen gründlich mit den mitgelieferten Reinigungsmitteln:
   - Touchscreen mit Spezialreiniger und Mikrofasertuch
   - Solarzellen mit Solarzellen-Reinigungstuch
   - Gehäuse mit leicht feuchtem Allzweckreinigungstuch
   - Taschenlampen mit Desinfektionstüchern
3. Entfernen Sie Staub aus den Lüftungsschlitzen mit einem weichen Pinsel oder Druckluftspray.
4. Überprüfen Sie alle Kabelverbindungen und reinigen Sie die Anschlüsse bei Bedarf.

#### 4.2.2 Softwareüberprüfung

1. Starten Sie die Station und melden Sie sich im Wartungsmenü an.
2. Führen Sie den Systemdiagnosetest durch:
   - Wählen Sie "Systemdiagnose" im Wartungsmenü.
   - Warten Sie, bis der Test abgeschlossen ist (ca. 5 Minuten).
3. Überprüfen Sie die Protokolldateien auf Fehler:
   - Wählen Sie "Protokolle anzeigen" im Wartungsmenü.
   - Achten Sie auf Einträge mit "ERROR" oder "WARNING".
4. Führen Sie bei Bedarf eine Datenbankreinigung durch:
   - Wählen Sie "Datenbank optimieren" im Wartungsmenü.

#### 4.2.3 Akku-Überprüfung

1. Überprüfen Sie den Ladezustand der Taschenlampen-Akkus:
   - Nehmen Sie jede Taschenlampe aus der Ladestation.
   - Schalten Sie sie ein und prüfen Sie die Helligkeit.
   - Stellen Sie sicher, dass sie mindestens 30 Minuten lang funktionieren.
2. Reinigen Sie die Ladekontakte der Taschenlampen und der Ladestation mit einem Wattestäbchen und Isopropylalkohol.

### 4.3 Monatliche Wartung

Die monatliche Wartung sollte von einem geschulten Techniker durchgeführt werden:

#### 4.3.1 Systemdiagnose

1. Führen Sie eine vollständige Systemdiagnose durch:
   ```
   sudo /opt/solarstation/bin/full_diagnostics.sh
   ```
2. Analysieren Sie die Ergebnisse und beheben Sie identifizierte Probleme.
3. Überprüfen Sie den Festplattenspeicher und räumen Sie bei Bedarf auf:
   ```
   sudo /opt/solarstation/bin/cleanup_storage.sh
   ```

#### 4.3.2 Kalibrierungsüberprüfung

1. Überprüfen Sie die Kalibrierung der Lichtsensoren:
   ```
   sudo /opt/solarstation/bin/check_calibration.sh
   ```
2. Führen Sie bei Bedarf eine Neukalibrierung durch:
   ```
   sudo /opt/solarstation/bin/calibrate_sensors.sh
   ```
3. Überprüfen Sie die Touchscreen-Kalibrierung und kalibrieren Sie bei Bedarf neu.

#### 4.3.3 Sicherheitsüberprüfung

1. Überprüfen Sie alle elektrischen Verbindungen auf Beschädigungen.
2. Kontrollieren Sie die Erdung mit einem Multimeter.
3. Testen Sie den Not-Aus-Schalter auf korrekte Funktion.
4. Überprüfen Sie die Stabilität des Gestells und ziehen Sie lockere Schrauben fest.

### 4.4 Vierteljährliche Wartung

Die vierteljährliche Wartung muss von einem autorisierten Servicetechniker durchgeführt werden:

#### 4.4.1 Hardwareüberprüfung

1. Öffnen Sie das Gehäuse und überprüfen Sie alle internen Komponenten.
2. Reinigen Sie die Lüfter und Kühlkörper des Computers.
3. Überprüfen Sie alle Kabelverbindungen und Stecker.
4. Kontrollieren Sie die Funktionalität aller Sensoren und Aktoren.
5. Testen Sie die Höhenverstellung des Pults auf reibungslose Funktion.

#### 4.4.2 Softwareoptimierung

1. Aktualisieren Sie die Systemsoftware auf die neueste Version.
2. Optimieren Sie die Datenbank und bereinigen Sie alte Protokolldateien.
3. Überprüfen Sie die Systemleistung und optimieren Sie bei Bedarf.
4. Sichern Sie alle Konfigurationsdaten und erstellen Sie ein Systemabbild.

#### 4.4.3 Verschleißteilkontrolle

1. Überprüfen Sie die Taschenlampen-Akkus auf Kapazitätsverlust.
2. Kontrollieren Sie die Schalter und Taster auf Verschleißerscheinungen.
3. Überprüfen Sie die Touchscreen-Oberfläche auf Abnutzung.
4. Tauschen Sie bei Bedarf Verschleißteile gemäß der Ersatzteilliste aus.

### 4.5 Jährliche Wartung

Die jährliche Wartung umfasst eine vollständige Überholung der Station:

#### 4.5.1 Komplette Überholung

1. Demontieren Sie alle Hauptkomponenten und überprüfen Sie sie einzeln.
2. Reinigen Sie alle Komponenten gründlich.
3. Ersetzen Sie alle in der Wartungsliste aufgeführten Verschleißteile.
4. Überprüfen Sie die Verkabelung und ersetzen Sie beschädigte Kabel.
5. Montieren Sie alle Komponenten wieder und führen Sie eine vollständige Funktionsprüfung durch.

#### 4.5.2 Elektrische Sicherheitsprüfung

1. Führen Sie eine vollständige elektrische Sicherheitsprüfung gemäß den geltenden Vorschriften durch.
2. Messen Sie den Isolationswiderstand aller elektrischen Komponenten.
3. Überprüfen Sie den Schutzleiteranschluss und den Erdungswiderstand.
4. Dokumentieren Sie die Ergebnisse im Wartungsprotokoll.

#### 4.5.3 Softwareaktualisierung

1. Installieren Sie die neueste Version der Systemsoftware.
2. Aktualisieren Sie alle Treiber und Bibliotheken.
3. Führen Sie eine vollständige Systemkonfiguration durch.
4. Testen Sie alle Funktionen nach dem Update.

## 5. Fehlerbehebung

### 5.1 Fehlercodes und ihre Bedeutung

| Fehlercode | Beschreibung | Mögliche Ursache | Lösungsansatz |
|------------|--------------|------------------|---------------|
| E001 | Systemstart fehlgeschlagen | Betriebssystemfehler | System neu starten, bei wiederholtem Auftreten Support kontaktieren |
| E002 | Touchscreen nicht erkannt | Kabelverbindung unterbrochen | Kabelverbindungen überprüfen, Treiber neu installieren |
| E003 | Lichtsensor-Fehler | Sensor defekt oder falsch kalibriert | Sensorkalibrierung durchführen, ggf. Sensor ersetzen |
| E004 | Kommunikationsfehler | Interne Netzwerkprobleme | Netzwerkverbindungen überprüfen, Dienste neu starten |
| E005 | Datenbank-Fehler | Beschädigte Datenbankdateien | Datenbank reparieren oder aus Backup wiederherstellen |
| E006 | Speichermangel | Zu wenig freier Festplattenspeicher | Alte Protokolldateien löschen, Speicher freigeben |
| E007 | Überhitzung | Lüftungsproblem oder hohe Umgebungstemperatur | Lüftungsschlitze reinigen, Umgebungstemperatur senken |
| E008 | Stromversorgungsproblem | Spannungsschwankungen oder defektes Netzteil | Stromversorgung überprüfen, ggf. Netzteil ersetzen |

### 5.2 Häufige Probleme und Lösungen

#### 5.2.1 Touchscreen reagiert nicht oder ungenau

**Symptome:**
- Berührungen werden nicht oder an falscher Stelle erkannt
- Verzögerte Reaktion auf Berührungen
- Geisterberührungen (Reaktionen ohne Berührung)

**Lösungen:**
1. Reinigen Sie den Touchscreen mit dem speziellen Reinigungstuch.
2. Führen Sie eine Touchscreen-Kalibrierung durch:
   ```
   sudo /opt/solarstation/bin/calibrate_touch.sh
   ```
3. Starten Sie den Touchscreen-Treiber neu:
   ```
   sudo systemctl restart touchscreen.service
   ```
4. Überprüfen Sie die Kabelverbindung zwischen Touchscreen und Computer.
5. Bei anhaltenden Problemen: Tauschen Sie den Touchscreen-Controller aus.

#### 5.2.2 Lichtsensoren zeigen falsche Werte an

**Symptome:**
- Unrealistische Leistungswerte bei Beleuchtung der Solarzellen
- Keine Reaktion auf Lichtveränderungen
- Stark schwankende Werte bei konstanter Beleuchtung

**Lösungen:**
1. Reinigen Sie die Lichtsensoren und Solarzellen.
2. Führen Sie eine Sensorkalibrierung durch:
   ```
   sudo /opt/solarstation/bin/calibrate_sensors.sh
   ```
3. Überprüfen Sie die Kabelverbindungen der Sensoren.
4. Testen Sie die Sensoren einzeln mit dem Diagnose-Tool:
   ```
   sudo /opt/solarstation/bin/test_sensors.sh
   ```
5. Ersetzen Sie defekte Sensoren gemäß der Anleitung im Anhang.

#### 5.2.3 System startet nicht oder stürzt ab

**Symptome:**
- Schwarzer Bildschirm beim Einschalten
- System friert während des Betriebs ein
- Wiederholte Neustarts ohne Benutzereingriff

**Lösungen:**
1. Überprüfen Sie die Stromversorgung und alle Kabelverbindungen.
2. Starten Sie das System im abgesicherten Modus:
   - Halten Sie während des Starts die Taste F8 gedrückt.
   - Wählen Sie "Abgesicherter Modus" aus dem Menü.
3. Überprüfen Sie die Systemprotokolle:
   ```
   sudo journalctl -b -1
   ```
4. Führen Sie eine Systemreparatur durch:
   ```
   sudo /opt/solarstation/bin/repair_system.sh
   ```
5. Bei anhaltenden Problemen: Stellen Sie das System aus dem letzten Backup wieder her.

#### 5.2.4 Taschenlampen funktionieren nicht

**Symptome:**
- Taschenlampe leuchtet nicht oder nur schwach
- Taschenlampe schaltet sich selbst aus
- Ladestation zeigt keine Ladefunktion an

**Lösungen:**
1. Überprüfen Sie, ob die Taschenlampe eingeschaltet ist (Schalter an der Unterseite).
2. Reinigen Sie die Ladekontakte der Taschenlampe und der Ladestation.
3. Tauschen Sie den Akku der Taschenlampe aus:
   - Öffnen Sie das Batteriefach an der Unterseite.
   - Ersetzen Sie den Akku durch einen neuen (Typ: 18650 Li-Ion, 3,7V, 2600mAh).
4. Überprüfen Sie die Stromversorgung der Ladestation.
5. Ersetzen Sie bei Bedarf die komplette Taschenlampe.

### 5.3 Erweiterte Diagnose

Für komplexere Probleme stehen folgende Diagnosewerkzeuge zur Verfügung:

#### 5.3.1 Systemdiagnose

Führen Sie eine vollständige Systemdiagnose durch:
```
sudo /opt/solarstation/bin/system_diagnostics.sh
```

Dieser Befehl führt folgende Tests durch:
- Überprüfung aller Hardwarekomponenten
- Test aller Sensoren und Aktoren
- Überprüfung der Systemdienste
- Analyse der Systemleistung
- Überprüfung der Netzwerkverbindung

Die Ergebnisse werden in der Datei `/var/log/solarstation/diagnostics.log` gespeichert.

#### 5.3.2 Hardwaretest

Testen Sie einzelne Hardwarekomponenten:
```
sudo /opt/solarstation/bin/hardware_test.sh [komponente]
```

Verfügbare Komponenten:
- `touchscreen`: Testet den Touchscreen
- `sensors`: Testet alle Lichtsensoren
- `leds`: Testet alle LED-Beleuchtungselemente
- `audio`: Testet das Audiosystem
- `network`: Testet die Netzwerkverbindung
- `all`: Testet alle Komponenten nacheinander

#### 5.3.3 Protokollanalyse

Analysieren Sie die Systemprotokolle auf Fehler:
```
sudo /opt/solarstation/bin/analyze_logs.sh
```

Dieses Tool durchsucht alle relevanten Protokolldateien nach Fehlern und Warnungen und erstellt einen zusammenfassenden Bericht.

## 6. Software-Updates

### 6.1 Update-Verfahren

Die Software der Station sollte regelmäßig aktualisiert werden, um von Verbesserungen und Fehlerbehebungen zu profitieren:

#### 6.1.1 Automatische Updates

Die Station ist für automatische Updates konfiguriert, die nachts durchgeführt werden:

1. Die Station prüft jede Nacht um 3:00 Uhr auf verfügbare Updates.
2. Wenn Updates verfügbar sind, werden sie automatisch heruntergeladen und installiert.
3. Nach der Installation wird das System neu gestartet.
4. Der Update-Status wird im Systemprotokoll dokumentiert.

#### 6.1.2 Manuelle Updates

Um ein manuelles Update durchzuführen:

1. Melden Sie sich im Wartungsmenü an:
   - Tippen Sie 5 Sekunden lang auf das Logo in der oberen linken Ecke.
   - Geben Sie das Wartungspasswort ein: "solar2025"
2. Wählen Sie "Software-Update" aus dem Menü.
3. Wählen Sie "Jetzt nach Updates suchen".
4. Wenn Updates verfügbar sind, wählen Sie "Updates installieren".
5. Warten Sie, bis der Update-Prozess abgeschlossen ist und das System neu gestartet wurde.

#### 6.1.3 Offline-Updates

Wenn die Station keinen Internetzugang hat, können Updates über einen USB-Stick installiert werden:

1. Laden Sie das Update-Paket von der Support-Website herunter.
2. Kopieren Sie die Datei auf einen USB-Stick.
3. Stecken Sie den USB-Stick in einen USB-Anschluss der Station.
4. Melden Sie sich im Wartungsmenü an.
5. Wählen Sie "Software-Update" > "Update von USB-Stick installieren".
6. Folgen Sie den Anweisungen auf dem Bildschirm.

### 6.2 Update-Überprüfung

Nach jedem Update sollten Sie folgende Überprüfungen durchführen:

1. Starten Sie die Station neu und überprüfen Sie, ob sie normal hochfährt.
2. Führen Sie den Systemdiagnosetest durch:
   ```
   sudo /opt/solarstation/bin/system_diagnostics.sh
   ```
3. Testen Sie alle Hauptfunktionen der Station:
   - Touchscreen-Funktionalität
   - Lichtsensoren und Solarzellen
   - Taschenlampen und Interaktion
   - Audioausgabe
4. Überprüfen Sie die Update-Protokolle:
   ```
   sudo cat /var/log/solarstation/update.log
   ```

### 6.3 Rollback bei Problemen

Wenn nach einem Update Probleme auftreten:

1. Melden Sie sich im Wartungsmenü an.
2. Wählen Sie "Software-Update" > "Zur vorherigen Version zurückkehren".
3. Bestätigen Sie den Rollback-Vorgang.
4. Warten Sie, bis der Prozess abgeschlossen ist und das System neu gestartet wurde.
5. Melden Sie das Problem dem technischen Support.

## 7. Sicherheitshinweise

### 7.1 Elektrische Sicherheit

- Trennen Sie die Station immer von der Stromversorgung, bevor Sie Wartungsarbeiten durchführen.
- Öffnen Sie niemals das Gehäuse, wenn die Station an die Stromversorgung angeschlossen ist.
- Verwenden Sie nur die mitgelieferten Netzteile und Kabel.
- Überprüfen Sie regelmäßig alle Kabel auf Beschädigungen.
- Halten Sie Flüssigkeiten von der Station fern.
- Bei Rauchentwicklung oder ungewöhnlichen Gerüchen: Sofort vom Stromnetz trennen und Support kontaktieren.

### 7.2 Mechanische Sicherheit

- Stellen Sie sicher, dass die Station stabil steht und nicht kippen kann.
- Belasten Sie das Interaktionspult nicht mit mehr als 10 kg.
- Achten Sie darauf, dass keine Gegenstände auf die Station fallen können.
- Sichern Sie alle beweglichen Teile vor dem Transport.
- Tragen Sie Schutzhandschuhe bei der Handhabung scharfkantiger Komponenten.

### 7.3 Datensicherheit

- Ändern Sie regelmäßig das Wartungspasswort:
  ```
  sudo /opt/solarstation/bin/change_password.sh
  ```
- Sichern Sie regelmäßig die Konfigurationsdaten:
  ```
  sudo /opt/solarstation/bin/backup_config.sh
  ```
- Beschränken Sie den physischen Zugang zu den USB-Anschlüssen.
- Aktivieren Sie die Firewall, wenn die Station mit dem Internet verbunden ist:
  ```
  sudo /opt/solarstation/bin/enable_firewall.sh
  ```
- Löschen Sie sensible Daten vor der Außerbetriebnahme der Station:
  ```
  sudo /opt/solarstation/bin/secure_wipe.sh
  ```

## 8. Ersatzteile und Verbrauchsmaterialien

### 8.1 Ersatzteilliste

| Artikelnummer | Beschreibung | Empfohlener Austauschzyklus | Menge pro Station |
|---------------|--------------|------------------------------|-------------------|
| ST-LS-001 | Lichtsensor | Bei Defekt | 4 |
| ST-TL-002 | LED-Taschenlampe | 2 Jahre | 3 |
| ST-BA-003 | Akku für Taschenlampe (18650 Li-Ion) | 1 Jahr | 3 |
| ST-TS-004 | Touchscreen-Schutzfolie | 6 Monate | 1 |
| ST-SW-005 | Kippschalter | Bei Defekt | 8 |
| ST-DR-006 | Drehregler | Bei Defekt | 3 |
| ST-LS-007 | Lautsprecher | Bei Defekt | 2 |
| ST-FN-008 | Lüfter für Computer | 2 Jahre | 2 |
| ST-PS-009 | Netzteil (230V, 800W) | 3 Jahre | 1 |
| ST-CB-010 | Hauptplatine | Bei Defekt | 1 |

### 8.2 Verbrauchsmaterialien

| Artikelnummer | Beschreibung | Empfohlener Nachkaufzyklus |
|---------------|--------------|----------------------------|
| ST-CL-101 | Touchscreen-Reinigungstücher (100 Stück) | 3 Monate |
| ST-CL-102 | Solarzellen-Reinigungstuch (10 Stück) | 6 Monate |
| ST-CL-103 | Desinfektionstücher für Taschenlampen (200 Stück) | 1 Monat |
| ST-CL-104 | Mikrofasertücher (5 Stück) | 6 Monate |
| ST-CL-105 | Bildschirmreiniger-Spray (250 ml) | 6 Monate |
| ST-CL-106 | Druckluftspray (400 ml) | 6 Monate |
| ST-CL-107 | Isopropylalkohol (100 ml) | 6 Monate |
| ST-CL-108 | Wattestäbchen (100 Stück) | 6 Monate |

### 8.3 Bestellung von Ersatzteilen

Ersatzteile und Verbrauchsmaterialien können auf folgende Weise bestellt werden:

1. **Online-Shop**: https://shop.solarstation.de
   - Geben Sie die Artikelnummer oder Stationsseriennummer ein.
   - Die Seriennummer finden Sie auf dem Typenschild an der Rückseite der Station.

2. **E-Mail**: ersatzteile@solarstation.de
   - Geben Sie die Artikelnummer, Menge und Stationsseriennummer an.
   - Fügen Sie Ihre Kontakt- und Rechnungsinformationen bei.

3. **Telefon**: +49 (0)123 456789
   - Halten Sie die Artikelnummer und Stationsseriennummer bereit.
   - Bestellungen werden werktags von 9:00-17:00 Uhr entgegengenommen.

Die Lieferzeit beträgt in der Regel 2-5 Werktage innerhalb Deutschlands.

## 9. Technischer Support

### 9.1 Support-Kontakt

Bei technischen Problemen oder Fragen wenden Sie sich an:

**Technischer Support:**
- E-Mail: support@solarstation.de
- Telefon: +49 (0)123 456789
- Support-Zeiten: Mo-Fr 9:00-17:00 Uhr
- Notfall-Hotline (24/7): +49 (0)123 456700

### 9.2 Remote-Support

Für komplexe Probleme bieten wir Remote-Support an:

1. Stellen Sie sicher, dass die Station mit dem Internet verbunden ist.
2. Melden Sie sich im Wartungsmenü an.
3. Wählen Sie "Remote-Support aktivieren".
4. Teilen Sie dem Support-Mitarbeiter die angezeigte Verbindungs-ID mit.
5. Der Support-Mitarbeiter kann nun eine sichere Verbindung zur Station herstellen.
6. Nach Abschluss des Supports wird die Verbindung automatisch getrennt.

### 9.3 Wartungsvertrag

Wir empfehlen den Abschluss eines Wartungsvertrags, der folgende Leistungen umfasst:

- Regelmäßige Wartung durch zertifizierte Techniker
- Vorrangige Behandlung von Support-Anfragen
- Kostenlose Ersatzteile (ausgenommen Verbrauchsmaterialien)
- Garantieverlängerung auf 5 Jahre
- Jährliches Software-Update mit neuen Funktionen

Für weitere Informationen kontaktieren Sie bitte:
- E-Mail: vertrieb@solarstation.de
- Telefon: +49 (0)123 456788

## 10. Anhänge

### 10.1 Technische Zeichnungen

Die folgenden technischen Zeichnungen sind im Anhang enthalten:

- Anhang A: Gesamtansicht der Station
- Anhang B: Explosionszeichnung des Interaktionspults
- Anhang C: Schaltplan der elektrischen Verbindungen
- Anhang D: Anschlussplan der Sensoren
- Anhang E: Detailzeichnung des Solarpaneel-Moduls

### 10.2 Checklisten

Die folgenden Checklisten sind im Anhang enthalten:

- Anhang F: Tägliche Überprüfungscheckliste
- Anhang G: Wöchentliche Wartungscheckliste
- Anhang H: Monatliche Wartungscheckliste
- Anhang I: Vierteljährliche Wartungscheckliste
- Anhang J: Jährliche Wartungscheckliste

### 10.3 Fehlerbehebungsleitfäden

Detaillierte Fehlerbehebungsleitfäden finden Sie in:

- Anhang K: Fehlerbehebung Touchscreen
- Anhang L: Fehlerbehebung Lichtsensoren
- Anhang M: Fehlerbehebung Softwareprobleme
- Anhang N: Fehlerbehebung Netzwerkprobleme

### 10.4 Softwarekonfiguration

Detaillierte Informationen zur Softwarekonfiguration finden Sie in:

- Anhang O: Konfigurationsparameter und ihre Bedeutung
- Anhang P: Anpassung der Benutzeroberfläche
- Anhang Q: Einrichtung der Netzwerkverbindung
- Anhang R: Sicherung und Wiederherstellung
