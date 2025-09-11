// GSAP Animations for Portfolio Website

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Hero section animations
    const heroTimeline = gsap.timeline();
    
    heroTimeline
        .from('.hero-subtitle', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        })
        .from('.hero-title', {
            duration: 1,
            y: 50,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.cta-button', {
            duration: 0.8,
            y: 30,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.3')
        .from('.hero-image', {
            duration: 1.2,
            x: 100,
            opacity: 0,
            ease: 'power2.out'
        }, '-=0.5');
    
    // Animate floating bubbles
    gsap.from('.bubble', {
        duration: 1.5,
        scale: 0,
        opacity: 0,
        ease: 'back.out(1.7)',
        stagger: 0.2
    });
    
    // Navigation scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });
    
    // Section reveal animations
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.from(header.children, {
            duration: 1,
            y: 50,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Project cards animation
    gsap.utils.toArray('.project-card').forEach(card => {
        gsap.from(card, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Photography items animation
    gsap.utils.toArray('.photo-item').forEach((item, index) => {
        gsap.from(item, {
            duration: 1,
            x: index % 2 === 0 ? -100 : 100,
            opacity: 0,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Client logos animation
    gsap.utils.toArray('.clients-grid img').forEach(logo => {
        gsap.from(logo, {
            duration: 0.6,
            scale: 0,
            opacity: 0,
            ease: 'back.out(1.7)',
            stagger: 0.1,
            scrollTrigger: {
                trigger: '.clients-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Testimonials animation
    gsap.utils.toArray('.testimonial-item').forEach(testimonial => {
        gsap.from(testimonial, {
            duration: 0.8,
            y: 50,
            opacity: 0,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
                trigger: '.testimonials-grid',
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    });
    
    // Social stats counter animation
    gsap.utils.toArray('.stat-number').forEach(stat => {
        const targetNumber = stat.textContent;
        const cleanNumber = parseInt(targetNumber.replace(/[^\d]/g, ''));
        
        gsap.from(stat, {
            duration: 2,
            textContent: 0,
            ease: 'power2.out',
            snap: { textContent: 1 },
            scrollTrigger: {
                trigger: stat,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            onUpdate: function() {
                const currentValue = Math.ceil(this.targets()[0].textContent);
                const suffix = targetNumber.includes('k') ? 'k' : '';
                stat.textContent = currentValue + suffix;
            }
        });
    });
    
    // Contact form animation
    gsap.from('.contact-form', {
        duration: 1,
        x: 100,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    gsap.from('.contact-info', {
        duration: 1,
        x: -100,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.contact-info',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power2.inOut'
                });
            }
        });
    });
    
    // Parallax effect for hero background elements
    gsap.to('.bubble', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Project card hover effects
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                y: -10,
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                ease: 'power2.out'
            });
        });
        
        card.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                y: 0,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                ease: 'power2.out'
            });
        });
    });
    
    // CTA button hover effect
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('mouseenter', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1.05,
                ease: 'power2.out'
            });
        });
        
        ctaButton.addEventListener('mouseleave', function() {
            gsap.to(this, {
                duration: 0.3,
                scale: 1,
                ease: 'power2.out'
            });
        });
    }
    
    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Animate submit button
            const submitBtn = this.querySelector('.submit-btn');
            gsap.to(submitBtn, {
                duration: 0.2,
                scale: 0.95,
                ease: 'power2.out',
                yoyo: true,
                repeat: 1
            });
            
            // Show success message (replace with actual form handling)
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }, 500);
        });
    }
    
    // Add loading animation
    gsap.set('body', { opacity: 0 });
    gsap.to('body', {
        duration: 0.5,
        opacity: 1,
        ease: 'power2.out'
    });
    
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});