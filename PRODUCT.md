# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro SSG, TypeScript strict, Tailwind CSS, CSS custom properties, Vanilla TypeScript and selective GSAP. HTML-first and no client framework.

## Users

This phase serves the project team evaluating an automotive homepage prototype. The future public audience will be drivers comparing tyre categories, products, technical guidance and local service options.

## Product Purpose

Build a high-fidelity, implementation-ready visual reference of the supplied automotive homepage, limited to `/`. Success means preserving its structure, pacing, responsive behavior and interaction model while keeping identity and content replaceable.

## Positioning

The differentiator in this phase is fidelity without coupling: the page behaves like the audited reference, but brand, content and licensed media are isolated behind tokens, data and an explicit asset mode.

## Capabilities and Constraints

- Homepage only; no backend, CMS, authentication or destination subpages.
- Links and controls remain visually and behaviorally complete.
- `REFERENCE_ASSETS_MODE=placeholder` is the default. Licensed assets may only be activated when explicitly supplied or authorized.
- Static hosting and CDN deployment are required.
- No React, Vue, Svelte, Angular, Next.js or jQuery.

## Brand Commitments

The present black, white and yellow system is a temporary reference-world commitment copied from the supplied visual structure. The project must support a later complete rebrand without component reconstruction.

## Evidence on Hand

- Live visual reference: `https://www.pirelli.com/tyres/es-mx/carro/homepage`
- User-supplied full-page screenshot.
- Browser measurements and generated reference captures under `reference-screenshots/`.
- Four original, brand-neutral generated placeholder images under `src/assets/placeholders/`.
- No licensed third-party brand photography, video or proprietary font files were supplied.

## Product Principles

1. Ship semantic HTML first.
2. Match measured behavior before aesthetic approximation.
3. Keep structure, content, identity and assets independently replaceable.
4. Spend JavaScript only on real interaction and scroll choreography.
5. Protect accessibility, performance and responsive integrity throughout.

## Accessibility & Inclusion

Target WCAG-aligned keyboard operation, visible focus, reduced-motion support and Lighthouse Accessibility 100.
