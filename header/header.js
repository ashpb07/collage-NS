// Get the navbar container element
const navbarContainer = document.querySelector('.navbar-container');

// Create the navbar HTML
const navbarHTML = `
  <div class="navbar-logo">
    <a href="index.html">College Room Locator</a>
  </div>
  <ul class="navbar-menu">
    <li><a href="/index.html">Home</a></li>
    <li><a href="/main page/teachers.html">Teachers</a></li>
    <li><a href="/main page/shops.html">Shops</a></li>
    <li><a href="/main page/classrooms.html">Classrooms</a></li>
  </ul>
  <div class="navbar-toggle">
    <i class="fas fa-bars"></i>
  </div>
`;

// Append the navbar HTML to the navbar container
navbarContainer.innerHTML = navbarHTML;

// Add event listener to toggle the navbar menu on mobile devices
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');

navbarToggle.addEventListener('click', () => {
  navbarMenu.classList.toggle('show');
});