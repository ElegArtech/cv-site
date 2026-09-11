(function () {
  'use strict';

  const range = document.getElementById('day-range');
  const output = document.getElementById('day-output');
  const note = document.getElementById('live-note');
  const label = document.getElementById('status-label');
  const detail = document.getElementById('status-detail');
  const railFill = document.getElementById('rail-fill');
  const railNow = document.getElementById('rail-now');
  const verifiedDate = document.getElementById('verified-date');
  const chips = Array.from(document.querySelectorAll('.state-chip'));

  function stateFor(day) {
    if (day < -10) return { key: 'ajour', label: 'À jour' };
    if (day <= 0) return { key: 'bientot', label: 'Bientôt à vérifier' };
    if (day < 14) return { key: 'averifier', label: 'À vérifier' };
    if (day < 90) return { key: 'arevoir', label: 'À revoir' };
    return { key: 'obsolete', label: 'Obsolète' };
  }

  function renderVivacity(day) {
    const state = stateFor(day);
    note.className = 'live-note state-' + state.key;
    label.textContent = state.label;
    output.textContent = day < 0 ? '− ' + Math.abs(day) + ' jours' : day === 0 ? 'échéance atteinte' : '+ ' + day + ' jours';
    detail.textContent = day < 0 ? 'Prochaine vérification dans ' + Math.abs(day) + ' jours' : day === 0 ? 'Vérification attendue aujourd’hui' : 'Échéance dépassée de ' + day + ' jours';
    const position = Math.max(4, Math.min(96, ((day + 67) / 177) * 92 + 4));
    railFill.style.width = position + '%';
    railNow.style.left = position + '%';
    chips.forEach((chip) => chip.classList.toggle('active', chip.dataset.state === state.key));
  }

  range.addEventListener('input', () => renderVivacity(Number(range.value)));
  chips.forEach((chip) => chip.addEventListener('click', () => {
    range.value = chip.dataset.day;
    renderVivacity(Number(chip.dataset.day));
  }));
  document.getElementById('verify-button').addEventListener('click', () => {
    range.value = -67;
    verifiedDate.textContent = 'à l’instant';
    renderVivacity(-67);
    note.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.015)' }, { transform: 'scale(1)' }], { duration: 420, easing: 'ease-out' });
  });

  const registerData = {
    reference: {
      kicker: 'CONTEXTE ET PRINCIPES',
      title: 'Comprendre l’architecture de sauvegarde',
      copy: 'Le registre de référence rassemble les choix, les dépendances et les raisons qui rendent la procédure intelligible dans la durée.',
      state: 'ajour', label: 'À jour', time: 'vérifié il y a 3 jours'
    },
    operationnel: {
      kicker: 'PROCÉDURE · 6 ÉTAPES',
      title: 'Restaurer la base en production',
      copy: 'Le registre opérationnel transforme le même savoir en une suite d’actions vérifiables, directement utilisable en situation.',
      state: 'bientot', label: 'Bientôt à vérifier', time: 'vérifié il y a 24 jours'
    }
  };
  const tabs = Array.from(document.querySelectorAll('.register-switch button'));
  tabs.forEach((tab) => tab.addEventListener('click', () => {
    const data = registerData[tab.dataset.register];
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    document.getElementById('register-kicker').textContent = data.kicker;
    document.getElementById('register-title').textContent = data.title;
    document.getElementById('register-copy').textContent = data.copy;
    document.getElementById('register-label').textContent = data.label;
    document.getElementById('register-time').textContent = data.time;
    document.getElementById('register-state').className = 'register-state state-' + data.state;
  }));

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced) {
    document.querySelectorAll('.reveal').forEach((item) => item.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((item) => observer.observe(item));
  }

  renderVivacity(-67);
}());
