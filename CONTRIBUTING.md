# Contribuer et maintenir le site

Ce dépôt héberge le CV personnel d’Alexandre Berge et des présentations de
projets. Les corrections techniques, d’accessibilité et de documentation sont
les bienvenues. Les modifications du parcours et des informations personnelles
doivent être validées par Alexandre.

## Signaler un problème

Ouvrir une [issue](https://github.com/ElegArtech/cv-site/issues) avec la page
concernée, les étapes pour reproduire le problème, le résultat attendu et le
navigateur utilisé. Ajouter une capture si elle aide à comprendre le problème.

Pour une information personnelle exposée par erreur ou un problème de sécurité,
suivre les consignes de [SECURITY.md](SECURITY.md), sans publier les données dans une issue.

## Proposer une modification

1. Travailler sur une branche dédiée et garder la modification centrée sur son objet.
2. Démarrer le serveur local et effectuer les vérifications ci-dessous.
3. Examiner les fichiers préparés avec `git diff --cached` : aucun secret,
   document de travail ou contenu personnel supplémentaire ne doit être ajouté
   involontairement au dépôt public.
4. Ouvrir une pull request décrivant le changement et les vérifications effectuées.

Le projet ne demande ni Node.js, ni installation de paquets, ni compilation.
Les commandes de démarrage et la structure sont dans le [README](README.md).

## Vérifications

Exécuter à la racine du dépôt :

```bash
python3 scripts/check-site.py
python3 -m unittest discover -s scripts -p 'test_*.py'
git diff --check
```

Pour une modification du rendu ou des interactions, vérifier les pages concernées
dans le navigateur, sur une largeur de bureau et une largeur de téléphone.
Sur le CV, vérifier les vues graphe et liste, l’ouverture des fiches, les liens
à fragment, la navigation au clavier et le téléchargement du PDF. Si le contenu
ou les styles changent, contrôler aussi l’aperçu avant impression et la lecture
sans JavaScript.

Pour Codicillus ou Rationarium, ouvrir explicitement les sous-pages modifiées :
le script valide leurs références statiques, mais pas leurs interactions ni les
ressources construites dynamiquement par JavaScript. Une modification de documentation seule ne demande pas de campagne
de tests visuels.

## Mettre à jour les ressources

- Conserver la cohérence entre le texte du CV, le PDF et les métadonnées publiques.
- Préserver les identifiants des fiches déjà accessibles par un lien à fragment.
- Pour ajouter ou remplacer une police, une bibliothèque ou une image tierce,
  vérifier sa provenance et conserver les notices applicables. Mettre à jour
  [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
- La galerie Rationarium utilise `rationarium/gallery.js` et `gallery.css`, sans
  runtime tiers. Vérifier les quatre sélecteurs d’écran après une modification.
- Les contributions au code et à sa documentation technique sont proposées sous
  la licence MIT du projet. Le [périmètre](LICENSING.md) exclut les contenus
  personnels, éditoriaux et visuels et préserve les licences des polices.

## Publication

Le push sur `main` déclenche la validation, puis la publication via GitHub Pages
si tous les contrôles réussissent. Les pull requests sont vérifiées sans être
publiées. Examiner les résultats avant de fusionner.

Après publication, ouvrir les pages modifiées sur le domaine public et tester
les téléchargements concernés. Un retour arrière passe par l’annulation du
commit concerné et une nouvelle publication, en préservant l’historique.
