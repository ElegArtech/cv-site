(function () {
  'use strict';

  const screens = {
    accueil: {
      src: 'assets/ecran-accueil.png',
      alt: 'Tableau de bord de Codicillus',
      focus: 'Le corpus entier, en un regard',
      count: '01 / 03', left: '52%', top: '22%'
    },
    note: {
      src: 'assets/ecran-note.png',
      alt: 'Lecture d’une note dans Codicillus',
      focus: 'Le savoir et sa fiabilité, ensemble',
      count: '02 / 03', left: '43%', top: '13%'
    },
    historique: {
      src: 'assets/ecran-historique.png',
      alt: 'Historique d’une note dans Codicillus',
      focus: 'Chaque changement reste intelligible',
      count: '03 / 03', left: '44%', top: '31%'
    }
  };

  const image = document.getElementById('tour-image');
  const focus = document.getElementById('tour-focus');
  const counter = document.getElementById('tour-counter');
  const steps = Array.from(document.querySelectorAll('.tour-step'));
  let current = 'accueil';

  Object.values(screens).forEach((screen) => {
    const preload = new Image();
    preload.src = screen.src;
  });

  function showScreen(key) {
    if (key === current) return;
    const screen = screens[key];
    current = key;
    image.classList.add('changing');
    window.setTimeout(() => {
      image.src = screen.src;
      image.alt = screen.alt;
      focus.querySelector('span').textContent = screen.focus;
      focus.style.left = screen.left;
      focus.style.top = screen.top;
      counter.textContent = screen.count;
      image.classList.remove('changing');
    }, 180);
    steps.forEach((step) => step.classList.toggle('active', step.dataset.screen === key));
  }

  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible) showScreen(visible.target.dataset.screen);
  }, { rootMargin: '-25% 0px -35%', threshold: [0.1, 0.4, 0.7] });

  steps.forEach((step) => {
    observer.observe(step);
    step.addEventListener('focus', () => showScreen(step.dataset.screen));
    step.addEventListener('click', () => showScreen(step.dataset.screen));
  });
}());
