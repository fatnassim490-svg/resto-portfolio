// Toggle du menu burger sur mobile
const burgerBtn = document.getElementById('burger-btn');
const menuMobile = document.getElementById('menu-mobile');

if (burgerBtn && menuMobile) {
  // Ouvre/ferme le menu au clic sur le burger
  burgerBtn.addEventListener('click', () => {
    const isOpen = menuMobile.classList.toggle('open');
    burgerBtn.classList.toggle('open', isOpen);
    burgerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    document.body.classList.toggle('menu-open', isOpen);
  });

  // Ferme le menu automatiquement quand on clique sur un lien
  menuMobile.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuMobile.classList.remove('open');
      burgerBtn.classList.remove('open');
      burgerBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('menu-open');
    });
  });
}
