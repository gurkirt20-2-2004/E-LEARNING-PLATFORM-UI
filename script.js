// script.js for E-Learning Platform UI

document.addEventListener('DOMContentLoaded', () => {
    // Contact Form Submission Alert
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you shortly.');
            contactForm.reset();
        });
    }

    // Progress Bar Animation on Profile Page
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-in-out';
            bar.style.width = width;
        }, 200);
    });
});
