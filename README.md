# Sammelkarten-Depot – eigenständige App

Stand: 10.10.2026

Das ist Stephans bisheriges Sammelkarten-Depot (vorher als Claude-Artifact mit Claude-Datenbank) als eigenständige Web-App.
Aussehen, Felder, Berechnungen, Wochenpflege, Cardmarket-Filter, Abgänge (verkauft / geöffnet / gedraftet) und Export sind unverändert übernommen.

## Was sich geändert hat

- **Speicher:** Die Daten liegen lokal auf dem Gerät (IndexedDB) statt in der Claude-Datenbank. Kein Konto, kein Server, keine KI.
- **Backup importieren:** neu im Tab „Neu“ → Sicherung. Liest das bisherige JSON-Backup (`Sammelkarten-Depot JJJJ-MM-TT.json`) ein und ersetzt die Daten auf dem Gerät.
- **Export:** JSON enthält jetzt zusätzlich die Cardmarket-Filtereinstellungen. Auf dem iPhone öffnet sich das Teilen-Menü („In Dateien sichern“).
- **Offline:** Ein Service Worker hält die App auch ohne Internet bereit.
- **Installierbar:** Manifest und Icons für „Zum Home-Bildschirm“ (iPhone) und „App installieren“ (Chrome/Edge am PC).

## Dateien

| Datei | Zweck |
|---|---|
| index.html | die komplette App |
| sw.js | Offline-Cache |
| manifest.webmanifest, icon*.png, icon.svg | Installation als App |

## Installation

Die App liegt auf GitHub Pages: https://stephanclaude.github.io/TCG-depot/ Dort liegt nur der Programmcode, nie die Depotdaten.

1. iPhone: Adresse in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
2. PC: Adresse in Chrome oder Edge öffnen → „App installieren“ in der Adresszeile.
3. In der App: Neu → Sicherung → „Backup importieren“ → letztes JSON-Backup wählen.

iPhone und PC haben jeweils eigene Daten. Abgleich: auf einem Gerät exportieren, auf dem anderen importieren (z. B. über iCloud Drive).

## Später: Finanz-Dashboard

Die Positionen bleiben im bisherigen Format (`kat`, `spiel`, `gruppe`, `einstand`, `menge`, `preise{datum: wert}`, `status`).
Das Dashboard kann daraus Depotwert und Einsatz übernehmen.
