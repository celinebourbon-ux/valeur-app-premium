// V.A.L.E.U.R© App - Main JavaScript

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Animation au scroll pour les cartes
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Appliquer l'animation aux cartes
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.masque-card, .etape-card, .stat-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
  });
});

// Navigation: changement de style au scroll
let lastScroll = 0;
const nav = document.querySelector('.nav-premium');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    nav.style.background = 'rgba(13, 17, 23, 0.95)';
    nav.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
  } else {
    nav.style.background = 'rgba(13, 17, 23, 0.85)';
    nav.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// Protection contre le clic droit (copyright)
document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

// Désactivation F12 et raccourcis dev tools
document.addEventListener('keydown', (e) => {
  if (e.key === 'F12' || 
      (e.ctrlKey && e.shiftKey && e.key === 'I') ||
      (e.ctrlKey && e.shiftKey && e.key === 'C') ||
      (e.ctrlKey && e.key === 'U')) {
    e.preventDefault();
  }
});

// Watermark copyright invisible
const addWatermark = () => {
  const watermark = document.createElement('div');
  watermark.textContent = '© V.A.L.E.U.R© - Céline Bourbon 2026';
  watermark.style.cssText = `
    position: fixed;
    bottom: -100px;
    right: -100px;
    opacity: 0.01;
    pointer-events: none;
    font-size: 1px;
  `;
  document.body.appendChild(watermark);
};

addWatermark();

console.log('%c© V.A.L.E.U.R© 2026 - Céline Bourbon, Psychologue', 'color: #D4AF37; font-size: 16px; font-weight: bold;');
console.log('%cTous droits réservés. Reproduction interdite.', 'color: #8B949E; font-size: 12px;');