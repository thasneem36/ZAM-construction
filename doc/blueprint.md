# ZAM Construction — Website Blueprint

> **Company:** ZAM Construction | Water Supply & Drainage Contractor, Sri Lanka  
> **Owner:** Farhan Zainul Abdeen | Est. 1996  
> **Last Updated:** March 2026

---

## 1. Site Overview

| Property | Value |
|---|---|
| **Type** | Multi-page static HTML website |
| **Purpose** | Local lead generation — NWSDB/municipal/commercial clients |
| **Target Audience** | Architects, facility managers, municipal engineers, homeowners in Western Province |
| **Tone** | Professional, technical, trustworthy — infrastructure-grade (not startup/flashy) |

---

## 2. File Structure

```
usamaaa/
│
├── index.html          ← Home (single-page with multiple anchored sections)
├── about.html          ← Founder profile + company history
├── gallery.html        ← Photo/video project portfolio
├── contact.html        ← Dedicated contact form + map
│
├── Style.css           ← Home page-specific styles
├── about.css           ← About page-specific styles
├── gallery.css         ← Gallery page-specific styles
├── contact.css         ← Contact page-specific styles
│
├── global.css          ← SHARED: design tokens, reset, header/nav, footer
├── global.js           ← SHARED: mobile menu, footer year, gallery filter
├── index.js            ← Home page: bg grid, testimonials slider
├── contact.js          ← Contact page: form validation & submit
│
├── assets/
│   ├── logo.png        ← ZAM Construction logo
│   ├── owner.jpeg      ← Founder photo (about page)
│   ├── bg.mp4          ← Hero background video
│   └── images/         ← Project photos
│       ├── project-stormwater.png
│       ├── project-residential.png
│       ├── project-water-supply.png
│       └── project-sewerage.png
│
└── doc/
    ├── SKILL.md        ← AI agent design rules & guidelines
    └── blueprint.md    ← This file
```

### CSS Load Order (all pages)
```html
1. Google Fonts — Poppins (400, 500, 600, 700)
2. global.css   — shared reset + tokens + header/nav/footer
3. [page].css   — page-specific styles only
```

> **Rule:** `global.css` is always loaded **before** any page-specific CSS. Never duplicate `:root`, `header`, `nav`, or footer rules in a page-specific file.

---

## 3. Pages

### 3.1 `index.html` — Home
**CSS:** `global.css` → `Style.css` | **JS:** `global.js`, `index.js`

| Section ID | Section Name | Background |
|---|---|---|
| `#hero` | Hero | White + dot grid + video overlay |
| `#services` | Our Services | White |
| `#about` | Why Choose Us | Gray light |
| `#process` | How It Works | White |
| `#projects` | Our Projects | Dark |
| `#testimonials` | What Our Clients Say | White (auto-slider) |
| `#certifications` | Certified By | Gray light |
| Footer | 4-column dark footer | Dark |

---

### 3.2 `about.html` — About Us
**CSS:** `global.css` → `about.css` | **JS:** `global.js`

| Block | Content |
|---|---|
| Page Banner | Dark banner with page title |
| Owner Profile | Photo (400×500) + bio + stats (20+ yrs / 100+ projects / 45+ clients) |
| Company Story | 4-block timeline: 1996 / 2005 / 2012 / Now |
| Certifications | 4 cards: NWSDB / CIDA / CMC / SLSI |
| Footer | Same 4-column footer as all pages |

**Owner details:**  
- Name: Farhan Zainul Abdeen  
- Photo: `./assets/owner.jpeg`  
- Title: Civil & Plumbing Engineer | Water Infrastructure Specialist

---

### 3.3 `gallery.html` — Project Gallery
**CSS:** `global.css` → `gallery.css` | **JS:** `global.js`

| Block | Content |
|---|---|
| Page Banner | Dark banner |
| Filter Tabs | All / Stormwater / Sewerage / Water Supply / Municipal / Residential |
| Photo Grid | 3-col grid, hover overlay with category tag + title |
| Video Showcase | 2-col video grid with `bg.mp4` |
| CTA Strip | Dark strip → links to contact.html |
| Footer | Shared 4-column footer |

---

### 3.4 `contact.html` — Contact Us
**CSS:** `global.css` → `contact.css` | **JS:** `global.js`, `contact.js`

| Block | Content |
|---|---|
| Page Banner | Dark banner |
| Left Col | 4 info cards: Office / Phone / Email / Emergency |
| Right Col | Contact form (name, phone, email, message) |
| Map | Google Maps embed — Colombo, Sri Lanka |
| Footer | Shared 4-column footer |

**Form fields (active):**
- Full Name *(required)*
- Phone Number *(required)*
- Email Address *(optional)*
- Project Details / Message *(required, min 20 chars)*

