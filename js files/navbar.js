document.addEventListener('DOMContentLoaded', function() {
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');

  navbarToggle.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
    if (navbarMenu.classList.contains('active')) {
      navbarMenu.style.right = '0';
      navbarMenu.style.transition = 'right 0.3s ease';
    } else {
      navbarMenu.style.right = '-250px';
      navbarMenu.style.transition = 'right 0.3s ease';
    }
  });

  document.addEventListener('click', function(event) {
    if (!navbarMenu.contains(event.target) && !navbarToggle.contains(event.target)) {
      navbarMenu.style.right = '-250px';
      navbarMenu.style.transition = 'right 0.3s ease';
      navbarMenu.classList.remove('active');
    }
  });
});