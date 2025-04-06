// Smooth Scroll Effect
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form Submission Alert (Improved)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);

        // Send data to server (replace with your server endpoint)
        fetch('/submit-contact-form', {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (response.ok) {
                // Display success message
                alert("Thank you! Your message has been received.");
                contactForm.reset(); // Clear the form
            } else {
                // Display error message
                alert("An error occurred. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again.");
        });
    });
}