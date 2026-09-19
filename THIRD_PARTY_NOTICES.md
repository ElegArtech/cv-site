# Composants tiers et provenance

Cet inventaire couvre les bibliothèques et polices embarquées dans le dépôt,
ainsi que les services distants référencés par les pages. Les licences tierces
s’appliquent à leurs composants respectifs, indépendamment du statut du code
original et des contenus personnels du site.

## Fichiers distribués avec le site

| Composant | Fichiers concernés | Licence et attribution | Source de la notice |
| --- | --- | --- | --- |
| IBM Plex Sans, Serif et Mono | `fonts/ibm-plex-*.woff2` | [SIL OFL 1.1](fonts/OFL-IBM-Plex.txt), © 2017 IBM Corp., nom réservé « Plex » | [IBM Plex](https://github.com/IBM/plex/blob/master/LICENSE.txt) |
| Archivo | `codicillus/fonts/archivo-*.woff2` | [SIL OFL 1.1](codicillus/fonts/OFL-Archivo.txt), © 2020 The Archivo Project Authors | [Google Fonts / Archivo](https://github.com/google/fonts/blob/main/ofl/archivo/OFL.txt) |
| Literata | `codicillus/fonts/literata-*.woff2` | [SIL OFL 1.1](codicillus/fonts/OFL-Literata.txt), © 2017 The Literata Project Authors | [Google Fonts / Literata](https://github.com/google/fonts/blob/main/ofl/literata/OFL.txt) |
| JetBrains Mono | `codicillus/fonts/jetbrains-400.woff2` | [SIL OFL 1.1](codicillus/fonts/OFL-JetBrains-Mono.txt), © 2020 The JetBrains Mono Project Authors | [Google Fonts / JetBrains Mono](https://github.com/google/fonts/blob/main/ofl/jetbrainsmono/OFL.txt) |

Les textes complets ont été récupérés depuis les sources ci-dessus le
19 septembre 2026. Leur contenu est inchangé ; seules les fins de ligne et
les espaces de fin de ligne ont été normalisés.

Les versions exactes et les URL d’origine des fichiers WOFF2 n’étaient pas
consignées dans le dépôt. Les références ci-dessus identifient les notices des
familles concernées, pas une preuve de provenance de chaque fichier binaire.
Conserver la source et la version lors du prochain remplacement des polices.

## Services distants

Les pages de `rationarium/` et de `rationarium/mockups/` chargent les familles
IBM Plex via Google Fonts (`fonts.googleapis.com` et `fonts.gstatic.com`).
Les pages principales du CV et de Codicillus utilisent des polices locales.

## Ancienne dépendance retirée

La galerie Rationarium utilisait auparavant `support.js`, un runtime généré
à partir de `dc-runtime/src/*.ts`, accompagné de React et React DOM 18.3.1.
Aucune licence explicite de ce runtime n’a été retrouvée dans le dépôt ou
les exports locaux examinés.

Cette dépendance a été supprimée le 19 septembre 2026. La galerie est désormais
implémentée en HTML, CSS et JavaScript natifs dans `rationarium/index.html`,
`gallery.css` et `gallery.js`. React, React DOM et les chargements conditionnels
unpkg/Babel ont également été retirés, car plus aucune page n’en dépend.

Les versions historiques de `support.js` restent dans l’historique Git et ne
sont pas relicenciées sous MIT par cette mise à jour. Les anciennes distributions
de React conservent leur [licence MIT propre](https://github.com/facebook/react/blob/v18.3.1/LICENSE).

## Contenus éditoriaux et visuels

Le CV PDF, les photographies, les images de partage, les captures d’écran,
logos et textes personnels ne sont pas couverts par les licences tierces
ci-dessus ; voir [LICENSING.md](LICENSING.md). La présentation de Codicillus dans ce dépôt est distincte du
[dépôt du logiciel Codicillus](https://github.com/ElegArtech/codicillus) ; la
licence de ce dernier ne s’applique pas automatiquement à toute cette présentation.
