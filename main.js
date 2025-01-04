// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Search functionality
const searchBtn = document.getElementById('search-btn');

searchBtn.addEventListener('click', () => {
    // Implement search functionality
    console.log('Search clicked');
});

// Newsletter subscription
const newsletterForm = document.querySelector('.newsletter');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        
        if (email) {
            showNotification('Thank you for subscribing!');
            newsletterForm.querySelector('input').value = '';
        }
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}