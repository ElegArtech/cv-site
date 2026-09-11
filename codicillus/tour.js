(function () {
  'use strict';

  const screens = {
    accueil: {
      count: '01 / 03',
      src: 'assets/interface-accueil.png',
      alt: 'Accueil de Codicillus avec le corpus de démonstration neutre'
    },
    note: {
      count: '02 / 03',
      src: 'assets/interface-note.png',
      alt: 'Lecture réelle de la note Restaurer une sauvegarde PostgreSQL dans Codicillus'
    },
    historique: {
      count: '03 / 03',
      src: 'assets/interface-historique.png',
      alt: 'Historique réel de la note Restaurer une sauvegarde PostgreSQL dans Codicillus'
    }
  };

  const image = document.getElementById('tour-image');
  const counter = document.getElementById('tour-counter');
  const steps = Array.from(document.querySelectorAll('.tour-step'));
  let current = 'accueil';

  function showScreen(key) {
    if (key === current) return;
    const screen = screens[key];
    current = key;
    image.classList.add('changing');
    window.setTimeout(() => {
      image.src = screen.src;
      image.alt = screen.alt;
      counter.textContent = screen.count;
      image.classList.remove('changing');
    }, 170);
    steps.forEach((step) => step.classList.toggle('active', step.dataset.screen === key));
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
}());
