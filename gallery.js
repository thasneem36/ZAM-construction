// =====================================================================
// GALLERY.JS — Fetches gallery-data.json and dynamically renders
//              the photo grid and video showcase on gallery.html
// =====================================================================

(async function initGallery() {

    const DATA_FILE = './gallery-data.json';

    const grid = document.getElementById('gallery-grid');
    const videoGrid = document.getElementById('video-grid');
    const emptyMsg = document.getElementById('gallery-empty');

    if (!grid) return; // not on gallery page

    /* -----------------------------------------------------------------
       1. FETCH DATA
    ----------------------------------------------------------------- */
    let data;
    try {
        const res = await fetch(DATA_FILE);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        data = await res.json();
    } catch (err) {
        console.error('[GalleryJS] Failed to load gallery-data.json:', err);
        grid.innerHTML = '<p class="gallery-empty">Unable to load gallery. Please try again later.</p>';
        return;
    }

    /* -----------------------------------------------------------------
       2. BUILD GALLERY GRID from data.gallery[]
    ----------------------------------------------------------------- */

    /**
     * Creates a gallery card element from a data item.
     * @param {Object} item
     * @returns {HTMLElement}
     */
    function buildCard(item) {
        const card = document.createElement('div');
        card.className = 'gallery-item fade-in-item';
        card.dataset.category = item.category;
        card.dataset.type = item.type;

        /* — Media element — */
        let media;
        if (item.type === 'video') {
            media = document.createElement('video');
            media.autoplay = true;
            media.muted = true;
            media.loop = true;
            media.setAttribute('playsinline', '');
            media.setAttribute('preload', 'metadata');
            if (item.poster) media.poster = item.poster;

            const source = document.createElement('source');
            source.src = item.src;
            source.type = 'video/mp4';
            media.appendChild(source);

        } else {
            media = document.createElement('img');
            media.src = item.src;
            media.alt = item.alt || item.title;
            media.loading = 'lazy';
        }

        /* — Overlay — */
        const overlay = document.createElement('div');
        overlay.className = 'gallery-overlay';
        overlay.innerHTML = `
            <span class="gallery-tag">${escapeHtml(item.category.replace(/-/g, ' '))}</span>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.location)}</p>
        `;

        card.appendChild(media);
        card.appendChild(overlay);

        /* — Smart aspect ratio after media loads — */
        if (item.type === 'image') {
            if (media.complete && media.naturalWidth) {
                applyRatioClass(card, media.naturalWidth, media.naturalHeight);
            } else {
                media.addEventListener('load', () =>
                    applyRatioClass(card, media.naturalWidth, media.naturalHeight)
                );
            }
        } else {
            media.addEventListener('loadedmetadata', () =>
                applyRatioClass(card, media.videoWidth, media.videoHeight)
            );
        }

        return card;
    }

    /* Clear skeletons, then append real cards */
    grid.innerHTML = '';
    data.gallery.forEach(item => grid.appendChild(buildCard(item)));

    /* -----------------------------------------------------------------
       3. BUILD VIDEO SHOWCASE from data.videos[]
    ----------------------------------------------------------------- */
    if (videoGrid && data.videos && data.videos.length) {
        videoGrid.innerHTML = '';

        data.videos.forEach(v => {
            const card = document.createElement('div');
            card.className = 'video-card';
            card.innerHTML = `
                <video controls preload="none"${v.poster ? ` poster="${v.poster}"` : ''}>
                    <source src="${v.src}" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
                <div class="video-info">
                    <h3>${escapeHtml(v.title)}</h3>
                    <p>${escapeHtml(v.description)}</p>
                </div>
            `;
            videoGrid.appendChild(card);
        });
    }

    /* -----------------------------------------------------------------
       4. RE-ATTACH FILTER LOGIC
          (global.js runs before gallery.js, so we must re-query
          after items are injected into the DOM)
    ----------------------------------------------------------------- */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = () => document.querySelectorAll('.gallery-item'); // live query

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            let visible = 0;

            galleryItems().forEach(item => {
                const match = filter === 'all' || item.dataset.category === filter;
                item.classList.toggle('hidden', !match);
                if (match) visible++;
            });

            if (emptyMsg) emptyMsg.style.display = visible === 0 ? 'block' : 'none';
        });
    });

    /* -----------------------------------------------------------------
       5. RE-ATTACH INTERSECTION OBSERVER
          (fade-in on scroll for newly injected cards)
    ----------------------------------------------------------------- */
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.fade-in-item').forEach(el => fadeObserver.observe(el));

    /* -----------------------------------------------------------------
       6. RESIZE — Re-evaluate ratio classes on viewport change
    ----------------------------------------------------------------- */
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            galleryItems().forEach(item => {
                const img = item.querySelector('img');
                const vid = item.querySelector('video');
                if (img && img.naturalWidth) {
                    applyRatioClass(item, img.naturalWidth, img.naturalHeight);
                } else if (vid && vid.videoWidth) {
                    applyRatioClass(item, vid.videoWidth, vid.videoHeight);
                }
                if (window.innerWidth <= 768) {
                    item.classList.remove('landscape', 'portrait');
                }
            });
        }, 150);
    });

})(); // end IIFE

/* -----------------------------------------------------------------
   HELPERS
----------------------------------------------------------------- */

/**
 * Applies .landscape or .portrait class to a gallery card
 * based on the media's natural aspect ratio.
 * Only active on tablet+ screens (>768px).
 */
function applyRatioClass(item, w, h) {
    if (!w || !h || window.innerWidth <= 768) return;

    const ratio = w / h;
    item.classList.remove('landscape', 'portrait');

    if (ratio >= 1.6) item.classList.add('landscape');
    else if (ratio <= 0.8) item.classList.add('portrait');
}

/**
 * Minimal HTML escape to prevent XSS from JSON strings.
 */
function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}
