// Smooth Scroll Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetId && targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Submission Alert (Without Server)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Simulated form submission
        alert("Thank you! Your message has been received.");
        contactForm.reset(); // Clear the form
    });
}
