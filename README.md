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
| Kurs × Stück | Vermögen | ETFs, Aktien, Münzen: Stückzahl, Einstand und Kurs, Link zur Kursseite, „Kurse aktualisieren“ für alle Positionen auf einmal (gleiche Kennung = gleicher Kurs) |
| Immobilie & Kredite | Vermögen | Wert der Immobilie minus Restschuld der Kredite; die Restschuld wird aus Zinssatz und Rate Monat für Monat weitergerechnet |
| Sammelkarten-Depot | Vermögen | erscheint automatisch als Baustein „Sammelkarten“, sobald das Depot unter tcg/ Positionen hat; Wert, Einsatz und Verlauf werden aus dessen Daten gelesen, gepflegt wird dort |
| Kostenliste | Laufende Kosten | Kredite, Versicherungen, Abos, Lebensmittel, Feste … mit Betrag, Rhythmus (monatlich bis jährlich oder einmalig), Fälligkeit, Ende, Kündigungstermin |

**Monatsplanung (Laufende Kosten):** Die App rechnet für die nächsten 12 Monate aus, was in jedem Monat tatsächlich fällig ist, z. B. die Jahresrate im Dezember. Teure Monate sind orange markiert und erscheinen als Hinweis auf dem Dashboard. Tippen auf einen Monat zeigt jede Zahlung; Beträge lassen sich nur für diesen Monat ändern (z. B. Lebensmittel im Dezember 900 statt 650 €), und einmalige Ausgaben lassen sich ergänzen. Die Kennzahl „Ø/Monat“ ist der Schnitt dieser 12 Monate.

Unter **Vermögen** zeigt eine Torte „Wo liegt wie viel“ mit Betrag und Anteil je Baustein (antippen zeigt den Wert, die Legende führt zum Baustein). Oben links führt ein Zurück-Knopf immer eine Ebene hinauf, auch aus dem Sammelkarten-Depot zurück ins Dashboard.

Bei leeren Laufenden Kosten legt „Unsere Kostenbausteine anlegen“ Wohnen (dunkelgrün), Haushalt (grün), Gesundheit (hellgrün), Investment & Finanzen (braungrün), Auto (orange) und Freizeit (magenta) an. Jeder Baustein kann unter „Bearbeiten“ eine eigene Farbe bekommen; die Farbe gilt in der Torte, in den Anteilsbalken und in der gestapelten Monatsplanung.

**Vergleich mit dem Vorjahr (Laufende Kosten → „Vergleich mit dem Vorjahr“):** Jahr wählen, dann steht jeder Monat neben dem Vorjahresmonat, dazu Ø pro Monat und Summe (im laufenden Jahr bis zum aktuellen Monat, damit es vergleichbar bleibt) gesamt und je Baustein. Vergangene Monate rechnet die App aus den Posten (Betrag, Rhythmus, Fälligkeit) und den für den Monat eingetragenen tatsächlichen Beträgen; fixe Kosten brauchen also keine Eingabe, schwankende (z. B. Lebensmittel) trägt man im Monat ein. Eine Tabelle mit den Spalten Monat; Baustein; Posten; Betrag (aus Excel kopiert oder als CSV) lässt sich einspielen, fehlende Posten werden angelegt.

Bei leerem Vermögen legt „Unsere Bausteine anlegen“ Sparkonto, ETF-/Wertpapierdepot, Altersvorsorge, Edelmetalle, Investitionen am/im Haus und Eigentumshaus an.

Weitere Funktionen: Familienmitglieder (voreingestellt: Stephan, Vicky, Kids) mit Filter „wem gehört's“, Posten zwischen Bausteinen verschieben, Zeitraum 1 J / 3 J / Max, Gesamt-Backup als JSON inklusive Sammelkarten-Depot (Export/Import; alte Depot-Backups werden ebenfalls angenommen), Beispieldaten zum Ausprobieren.

## Dateien

| Datei | Zweck |
|---|---|
| index.html | das Dashboard (komplette App) |
| sw.js | Offline-Cache |
| manifest.webmanifest, icon*.png, icon.svg | Installation als App |
| tcg/ | das Sammelkarten-Depot mit eigenem Speicher; als Baustein unter Vermögen eingerechnet |

## Installation

Die App liegt auf GitHub Pages: https://stephanclaude.github.io/Finanzen/ (das Sammelkarten-Depot vorerst unter …/Finanzen/tcg/).

1. iPhone: Adresse in Safari öffnen → Teilen → „Zum Home-Bildschirm“.
2. PC: Adresse in Chrome oder Edge öffnen → „App installieren“ in der Adresszeile.

iPhone und PC haben jeweils eigene Daten. Abgleich: Einstellungen → Backup exportieren, auf dem anderen Gerät importieren (z. B. über iCloud Drive).
