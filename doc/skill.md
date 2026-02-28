---
name: ZAM Construction UI Design System
description: Design system, color palette, layout rules, HTML/CSS/JS conventions, and AI agent guidelines for the ZAM Construction website (Water & Drainage Contractor, Sri Lanka).
---

# ZAM Construction — UI Design System & Agent Guidelines

This skill defines the **single source of truth** for all UI decisions on this project. Any AI agent or developer making changes to `index.html`, `Style.css`, or `index.js` **must follow these rules precisely**. Do not introduce new patterns, colors, or layouts without updating this document first.

---

## 1. Project Overview

| Property       | Value                                         |
|----------------|-----------------------------------------------|
| **Company**    | ZAM Construction                             |
| **Industry**   | Water Supply & Drainage Contracting, Sri Lanka |
| **Tone**       | Professional, trustworthy, technical, clean   |
| **Target**     | Municipal engineers, architects, businesses   |
| **Style**      | Minimal, bold typography, black & blue        |

---

## 2. File Structure

```
/usamaaa
│
├── index.html      ← Structure only. No inline <style> or <script> blocks.
├── Style.css       ← All styles. No inline styles in HTML unless absolutely unavoidable.
├── index.js        ← All JavaScript. Linked at the bottom of <body>.
├── assets/
│   └── logo.png   ← Company logo
└── doc/
    └── SKILL.md   ← This file
```

### Rules
- **NEVER put `<style>` blocks inside `index.html`.**  All CSS goes in `Style.css`.
- **NEVER put `<script>` blocks inside `index.html`.** All JS goes in `index.js`.
- Inline `style=""` attributes are only allowed for one-off overrides that cannot reasonably be expressed in CSS (e.g., dynamic values set by JS).
- Always link stylesheet in `<head>`: `<link rel="stylesheet" href="./Style.css">`
- Always link script at bottom of `<body>`: `<script src="./index.js"></script>`

---

## 3. Color Palette

| Token / Usage           | Value                      | Notes                              |
|-------------------------|----------------------------|------------------------------------|
| **Primary — Black**     | `#000000` / `rgb(0,0,0)`   | Backgrounds, buttons, borders      |
| **Accent — Blue**       | `rgb(29, 43, 226)`         | Links, icons, hover shadows, CTA   |
| **Call Blue (pulse)**   | `rgb(0, 60, 255)`          | "Call Now" tooltip overlay         |
| **Light Gray**          | `#f9f9f9`                  | About & Contact section bg         |
| **Mid Gray**            | `#f4f4f4`                  | Projects section bg                |
| **Dark Footer**         | `#111`                     | Footer background                  |
| **Footer Text**         | `#aaa`                     | Footer body text                   |
| **Border / Divider**    | `#ccc` / `#eee`            | Form inputs, card borders          |
| **Muted Text**          | `#666`                     | Project caption, secondary text    |
| **White**               | `#ffffff`                  | Card backgrounds, nav background   |
| **Dark Certifications** | `#222`                     | Certifications strip background    |

### Rules
- **Do not introduce new colors** without updating this table.
- Accent blue `rgb(29, 43, 226)` is for: check icons, links, step numbers, cite text, submit-btn hover, input focus border, card hover shadow.
- Black `#000` / `#111` is for: hero heading, nav bg on hover, submit button default, footer.
- All backgrounds alternate between white and a light gray to create visual rhythm across sections.

---

## 4. Typography

| Property       | Value                              |
|----------------|------------------------------------|
| **Font Family** | `'Poppins', sans-serif`           |
| **Font Source** | Google Fonts (add via `<link>` in `<head>`) |
| **Base size**  | 16px (browser default)             |
| **Line height** | 1.6 for body / paragraph text     |

### Heading Scale
| Element | Size      | Weight | Transform    | Usage                      |
|---------|-----------|--------|--------------|----------------------------|
| `h1`   | `60px`    | bold   | `uppercase`  | Hero headline only         |
| `h2`   | `40px`    | bold   | `uppercase`  | Section headers            |
| `h3`   | `30px`    | bold   | `uppercase`  | Card titles (services)     |
| `h3`   | `22px`    | normal | none         | Project card titles        |
| `h3`   | `28px`    | normal | none         | Contact info heading       |

### Rules
- All section `h2` headings use `.content h2`: `font-size: 40px; text-transform: uppercase; font-weight: bold`.
- `h1` is reserved for the **hero section only**.
- Do not add more than one `h1` per page.

---

## 5. Layout & Spacing

### Page Shell
```css
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
```
All page content is a direct child of `.container`.

### Content Sections
Every main section uses the `.content` class:
```css
.content {
    padding: 60px 10px;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
}
```

