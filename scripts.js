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

    // EmailJS details
    const serviceID = 'service_8d7h6zn';
    const adminTemplateID = 'template_cpblplr'; // sends message to you
    const userReplyTemplateID = 'template_oz8bp8o'; // replace with your second template ID

    // Send to admin (you)
    emailjs.sendForm(serviceID, adminTemplateID, contactForm, 'TxiivKvfYJwC4ym4u')
    .then(() => {
        // After admin email succeeds, send auto-response to user
        return emailjs.send(serviceID, userReplyTemplateID, {
            user_name: contactForm.user_name.value,
            user_email: contactForm.user_email.value,
            user_message: contactForm.user_message.value,
            reply_to: contactForm.user_email.value // add this line
        });

    })
    .then(() => {
        // Show success message
        contactMessage.style.display = 'block';
        contactMessage.innerHTML = '<span>Message Successfully Sent</span>';

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.innerHTML = '';
        }, 5000);

        contactForm.reset();
    })
    .catch((error) => {
        // Handle error
        contactMessage.style.display = 'block';
        contactMessage.innerHTML = '<img src="images/error.png" alt="Error"><span>Failed to send message. Please try again later.</span>';

        setTimeout(() => {
            contactMessage.style.display = 'none';
            contactMessage.innerHTML = '';
        }, 5000);

        console.error('EmailJS Error:', error);
    });
};

contactForm.addEventListener('submit', sendEmail);

