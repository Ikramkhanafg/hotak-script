// Ahsan Ullah Carpenter - JavaScript File
// Yeh script mobile menu aur contact form ke liye hai

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navigation = document.querySelector('.navigation');
    const themeToggle = document.getElementById('themeToggle');
    const mobileBreakpoint = 768;
    const themeStorageKey = 'ahsan-ullah-theme';

    function applyTheme(theme) {
        const activeTheme = theme === 'dark' ? 'dark' : 'light';
        document.body.setAttribute('data-theme', activeTheme);

        if (themeToggle) {
            const icon = themeToggle.querySelector('i');
            themeToggle.setAttribute('aria-pressed', String(activeTheme === 'dark'));
            themeToggle.setAttribute('aria-label', activeTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');

            if (icon) {
                icon.className = activeTheme === 'dark' ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
            }
        }
    }

    applyTheme(localStorage.getItem(themeStorageKey) || 'light');

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const nextTheme = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
            localStorage.setItem(themeStorageKey, nextTheme);
        });
    }

    function closeMobileMenu() {
        if (!navigation || !menuToggle) {
            return;
        }

        navigation.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }

    if (menuToggle && navigation) {
        menuToggle.setAttribute('aria-label', 'Open navigation menu');
        menuToggle.setAttribute('aria-expanded', 'false');

        menuToggle.addEventListener('click', function() {
            if (window.innerWidth > mobileBreakpoint) {
                return;
            }

            const isOpen = navigation.classList.toggle('active');
            menuToggle.classList.toggle('active', isOpen);
            menuToggle.setAttribute('aria-expanded', String(isOpen));
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > mobileBreakpoint) {
                closeMobileMenu();
            }
        });
    }

    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            if (name && email && message) {
                alert(`Thank you ${name}! Aapka message receive ho gaya hai. Hum jaldi contact karenge.`);
                contactForm.reset();
            } else {
                alert('Please saare fields fill karein.');
            }
        });
    }

    const navLinks = document.querySelectorAll('.navigation a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= mobileBreakpoint) {
                closeMobileMenu();
            }
        });
    });

    const images = document.querySelectorAll('img');
    images.forEach(function(img) {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    const serviceCards = document.querySelectorAll('.serviceCard');
    serviceCards.forEach(function(card) {
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
