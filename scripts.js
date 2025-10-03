const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');
const menuIcon = menuToggle.querySelector('i');
const navLinks = navList.querySelectorAll('a');

function toggleMenu() {
  navList.classList.toggle('open');
  document.body.classList.toggle('no-scroll'); // lock/unlock scroll

  // Toggle icon
  if (navList.classList.contains('open')) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
}

// Open/close on menu icon click
menuToggle.addEventListener('click', toggleMenu);

// Close navbar when a link is clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navList.classList.contains('open')) {
      toggleMenu();
    }
  });
});
