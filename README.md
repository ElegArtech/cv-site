# CV d’Alexandre Berge

[Consulter le CV](https://alexandre-berge.fr) ·
[Télécharger le PDF](assets/cv-alexandre-berge.pdf) ·
[Contribuer](CONTRIBUTING.md) ·
[Licence MIT et périmètre](LICENSING.md) ·
[Crédits et licences des composants](THIRD_PARTY_NOTICES.md)

CV personnel présenté sous forme de graphe de navigation, avec une vue liste,
une version imprimable et des présentations de projets. Le site est publié
depuis ce dépôt sur GitHub Pages.

## Fonctionnement

Le CV principal est écrit en HTML, CSS et JavaScript natifs dans `index.html`.
Il ne demande ni installation de dépendances ni compilation. Ses polices et
images sont servies localement ; son chargement ne dépend d’aucun service tiers.
Le choix entre les vues graphe et liste est mémorisé dans le navigateur via
`localStorage` (clé `cv-vue`).

| Page | Rôle | Dépendances |
| --- | --- | --- |
| `/` | CV interactif, vue liste et impression | Polices IBM Plex locales, sans framework |
| `/codicillus/` | Présentation et visite interactive de Codicillus | Scripts, images et polices locales |
| `/rationarium/` | Galerie de maquettes Rationarium | JavaScript natif local ; polices Google Fonts distantes |
| `/rationarium/mockups/` | Écrans de démonstration autonomes | Polices Google Fonts distantes |

La galerie Rationarium porte une directive `noindex, nofollow` et son répertoire
est exclu dans `robots.txt`. Cela ne constitue pas une restriction d’accès : les
fichiers publiés restent publics.

## Démarrer en local

Depuis la racine du dépôt, avec Python 3 :

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Ouvrir ensuite [le CV](http://localhost:8000/),
[Codicillus](http://localhost:8000/codicillus/) ou
[Rationarium](http://localhost:8000/rationarium/).

## Structure

```text
index.html                 contenu, styles et graphe du CV
assets/                    CV PDF, portraits et image de partage
fonts/                     IBM Plex et sa licence OFL
codicillus/                présentation, visite, visualisations et ressources
rationarium/               galerie native et maquettes de démonstration
scripts/check-site.py      validation du graphe, des liens et des licences
.github/workflows/site.yml validation puis publication sur GitHub Pages
.github/dependabot.yml     suivi mensuel des versions des actions GitHub
LICENSE, LICENSING.md      licence MIT et périmètre de réutilisation
CNAME                      domaine personnalisé
robots.txt, sitemap.xml    consignes d’indexation et plan du site
favicon.svg, .nojekyll      icône du site et désactivation de Jekyll
```

Les documents de travail (`doc/`, `_BASE/`, fichiers Word) sont ignorés par Git
et ne font pas partie du site à publier.

## Modifier le CV et son graphe

Le texte du CV est écrit dans `#contenu`. Le panneau du graphe en clone la
section demandée, ce qui permet plusieurs lectures du même contenu :

| Contexte | Rendu |
| --- | --- |
| Avec JavaScript, vue graphe | Graphe interactif et panneau latéral |
| Avec JavaScript, vue liste | Document déroulant, bouton « Vue liste » |
| Sans JavaScript ou à l’impression | Document complet, détails dépliés |

Les données du graphe sont les constantes `NOEUDS` et `TRANSVERSALES` dans
`index.html`. Pour ajouter un objet, ajouter son nœud et sa fiche dans
`#contenu` avec **le même identifiant**.

- Un nœud majeur ouvre une page de nœud (niveau 2).
- Un sous-nœud dont la fiche contient un `<div class="detail">` ouvre une page
  de détail (niveau 3) ; sinon il met sa fiche en évidence dans le panneau.
- `certifications` porte `masque:true` : il n’est pas dessiné, mais sa place
  reste réservée dans la composition.
- Une arête transversale de niveau 1 est un lien de création ; au niveau 2,
  c’est un lien d’exercice, de réemploi ou de formation.

Les URL à fragment (`#parcours`, `#p-drsm`, `#r-depotdoc`…) sont partageables
dans les deux vues. Préserver les identifiants existants pour conserver ces liens.

Lors d’une mise à jour du parcours, vérifier aussi le PDF dans `assets/`, les
métadonnées en tête de page et les données structurées JSON-LD. Le PDF est un
fichier publié séparément : il n’est pas régénéré par GitHub Pages.

## Vérifier avant publication

```bash
python3 scripts/check-site.py
python3 -m unittest discover -s scripts -p 'test_*.py'
git diff --check
```

Le script ne demande aucune dépendance externe. Il contrôle le graphe du CV,
les identifiants HTML de toutes les pages suivies, les cibles locales et leurs
fragments, les ressources CSS, les liens Markdown et la présence des notices de
licence. Les fichiers de travail ignorés par Git sont exclus. Les tests vérifient
notamment le rejet des liens, fragments et polices absents.

Ces contrôles s’exécutent à chaque push et pull request via
[GitHub Actions](https://github.com/ElegArtech/cv-site/actions/workflows/site.yml).
Ils ne testent pas les liens externes, les ressources construites dynamiquement
par JavaScript ou les interactions dans le navigateur. Les vérifications
manuelles utiles sont décrites dans [CONTRIBUTING.md](CONTRIBUTING.md).

## Publier avec GitHub Pages

Le dépôt public est [ElegArtech/cv-site](https://github.com/ElegArtech/cv-site),
même si son dossier de travail local porte un autre nom, par exemple `cv-site-v2`.

GitHub Pages utilise **GitHub Actions**, avec HTTPS activé. Un push sur
**`main`** déclenche le workflow : validation → préparation des fichiers publics
→ publication. Une validation en échec empêche la publication. Les autres
branches et les pull requests exécutent les contrôles sans déployer.

Le paquet publié contient les pages, leurs ressources et les notices de licence,
à partir des fichiers du commit. Les scripts de maintenance, la configuration
GitHub et les documents de travail ne sont pas embarqués. La liste des chemins
publiés est explicite dans [.github/workflows/site.yml](.github/workflows/site.yml).
`CNAME` contient `alexandre-berge.fr` et le domaine est aussi configuré dans
Settings → Pages ; `.nojekyll` est conservé pour les hébergements statiques.

Après le push, vérifier le résultat dans
[Actions](https://github.com/ElegArtech/cv-site/actions) et le site en ligne.
Une relance manuelle du workflow sur `main` permet de republier le dernier état.

Le dépôt et les fichiers servis sont publics. Le `.gitignore` évite l’ajout
accidentel de documents de travail, mais ne retire pas un fichier déjà suivi.
Vérifier `git status` et le contenu de `git diff --cached` avant de publier.

## Droits et composants tiers

Le code original et la documentation technique sont sous [licence MIT](LICENSE).
Le [périmètre détaillé](LICENSING.md) distingue ce code réutilisable des contenus
personnels, éditoriaux et visuels : CV, photographies, coordonnées, biographies,
captures et identités visuelles ne sont pas concédés sous MIT.

Les polices conservent leurs licences SIL OFL 1.1. Les textes complets,
attributions et informations de provenance sont dans
[THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

Pour signaler un problème technique, consulter [CONTRIBUTING.md](CONTRIBUTING.md).
Pour un problème de sécurité ou une exposition involontaire de données,
consulter [SECURITY.md](SECURITY.md).
