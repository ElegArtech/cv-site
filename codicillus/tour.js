(function () {
  'use strict';

  const screens = {
    accueil: {
      count: '01 / 03',
      html: `
        <div class="demo-header"><span>Accueil</span><button type="button">+ Créer</button></div>
        <div class="demo-dashboard">
          <h3>Votre documentation, aujourd’hui.</h3>
          <p class="demo-lead">89 notes dans quatre univers.</p>
          <div class="demo-wide-search">Rechercher une note, une fiche, un signet…</div>
          <section class="demo-watch">
            <p>À SURVEILLER</p>
            <div><span class="dot soon"></span><b>3 notes arrivent bientôt à échéance</b><small>Vérification prévue dans les 10 prochains jours</small></div>
            <div><span class="dot review"></span><b>2 notes nécessitent votre attention</b><small>Leur période de validité est dépassée</small></div>
            <aside><strong>84</strong><span>notes à jour</span></aside>
          </section>
          <div class="demo-lists">
            <section><p>RÉCEMMENT CONSULTÉES</p><b>Plan de continuité d’activité</b><b>Référentiel des KPI</b><b>Cartographie applicative</b></section>
            <section><p>VOS UNIVERS</p><b>Gouvernance <small>18 notes</small></b><b>Applications <small>31 notes</small></b><b>Infrastructure <small>24 notes</small></b></section>
          </div>
        </div>`
    },
    note: {
      count: '02 / 03',
      html: `
        <div class="demo-header"><span>Infrastructure › Sauvegardes › Plan de continuité</span><button type="button">Modifier</button></div>
        <div class="demo-note">
          <div class="demo-tabs"><b>Référence</b><span>Opérationnel</span></div>
          <div class="demo-vivacity"><span class="dot fresh"></span><b>À jour</b><span>Vérifiée le 2 septembre</span><span>Prochaine vérification dans 81 jours</span></div>
          <p class="demo-kicker">NOTE DE RÉFÉRENCE</p>
          <h3>Plan de continuité d’activité</h3>
          <div class="demo-tags"><span>Continuité</span><span>Infrastructure</span><span>Gouvernance</span></div>
          <p class="demo-summary">Organisation, responsabilités et procédures permettant de maintenir les services essentiels en situation dégradée.</p>
          <h4><small>01</small> Périmètre et objectifs</h4>
          <p>Le plan couvre les applications critiques, les infrastructures d’hébergement et les chaînes de décision associées.</p>
          <aside class="demo-context"><p>CONTEXTE</p><b>Infrastructure</b><span>└ Sauvegardes</span><hr><p>RELATIONS</p><b>7 notes liées</b></aside>
        </div>`
    },
    historique: {
      count: '03 / 03',
      html: `
        <div class="demo-header"><span>Infrastructure › Sauvegardes › Historique</span><button type="button">← Retour à la note</button></div>
        <div class="demo-history">
          <p class="demo-kicker">HISTORIQUE</p>
          <h3>Plan de continuité d’activité</h3>
          <p>Versions, vérifications et changements de vivacité.</p>
          <div class="demo-filters"><b>Tous</b><span>Référence</span><span>Opérationnel</span></div>
          <ol>
            <li class="fresh"><i></i><time>2 sept. 2026 · RÉFÉRENCE</time><b>Note marquée comme vérifiée</b><span>Le cycle repart pour 90 jours.</span></li>
            <li><i></i><time>28 août 2026 · OPÉRATIONNEL</time><b>Procédure de reprise mise à jour</b><span>Version 2.3 · responsabilités précisées.</span></li>
            <li class="soon"><i></i><time>23 août 2026 · RÉFÉRENCE</time><b>Passage à « Bientôt à vérifier »</b><span>Échéance prévue dans 10 jours.</span></li>
            <li><i></i><time>12 juin 2026 · RÉFÉRENCE</time><b>Création de la note</b><span>Première version publiée.</span></li>
          </ol>
        </div>`
    }
  };

  const workspace = document.getElementById('demo-workspace');
  const counter = document.getElementById('tour-counter');
  const steps = Array.from(document.querySelectorAll('.tour-step'));
  let current = 'accueil';

  function showScreen(key) {
    if (key === current) return;
    const screen = screens[key];
    current = key;
    workspace.classList.add('changing');
    window.setTimeout(() => {
      workspace.innerHTML = screen.html;
      workspace.dataset.screen = key;
      counter.textContent = screen.count;
      workspace.classList.remove('changing');
    }, 170);
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
