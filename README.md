# cv-site

CV en ligne d'Alexandre Berge — [alexandre-berge.fr](https://alexandre-berge.fr)

Site statique, sans build ni dépendance à installer. Publié via GitHub Pages
depuis la branche `main` (racine du dépôt).

## Structure

```
index.html    page unique (runtime « dc » : balises <x-dc>, <sc-for>, {{ }})
support.js    runtime qui compile et monte la page (React 18)
vendor/       React + ReactDOM UMD servis en local (pas d'appel au CDN unpkg)
assets/       CV en PDF, photo, image de partage Open Graph
fonts/        Bricolage Grotesque, DM Sans, JetBrains Mono (woff2, sous-ensemble latin)
CNAME         domaine personnalisé GitHub Pages
.nojekyll     désactive le traitement Jekyll
```

## Développement local

```bash
python3 -m http.server 8000
# puis http://localhost:8000
```

Ouvrir `index.html` directement en `file://` ne fonctionne pas : le runtime
récupère la page via `fetch()` pour relire le template brut.

## Déploiement

Tout push sur `main` redéploie le site automatiquement (une à deux minutes).

## Notes

- React et ReactDOM sont pré-chargés depuis `vendor/` **avant** `support.js`.
  `loadReactUmd()` détecte `window.React` / `window.ReactDOM` et n'appelle donc
  jamais unpkg.com. En cas de mise à jour de `support.js`, vérifier que les
  versions attendues (`REACT_URL`) correspondent toujours aux fichiers de `vendor/`.
- Ne pas définir `window.__resources` : cela désactiverait la passe de
  re-lecture du template brut dans `support.js`.
