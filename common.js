// ═══ NAV TOGGLE (menú móvil) ═══
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

// ═══ LINK ACTIVO SEGÚN LA PÁGINA ACTUAL ═══
(function marcarActivo() {
  let pagina = location.pathname.split('/').pop();
  if (pagina === '') pagina = 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === pagina) a.classList.add('active');
  });
})();

// ═══ FADE UP AL APARECER EN PANTALLA ═══
const observerFadeUp = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-up').forEach(el => observerFadeUp.observe(el));
