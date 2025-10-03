// Basic functionality for Muhammad Imran's portfolio
document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Dark/Light mode toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.querySelector('body');
    
    if (themeToggle) {
        // Check for saved theme preference
        if (localStorage.getItem('dark-mode') === 'true') {
            body.classList.add('dark-mode');
        }

        // Toggle theme
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
        });
    }

    // Simple chatbot toggle
    const chatbotToggle = document.querySelector('.chatbot-toggle');
    const chatbotBox = document.querySelector('.chatbot-box');
    const closeChat = document.querySelector('.close-chat');
    
    if (chatbotToggle && chatbotBox && closeChat) {
        chatbotToggle.addEventListener('click', () => {
            chatbotBox.style.display = 'block';
        });

        closeChat.addEventListener('click', () => {
            chatbotBox.style.display = 'none';
        });
    }

    // Contact form submission
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});