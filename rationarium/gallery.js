// SPDX-License-Identifier: MIT — see ../LICENSE and ../LICENSING.md.
(() => {
  'use strict';

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const tabs = Array.from(document.querySelectorAll('.gallery-tab'));
  const frame = document.querySelector('#gallery-frame');
  const description = document.querySelector('#gallery-description');
  const gallery = document.querySelector('[data-fx="galerie"]');

  tabs.forEach(tab => tab.addEventListener('click', () => {
    if (tab.getAttribute('aria-pressed') === 'true') return;
    tabs.forEach(item => item.setAttribute('aria-pressed', String(item === tab)));
    frame.src = tab.dataset.src;
    frame.title = tab.textContent;
    description.textContent = tab.dataset.description;
    if (!reducedMotion.matches) {
      gallery.style.animation = 'none';
      void gallery.offsetWidth;
      gallery.style.animation = 'riseIn .4s ease';
    }
  }));

  if (reducedMotion.matches) return;

  function countUp(element) {
    const target = Number(element.dataset.count);
    const start = performance.now();
    function tick(time) {
      const progress = Math.min(1, (time - start) / 900);
      element.textContent = String(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // Le contenu reste visible si le navigateur ne prend pas en charge l’observation.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        observer.unobserve(element);
        const siblings = Array.from(element.parentElement.children)
          .filter(child => child.hasAttribute('data-reveal'));
        const delay = Math.max(0, siblings.indexOf(element)) * 80;
        element.style.transition = 'opacity .55s ease, transform .55s cubic-bezier(.22,.61,.36,1)';
        element.style.transitionDelay = delay + 'ms';
        requestAnimationFrame(() => {
          element.style.opacity = '1';
          element.style.transform = 'none';
        });
        setTimeout(() => {
          element.style.transitionDelay = '';
          element.style.transition = '';
        }, delay + 650);
        const counter = element.querySelector('[data-count]');
        if (counter) countUp(counter);
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('[data-reveal]').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(22px)';
      observer.observe(element);
    });
  }

  const frames = Array.from(document.querySelectorAll('[data-par]'));
  frames.forEach(element => element.addEventListener('animationend', () => {
    element.style.animation = 'none';
  }, { once: true }));
  const header = document.querySelector('[data-fx="header"]');
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      header.style.boxShadow = window.scrollY > 8 ? '0 2px 14px rgba(20,22,28,.1)' : 'none';
      frames.forEach(element => {
        if (element.style.animation === 'none') {
          element.style.transform = `translateY(${Math.min(80, window.scrollY * Number(element.dataset.par))}px)`;
        }
      });
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