### Inner Content Width
Inner grids/containers should be constrained to **80% width** with `margin: auto`:
```css
.about-container,
.process-container,
.projects-container,
.testimonials-container,
.certifications-container,
.contact-container { width: 80%; margin: auto; }
```

### Spacing Rules
- Section padding: `60px 10px` (top/bottom)
- Card internal padding: `30px` (process, testimonials) or `10px 30px 20px 30px` (service cards)
- Gap between grid items: `20–30px`
- `margin-bottom` on `h2` inside sections: `40px`

---

## 6. Navigation / Header

- Fixed pill-shaped sticky header: `border-radius: 100px`, `width: 83%`, `top: 20px`
- White background, subtle shadow: `box-shadow: 5px 5px 10px rgba(133,125,125,0.27)`
- Nav links: black text, pill hover → `background-color: black; color: white; border-radius: 100px`
- Logo: image left + bold uppercase text right, `gap: 10px`
- `z-index: 100` to float above page content

---

## 7. Buttons & CTAs

### Standard Button (`.hero_contact a`)
```css
padding: 10px 30px;
border: 1px solid;
border-radius: 100px;
color: black;
transition: all 0.3s ease;
```
Hover → `background-color: black; color: white`

### Primary CTA — "Call Now" (`.call`)
```css
background-color: black;
color: white;
```
- Has a **pulsing blue border ring** animation (`call_btn_loop`, 0.8s infinite)
- On hover: shows a tooltip with phone number (styled in `::before`)

### Submit Button (`.submit-btn`)
```css
background-color: black;
color: white;
border-radius: 100px;
padding: 15px;
font-size: 16px;
font-weight: bold;
```
Hover → `background-color: rgb(29, 43, 226)`

### Rules
- All main action buttons use `border-radius: 100px` (pill shape).
- Primary actions are black-filled. Secondary/ghost are border-only.
- Hover effects must use `transition: all 0.3s ease`.

---

## 8. Cards

### Service Cards (`.services .card`)
- `border: 1px solid` (default black border)
- `border-radius: 10px`
- `display: flex; flex-direction: column; align-items: center; gap: 10px`
- Hover: `box-shadow: 5px 5px 0px rgb(19, 33, 233)` — **offset blue shadow, no blur**
- Hover h3: `color: rgb(29, 43, 226)`
- Grid: `repeat(3, 1fr)`, gap `20px`

### Process Steps (`.process-step`)
- White card with light border and subtle soft shadow
- `border-radius: 10px`
- Hover: `transform: translateY(-10px)` + offset blue shadow

### Project Cards (`.project-card`)
- White background, rounded corners, soft shadow
- Image div 250px height with `background-size: cover`
- Hover: `box-shadow: 5px 5px 0px black` (offset black shadow)

### Hover Shadow System
| Context          | Shadow style                         |
|------------------|--------------------------------------|
| Service cards    | `5px 5px 0px rgb(19, 33, 233)`      |
| Process steps    | `5px 5px 0px rgb(19, 33, 233)`      |
| Project cards    | `5px 5px 0px black`                 |
| Hero list items  | `5px 5px 0px black`                 |
| Submit btn       | `0 5px 15px rgba(29,43,226,0.4)`    |

> **Rule:** Offset shadows (no blur or minimal blur) for interactive components. This creates the signature "flat design" hover feel.

---

## 9. Section Backgrounds

Alternate section backgrounds to create visual rhythm:

| Section ID         | Background        |
|--------------------|-------------------|
| Hero               | gradient + grid   |
| `#services`        | white (default)   |
| `#about`           | `#f9f9f9`         |
| `#process`         | white             |
| `#projects`        | `#f4f4f4`         |
| `#testimonials`    | white             |
| `#certifications`  | `#222` (dark)     |
| `#contact`         | `#f9f9f9`         |
| `footer`           | `#111`            |

### Rules
- Never use two consecutive white sections.
- Dark sections (`#222`, `#111`) must have white or light text and white `h2`.
- Use `min-height: auto` for utility strips (certifications, footer).

---

## 10. Hero Section

- Full viewport height (`min-height: 100vh`)
- Content positioned left (`align-items: start`) with `margin-left: 100px`
- Wide heading: `font-size: 60px; text-transform: uppercase`
- Two CTA buttons side by side in `.hero_contact` (flex row, `gap: 10px`)
- Stats row in `.hero_list ul` (flex row, `gap: 30px`) — bordered pill list items
- Background: `linear-gradient(rgba(255,255,255,0.096), rgba(255,255,255,0.692))` over an optional `.grid_bg` decorative layer
- `main` has `position: relative; top: -90px` to pull up beneath the floating header

