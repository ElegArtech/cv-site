# Brief — ajout du nœud majeur « Développements »

Modification à appliquer au site existant. Le prototype `prototype-graphe.html` et le fichier `graphe-navigation-noeuds.md` fournis sont à jour et font foi en cas d'écart avec le code actuel.

## 1. Nouveau nœud majeur

Ajouter un septième nœud majeur, au même rang que Parcours, Réalisations, Compétences, Formation, Publications et Contact.

| Champ | Valeur |
|---|---|
| id | `developpements` |
| Libellé | Développements |
| Icône | chevrons de code, deux polylignes `7,5.5 2,10 7,14.5` et `13,5.5 18,10 13,14.5` dans une boîte de 20 × 20 |
| Position composée | x 850, y 105 dans le repère du graphe |
| Étape d'apparition | 6, la même que Contact |

## 2. Ses deux sous-nœuds

| id | Libellé | Position |
|---|---|---|
| `dev-rationarium` | Rationarium | x 955, y 50 |
| `dev-codicillus` | Codicillus | x 980, y 170 |

## 3. Déplacement de Contact

Le nœud `contact` passe de x 700, y 130 à **x 622, y 120**, pour se placer à équidistance de Parcours et de Publications.

## 4. Nouvelles arêtes transversales

| Départ | Arrivée | Niveau | Nature |
|---|---|---|---|
| `dev-rationarium` | `c-pilotage` | 1 | né de |
| `dev-rationarium` | `c-technique` | 2 | exercée à |
| `dev-codicillus` | `c-data` | 1 | né de |
| `dev-codicillus` | `c-technique` | 2 | exercée à |

Aucun lien vers un poste : ces projets ne sont nés dans aucun emploi.

## 5. Contenu de la page du nœud (niveau 2)

Chapeau : « Deux applications conçues et développées hors cadre institutionnel. Elles prolongent des problèmes rencontrés en poste, le pilotage des ressources d'un côté, la fiabilité du patrimoine documentaire de l'autre. »

**Rationarium** — En développement actif · TypeScript, React, TanStack, PostgreSQL
- Pilotage des projets et des ressources en collectivité territoriale.
- Une seule grille temporelle réconcilie tout ce qui occupe une personne, sur une organisation en directions, départements et services.
- Architecte et développeur principal.

**Codicillus** — Dépôt privé · TypeScript, SvelteKit, PostgreSQL, Docker
- Base de connaissances documentaire interne, auto-hébergée.
- Point d'entrée unique et cherchable, avec un signal de fraîcheur sur chaque note.
- Le corpus se lit aussi comme un graphe de dépendances.

## 6. Contenu du détail (niveau 3)

### Rationarium
Sous-titre : En développement actif · architecte et développeur principal
Contexte : Pilotage des projets et des ressources en collectivité territoriale.

**Le problème**
- Le suivi de projet échoue rarement par manque d'outils, il échoue parce qu'il y en a trop.
- Une seule grille temporelle réconcilie donc tout ce qui occupe une personne, congé, télétravail, tâche de projet, permanence et réunion, sur une organisation en directions, départements et services.

**Cadre et contraintes**
- Outil interne, réseau fermé, bilingue et conforme RGAA.
- Stack : TypeScript, React, TanStack, PostgreSQL, Prisma, Turborepo.
- Lien sortant : https://alexandre-berge.fr/rationarium/

### Codicillus
Sous-titre : Dépôt privé · base de connaissances auto-hébergée
Contexte : Base de connaissances documentaire interne, auto-hébergée.

**Le problème**
- Un patrimoine éparpillé, procédures, cartographies en tableur, PDF et liens, remplacé par un point d'entrée unique et cherchable.
- Chaque note affiche un signal de fraîcheur qui dit si elle est encore digne de confiance.

**Le corpus comme graphe**
- Applications, serveurs, équipements et contacts reliés par des relations qualifiées.
- Les dépendances et les points de défaillance unique se lisent directement.
- Stack : TypeScript, SvelteKit, PostgreSQL, Drizzle, Docker.

## 7. Points de vigilance

- Ces projets figurent déjà sur l'ancien site dans la section Projets. Vérifier qu'ils ne sont pas dupliqués dans le nœud Réalisations.
- Le compte de dépôts est github.com/ElegArtech.
- Le nœud Certifications reste masqué tant qu'il ne porte aucun sous-nœud.
- Après ajout, le graphe compte sept nœuds majeurs visibles, vingt-quatre sous-nœuds et trente-deux liens transversaux.
