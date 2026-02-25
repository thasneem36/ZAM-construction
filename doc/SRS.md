# Software Requirements Specification (SRS)
## Water Supply & Drainage Contractor Website
### [YOUR COMPANY NAME] — Colombo, Sri Lanka

---

**Document Version:** 1.0  
**Date:** February 2026  
**Status:** Phase 1 — Core Development  
**Prepared By:** Development Team  
**Client:** [YOUR COMPANY NAME]  

---

## Table of Contents

1. Introduction
2. Project Scope
3. Development Phases
4. Functional Requirements
5. Non-Functional Requirements
6. Content Requirements
7. Design Requirements
8. Technical Requirements
9. Phase 1 — Core Deliverables
10. Constraints & Assumptions
11. Placeholder Checklist

---

## 1. Introduction

### 1.1 Purpose
This SRS defines the requirements for the design and development of a professional website for a water supply and drainage contractor business based in Colombo, Sri Lanka. The website will serve as the primary digital presence of the business, enabling potential clients to discover services, view past projects, and contact the company.

### 1.2 Business Context
The client is an established water and drainage contractor with 28+ years of experience in Colombo. The competitor landscape is weak — the main competitor (Abdeen Builders) uses a generic website builder (Zyrosite) with inconsistent content, no real testimonials, and vague service descriptions. This creates a clear opportunity to dominate the local digital market with a superior, professionally built website.

### 1.3 Project Goals
- Establish strong digital credibility above competitors
- Generate inbound leads via phone calls, WhatsApp, and contact form
- Clearly communicate services, experience, and certifications
- Be found on Google for keywords like "drainage contractor Colombo", "NWSDB certified contractor Sri Lanka"
- Load fast and work perfectly on mobile devices

### 1.4 Definitions

| Term | Meaning |
|---|---|
| NWSDB | National Water Supply & Drainage Board (Sri Lanka) |
| ICTAD | Institute for Construction Training and Development |
| CTA | Call to Action (button/link prompting user action) |
| Placeholder | Temporary content to be replaced by real client data |
| Core Phase | Phase 1 — HTML structure only, no styling |
| SRS | Software Requirements Specification (this document) |

---

## 2. Project Scope

### 2.1 In Scope (Phase 1 — Core)
- Single-page website (index.html) with all core sections
- Semantic HTML5 structure — clean, accessible, properly structured
- All written content filled in (services, about, process, testimonials)
- Placeholder image tags ready for client photos
- Contact form structure (HTML only — no backend)
- Mobile-friendly HTML structure (CSS to come in Phase 2)

### 2.2 Full Project Scope (All Phases)

| Phase | Deliverable | Status |
|---|---|---|
| Phase 1 | HTML skeleton — structure + content | 🔄 In Progress |
| Phase 2 | CSS styling — Deep Blue theme, responsive | ⏳ Pending |
| Phase 3 | JavaScript — animations, mobile nav, form UX | ⏳ Pending |
| Phase 4 | Polish — real images, SEO, performance | ⏳ Pending |
| Phase 5 | Extended system — extra pages, CMS, backend | ⏳ Future |

### 2.3 Out of Scope (Phase 1)
- Backend/server-side form processing
- Database or CMS integration
- Payment systems
- User accounts or login
- E-commerce
- Blog (optional — Phase 5)
- Social media integrations

---

## 3. Development Phases

### Phase 1 — Core HTML Structure (Current)
**Goal:** Build the complete content skeleton in semantic HTML5  
**Output:** `index.html` — no CSS, no JS, all sections present, all content written  
**Rule:** Prove structure and content are correct before adding any styling  

### Phase 2 — CSS Styling
**Goal:** Apply the full visual design — Deep Blue & White theme  
**Output:** Styled `index.html` or separate `style.css`  
**Includes:** Typography, colors, layout (Grid/Flexbox), hover effects, responsive design  

### Phase 3 — JavaScript Enhancement
**Goal:** Add interactivity and UX polish  
**Output:** `script.js` or embedded `<script>`  
**Includes:** Scroll reveal animations, mobile hamburger menu, form success handling, WhatsApp float button  

### Phase 4 — Polish & Launch Prep
**Goal:** Replace placeholders, optimize for real deployment  
**Output:** Production-ready website  
**Includes:** Real photos, logo, SEO meta tags, Google Maps embed, page speed optimization  

### Phase 5 — Extended System (Future)
**Goal:** Grow the website into a full business platform  
**Possible additions:**
- Separate Projects gallery page
- Separate About/Team page
- Contact form with email backend (e.g. EmailJS or PHP)
- WhatsApp chat widget integration
- Google Analytics
- Blog/News section
- Multilingual support (Sinhala/Tamil)

