# Finanzen – privates Finanz-Dashboard der Familie

Stand: 12.10.2026

Eine eigenständige Web-App (PWA) für iPhone und PC. Alle Daten liegen nur auf dem Gerät (IndexedDB). Kein Konto, kein Server, keine KI. Hier im Repository liegt nur der Programmcode, nie Daten.

## Aufbau in drei Ebenen

1. **Dashboard:** zwei Verläufe, **Vermögen** (Summe aller Vermögensbausteine) und **Laufende Kosten** (Summe pro Monat). Darunter Hinweise, z. B. bald fällige Kündigungstermine.
2. **Bereich:** alle Bausteine eines Bereichs mit Wert, Anteil und gemeinsamem Verlauf, z. B. ETF-Depot, Konten, Altersvorsorge oder Versicherungen, Abos, Handy.
3. **Baustein:** die einzelnen Positionen, z. B. jede ETF-Position oder jede Versicherung.

Jeder Baustein entsteht aus einer **Vorlage**. Eine Vorlage gehört zu einem Bereich und weiß, was eine Position an einem Stichtag wert ist bzw. kostet. Daraus rechnet die App alle Summen und Verläufe nach oben. Neue Tracker werden als weitere Vorlage eingehängt (`VORLAGEN` in `index.html`).

Vorhandene Vorlagen:

| Vorlage | Bereich | Für |
|---|---|---|
| Stand-Verlauf | Vermögen | Konten, Depots, Vorsorge: ab und zu den Stand eintragen |
| Kostenliste | Laufende Kosten | Kredite, Versicherungen, Abos, Lebensmittel, Feste … mit Betrag, Rhythmus (monatlich bis jährlich oder einmalig), Fälligkeit, Ende, Kündigungstermin |

**Monatsplanung (Laufende Kosten):** Die App rechnet für die nächsten 12 Monate aus, was in jedem Monat tatsächlich fällig ist, z. B. die Jahresrate im Dezember. Teure Monate sind orange markiert und erscheinen als Hinweis auf dem Dashboard. Tippen auf einen Monat zeigt jede Zahlung; Beträge lassen sich nur für diesen Monat ändern (z. B. Lebensmittel im Dezember 900 statt 650 €), und einmalige Ausgaben lassen sich ergänzen. Die Kennzahl „Ø/Monat“ ist der Schnitt dieser 12 Monate.

Weitere Funktionen: Familienmitglieder (voreingestellt: Stephan, Vicky, Kids) mit Filter „wem gehört's“, Posten zwischen Bausteinen verschieben, Zeitraum 1 J / 3 J / Max, Gesamt-Backup als JSON (Export/Import), Beispieldaten zum Ausprobieren.

## Dateien

| Datei | Zweck |
|---|---|
| index.html | das Dashboard (komplette App) |
| sw.js | Offline-Cache |
| manifest.webmanifest, icon*.png, icon.svg | Installation als App |
| tcg/ | das Sammelkarten-Depot, unverändert; wird als Baustein unter Vermögen eingebunden |

## Installation

Die App liegt auf GitHub Pages: https://stephanclaude.github.io/Finanzen/ (das Sammelkarten-Depot vorerst unter …/Finanzen/tcg/).

1. iPhone: Adresse in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
2. PC: Adresse in Chrome oder Edge öffnen → „App installieren“ in der Adresszeile.

iPhone und PC haben jeweils eigene Daten. Abgleich: Einstellungen → Backup exportieren, auf dem anderen Gerät importieren (z. B. über iCloud Drive).
