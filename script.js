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

// Mobile menu toggle
(function () {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    });
  }
})(); 