---

## 4. Functional Requirements

### 4.1 Navigation
- **FR-01:** The website shall have a fixed navigation bar visible on all scroll positions
- **FR-02:** Nav links shall anchor-scroll to corresponding sections on the page
- **FR-03:** A "Get a Quote" CTA button shall be visible in the nav at all times
- **FR-04:** On mobile screens (< 900px), nav links shall collapse into a hamburger menu
- **FR-05:** The hamburger menu shall expand/collapse on click

### 4.2 Hero Section
- **FR-06:** The hero section shall display the company's primary value proposition as an H1
- **FR-07:** Two CTA buttons shall be present: "Call Now" (phone link) and "Get Free Quote" (anchor to contact)
- **FR-08:** Three key stats shall be displayed: Years Experience, Projects Completed, Star Rating

### 4.3 Services Section
- **FR-09:** All 6 services shall be displayed with a title and description
- **FR-10:** Each service shall have an "Enquire Now" link pointing to the contact section
- **FR-11:** Services shall be displayed in a responsive grid layout

### 4.4 About / Why Choose Us
- **FR-12:** The section shall include a company description paragraph
- **FR-13:** A list of 6 key differentiators shall be displayed
- **FR-14:** A CTA button shall link to the contact section

### 4.5 Process Section
- **FR-15:** The 4-step process shall be displayed as an ordered list
- **FR-16:** Each step shall have a title and description

### 4.6 Projects Section
- **FR-17:** At least 4 past projects shall be displayed with title and category
- **FR-18:** Each project shall have an image placeholder ready for real photos
- **FR-19:** Project category labels shall be visible (Residential / Commercial / Municipality)

### 4.7 Testimonials Section
- **FR-20:** At least 3 client testimonials shall be displayed
- **FR-21:** Each testimonial shall include quote text, client name, and client role/location
- **FR-22:** Testimonials shall use semantic `<blockquote>` and `<cite>` HTML elements

### 4.8 Certifications Section
- **FR-23:** The company's 4 certifications/registrations shall be listed
- **FR-24:** NWSDB certification shall be prominently featured

### 4.9 Contact Section
- **FR-25:** Company phone numbers shall be displayed as clickable `tel:` links
- **FR-26:** WhatsApp number shall be a clickable `wa.me` link
- **FR-27:** Email shall be a clickable `mailto:` link
- **FR-28:** Physical location / service area shall be stated using `<address>` tag
- **FR-29:** A contact form shall be present with the following fields:
  - Full Name (text input, required)
  - Phone Number (tel input, required)
  - Service Required (select dropdown with all 6 services + "Other")
  - Project Location (text input)
  - Message (textarea)
  - Submit button

### 4.10 WhatsApp Float Button (Phase 3)
- **FR-30:** A fixed WhatsApp button shall appear on all pages at bottom-right
- **FR-31:** It shall link to the company's WhatsApp number
- **FR-32:** It shall have a pulse/glow animation to attract attention

### 4.11 Footer
- **FR-33:** Footer shall display company name, copyright year, and "Made in Sri Lanka" tagline
- **FR-34:** Footer shall include quick navigation links

---

## 5. Non-Functional Requirements

### 5.1 Performance
- **NFR-01:** Page shall load in under 3 seconds on mobile (4G connection)
- **NFR-02:** No external CSS frameworks (Bootstrap, Tailwind) — keep code lean
- **NFR-03:** Images shall be provided in WebP format where possible (Phase 4)
- **NFR-04:** Total page size shall not exceed 2MB with images

### 5.2 Accessibility
- **NFR-05:** All images shall have descriptive `alt` attributes
- **NFR-06:** All form inputs shall have associated `<label>` elements
- **NFR-07:** Color contrast ratio shall meet WCAG AA standard (4.5:1 minimum)
- **NFR-08:** Website shall be navigable by keyboard
- **NFR-09:** Semantic HTML elements shall be used throughout (not generic `<div>` abuse)

### 5.3 SEO
- **NFR-10:** Page shall have a unique, keyword-rich `<title>` tag
- **NFR-11:** A meta description shall be present (150–160 characters)
- **NFR-12:** One `<h1>` only — in the hero section
- **NFR-13:** Heading hierarchy shall be logical: H1 → H2 → H3
- **NFR-14:** Target keywords: "drainage contractor Colombo", "water supply contractor Sri Lanka", "NWSDB certified contractor"

