# cv-site

CV en ligne d'Alexandre Berge, présenté sous forme de graphe de navigation —
[alexandre-berge.fr](https://alexandre-berge.fr)

Site statique : un seul fichier, aucun build, aucune dépendance à installer,
aucune requête vers un tiers. Destiné à GitHub Pages depuis la racine de `main`.

## Structure

```
index.html              page unique : contenu, styles et graphe
fonts/                  IBM Plex Sans / Serif / Mono, woff2 sous-ensemble latin
assets/                 CV en PDF, portrait, image de partage Open Graph
rationarium/            maquettes Rationarium, sous-page non indexée
support.js, vendor/     runtime React de la page Rationarium — inutilisés par le
                        CV lui-même, mais rationarium/index.html en dépend
CNAME, robots.txt, sitemap.xml, favicon.svg, .nojekyll
```

## Le graphe

Les données vivent dans `index.html`, en tête du script : `NOEUDS` et
`TRANSVERSALES`. Pour ajouter un objet, ajouter le nœud, puis la fiche correspondante
dans `#contenu` en lui donnant **le même identifiant** : c'est ce qui relie le
graphe au texte.

- Un nœud majeur ouvre une page de nœud (niveau 2).
- Un sous-nœud dont la fiche contient un `<div class="detail">` ouvre une page de
  détail (niveau 3) ; sinon il met sa fiche en évidence dans le panneau.
- `certifications` porte `masque:true` : il n'est pas dessiné, mais sa place est
  réservée dans la composition.
- Une arête transversale de niveau 1 est un lien de création, celle de niveau 2
  un lien d'exercice, de réemploi ou de formation.

## Trois lectures du même contenu

Le texte du CV est écrit une seule fois, dans `#contenu`. Le panneau du graphe en
clone la section demandée ; rien n'est dupliqué.

| Contexte | Rendu |
|---|---|
| Avec JavaScript, vue graphe | graphe interactif, panneau latéral |
| Avec JavaScript, vue liste | document déroulant, bouton « Vue liste » |
| Sans JavaScript, robots, impression | le document complet, détails dépliés |

Chaque nœud a son URL : `#parcours`, `#p-drsm`, `#r-depotdoc`… Elles sont
partageables et fonctionnent dans les deux vues.

## Développement local

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

L'ouverture directe en `file://` fonctionne aussi, les polices restant locales.

## Déploiement

Publié par GitHub Pages depuis la racine de `main`. Un push sur `main` met le
site en ligne ; `CNAME` porte le domaine et `.nojekyll` désactive Jekyll.

La refonte en graphe est développée dans un dépôt séparé, `cv-site-v2`, qui
garde les documents de travail — spécification des nœuds et prototype d'origine.
