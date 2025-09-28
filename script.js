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
    // Handle both click and touch events for iPhone
    const toggleMenu = (e) => {
      e.preventDefault();
      e.stopPropagation();
      mobileToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    };
    
    mobileToggle.addEventListener('click', toggleMenu);
    mobileToggle.addEventListener('touchend', toggleMenu);
    
    // Close menu when clicking on a link
    const navLinksItems = navLinks.querySelectorAll('a');
    navLinksItems.forEach(link => {
      const closeMenu = () => {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      };
      link.addEventListener('click', closeMenu);
      link.addEventListener('touchend', closeMenu);
    });
    
    // Close menu when clicking outside (improved for iPhone)
    const closeMenuOutside = (e) => {
      if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navLinks.classList.remove('active');
      }
    };
    
    document.addEventListener('click', closeMenuOutside);
    document.addEventListener('touchend', closeMenuOutside);
    
    // Prevent body scroll when menu is open (iPhone Safari fix)
    const toggleBodyScroll = () => {
      if (navLinks.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      } else {
        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }
    };
    
    // Watch for class changes
    const observer = new MutationObserver(toggleBodyScroll);
    observer.observe(navLinks, { attributes: true, attributeFilter: ['class'] });
  }
})(); 