### 5.4 Responsiveness
- **NFR-15:** Website shall function correctly on all screen sizes from 320px to 1920px
- **NFR-16:** Mobile layout shall stack columns vertically
- **NFR-17:** Touch targets (buttons, links) shall be minimum 44px height on mobile
- **NFR-18:** Text shall remain readable without horizontal scrolling on any device

### 5.5 Browser Compatibility
- **NFR-19:** Website shall work correctly in: Chrome, Firefox, Safari, Edge (latest 2 versions)
- **NFR-20:** Website shall work on Android Chrome and iOS Safari

### 5.6 Maintainability
- **NFR-21:** Code shall be cleanly indented (2 spaces) and commented
- **NFR-22:** Placeholder content shall be clearly marked with HTML comments
- **NFR-23:** CSS shall use custom properties (variables) for all colors and fonts
- **NFR-24:** Code shall be structured so non-developers can update text content easily

---

## 6. Content Requirements

### 6.1 Written Content (Ready to Use)

All written content below is approved for Phase 1 development:

**Hero Headline:**
> "Expert Water & Drainage Solutions in Colombo You Can Trust"

**Hero Subtext:**
> "Certified water supply, sewerage and stormwater management contractors serving Colombo and all of Sri Lanka. Over 28 years of precision-built infrastructure."

**About Paragraph:**
> "We are Colombo's most experienced water supply and drainage contractors. With over 28 years in the industry, we have successfully delivered 500+ projects ranging from residential house connections to large-scale municipal infrastructure. NWSDB certified, competitively priced, and committed to quality on every project."

**Mission Statement:**
> "Providing top-notch construction solutions for stormwater disposal and sewerage systems at a competitive price within a set timeframe, using cutting-edge technology and dedicated professional service."

**Vision Statement:**
> "To be the most preferred and best professional construction solution for storm disposal and sewerage providers in Sri Lanka."

### 6.2 Image Requirements

| Location | Description | Size (Phase 4) |
|---|---|---|
| Hero background | Construction/water system scene | 1920×1080px |
| About section | Team or project site photo | 800×600px |
| Project 1 | Municipal stormwater system photo | 800×533px |
| Project 2 | Residential house connection photo | 800×533px |
| Project 3 | Commercial water supply photo | 800×533px |
| Project 4 | Sewerage network photo | 800×533px |
| Logo | Company logo (transparent) | 200×60px PNG |

*All images are placeholders in Phase 1. Client to provide real photos before Phase 4.*

---

## 7. Design Requirements

### 7.1 Color Palette

| Name | Hex | Usage |
|---|---|---|
| Deep Navy | `#030d1a` | Hero bg, about bg, contact bg, footer |
| Dark Blue | `#0a2d52` | Cards, secondary sections |
| Primary Blue | `#1253a0` | Service icons, buttons |
| Accent Cyan | `#00c2ff` | Highlights, CTAs, hover states |
| Light Gray | `#f6f9fc` | Services bg, process bg |
| White | `#ffffff` | Text on dark, card backgrounds |
| Text Dark | `#0b1e2e` | Body text on light backgrounds |
| Text Muted | `#8fa8be` | Subtitles, secondary text |

### 7.2 Typography

| Element | Font | Weight | Size |
|---|---|---|---|
| H1 | Syne | 800 | clamp(2.4rem, 5vw, 4rem) |
| H2 | Syne | 800 | clamp(1.8rem, 3.5vw, 2.8rem) |
| H3 | Syne | 700 | 1.1–1.2rem |
| Body | DM Sans | 400 | 0.9–1.05rem |
| Labels | DM Sans | 700 | 0.75–0.8rem |
| Nav | DM Sans | 500 | 0.9rem |

### 7.3 Layout
- Max content width: 1280px, centered
- Section padding: 100px top/bottom, 5% sides
- Card border radius: 20px
- Button border radius: 50px (pill shape)
- Icon container radius: 14px

---

## 8. Technical Requirements

### 8.1 Phase 1 — HTML Only
- Language: HTML5
- Single file: `index.html`
- No CSS (not even inline)
- No JavaScript
- No external dependencies
- Validates as valid HTML5

### 8.2 Phase 2 — CSS
- Pure CSS (no frameworks)
- Google Fonts loaded via `<link>`
- CSS Custom Properties for design tokens
- Flexbox and CSS Grid for layouts
- Media queries at 900px and 600px

### 8.3 Phase 3 — JavaScript
- Vanilla JavaScript (ES6+)
- No jQuery or external libraries
- `IntersectionObserver` for scroll reveal
- `addEventListener` for menu toggle
- Form submit handler

