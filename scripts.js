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


const contactForm = document.getElementById('applicationForm'),
      contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8d7h6zn', 'template_cpblplr', contactForm, 'TxiivKvfYJwC4ym4u')
    .then(() => {
        contactMessage.style.display = 'block'; // Show success message
        contactMessage.innerHTML = '<span>Message Successfully Sent</span>';

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.innerHTML = ''; // Clear the message
        }, 5000);

        contactForm.reset();
    })
    .catch((error) => {
        contactMessage.style.display = 'block'; // Show error message
        contactMessage.innerHTML = '<img src="images/error.png" alt="Error"><span>Failed to send application. Please try again later.</span>';

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.innerHTML = ''; // Clear the message
        }, 5000);
    });
};

contactForm.addEventListener('submit', sendEmail);
