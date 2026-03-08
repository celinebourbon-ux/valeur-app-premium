/* V.A.L.E.U.R© — App JS Premium
   © 2026 Céline Bourbon, Psychologue
   Tous droits réservés. Reproduction interdite. */

'use strict';

/* ── Navigation scroll effect ── */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* ── Burger menu mobile ── */
const burger = document.getElementById('burger');
const navLinks = document.querySelector('.nav-links');
if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const open = navLinks.style.display === 'flex';
    navLinks.style.display = open ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '64px';
    navLinks.style.left = '0'; navLinks.style.right = '0';
    navLinks.style.background = 'rgba(11,15,26,0.98)';
    navLinks.style.padding = '20px';
    navLinks.style.gap = '16px';
    navLinks.style.borderBottom = '1px solid rgba(212,175,55,0.12)';
  });
}

/* ── Reveal animations au scroll ── */
const revealElements = document.querySelectorAll(
  '.masque-card, .why-card, .etape, .stat, .offre-card'
);
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  revealElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.55s ease ${i * 0.06}s, transform 0.55s ease ${i * 0.06}s`;
    revealObs.observe(el);
  });
});

/* ── Smooth scroll nav ── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    if (navLinks) navLinks.style.display = 'none';
  });
});

/* ── Partage : copier le lien ── */
function copyLink() {
  const url = window.location.href;
  navigator.clipboard.writeText(url).then(() => {
    const btn = document.getElementById('copyBtn');
    if (btn) {
      btn.classList.add('copied');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M5 13l4 4L19 7"/>
        </svg>
        Lien copié !`;
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = `
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>
          </svg>
          Copier le lien`;
      }, 3000);
    }
  }).catch(() => {
    prompt('Copie ce lien :', url);
  });
}
window.copyLink = copyLink;

/* ── Protection copyright ── */
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
  if (e.key === 'F12') e.preventDefault();
  if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['i','j','c'].includes(e.key.toLowerCase())) e.preventDefault();
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'u') e.preventDefault();
});

/* ── Console signature ── */
console.log('%c V.A.L.E.U.R© ', 'background:#D4AF37;color:#0B0F1A;font-size:18px;font-weight:bold;padding:4px 8px;border-radius:4px;');
console.log('%c© 2026 Céline Bourbon, Psychologue — Tous droits réservés.', 'color:#8896A8;font-size:12px;');