### 8.4 Phase 4 — Deployment
- Static website (no server required)
- Can be hosted on: Netlify, GitHub Pages, cPanel, or any web host
- HTTPS required (SSL certificate)
- Domain: client to provide (e.g. yourcompany.lk)

### 8.5 Phase 5 — Extended (Future)
- Contact form backend: EmailJS (no server) or PHP mailer
- Optional CMS: Netlify CMS or similar headless CMS for content updates
- Analytics: Google Analytics 4
- WhatsApp Business API integration optional

---

## 9. Phase 1 — Core Deliverables

The following is the complete checklist for Phase 1 completion:

### HTML Structure Checklist

- [ ] `<!DOCTYPE html>` declaration
- [ ] `<html lang="en">` with correct lang attribute
- [ ] `<head>` with charset, viewport, title, meta description
- [ ] `<header>` with `<nav>` containing logo + `<ul>` nav links
- [ ] `<main>` wrapping all content sections
- [ ] `<section id="hero">` — H1, subtitle, 2 CTA links, 3 stats
- [ ] `<section id="services">` — H2 + 6 service blocks (H3 + p)
- [ ] `<section id="about">` — H2 + paragraph + `<ul>` 6 points + img placeholder
- [ ] `<section id="process">` — H2 + `<ol>` 4 steps (H3 + p each)
- [ ] `<section id="projects">` — H2 + 4 project blocks (img + H3 + p)
- [ ] `<section id="testimonials">` — H2 + 3 `<blockquote>` with `<cite>`
- [ ] `<section id="certifications">` — H2 + `<ul>` 4 certs
- [ ] `<section id="contact">` — H2 + `<address>` + `<form>` with all fields
- [ ] `<footer>` — copyright + links
- [ ] All `<img>` tags have `alt` attributes
- [ ] All form `<input>` tags have matching `<label>` elements
- [ ] `tel:` links on all phone numbers
- [ ] `mailto:` link on email
- [ ] `href="https://wa.me/94777279301"` on WhatsApp link
- [ ] HTML comments on all placeholder content
- [ ] Properly indented (2 spaces throughout)
- [ ] No `<div>` used where semantic elements exist

---

## 10. Constraints & Assumptions

### Constraints
- Phase 1 must have zero CSS and zero JavaScript — structure only
- No backend development until Phase 5 at earliest
- All content must be in English (Sinhala/Tamil optional in Phase 5)
- Client photos not yet available — placeholder images only in Phase 1–3

### Assumptions
- Client will provide company name, logo, and photos before Phase 4
- Phone numbers 0777 279 301 and 0777 403 262 are correct
- Client has a WhatsApp number matching the business phone
- Website will be hosted as a static site initially
- Client approves the written content in this SRS

### Risks

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Client delays providing photos | High | Medium | Use high-quality stock photos temporarily |
| Company name not confirmed | Medium | High | Use [YOUR COMPANY NAME] placeholder until confirmed |
| Phone numbers unverified | Low | High | Confirm before Phase 4 launch |
| Content changes mid-development | Medium | Low | Structure in HTML is easy to update |

---

## 11. Placeholder Checklist (For Client)

Hand this list to the client — all items needed before go-live:

| # | Item | Status |
|---|---|---|
| 1 | Company name (official registered name) | ⏳ Pending |
| 2 | Logo file (PNG transparent, min 400px wide) | ⏳ Pending |
| 3 | Verified primary phone number | ⏳ Pending |
| 4 | Verified secondary phone number | ⏳ Pending |
| 5 | WhatsApp business number | ⏳ Pending |
| 6 | Business email address | ⏳ Pending |
| 7 | Full physical address | ⏳ Pending |
| 8 | Project photo 1 (municipality project) | ⏳ Pending |
| 9 | Project photo 2 (residential project) | ⏳ Pending |
| 10 | Project photo 3 (commercial project) | ⏳ Pending |
| 11 | Project photo 4 (sewerage project) | ⏳ Pending |
| 12 | About/team or site photo | ⏳ Pending |
| 13 | NWSDB registration number (for credibility) | ⏳ Pending |
| 14 | ICTAD registration details | ⏳ Pending |
| 15 | Preferred domain name (e.g. yourcompany.lk) | ⏳ Pending |
| 16 | Real client names/permission for testimonials | ⏳ Pending |

---

*End of SRS Document v1.0*  
*Next review: After Phase 1 HTML skeleton is approved by client*