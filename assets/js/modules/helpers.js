/**
 * Helper Functions Module
 */

// Fade In Animation (Intersection Observer)
export const initAnimations = () => {
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
export const initCookieNotice = () => {
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
