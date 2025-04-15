// Interface of One - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    if (mobileMenuBtn) mobileMenuBtn.classList.remove('active');
                }
                
                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Tabs Functionality
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabBtns.length && tabContents.length) {
        tabBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons and contents
                tabBtns.forEach(b => b.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Show corresponding content
                const targetId = this.getAttribute('data-target');
                const targetContent = document.querySelector(targetId);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });
    }
    
    // Scroll Animation
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animated');
            }
        });
    };
    
    // Run once on load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
    
    // Form Validation
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const nameInput = document.querySelector('#name');
            const emailInput = document.querySelector('#email');
            const messageInput = document.querySelector('#message');
            
            // Simple validation
            if (nameInput && nameInput.value.trim() === '') {
                isValid = false;
                nameInput.classList.add('error');
            } else if (nameInput) {
                nameInput.classList.remove('error');
            }
            
            if (emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {
                    isValid = false;
                    emailInput.classList.add('error');
                } else {
                    emailInput.classList.remove('error');
                }
            }
            
            if (messageInput && messageInput.value.trim() === '') {
                isValid = false;
                messageInput.classList.add('error');
            } else if (messageInput) {
                messageInput.classList.remove('error');
            }
            
            if (isValid) {
                // In a real application, you would send the form data to a server
                // For this demo, we'll just show a success message
                contactForm.innerHTML = '<div class="success-message">Thank you for your message! We will get back to you soon.</div>';
            }
        });
    }
});
