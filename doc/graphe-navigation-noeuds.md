# Graphe de navigation — liste des nœuds

Document de validation. Il deviendra la source de données du graphe une fois validé.

Conventions retenues :

- Le libellé court est le texte affiché sur le nœud, limité à quatre mots.
- Le libellé long n'apparaît qu'au survol et sur la page du nœud.
- Les sous-nœuds de Parcours suivent le format « employeur · libellé court du poste ».
- Les icônes sont des pictogrammes en trait fin. Les noms indiqués sont ceux du jeu Tabler, qui sert de référence de forme.
- Seuls les nœuds majeurs portent une icône. Les sous-nœuds sont des pastilles avec libellé.
- Il n'existe pas de nœud de liaison. Un objet réel devient un sous-nœud rattaché à un seul nœud majeur, et une relation transversale devient une arête entre deux sous-nœuds.
- Une arête transversale de niveau 1 est un lien de création, c'est-à-dire l'endroit où l'objet ou la compétence est né. Une arête de niveau 2 est un lien d'exercice, de réemploi ou de formation.

---

## Nœud moyeu

| id | Libellé court | Icône | Cliquable |
|---|---|---|---|
| `profil` | Profil | `user` | non |

---

## 1. Parcours

| id | Libellé court | Libellé long | Période |
|---|---|---|---|
| `parcours` | Parcours | Parcours professionnel | — |
| `p-cpam92` | CPAM 92 · Resp. informatique | Responsable du département informatique, CPAM des Hauts-de-Seine | 2026 → |
| `p-drsm` | DRSM Île-de-France · Resp. SI | Responsable du service informatique, DRSM Île-de-France puis CPAM de Paris | 2024 – 2025 |
| `p-charente-si` | CPAM Charente · Resp. informatique | Responsable informatique et pôle appui au pilotage, CPAM de la Charente | 2020 – 2024 |
| `p-charente-agence` | CPAM Charente · Resp. agence | Responsable d'agence, CPAM de la Charente | 2017 – 2020 |
| `p-carsat` | CARSAT Centre · Resp. agences | Responsable des agences d'Eure-et-Loir, CARSAT Centre Val de Loire | 2015 – 2017 |
| `p-rsi` | RSI Poitou-Charentes · Manager logistique | Manager du pôle logistique, RSI Poitou-Charentes | 2008 – 2015 |

Icône du nœud majeur : `route`.

---

## 2. Réalisations

| id | Libellé court | Libellé long |
|---|---|---|
| `realisations` | Réalisations | Réalisations et outils conçus |
| `r-depotdoc` | depotdoc.fr | Dépôt documentaire dématérialisé, 30 000 utilisations par mois |
| `r-cr-ca` | Comptes rendus de CA | Rédaction des comptes rendus de conseil d'administration assistée par IA |
| `r-campagnes` | Campagnes de déploiement | Outil de gestion des campagnes de déploiement IT |
| `r-helpdesk` | Pilotage helpdesk | Outil de pilotage du helpdesk pour les managers de proximité |
| `r-ia-interne` | IA interne | IA interne en RAG sur base de données graphe |
| `r-instruments` | Instruments de pilotage | Outils d'évaluation et tableaux de bord de l'activité métier |

Icône du nœud majeur : `tools`.

---

## 3. Compétences

Sept sous-nœuds sur l'accueil, les familles complètes du CV sur la page du nœud. Le knowledge management, jusque-là dilué en fin d'énumération, devient une famille autonome.

| id | Libellé court | Familles regroupées |
|---|---|---|
| `competences` | Compétences | — |
| `c-gouvernance` | Direction et gouvernance | Direction et gouvernance ; transformation et conduite du changement |
| `c-pilotage` | Pilotage et mesure | Instruments de pilotage, KPI, tableaux de bord, appui au pilotage |
| `c-ia` | Intelligence artificielle | Intelligence artificielle |
| `c-technique` | Architecture et développement | Architecture et infrastructure ; développement applicatif ; support et services |
| `c-data` | Data et open source | Data et décisionnel ; open source et souveraineté |
| `c-km` | Knowledge management | Knowledge management et capitalisation |
| `c-droit-social` | Droit social | Droit social, dialogue social |

Icône du nœud majeur : `stack`.

---

## 4. Formation

| id | Libellé court | Libellé long | Année |
|---|---|---|---|
| `formation` | Formation | Formation universitaire | — |
| `f-msic` | Master MSIC · Panthéon-Sorbonne | Master 2 Executive management des systèmes d'information et des connaissances | 2024 – 2025 |
| `f-memoire` | Mémoire communs numériques | Les facteurs d'institutionnalisation des communs numériques au sein de l'administration | 2025 |
| `f-dtse` | Master DTSE · Toulouse Capitole | Master 2 droit et sciences du travail européen | 2013 – 2014 |

