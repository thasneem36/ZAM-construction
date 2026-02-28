// ===== BACKGROUND GRID GENERATOR =====
const grid_box = document.getElementById("grid_bg");
if (grid_box) {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            const grid_item = document.createElement("div");
            grid_item.classList.add("grid_bg_item");
            grid_item.style.left = (i * 50) + "px";
            grid_item.style.top = (j * 50) + "px";
            grid_box.appendChild(grid_item);
        }
    }
}

// ===== TESTIMONIALS SLIDER =====
(function initSlider() {
    const track = document.getElementById('slider-track');
    const dotsWrap = document.getElementById('slider-dots');
    const prevBtn = document.getElementById('slider-prev');
    const nextBtn = document.getElementById('slider-next');
    if (!track) return;

    const cards = Array.from(track.querySelectorAll('.testimonial-card'));
    const totalCards = cards.length;
    let currentIndex = 0;
    let autoTimer = null;

    /* How many cards fit at once (matches CSS min-width) */
    function getVisible() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    /* Max index = last "page" start */
    function maxIndex() {
        return Math.max(0, totalCards - getVisible());
    }

    /* Build dots */
    function buildDots() {
        dotsWrap.innerHTML = '';
        const pages = maxIndex() + 1;
        for (let i = 0; i < pages; i++) {
            const dot = document.createElement('button');
            dot.className = 'slider-dot' + (i === currentIndex ? ' active' : '');
            dot.setAttribute('aria-label', 'Slide ' + (i + 1));
            dot.addEventListener('click', () => goTo(i));
            dotsWrap.appendChild(dot);
        }
    }

    /* Move track */
    function goTo(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex()));

        /* Card width + gap */
        const cardEl = cards[0];
        const gap = 24;
        const offset = currentIndex * (cardEl.offsetWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;

        /* Update dots */
        dotsWrap.querySelectorAll('.slider-dot').forEach((d, i) =>
            d.classList.toggle('active', i === currentIndex)
        );
    }

    function next() { goTo(currentIndex >= maxIndex() ? 0 : currentIndex + 1); }
    function prev() { goTo(currentIndex <= 0 ? maxIndex() : currentIndex - 1); }

    /* Auto-play */
    function startAuto() { autoTimer = setInterval(next, 4000); }
    function stopAuto() { clearInterval(autoTimer); }

    /* Events */
    nextBtn.addEventListener('click', () => { stopAuto(); next(); startAuto(); });
    prevBtn.addEventListener('click', () => { stopAuto(); prev(); startAuto(); });

    /* Pause on hover */
    track.addEventListener('mouseenter', stopAuto);
    track.addEventListener('mouseleave', startAuto);

    /* Recalculate on resize */
    window.addEventListener('resize', () => { buildDots(); goTo(currentIndex); });

    /* Init */
    buildDots();
    goTo(0);
    startAuto();
})();


// ===== MOBILE MENU TOGGLE =====
const mobileToggle = document.getElementById('mobile-toggle');
const heroNav = document.getElementById('hero_nav');

if (mobileToggle && heroNav) {
    mobileToggle.addEventListener('click', () => {
        const isOpen = heroNav.classList.toggle('open');
        mobileToggle.setAttribute('aria-expanded', isOpen);
        mobileToggle.innerHTML = isOpen ? '&#10005;' : '&#9776;';
    });

    // Close menu when a nav link is clicked
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

// ===== SCROLLSPY — Highlight active nav link =====
const sections = document.querySelectorAll('section[id], div[id]');
const navLinks = document.querySelectorAll('.hero_nav ul li a');

function updateScrollspy() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 160) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateScrollspy, { passive: true });

// ===== CONTACT FORM VALIDATION =====
const contactForm = document.querySelector('#contact form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const requiredFields = this.querySelectorAll('input[required], select[required], textarea[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#e53e3e';
            } else {
                field.style.borderColor = '';
            }
        });

        if (isValid) {
            const btn = this.querySelector('.submit-btn');
            const originalText = btn.textContent;
            btn.textContent = '✓ Request Sent!';
            btn.style.backgroundColor = '#16a34a';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.backgroundColor = '';
                btn.disabled = false;
                this.reset();
            }, 3000);
        }
    });

    // Clear red border on user input
    contactForm.querySelectorAll('input, select, textarea').forEach(field => {
        field.addEventListener('input', function () {
            if (this.value.trim()) {
                this.style.borderColor = '';
            }
        });
    });
}

// ===== FOOTER YEAR =====
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}