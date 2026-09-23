# Homepage reference audit

- **URL:** https://www.pirelli.com/tyres/es-mx/carro/homepage
- **Audited:** 2026-09-01
- **Scope:** homepage/index only
- **Reference viewports inspected:** 1440 × 900 and 390 × 844, with the supplied 1920 px full-page capture used as an additional visual authority.

## Page inventory

1. Fixed global header: 32 px utility bar + 64 px main navigation on desktop; 64 px single row on mobile.
2. Desktop tyre mega menu with three navigation groups and promotional media; full-height mobile drawer with nested rows.
3. Full-viewport media hero with headline, supporting line, outline CTA and video control.
4. Yellow tyre-finder panel overlaying the hero; two desktop search paths and one consolidated mobile path.
5. Vehicle/family tabs and a horizontally scrolling five-card category rail.
6. Promotion heading and full-width campaign banner.
7. Highlights heading and large three-slide carousel.
8. Three featured product cards on black surfaces plus catalogue CTA.
9. Advice block: illustrated selector card and FAQ list.
10. Dark dealer locator banner with city input and location action.
11. Technology/sustainability full-bleed editorial banner with two white information cards.
12. OEM heading, explanatory copy, yellow CTA and a long sticky media/scroll-story sequence.
13. Dark category rail for prestige, classic, motorcycle, bicycle and motorsport ranges.
14. Complete desktop footer; compact social row plus accordion navigation on mobile.

## Measured system

- Desktop content gutter at 1440: 120 px (`8.333vw`); content width: 1185 px. The large-screen container caps near 1440 px.
- Mobile gutter: 20 px; card inset: 16 px.
- Page backgrounds: `#f1f1f1`; primary dark: `#1f1f1f`; soft white: `#fcfcfc`; action yellow is visually near `#ffd900`.
- Hero: 900 px at the 1440 × 900 viewport and 844 px at the 390 × 844 viewport (`100svh`).
- Card rail desktop geometry: three 379 px cards with 24 px gaps; mobile: 303 px cards with 42 px peek/rail spacing.
- Section titles: 52/56 px black weight on desktop; 32/40 px on mobile. Hero H1: 64/64 px desktop, 32/40 px mobile.
- Header z-index sits above hero and menus; sticky/pinned OEM media creates roughly 2.8–3 viewports of scroll duration.

## Typography

The reference loads proprietary Gotham W05 Book, Medium, Bold and Black WOFF2 files. Computed family is `Gotham, Gotham A, Gotham B, Arial, sans-serif`.

| Role | Desktop | Mobile | Weight |
| --- | --- | --- | --- |
| Hero H1 | 64/64 | 32/40 | 900 |
| Section H2 | 52/56 | 32/40 | 900 |
| Card H3 | 32/40 | 24/32 | 900 |
| Hero support | 24/32 | 20/30 | 500 |
| Body/navigation | 16/24 | 14–16/22 | 400–700 |
| Buttons | ~13.3 px | 12–14 px | 700 |

Gotham files are not copied. The project uses the OFL-licensed Montserrat variable font as a temporary metric fallback, centralized in `tokens.css`.

## Responsive behavior

- Desktop utility links and mega menu disappear below the tablet breakpoint; the fixed mobile row and drawer replace them.
- Hero art direction moves the visual focal point toward center/right while copy stays left; mobile stacks the finder action and drops the second search path.
- Category, highlight, product and passion groups remain horizontal rails instead of becoming ordinary stacked grids.
- Advice columns stack; dealer, technology cards and footer navigation become single-column.
- Footer groups are expanded columns on desktop and native accessible disclosure panels on mobile.
- OEM media remains sticky inside a tall scroll section; reduced-motion mode removes the pin choreography.

## Motion and interaction

- Header surface changes from transparent over the hero to an opaque light surface after scroll.
- Mega menu opens on pointer hover and keyboard focus; mobile drawer uses `aria-expanded` and Escape closing.
- Rails use CSS Scroll Snap with small accessible previous/next controls.
- FAQ rows use disclosure affordances; footer uses native `<details>` on mobile.
- OEM media uses one GSAP/ScrollTrigger scrubbed scale/translate sequence; basic hovers and state changes remain CSS.

## Asset strategy and limitations

- The audit recorded original asset URLs in `reference-assets.json`, but no third-party photography, video, logo or fonts are redistributed.
- `placeholder` mode uses five original generated automotive images, including a dedicated portrait hero variant, with equivalent ratios and focal behavior.
- `licensed` mode is structurally prepared but intentionally falls back to placeholders until authorized files are supplied under `public/reference-assets/licensed/`.
- Full-page browser screenshots can under-represent sticky video frames; the supplied screenshot and live scroll inspection remain the authority for the OEM sequence.

## Build and quality verification

- Final stack: Astro 5.18.2 SSG, TypeScript strict, Tailwind CSS 4, CSS custom properties, Vanilla TypeScript and one selective GSAP/ScrollTrigger sequence.
- Astro 7.2.10 was installed and tested, but Windows application policy blocks its native compiler binding at build time. Astro 5.18.2 is therefore the newest branch verified to compile in this environment; Rollup uses the WASM package for the same compatibility reason.
- `astro check`: 0 errors, 0 warnings, 0 hints. Production build emits one static route, sitemap output and responsive AVIF/WebP image variants.
- Lighthouse production preview: desktop 100/100/100/100; mobile 98/100/100/100 for Performance/Accessibility/Best Practices/SEO. Measured LCP: 0.5 s desktop and 2.3 s mobile; CLS: 0.006 desktop and 0 mobile.
- `npm audit` reports one low and two high advisories in the compatible Astro build toolchain. The delivered site is static and does not ship Node, SSR, server islands, view transitions or untrusted spread/slot input, so the reported server and dynamic-rendering surfaces are absent from deployment. Re-test Astro 7+ when the host policy permits its compiler binding.
