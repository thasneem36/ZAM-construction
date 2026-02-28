// =====================================================================
// GLOBAL.JS — Shared across all pages: header, footer, gallery system
// =====================================================================

/* ===== 1. MOBILE MENU TOGGLE ===== */
const mobileToggle = document.getElementById('mobile-toggle');
const heroNav = document.getElementById('hero_nav');

if (mobileToggle && heroNav) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = heroNav.classList.toggle('open');
        mobileToggle.setAttribute('aria-expanded', isOpen);
        mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });

    // Close menu when any nav link is clicked
    heroNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            heroNav.classList.remove('open');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.innerHTML = '&#9776;';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !heroNav.contains(e.target)) {
            heroNav.classList.remove('open');
            mobileToggle.setAttribute('aria-expanded', 'false');
            mobileToggle.innerHTML = '&#9776;';
        }
    });
}

/* ===== 2. FOOTER YEAR ===== */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== 3. SCROLL FADE-IN (Intersection Observer) =====
   All elements with class .fade-in-item will animate into view
   when they enter the viewport.
   ======================================================= */
const fadeItems = document.querySelectorAll('.fade-in-item');

if (fadeItems.length) {
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target); // animate once
            }
        });
    }, {
        threshold: 0.08,        // trigger when 8% of item is visible
        rootMargin: '0px 0px -30px 0px'
    });

    fadeItems.forEach(item => fadeObserver.observe(item));
}

// Gallery filter, fade-in observer, and ratio detection for gallery.html
// are now handled by gallery.js (runs after JSON injection).
// global.js only handles: mobile nav, footer year, and cross-page fade-ins.


