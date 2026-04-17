// Smooth scroll helper: handles anchor clicks and initial hash scroll
(function () {
  function getNavbarHeight() {
    const nav = document.querySelector('.site-navbar');
    return nav ? nav.offsetHeight : 0;
  }

  function scrollToHash(hash) {
    if (!hash) return;
    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    const offset = el.getBoundingClientRect().top + window.pageYOffset - getNavbarHeight();
    window.scrollTo({ top: offset, behavior: 'smooth' });
  }

  // Delegate anchor clicks to handle internal hashes
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const hash = href.startsWith('#') ? href : ('#' + href.split('#').slice(1).join('#'));
    const target = document.getElementById(hash.replace('#', ''));
    if (target) {
      e.preventDefault();
      scrollToHash(hash);
      try { history.pushState(null, '', hash); } catch (err) {}
    }
  });

  // On load, if there's a hash, scroll to it (after layout)
  window.addEventListener('load', () => {
    if (location.hash) {
      setTimeout(() => scrollToHash(location.hash), 80);
    }
  });
})();