---

## 11. Forms

- Grid layout: `grid-template-columns: 1fr 1fr; gap: 20px`
- Full-width elements: `grid-column: span 2` on `.form-group.full-width`
- Inputs/selects/textareas: `padding: 12px; border: 1px solid #ccc; border-radius: 5px`
- Focus state: `border-color: rgb(29, 43, 226)` (blue, no outline)
- Font: always `'Poppins', sans-serif` on form elements

---

## 12. Animations

| Name             | Target               | Description                                       |
|------------------|----------------------|---------------------------------------------------|
| `call`           | `.call::before`      | Tooltip slides down from 50px → 70px, fades in   |
| `call_btn_loop`  | `.call::after`       | Pulsing blue ring expands and fades, 0.8s infinite |
| Nav hover        | `ul li a`            | Pill fill transition, `0.3s ease`                 |
| Card hover       | `.card`, `.process-step` | `transform: translateY(-10px)`, `0.3s ease`  |

### Rules
- Use `transition: all 0.3s ease` as the standard transition on interactive elements.
- Do not add `animation` unless it communicates a live/urgent action (e.g., the call button pulse).
- All hover transforms should use `translateY` (lift effect) or box-shadow shift.

---

## 13. HTML Conventions

- Use semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`, `<address>`.
- Every section must have a unique `id` matching the nav anchor (`#hero`, `#services`, etc.).
- Section wrapper pattern: `<section class="content [additional-class]" id="[id]">`
- Do not nest `<section>` inside `<section>`.
- Close all tags. Self-closing tags (`<img>`, `<input>`, `<br>`) do not need a trailing slash.
- Use `<!-- ================= SECTION NAME ================= -->` comments to separate major blocks.

---

## 14. CSS Conventions

- One CSS file: `Style.css`. No additional `.css` files unless explicitly needed (e.g., print.css).
- Use section comments matching HTML: `/* ================= SECTION ================= */`
- Use class selectors (`.class`), not IDs (`#id`), for styling — except for section-specific overrides like `#certifications { background-color: #222 }`.
- Variables go in `:root {}` at the top of the file.
- Media queries go at the **bottom** of the file, after all component styles.
- Order of properties per rule: positioning → box model → typography → visual (color/bg/shadow) → animation.

---

## 15. JavaScript Conventions

- One JS file: `index.js`. No inline `<script>` tags.
- Use `const` and `let`. Never use `var`.
- Add a comment block before each feature: `// ===== FEATURE NAME =====`
- Event listeners go at the bottom of the file, after all function declarations.
- Do not use jQuery or any external libraries unless added to `index.html` via CDN and documented here.

---

## 16. AI Agent Rules

When an AI agent (such as Antigravity / Gemini) works on this codebase, it **MUST**:

1. **Read this SKILL.md first** before making any UI changes.
2. **Never introduce new colors** not listed in Section 3. Ask the user first.
3. **Never add inline `<style>` or `<script>` blocks** to `index.html`.
4. **Preserve the file separation**: HTML → `index.html`, CSS → `Style.css`, JS → `index.js`.
5. **Match the existing hover shadow pattern** (offset, no-blur shadows) for any new cards.
6. **Use pill-shaped buttons** (`border-radius: 100px`) for all primary CTAs.
7. **Maintain section background alternation** — no two consecutive white or gray sections.
8. **Keep inner content at 80% width** with `margin: auto` for all section containers.
9. **Never change fonts** — always use `'Poppins', sans-serif`.
10. **Update this SKILL.md** if a new pattern, color, or convention is introduced.

---

## 17. Do's and Don'ts

| ✅ Do                                                    | ❌ Don't                                              |
|----------------------------------------------------------|------------------------------------------------------|
| Use `box-shadow: 5px 5px 0px` for card hover            | Use `box-shadow: 0 10px 30px rgba(...)` on cards     |
| Use blue `rgb(29, 43, 226)` for accents & interactive   | Introduce indigo, teal, or other blues               |
| Keep all buttons pill-shaped (`border-radius: 100px`)   | Use rectangular or slightly-rounded buttons          |
| Write semantic HTML with section IDs                    | Use `<div>` instead of `<section>`, `<header>`, etc. |
| Alternate section backgrounds (white/gray/dark)         | Stack multiple white sections in a row               |
| Keep headings `text-transform: uppercase`               | Use sentence case or title case for `h2`/`h3`        |
| Put all logic in `index.js`                             | Inline event handlers (`onclick=""` in HTML)         |
| Add `transition: all 0.3s ease` on interactive elements | Skip transitions on hover states                     |
