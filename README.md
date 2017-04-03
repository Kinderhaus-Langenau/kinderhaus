# Kinderhaus Homepage

## Entwicklung

### Downloads

Folgende Software sollte für die Entwicklung installiert sein:

#### Grav

- [Download](https://getgrav.org/downloads)
- [Dokumentation](https://learn.getgrav.org/)

Als Basis für die Homepage haben wir uns für Grav entschieden. Da wir das Admin-Plugin nutzen, lohnt es sich, die Version mit integriertem Plugin runter zu laden.

#### Node.js

- [Download](https://nodejs.org/de/download/)

Zum Bauen des Themes wird benötigt, am besten in der LTS Version.

#### Composer

- [Download](https://getcomposer.org/download/)

Für die PHP-Abhängigkeiten bietet sich Composer an.

### Installation

Linux- und Mac-User können im Rootverzeichnis einfach `make install` ausführen. Unter Windows sind folgende Schritte nötig:

#### PHP Abhängigkeiten installieren

Im Rootverzeichnis `composer install` ausführen.

#### Node Abhängigkeiten installieren

Im Verzeichnis `<GRAV>/user/themes/kinderhaus` den Befehl `npm install` ausführen.

### Los geht's...

... mit `npm start` im Theme-Verzeichnis (bzw. `make` im Grav-Verzeichnis). Mit diesem Befehl wird der Entwicklungsserver gestartet und ist unter der Adresse `http://localhost:8000` verfügbar.

Das wars eigentlich schon, happy coding!

## Release

Fürs Release einer neuen Version des Themes gibt es den Befehl `npm build`. Dieser sorgt dafür, dass unnötiger Code, wie z.B. der Livereload, nicht mitgeliefert wird und komprimiert/bündelt die Styles und Javascripts.

## Tools

### EditorConfig

Das Projekt verwendet [EditorConfig](http://editorconfig.org/) um einen einheitlichen Coding Style zu gewährleisten. Dafür ist in den meisten Fällen ein Plugin für den jeweiligen Editor nötig (bitte unter dem Link nachschauen und gegebenenfalls installieren).

### Gulp

[Gulp](http://gulpjs.com/) ist ein Buildtool, das sich um

- Kompilieren der SCSS-Dateien (inkl. Autoprefixing, etc.)
- Bündeln von Javascript
- Livereload während der Entwicklung
- starten des Entwicklungsservers

kümmert.

### Neat

[Neat](http://neat.bourbon.io/) ist ein SASS/SCSS-Grid-Framework und in diesem Projekt mittels NPM in der Version `1.8.0` installiert, da ich Probleme hatte die aktuelle Version `2.0.0` zum laufen zu bringen.

## Twig

Grav benutzt [Twig](http://twig.sensiolabs.org/) als Templatesprache.

## SCSS

### Struktur

Die Struktur ist an [SMACSS](https://smacss.com/) angelehnt und unterteilt sich in folgende Dateien:

- `kinderhaus.scss`:
Hier finden sich lediglich Imports und keinerlei Regeln. Sozusagen die Schaltzentrale der Stylesheets.
- `_variables.scss`:
Um nicht an zig verschiedenen Stellen suchen (und verändern) zu müssen, ist hier der richtige Platz um SCSS-Variablen zu definieren. Das eignet sich besonders für Fonts oder Farben.
- `_base.scss`:
Stylings auf Tag-Basis, also recht unspezifisch. Zum Beispiel für Headings (h1,h2,...)
- `_layout.scss`:
Wie der Name schon sagt, befindet sich hier das Layout. Das betrifft z.B. die `display:`-Regeln oder Breiten/Höhen,...
- `_modules.scss`:
Hier wird alles schön bunt und kriegt Rähmchen und dergleichen.
- `_grid-settings.scss`:
Definition der Breakpoints für Media Queries.
- `_reset.scss`:
Ein angepasstes Reset-Stylesheet ([Eric Meyer's Reset](http://cssreset.com)). Dient zum Festlegen von Default-Werten um die verschiedenen Browser zu einem (möglichst) gleichen Verhalten zu bewegen.
- `_functions.scss`:
Sammlung von nützlichen SCSS-Funktionen
