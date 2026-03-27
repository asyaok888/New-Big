/**
 * Mobile Menu Module
 */
export const initMobileMenu = () => {
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
