// Get the navbar container element
const navbarContainer = document.querySelector('.navbar-container');

// Create the navbar HTML
const navbarHTML = `
  <div class="navbar-logo">
    <a href="/index.html">College Room Locator</a>
  </div>
  <button class="navbar-toggle">
    <i class="fas fa-bars"></i>
  </button>
  <ul class="navbar-menu">
    <button class="navbar-close">&times;</button>
    <li><a href="/index.html">Home</a></li>
    <li><a href="/main page/teacher.html">Teachers</a></li>
    <li><a href="/main page/shops.html">Shops</a></li>
    <li><a href="/main page/classrooms.html">Classrooms</a></li>
    <li><a href="/main page/clubs.html">Clubs</a></li>
  </ul>
  <div class="overlay"></div>
`;

// Append the navbar HTML to the navbar container
navbarContainer.innerHTML = navbarHTML;

// Select elements
const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-menu');
const navbarClose = document.querySelector('.navbar-close');
const overlay = document.querySelector('.overlay');

// Function to open the menu
function openMenu() {
  navbarMenu.classList.add('active');
  overlay.classList.add('active');
}

// Function to close the menu
function closeMenu() {
  navbarMenu.classList.remove('active');
  overlay.classList.remove('active');
}

// Toggle menu on click
navbarToggle.addEventListener('click', openMenu);
navbarClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); // FIX: Clicking outside now closes menu

// Close menu when clicking a link (on mobile)
document.querySelectorAll('.navbar-menu li a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});
