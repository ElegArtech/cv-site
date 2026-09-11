(function () {
  'use strict';

  const order = ['accueil', 'note', 'historique'];
  const screens = {
    accueil: {
      count: '01 / 03',
      src: 'assets/interface-accueil.png',
      alt: 'Accueil de Codicillus avec le corpus de démonstration neutre',
      hotspots: [
        { x: 8, y: 31, title: 'Le rail documentaire', copy: 'Univers, domaines, dossiers et notes forment un chemin stable, toujours accessible.' },
        { x: 43, y: 37, title: 'La file d’attention', copy: 'Les échéances deviennent une priorité de travail, pas une date cachée dans les métadonnées.' },
        { x: 72, y: 38, title: 'Le risque est nommé', copy: 'Codicillus distingue les cinq états et met immédiatement en évidence les notes critiques.' }
      ]
    },
    note: {
      count: '02 / 03',
      src: 'assets/interface-note.png',
      alt: 'Lecture réelle de la note Restaurer une sauvegarde PostgreSQL dans Codicillus',
      hotspots: [
        { x: 10, y: 52, title: 'La note dans son contexte', copy: 'Le rail montre exactement où vit la note et permet de poursuivre dans le même dossier.' },
        { x: 39, y: 15, title: 'Deux registres de lecture', copy: 'Référence pour comprendre, Opérationnel pour agir : chacun possède son propre cycle de vivacité.' },
        { x: 47, y: 20, title: 'La confiance avant le contenu', copy: 'État, dernière vérification et prochaine échéance sont lisibles avant même de parcourir la note.' },
        { x: 88, y: 52, title: 'Relations et responsabilités', copy: 'Actions, contexte, relations, pièces jointes et vivacité restent réunis dans la colonne latérale.' }
      ]
    },
    historique: {
      count: '03 / 03',
      src: 'assets/interface-historique.png',
      alt: 'Historique réel de la note Restaurer une sauvegarde PostgreSQL dans Codicillus',
      hotspots: [
        { x: 9, y: 51, title: 'Le chemin reste visible', copy: 'Même dans l’historique, l’arborescence conserve le contexte et les raccourcis vers les notes récentes.' },
        { x: 30, y: 29, title: 'Deux cycles, une chronologie', copy: 'Les filtres séparent Référence et Opérationnel sans perdre la vision d’ensemble.' },
        { x: 45, y: 54, title: 'Chaque changement s’explique', copy: 'Création, vérification et changement automatique d’état sont datés et attribués.' }
      ]
    }
  };

  const image = document.getElementById('tour-image');
  const canvas = image.closest('.tour-canvas');
  const hotspots = document.getElementById('tour-hotspots');
  const tooltip = document.getElementById('tour-tooltip');
  const tooltipIndex = document.getElementById('tour-tooltip-index');
  const tooltipTitle = document.getElementById('tour-tooltip-title');
  const tooltipCopy = document.getElementById('tour-tooltip-copy');
  const reset = document.getElementById('tour-reset');
  const counter = document.getElementById('tour-counter');
  const previous = document.getElementById('tour-prev');
  const next = document.getElementById('tour-next');
  const steps = Array.from(document.querySelectorAll('.tour-step'));
  let current = 'accueil';
  let activeHotspot = 0;

  Object.values(screens).forEach((screen) => {
    const preload = new Image();
    preload.src = screen.src;
  });

  function resetZoom() {
    image.classList.remove('zoomed');
    hotspots.classList.remove('zoomed');
    reset.hidden = true;
  }

  function selectHotspot(index, zoom) {
    const point = screens[current].hotspots[index];
    activeHotspot = index;
    hotspots.querySelectorAll('button').forEach((button, buttonIndex) => {
      button.classList.toggle('active', buttonIndex === index);
      button.setAttribute('aria-pressed', String(buttonIndex === index && zoom));
    });
    tooltipIndex.textContent = String(index + 1).padStart(2, '0');
    tooltipTitle.textContent = point.title;
    tooltipCopy.textContent = point.copy;
    tooltip.classList.toggle('left', point.x > 62);
    if (zoom) {
      image.style.transformOrigin = `${point.x}% ${point.y}%`;
      image.classList.add('zoomed');
      hotspots.classList.add('zoomed');
      reset.hidden = false;
    }
  }

  function renderHotspots() {
    hotspots.replaceChildren();
    screens[current].hotspots.forEach((point, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.style.left = `${point.x}%`;
      button.style.top = `${point.y}%`;
      button.setAttribute('aria-label', `${point.title}. Cliquer pour agrandir cette zone.`);
      button.setAttribute('aria-pressed', 'false');
      button.innerHTML = `<span>${String(index + 1).padStart(2, '0')}</span>`;
      button.addEventListener('mouseenter', () => selectHotspot(index, false));
      button.addEventListener('focus', () => selectHotspot(index, false));
      button.addEventListener('click', () => selectHotspot(index, true));
      hotspots.append(button);
    });
    selectHotspot(0, false);
  }

  function showScreen(key) {
    if (!screens[key] || key === current) return;
    current = key;
    resetZoom();
    image.classList.add('changing');
    hotspots.classList.add('changing');
    window.setTimeout(() => {
      const screen = screens[key];
      image.src = screen.src;
      image.alt = screen.alt;
      counter.textContent = screen.count;
      renderHotspots();
      image.classList.remove('changing');
      hotspots.classList.remove('changing');
    }, 180);
    steps.forEach((step) => step.classList.toggle('active', step.dataset.screen === key));
  }

  function moveScreen(direction) {
    const index = order.indexOf(current);
    showScreen(order[(index + direction + order.length) % order.length]);
  }

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) showScreen(visible.target.dataset.screen);
  }, { rootMargin: '-25% 0px -35%', threshold: [0.1, 0.4, 0.7] });

  steps.forEach((step) => {
    observer.observe(step);
    step.addEventListener('focus', () => showScreen(step.dataset.screen));
    step.addEventListener('click', () => showScreen(step.dataset.screen));
  });
  previous.addEventListener('click', () => moveScreen(-1));
  next.addEventListener('click', () => moveScreen(1));
  reset.addEventListener('click', resetZoom);
  canvas.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') moveScreen(-1);
    if (event.key === 'ArrowRight') moveScreen(1);
    if (event.key === 'Escape') resetZoom();
  });

  renderHotspots();
}());