**Form fields (commented out for now):**
- Service Required (dropdown)
- Project Location

---

## 4. Design System

### 4.1 Colors
| Token | Value | Usage |
|---|---|---|
| `--color-black` | `#000000` | Primary text, buttons, borders |
| `--color-dark` | `#111111` | Dark sections, footer background |
| `--color-white` | `#ffffff` | Page backgrounds, cards |
| `--color-gray-light` | `#f9f9f9` | Alternate section backgrounds |
| `--color-gray-border` | `#e8e8e8` | Card borders, dividers |
| `--color-gray-muted` | `#666666` | Captions, secondary text |
| `--color-accent` | `#1d2be2` | CTA hover, active nav, highlights |

### 4.2 Typography
| Token | Value |
|---|---|
| `--font-main` | `'Poppins', sans-serif` |
| `--font-size-h1` | `clamp(36px, 5vw, 60px)` |
| `--font-size-h2` | `clamp(26px, 3.5vw, 40px)` |
| `--font-size-h3` | `clamp(16px, 2vw, 22px)` |
| Body | `0.9rem – 1rem`, line-height `1.6` |

### 4.3 Spacing
| Token | Value | Usage |
|---|---|---|
| `--section-padding` | `80px 20px` | All `.content` sections |
| `--inner-width` | `80%` | Content containers |
| `--radius-pill` | `100px` | Buttons, nav, badges |
| `--radius-card` | `12px` | Cards, form inputs |

### 4.4 Shadows
| Token | Usage |
|---|---|
| `--shadow-card` | `5px 5px 0 var(--color-accent)` — card hover offset |
| `--shadow-card-black` | `5px 5px 0 #000` — dark offset variant |
| `--shadow-soft` | `0 4px 16px rgba(0,0,0,0.08)` — subtle elevation |
| `--shadow-header` | `0 2px 20px rgba(0,0,0,0.08)` — sticky navbar |
| `--shadow-glow` | `0 8px 24px rgba(29,43,226,0.35)` — accent CTA glow |

---

## 5. Navigation

**Structure (all pages):**
```
Logo | Home · Services · Process · Projects · Gallery · About · Contact
```

| Link | Destination |
|---|---|
| Home | `index.html` |
| Services | `index.html#services` |
| Process | `index.html#process` |
| Projects | `index.html#projects` |
| Gallery | `gallery.html` |
| About | `about.html` |
| Contact | `contact.html` |

**Active state:** The current page's link gets `class="active"` (black pill background).

**Mobile:** hamburger button (`.mobile-toggle`) toggles `.hero_nav` with `.open` class via `global.js`.

---

## 6. Shared Components (global.css + global.js)

### Header/Nav
- Sticky pill (`border-radius: 100px`)
- Width: 84% desktop, 92% tablet, 96% mobile
- `z-index: 200` — always on top

### Footer (4 columns)
| Column | Content |
|---|---|
| Brand | Logo + tagline + NWSDB/ICTAD badges |
| Quick Links | All 6 nav destinations |
| Services | 6 service categories |
| Contact | Address, phone, email, emergency note |

Bottom bar: `© [year] ZAM Construction` + "Engineered for Durability • Made in Sri Lanka"

### CTA Button (`.cta-btn`)
- Black fill, pill radius
- Hover: accent blue + glow shadow + 2px lift

---

## 7. Responsive Breakpoints

| Breakpoint | Width | Key changes |
|---|---|---|
| Desktop | > 992px | Full layout |
| Tablet | ≤ 992px | 2-col grids, wider page sections |
| Mobile | ≤ 768px | Single column, hamburger nav, smaller header |
| Small mobile | ≤ 480px | Tighter padding |

---

## 8. JavaScript Modules

| File | Responsibilities |
|---|---|
| `global.js` | Mobile menu toggle, footer year auto-update, gallery category filter |
| `index.js` | Background dot grid generator, testimonials auto-slider (4s interval, hover pause, dot indicators, prev/next arrows) |
| `contact.js` | Form validation (name, phone, message), inline error messages, simulated async submit with success banner |

---

## 9. Services Offered

1. Stormwater Disposal Systems
2. Sewerage Construction
3. Water Supply Systems
4. NWSDB Approvals & Liaison
5. Municipal Projects
6. Drainage Inspection & Repair

---

## 10. Key Business Info

| Item | Value |
|---|---|
| **Phone** | 0777 279 301 |
| **Email** | info@zamconstruction.lk |
| **Location** | Colombo, Sri Lanka |
| **NWSDB #** | Certified contractor |
| **ICTAD/CIDA** | Registered |
| **Emergency** | 24/7 — Colombo district |
| **Founded** | 1996 |
