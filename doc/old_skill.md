---
name: water-drainage-contractor-website
description: >
  Use this skill when building, updating, or planning any part of a water supply,
  drainage, or plumbing contractor website — especially for Sri Lankan or South Asian
  construction businesses. Triggers when the user mentions: building a contractor site,
  water supply website, drainage company web page, NWSDB contractor, sewerage company
  website, plumbing business website, construction company website in Colombo, or any
  phase of this specific client project (HTML structure, CSS styling, content writing,
  SRS, skill files, full website). Also trigger when user says "core part", "next phase",
  "add section", "update the website", or references the competitor Abdeen Builders.
  Always use this skill before writing any code, content, or documentation for this project.
---

# Water & Drainage Contractor Website — Development Skill

## Project Overview

**Client:** [YOUR COMPANY NAME] — Water Supply & Drainage Contractors, Colombo, Sri Lanka  
**Competitor:** Abdeen Builders (abdeenbuilders.com) — built on Zyrosite, generic template  
**Goal:** Build a modern, professional, superior website that outclasses the competitor  
**Development Strategy:** Core-first → then expand to full system  
**Current Phase:** Phase 1 — Core HTML Structure  

---

## Development Phases

```
Phase 1 (NOW)   → Core HTML skeleton — semantic structure, all content, no CSS/JS
Phase 2         → CSS Styling — Deep Blue & White, Syne + DM Sans fonts, animations
Phase 3         → JavaScript — scroll reveal, mobile nav, form handling, WhatsApp float
Phase 4         → Full Polish — real photos swapped in, SEO meta, performance tuning
Phase 5         → Extended System — Projects gallery page, About page, Blog (optional)
```

**Always confirm which phase the user is working on before writing code.**

---

## Brand & Design Rules

| Property | Value |
|---|---|
| Primary Dark | `#030d1a` (deep navy) |
| Primary Mid | `#0a2d52` / `#1253a0` (blue) |
| Accent | `#00c2ff` (cyan) |
| Background Light | `#f6f9fc` (soft gray) |
| White | `#ffffff` |
| Heading Font | Syne (800 weight) — Google Fonts |
| Body Font | DM Sans (300/400/500) — Google Fonts |
| Border Radius | Cards: 20px, Buttons: 50px, Icons: 14px |
| Tone | Professional, trustworthy, modern — NOT generic |

---

## Website Sections (Core)

Every section has a matching `id` for anchor navigation. Build in this order:

| # | Section ID | Element | Key Content |
|---|---|---|---|
| 1 | — | `<header>` + `<nav>` | Logo, nav links, CTA button |
| 2 | `#hero` | `<section>` | H1, subtitle, 2 CTAs, 3 stats |
| 3 | `#services` | `<section>` | 6 service cards |
| 4 | `#about` | `<section>` | Why choose us, 6 bullet points |
| 5 | `#process` | `<section>` | 4-step process (ol) |
| 6 | `#projects` | `<section>` | 4 project items with img placeholders |
| 7 | `#testimonials` | `<section>` | 3 blockquote testimonials |
| 8 | `#certifications` | `<section>` | 4 certification badges |
| 9 | `#contact` | `<section>` | Address + contact form |
| 10 | — | `<footer>` | Copyright, links |

---

## Content Reference (Use Exactly)

### Company Details (Placeholders — client to confirm)
- **Name:** [YOUR COMPANY NAME]
- **Phone 1:** 0777 279 301
- **Phone 2:** 0777 403 262
- **WhatsApp:** +94 777 279 301 → `https://wa.me/94777279301`
- **Email:** info@yourcompany.lk *(placeholder)*
- **Location:** Colombo, Western Province, Sri Lanka
- **Experience:** 28+ years
- **Projects:** 500+
- **Rating:** 5 Stars / NWSDB Certified

### 6 Services
1. **Stormwater Disposal Systems** — Total storm water disposal solutions, house connection & municipality projects
2. **Sewerage Construction** — Total sewerage construction solution, house connection & municipality projects
3. **Water Supply Systems** — Efficient residential and commercial water supply infrastructure
4. **NWSDB Approvals & Certifications** — Water sanctions, drainage approvals and drainage certificate works through NWSDB
5. **Municipal Infrastructure Projects** — Large-scale municipality contracts for drainage and sewerage networks
6. **Drainage Inspection & Repair** — Professional inspection, cleaning and repair of existing systems

### 4 Process Steps
1. **Free Consultation** — Contact us for a no-obligation site assessment
2. **Site Assessment** — Engineer visits, full technical report prepared
3. **Transparent Quote** — Itemized quotation, no surprises, approved before work begins
4. **Expert Execution** — Certified team delivers on time with full documentation

