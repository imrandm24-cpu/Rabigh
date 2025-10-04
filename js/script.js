// Initialize AOS Animation Library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Wait for the DOM to be fully loaded
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

    // Smooth scrolling for navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate skill bars on scroll
    const skillSection = document.querySelector('.skills-section');
    
    if (skillSection) {
        const progressBars = document.querySelectorAll('.progress-bar');
        
        const animateSkills = function() {
            const sectionPos = skillSection.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.3;
            
            if (sectionPos < screenPos) {
                progressBars.forEach(bar => {
                    const width = bar.getAttribute('aria-valuenow') + '%';
                    bar.style.width = width;
                });
                window.removeEventListener('scroll', animateSkills);
            }
        };
        
        window.addEventListener('scroll', animateSkills);
        // Trigger once on load
        animateSkills();
    }

    // Form validation
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Simple validation
            if (name === '' || email === '' || message === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // If validation passes, you would normally send the form data to a server
            // For this demo, we'll just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }

    // Project hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.querySelector('.project-info').style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.querySelector('.project-info').style.transform = 'translateY(0)';
        });
    });

    // Add active class to nav items on scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Typing effect for hero section
    const typingElement = document.querySelector('.hero-section .lead');
    
    if (typingElement) {
        const text = typingElement.textContent;
        typingElement.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < text.length) {
                typingElement.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }
});