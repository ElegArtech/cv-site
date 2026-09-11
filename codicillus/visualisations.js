(function () {
  'use strict';

  const views = {
    graphe: {
      index: '01 / 03',
      image: 'assets/visualisation-graphe.png',
      alt: 'Cartographie réelle du domaine Infrastructure dans Codicillus',
      question: 'Observer le voisinage d’une note',
      title: 'Les relations deviennent un territoire.',
      copy: 'Les liens déclarés, les mentions déduites, les familles sémantiques et la vivacité composent une carte exploratoire du corpus.',
      insights: ['Repérer les notes isolées', 'Lire les familles de connaissances', 'Suivre un lien jusqu’à sa source'],
      metrics: [['11', 'notes visibles'], ['9', 'relations déclarées'], ['3', 'relations déduites']],
      x: '63%', y: '49%',
      callout: 'Une relation sélectionnée révèle immédiatement son voisinage.'
    },
    modelisation: {
      index: '02 / 03',
      image: 'assets/visualisation-modelisation.png',
      alt: 'Modélisation réelle des dépendances du domaine Infrastructure dans Codicillus',
      question: 'Lire les conséquences d’un changement',
      title: 'La dépendance devient une chaîne de décision.',
      copy: 'Le dessin s’étage selon le sens des relations. On voit ce qui porte, ce qui dépend et les éléments dont la disparition fragiliserait l’ensemble.',
      insights: ['Suivre les dépendances de haut en bas', 'Identifier les points de rupture', 'Déclarer une relation manquante'],
      metrics: [['11', 'notes reliées'], ['9', 'relations déclarées'], ['3', 'mentions dans le contenu']],
      x: '45%', y: '67%',
      callout: 'Le même nœud reçoit plusieurs dépendances : son rôle critique devient lisible.'
    },
    'carte-mentale': {
      index: '03 / 03',
      image: 'assets/visualisation-carte-mentale.png',
      alt: 'Carte mentale réelle du domaine Infrastructure dans Codicillus',
      question: 'Parcourir la structure documentaire',
      title: 'Le rangement devient une carte à déplier.',
      copy: 'La carte mentale ne dessine pas les relations métier. Elle rend visible l’arborescence exacte : univers, domaines, dossiers et notes.',
      insights: ['Comprendre la profondeur du corpus', 'Déplier seulement le niveau utile', 'Passer de la structure à la note'],
      metrics: [['8', 'notes'], ['1', 'domaine'], ['3', 'branches principales']],
      x: '56%', y: '57%',
      callout: 'Le domaine relie l’univers à ses trois branches documentaires, sans perdre les volumes.'
    }
  };

  const stage = document.querySelector('.viz-stage');
  const tabs = Array.from(document.querySelectorAll('.viz-tabs button'));
  const image = document.getElementById('viz-image');
  const count = document.getElementById('viz-count');
  const question = document.getElementById('viz-question');
  const title = document.getElementById('viz-title');
  const copy = document.getElementById('viz-copy');
  const insights = document.getElementById('viz-insights');
  const metrics = document.getElementById('viz-metrics');
  const reticle = document.getElementById('viz-reticle');
  const callout = document.querySelector('#viz-callout b');
  let current = 'graphe';

  Object.values(views).forEach((view) => {
    const preload = new Image();
    preload.src = view.image;
  });

  function render(key) {
    if (key === current) return;
    current = key;
    const view = views[key];
    stage.classList.add('changing');
    tabs.forEach((tab) => {
      const active = tab.dataset.viz === key;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    window.setTimeout(() => {
      image.src = view.image;
      image.alt = view.alt;
      count.textContent = view.index;
      question.textContent = view.question;
      title.textContent = view.title;
      copy.textContent = view.copy;
      insights.replaceChildren(...view.insights.map((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        return item;
      }));
      metrics.replaceChildren(...view.metrics.map(([value, label]) => {
        const item = document.createElement('span');
        const strong = document.createElement('b');
        strong.textContent = value;
        item.append(strong, ` ${label}`);
        return item;
      }));
      reticle.style.setProperty('--x', view.x);
      reticle.style.setProperty('--y', view.y);
      callout.textContent = view.callout;
      stage.classList.remove('changing');
    }, 220);
  }

  tabs.forEach((tab) => tab.addEventListener('click', () => render(tab.dataset.viz)));
}());
