// Show popup function for map pins
function showPopup(title, description) {
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupDesc').textContent = description;
    document.getElementById('pinPopup').style.display = 'block';
}

// Close popup function
function closePopup() {
    document.getElementById('pinPopup').style.display = 'none';
}

// Close popup when clicking outside
window.addEventListener('click', function(event) {
    const popup = document.getElementById('pinPopup');
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const message = this.querySelector('textarea').value;

    if (name && email && message) {
        alert(`Thank you ${name}! We'll get back to you soon at ${email}`);
        this.reset();
    }
});

// Add scroll animation for cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and culture items
document.querySelectorAll('.card, .culture-item, .island-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize map
document.addEventListener('DOMContentLoaded', function() {
    console.log('Website loaded! Welcome to the Philippines 🇵🇭');
    console.log('Click on the map pins to explore top tourist destinations!');
});
