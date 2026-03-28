// Ehsanullah Carpenter - JavaScript File
// Yeh script mobile menu aur contact form ke liye hai

// DOM content load hone ka wait karo
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const navigation = document.querySelector('.navigation');
    
    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', function() {
            navigation.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Form submit hone se roko
            
            // Form data collect karo
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (name && email && message) {
                // Yahan real mein email send kar sakte hain
                // Abhi ke liye alert show karo
                alert(`Thank you ${name}! Aapka message receive ho gaya hai. Hum jaldi contact karenge.`);
                
                // Form clear karo
                contactForm.reset();
            } else {
                alert('Please saare fields fill karein.');
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Mobile menu close karo
            if (navigation.classList.contains('active')) {
                navigation.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Image zoom effect on hover (extra animation)
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Service cards par wood polish effect
    const serviceCards = document.querySelectorAll('.serviceCard');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'var(--lightWood)';
            this.style.borderColor = 'var(--accentColor)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'var(--beige)';
            this.style.borderColor = 'transparent';
        });
    });
});

// Window resize par mobile menu handle karo
window.addEventListener('resize', function() {
    const navigation = document.querySelector('.navigation');
    const menuToggle = document.getElementById('menuToggle');
    
    if (window.innerWidth > 768) {
        // Desktop par menu hamesha show karo
        if (navigation) navigation.classList.remove('active');
        if (menuToggle) menuToggle.classList.remove('active');
    }
});