Icône du nœud majeur : `school`.

---

## 5. Publications

| id | Libellé court | Libellé long | Lien |
|---|---|---|---|
| `publications` | Publications | Publications et écrits | — |
| `pub-communs` | communs-numeriques.fr | Blog consacré aux communs numériques et à la souveraineté | communs-numeriques.fr |
| `pub-elegartech` | Newsletter ElegArtech | Newsletter sur la transformation numérique et l'IA en organisation | elegartech.substack.com |
| `pub-elegartex` | Galerie ElegArtex | Galerie de photographie numérique générée par IA, tenue à titre personnel | elegartex.fr |

Icône du nœud majeur : `book`.

---

## 6. Développements

| id | Libellé court | Libellé long | Statut |
|---|---|---|---|
| `developpements` | Développements | Applications conçues hors cadre institutionnel | — |
| `dev-rationarium` | Rationarium | Pilotage des projets et des ressources en collectivité territoriale | En développement actif |
| `dev-codicillus` | Codicillus | Base de connaissances documentaire interne, auto-hébergée | Dépôt privé |

Icône du nœud majeur : `chevrons`. Dépôts : github.com/ElegArtech.

---

## 7. Certifications

Nœud présent dans les données, masqué sur le graphe tant qu'il ne porte aucun sous-nœud. Sa position est réservée dans la composition.

| id | Libellé court | Icône | Statut |
|---|---|---|---|
| `certifications` | Certifications | `certificate` | masqué, aucun sous-nœud |

---

## 8. Contact

Pas de sous-nœud. Les trois actions figurent sur la page du nœud.

| id | Libellé court | Icône | Actions |
|---|---|---|---|
| `contact` | Contact | `mail` | courriel, LinkedIn, téléchargement du CV en PDF |

---

## Arêtes transversales

Niveau 1, lien de création. Tiret long en sanguine pleine.

| Départ | Arrivée | Nature |
|---|---|---|
| `r-depotdoc` | `p-charente-si` | né à |
| `r-cr-ca` | `p-charente-si` | né à |
| `r-ia-interne` | `p-charente-si` | né à |
| `r-campagnes` | `p-drsm` | né à |
| `r-helpdesk` | `p-cpam92` | né à |
| `r-instruments` | `p-rsi` | né à |
| `c-gouvernance` | `p-cpam92` | exercée à |
| `c-pilotage` | `p-rsi` | née à |
| `c-ia` | `p-charente-si` | née à |
| `c-technique` | `p-charente-si` | exercée à |
| `c-data` | `p-charente-si` | exercée à |
| `c-km` | `p-charente-si` | né à |
| `c-km` | `dev-codicillus` | né de |
| `c-droit-social` | `f-dtse` | nourrie par |
| `f-memoire` | `pub-communs` | prolongé par |
| `dev-rationarium` | `c-pilotage` | né de |
| `dev-codicillus` | `c-data` | né de |

Niveau 2, lien d'exercice, de réemploi ou de formation. Points serrés en sanguine claire.

| Départ | Arrivée | Nature |
|---|---|---|
| `r-campagnes` | `p-cpam92` | repris à |
| `r-instruments` | `p-carsat` | repris à |
| `r-instruments` | `p-charente-agence` | repris à |
| `r-instruments` | `p-cpam92` | repris à |
| `c-gouvernance` | `p-drsm` | exercée à |
| `c-gouvernance` | `f-msic` | nourrie par |
| `c-pilotage` | `p-carsat` | exercée à |
| `c-pilotage` | `p-charente-agence` | exercée à |
| `c-pilotage` | `p-cpam92` | exercée à |
| `c-ia` | `p-drsm` | exercée à |
| `c-ia` | `p-cpam92` | exercée à |
| `c-technique` | `p-drsm` | exercée à |
| `c-technique` | `p-cpam92` | exercée à |
| `c-data` | `f-msic` | nourrie par |
| `c-km` | `p-drsm` | exercé à |
| `c-km` | `p-cpam92` | exercé à |
| `c-km` | `f-msic` | nourri par |
| `c-km` | `r-depotdoc` | exercé à |
| `c-km` | `r-ia-interne` | exercé à |
| `f-memoire` | `c-data` | prolongé par |
| `dev-rationarium` | `c-technique` | exercée à |
| `dev-codicillus` | `c-technique` | exercée à |

---

## Décompte

| Catégorie | Nombre |
|---|---|
| Nœud moyeu | 1 |
| Nœuds majeurs visibles | 7 |
| Nœud majeur masqué | 1 |
| Sous-nœuds | 26 |
| Total de nœuds visibles à l'accueil | 34 |
| Arêtes de structure | 33 |
| Arêtes transversales de niveau 1 | 17 |
| Arêtes transversales de niveau 2 | 22 |