### 3 Testimonials
1. *"Excellent service from start to finish..."* — Rajan Karunaratne, Property Developer, Colombo 7
2. *"I needed NWSDB approval urgently..."* — Saman Perera, Homeowner, Nugegoda
3. *"We awarded them a large municipal contract..."* — Amani Mendis, Project Officer, Colombo Municipality

### 4 Projects
1. Colombo Municipal Stormwater System — *Municipality*
2. House Connection Nugegoda — *Residential*
3. Water Supply Rajagiriya Complex — *Commercial*
4. Sewerage Network Dehiwala — *Municipality*

### 4 Certifications
- NWSDB Certified
- Colombo Municipal Council
- ICTAD Registered
- Sri Lanka Standards

---

## Phase 1 — HTML Skeleton Rules

When generating the HTML structure, follow these strictly:

```
✅ Use semantic HTML5 elements only
✅ One <h1> in hero only
✅ <h2> for every section title
✅ <h3> for service/project/step titles
✅ <nav> inside <header>
✅ <ul><li> for nav links
✅ <address> tag in contact section
✅ <blockquote><cite> for testimonials
✅ <ol><li> for process steps (numbered)
✅ <form> with <label> matched to every <input>
✅ <img src="placeholder.jpg" alt="[description]"> for all images
✅ id attributes on every section
✅ <!-- comments --> marking all placeholder content
✅ Proper indentation (2 spaces)
✅ lang="en" on <html>
✅ Complete <head> with title, meta description, viewport, charset

❌ No <style> tags
❌ No <script> tags  
❌ No inline style="" attributes
❌ No class="" attributes (Phase 1 only — added in Phase 2)
❌ No divs where semantic elements work
```

---

## Phase 2 — CSS Rules (when triggered)

- All colors via CSS custom properties (`:root` variables)
- Mobile-first, breakpoints at 900px and 600px
- Load Google Fonts via `<link>` in `<head>`
- No external CSS frameworks — pure CSS only
- Use `clamp()` for responsive font sizes
- Animate with `@keyframes` and `transition` only
- Scroll reveal: `.reveal` class + `IntersectionObserver` in Phase 3

---

## Phase 3 — JavaScript Rules (when triggered)

- Vanilla JS only — no jQuery, no libraries
- `IntersectionObserver` for scroll reveal
- Hamburger menu: toggle `.open` class on `<nav>`
- Form: `preventDefault` → show success message → reset
- WhatsApp float button: fixed position, pulse animation via CSS

---

## Competitor Weaknesses to Always Exploit in Content

| Abdeen Builders Weakness | Our Website Solution |
|---|---|
| Says "28 years" AND "15+ years" — inconsistent | Always say "28+ years" consistently |
| No real testimonials shown | Prominent testimonials with names |
| Vague service descriptions | Detailed, specific service descriptions |
| Generic stock photos | Placeholder + instruction to add real photos |
| No process explanation | Clear 4-step process section |
| Weak CTAs | Multiple strong CTAs + WhatsApp float |
| Built on Zyrosite (slow) | Clean custom code (fast) |

---

## File Naming Convention

```
/water-drainage-website/
├── index.html          ← Phase 1 & 2 (core page)
├── style.css           ← Phase 2 (if separated)
├── script.js           ← Phase 3 (if separated)
├── images/
│   ├── hero-bg.jpg
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-4.jpg
│   └── logo.png
├── SKILL.md            ← This file
└── SRS.md              ← System Requirements Specification
```

---

## Quick Prompt Templates

### Generate Phase 1 HTML
> "Using the water-drainage-contractor-website skill, generate the Phase 1 HTML skeleton for the core website — semantic structure only, no CSS, no JS, all content filled in from the skill's content reference."

### Add a Section
> "Using the skill, add the [SECTION NAME] section to the existing index.html following Phase 1 rules."

### Move to Phase 2
> "The HTML skeleton is complete. Using the skill, apply Phase 2 CSS styling using the brand rules — Deep Blue theme, Syne + DM Sans fonts, all sections styled."

### Check Against Competitor
> "Review the current website content against the skill's competitor weakness table and suggest improvements."

---

## Placeholders Checklist (Give to Client)

Before going live, client must provide:

- [ ] Company name (replace all `[YOUR COMPANY NAME]`)
- [ ] Real logo file (replace emoji placeholder)
- [ ] Real phone numbers (verify 0777 279 301 / 0777 403 262)
- [ ] Real email address (replace info@yourcompany.lk)
- [ ] Full address for Google Maps embed
- [ ] Project photos × 4 minimum (replace placeholder.jpg files)
- [ ] About/team photo × 1
- [ ] Real testimonials with permission from clients
- [ ] Confirm certifications (NWSDB reg number if available)
- [ ] Domain name for deployment