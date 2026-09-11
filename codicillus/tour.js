(function () {
  'use strict';

  const screens = {
    accueil: {
      count: '01 / 03',
      html: `
        <div class="demo-header"><span>⌂ &nbsp; Accueil</span><div><button type="button">＋&nbsp; Créer</button><i>AB</i></div></div>
        <div class="demo-dashboard">
          <h3>Bonjour.</h3>
          <p class="demo-lead"><b>89</b> notes dans votre bibliothèque, dont <b>84</b> sont actuellement à jour.</p>
          <div class="demo-wide-search">Rechercher une note, une fiche, un signet…</div>
          <section class="demo-watch">
            <p>À SURVEILLER</p>
            <div><span class="dot soon"></span><b>3 notes arrivent bientôt à échéance</b><small>Vérification prévue dans les 10 prochains jours</small></div>
            <div><span class="dot review"></span><b>2 notes nécessitent votre attention</b><small>Leur période de validité est dépassée</small></div>
            <div class="demo-counts"><span><i class="dot fresh"></i><strong>84</strong> À jour</span><span><i class="dot soon"></i><strong>3</strong> Bientôt</span><span><i class="dot review"></i><strong>2</strong> À revoir</span></div>
            <aside><strong>2 notes critiques</strong><span>La plus ancienne doit être revue depuis 21 jours.</span></aside>
          </section>
          <div class="demo-lists">
            <section><p>RÉCEMMENT CONSULTÉES <small>7 derniers jours⌄</small></p><b><i>▧</i> Plan de continuité d’activité <small><em class="dot fresh"></em> À jour</small></b><b><i>▧</i> Référentiel des KPI <small><em class="dot soon"></em> Bientôt</small></b><b><i>▧</i> Cartographie applicative <small><em class="dot fresh"></em> À jour</small></b></section>
            <section><p>LES PLUS CONSULTÉES <small>30 derniers jours⌄</small></p><b><i>▥</i> Politique de sauvegarde <small><em class="dot review"></em> À revoir</small></b><b><i>▥</i> Cartographie applicative <small><em class="dot fresh"></em> À jour</small></b><b><i>▥</i> Référentiel des KPI <small><em class="dot soon"></em> Bientôt</small></b></section>
          </div>
          <section class="demo-univers"><p>VOS UNIVERS</p><div><b>✣ &nbsp; Gouvernance</b><span>18 notes</span><span><i class="dot fresh"></i> 17</span><span><i class="dot soon"></i> 1</span><em></em></div><div><b>▤ &nbsp; Infrastructure</b><span>24 notes</span><span><i class="dot fresh"></i> 21</span><span><i class="dot review"></i> 3</span><em></em></div></section>
        </div>`
    },
    note: {
      count: '02 / 03',
      html: `
        <div class="demo-header"><span>⌂ &nbsp;›&nbsp; Infrastructure &nbsp;›&nbsp; Plan de continuité</span><div><small>Dernière modification<br>il y a 4 jours</small><button class="primary" type="button">✎&nbsp; Modifier</button><button type="button">⋮</button></div></div>
        <div class="demo-note">
          <nav class="demo-summary-nav"><p>SOMMAIRE</p><b><span>01</span>Périmètre et objectifs</b><span><i>02</i> Responsabilités</span><span><i>03</i> Services essentiels</span><span><i>04</i> Activation du plan</span></nav>
          <main class="demo-document">
            <div class="demo-tabs"><b>▣&nbsp; Référence</b><span>⚙&nbsp; Opérationnel</span></div>
            <div class="demo-vivacity"><span class="dot fresh"></span><b>À jour</b><span>Vérifiée le 2 septembre 2026</span><span>Prochaine vérification : 1 déc. 2026</span><span>Voir l’historique⌄</span></div>
            <h3>Plan de continuité d’activité</h3>
            <div class="demo-tags"><span>Continuité</span><span>Infrastructure</span><span>Gouvernance</span><button>＋ Ajouter une étiquette</button></div>
            <div class="demo-meta"><span><i>□</i><b>12 juin 2026</b><small>Date de création</small></span><span><i>♙</i><b>Équipe infrastructure</b><small>Rédacteur</small></span><span><i>◉</i><b>46 consultations</b><small>12 sur les 30 derniers jours</small></span></div>
            <div class="demo-rule">— &nbsp;⌁&nbsp; —</div>
            <p class="demo-summary">Organisation, responsabilités et procédures permettant de maintenir les services essentiels en situation dégradée.</p>
            <h4><small>01</small> Périmètre et objectifs</h4>
            <p>Le plan couvre les applications critiques, les infrastructures d’hébergement et les chaînes de décision associées.</p>
          </main>
          <aside class="demo-context"><p>ACTIONS</p><span>✎ &nbsp; Modifier la référence</span><span>✎ &nbsp; Modifier l’opérationnel</span><span>◷ &nbsp; Historique des versions</span><hr><p>CONTEXTE</p><b>Infrastructure</b><span>└ Continuité</span><hr><p>RELATIONS</p><b>7 notes liées &nbsp;›</b><hr><section><p>VIVACITÉ (RÉFÉRENCE)</p><strong><i class="dot fresh"></i> À jour</strong><small>Vérifiée le 2 septembre 2026</small><div class="demo-timeline"><i></i><b></b><em></em></div></section></aside>
        </div>`
    },
    historique: {
      count: '03 / 03',
      html: `
        <div class="demo-header"><span>⌂ &nbsp;›&nbsp; Infrastructure &nbsp;›&nbsp; Plan de continuité &nbsp;›&nbsp; historique</span><div><button type="button">←&nbsp; Retour à la note</button></div></div>
        <div class="demo-history">
          <p class="demo-kicker">HISTORIQUE</p>
          <h3>Plan de continuité d’activité</h3>
          <p>Versions du contenu, vérifications et changements d’état de vivacité, du plus récent au plus ancien. Chaque registre a son propre cycle.</p>
          <div class="demo-filters"><b>Tous</b><span>Référence</span><span>Opérationnel</span></div>
          <ol>
            <li class="soon"><i></i><time><b>4 septembre 2026</b><small>OPÉRATIONNEL</small></time><div><b>Passage automatique à « À vérifier »</b><span>Échéance de la vérification atteinte (validité : 30 jours).</span></div></li>
            <li><i></i><time><b>2 septembre 2026</b><small>RÉFÉRENCE</small></time><div><b>Contenu modifié par l’équipe infrastructure</b><span>Responsabilités et périmètre précisés. Version conservée.</span><em>v2.3.0 &nbsp;·&nbsp; révision de fond</em></div></li>
            <li class="fresh"><i></i><time><b>5 août 2026</b><small>OPÉRATIONNEL</small></time><div><b>Version opérationnelle créée et vérifiée</b><span>Durée de validité : 30 jours.</span></div></li>
            <li class="fresh"><i></i><time><b>12 juin 2026</b><small>RÉFÉRENCE</small></time><div><b>Création de la note</b><span>Première version publiée dans Infrastructure › Continuité.</span></div></li>
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
