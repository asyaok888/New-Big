/**
 * Main Application Entry Point
 */
import { initMobileMenu } from './modules/menu.js';
import { initFAQ } from './modules/faq.js';
import { initAnimations, initCookieNotice } from './modules/helpers.js';

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initFAQ();
    initAnimations();
    initCookieNotice();
});
