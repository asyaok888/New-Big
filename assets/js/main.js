// Mobile Menu Toggle
const initMobileMenu = () => {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    if (!menuToggle || !mobileMenu) return;

    const menuIcon = menuToggle.querySelector('svg');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
        if (isMenuOpen) {
            mobileMenu.classList.add('open');
            if (menuIcon) menuIcon.innerHTML = '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'; // X icon
        } else {
            mobileMenu.classList.remove('open');
            if (menuIcon) menuIcon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>'; // Menu icon
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (isMenuOpen) toggleMenu();
        });
    });
};

// Fade In Animation (Intersection Observer)
const initAnimations = () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
};

// Cookie Notice
const initCookieNotice = () => {
    const cookieNotice = document.getElementById('cookie-notice');
    const acceptBtn = document.getElementById('accept-cookies-btn');
    
    if (!cookieNotice || !acceptBtn) return;

    function acceptCookies() {
        cookieNotice.style.display = 'none';
        try {
            localStorage.setItem('cookieAccepted', 'true');
        } catch (e) {
            // Ignore error if localStorage is blocked
        }
    }

    acceptBtn.addEventListener('click', acceptCookies);

    try {
        if (!localStorage.getItem('cookieAccepted')) {
            cookieNotice.style.display = 'flex';
        }
    } catch (e) {
        // Fallback if localStorage is blocked
        cookieNotice.style.display = 'flex';
    }
};

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initAnimations();
    initCookieNotice();
});
