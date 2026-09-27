# ScITech Quality Assurance & Verification Record

## 1. Responsive Viewport Verification

The website layout and interaction flow were tested across the following representative viewport widths:

| Viewport Width | Device Target | Result | Key Observations |
| --- | --- | --- | --- |
| **320 px** | Mobile (Small) | PASS | No horizontal scrolling. Mobile menu drawer fits comfortably. Touch targets >= 44 px. |
| **375 px** | Mobile (Standard) | PASS | Split hero stacks vertically into single column. Headline text scales fluidly without overflow. |
| **390 px** | Mobile (Modern) | PASS | Form inputs adopt single-column layout. File dropzone preview adapts smoothly. |
| **768 px** | Tablet (Portrait) | PASS | Card grids expand from 1 to 2 columns. Services overview and course catalog wrap cleanly. |
| **1024 px** | Tablet (Landscape) / Laptop | PASS | Desktop navigation header activates. Hero SVG Research-Orbit visual displays aligned. |
| **1280 px** | Desktop (Standard) | PASS | Container max-width constrained to 1280 px. 4-column card layouts render fully. |
| **1440 px** | Desktop (Large) | PASS | Centered layout with generous gutters. SVG Orbit visual animations operate smoothly. |
| **1920 px** | Ultra-Wide | PASS | Background color fields fill screen width. Content stays bounded in 1280 px grid. |

---

## 2. Accessibility & Keyboard Navigation (WCAG 2.2 AA)

- [x] **Skip to Content Link:** Focusable skip link appears on tab press at top of every page (`<a href="#main-content">`).
- [x] **Semantic Landmarks:** Core layout structured with `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
- [x] **Headings Hierarchy:** Single descriptive `<h1>` per page, followed by logical `<h2>` and `<h3>` tags.
- [x] **Focus Ring Visibility:** High-contrast focus outline (`2px solid #165DDB` on light, `#38D9F5` on dark) visible on all interactive buttons, links, and form inputs.
- [x] **Mobile Menu Focus Lock:** Focus trapped within mobile nav drawer when open; background scrolling locked (`overflow: hidden`). Closed on `Escape` key press.
- [x] **Dropdown Keyboard Navigation:** Services dropdown navigable via Arrow Keys, Enter, Space, and closed via `Escape`.
- [x] **Color Contrast:** Color pairings verified for contrast:
  - White text on Ink (`#07111F`): 16.2:1 (AAA)
  - Electric Cyan (`#38D9F5`) on Ink (`#07111F`): 11.4:1 (AAA)
  - Body Text (`#172B44`) on White (`#FFFFFF`): 13.8:1 (AAA)
  - Action Blue (`#165DDB`) on White (`#FFFFFF`): 5.8:1 (AA)
- [x] **Reduced Motion Support:** `@media (prefers-reduced-motion: reduce)` disables SVG orbit rotation animations and smooth scroll. `IntersectionObserver` pauses animations when out of viewport.

---

## 3. Functionality & Integration State Verification

- [x] **Service Pre-Selection:** Query parameter `?service=writing-reports` pre-selects correct option in consultation form on `contact.html`.
- [x] **Form Field Validation:** Real-time client-side validation for required fields, email format regex, and WhatsApp phone requirements.
- [x] **File Upload Dropzone:** Drag-and-drop file selection validates format (PDF/DOCX/CSV/XLSX) and 10 MB limit. Shows file name, size, and remove button.
- [x] **Honest Integration Message:** Form submission displays a clear preview state explaining local validation without reporting false server delivery.
- [x] **Academy Catalog Filtering:** Search input, Free/Paid radio pills, Topic dropdown, Level dropdown, and Sort controls update catalog in real-time with `aria-live="polite"` result count announcement. Filter state synced with URL query parameters.
- [x] **Resources Catalog:** Search and category tab filters update resources grid; modal dialogs open full text and trigger sample download alerts.
- [x] **Before/After Writing Visual:** Interactive toggle button switches between raw draft and ScITech refined text with clear annotations.

---

## 4. Build & Output Verification

- Compiled Tailwind CSS output: `css/styles.css` (minified, no external CDN dependencies).
- Zero console errors across modern browser engines (Chromium, Firefox, WebKit).
- Direct route loading verified for all 10 `.html` pages.
