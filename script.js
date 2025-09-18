// Active link highlight
(function () {
  const path = location.pathname.split('/').pop() || 'index.html';
  const links = document.querySelectorAll('[data-nav]');
  links.forEach((link) => {
    const href = link.getAttribute('href');
    if ((path === '' && href === 'index.html') || href === path) {
      link.classList.add('active');
    }
  });
})(); 