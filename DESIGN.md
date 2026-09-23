---
name: 7Leguas Reference System
description: High-performance automotive editorial system with measured pacing and replaceable identity.
colors:
  signal-yellow: "#ffd900"
  signal-yellow-hover: "#ffe44d"
  performance-ink: "#1f1f1f"
  supporting-ink: "#555555"
  road-mist: "#f1f1f1"
  clean-paper: "#fcfcfc"
  pure-white: "#ffffff"
  quiet-border: "#d6d6d6"
  accessible-muted: "#686868"
typography:
  display:
    fontFamily: "Montserrat Variable, Arial Narrow, Arial, sans-serif"
    fontSize: "clamp(48px, 4.45vw, 64px)"
    fontWeight: 900
    lineHeight: 1
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Montserrat Variable, Arial, sans-serif"
    fontSize: "clamp(32px, 3.62vw, 52px)"
    fontWeight: 900
    lineHeight: 1.077
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Montserrat Variable, Arial, sans-serif"
    fontSize: "32px"
    fontWeight: 900
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Montserrat Variable, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Montserrat Variable, Arial, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    lineHeight: 1
rounded:
  control: "4px"
  editorial: "0px"
spacing:
  control-gap: "8px"
  control-padding: "16px"
  card-gap: "24px"
  section: "72px"
  section-mobile: "48px"
components:
  button-signal:
    backgroundColor: "{colors.signal-yellow}"
    textColor: "{colors.performance-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  button-dark:
    backgroundColor: "{colors.performance-ink}"
    textColor: "{colors.clean-paper}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 16px"
    height: "44px"
  editorial-card:
    backgroundColor: "{colors.clean-paper}"
    textColor: "{colors.performance-ink}"
    rounded: "{rounded.editorial}"
    padding: "24px"
---

# Design System: 7Leguas Reference System

## Overview

**Creative North Star: "The Performance Showroom"**

The current system treats the homepage as a measured automotive showroom: full-bleed photographic moments alternate with quiet road-mist fields, dense information rails, and decisive signal-yellow actions. It is editorial rather than app-like, with square media, compressed high-weight headings, and long vertical pacing derived from the audited reference.

This is intentionally a replaceable reference world. Its geometry and behavioral patterns are durable; the temporary 7Leguas wordmark, product names, generated vehicle imagery, and black/white/yellow identity are not future brand commitments.

**Key Characteristics:**

- Full-height media-led hero with a docked finder.
- Square editorial cards, dense rails, and strong typographic hierarchy.
- Signal yellow reserved for actions, selection, and focus.
- Responsive art direction rather than merely stacking desktop content.
- HTML-first interaction with selective scroll choreography.

## Colors

The palette is a restrained performance-neutral field with one high-visibility signal accent.

### Primary

- **Signal Yellow:** the scarce action and focus color used for finder surfaces, primary CTAs, selected states, and text selection.

### Neutral

- **Performance Ink:** primary text, dark controls, footer, and deep media fields.
- **Supporting Ink:** secondary paragraphs and explanatory copy.
- **Road Mist:** the continuous page ground between media blocks.
- **Clean Paper:** cards, menu panels, and light controls.
- **Quiet Border:** subtle separators and input outlines.
- **Accessible Muted:** inactive labels that must remain WCAG-readable.

**The Signal Rule.** Yellow identifies action or state; it is never a decorative page wash.

**The Ground Rule.** Editorial sections sit directly on the cool road-mist field unless the reference pattern calls for full-bleed media or the ink footer.

## Typography

**Display Font:** Montserrat Variable with Arial Narrow and Arial fallbacks  
**Body Font:** Montserrat Variable with Arial fallback

**Character:** The licensed reference uses Gotham; the implementation deliberately substitutes a metric-adjacent geometric sans. Display copy is compact, very heavy, and tightly tracked, while body copy remains neutral and readable.

### Hierarchy

- **Display:** black weight, fluid 48–64px desktop scale, unit line-height; reserved for hero and major media declarations.
- **Headline:** black weight, fluid 32–52px scale; establishes section landmarks.
- **Title:** black weight at 32px/40px; used inside substantial cards and content modules.
- **Body:** regular 16px/24px baseline with smaller 12–15px editorial variants where density requires it.
- **Label:** extra-bold 13px with compact line-height; used for buttons, navigation, and concise card actions.

**The Weight Before Ornament Rule.** Hierarchy comes from scale, weight, and negative space—not outlines, gradient type, or ornamental lettering.

## Layout

The desktop system uses a 1440px maximum page frame with fluid gutters equivalent to 120px at a 1440px viewport. Major section content resolves to a 1185px effective container after the scrollbar is accounted for. The core rhythm is 72px, adjusted by measured section-specific intervals where the reference requires a different handoff.

At 767px and below, gutters become 20px, navigation collapses to a 64px bar and full-height drawer, card groups become horizontal scroll-snap rails, and the hero switches to a portrait art-directed image. A secondary compression breakpoint at 1100px reduces header and finder density without changing section order.

The OEM story uses an intentionally long sticky scroll stage. Motion is progressive enhancement; reduced-motion users receive a stable, non-sticky presentation.

## Elevation & Depth

The system is flat by default. Depth comes primarily from photographic layers, dark-to-transparent media shading, tonal contrast, and sticky scale choreography. A soft ambient header shadow appears only when navigation becomes solid; cards do not float over the page with generic shadows.

### Shadow Vocabulary

- **Solid Header:** a diffuse 0 6px 24px shadow at 12% black, used only after scroll or while menus are open.
- **Reserved Card Shadow:** a diffuse 0 8px 24px shadow at 12% black exists for stateful card elevation but is not the resting treatment.

**The Flat-at-Rest Rule.** Default editorial surfaces remain flush; elevation communicates navigation or state, not decoration.

## Shapes

Editorial media and cards use square corners. Interactive controls use a restrained 4px radius, and social controls use true circles. The skewed temporary wordmark is an isolated identity placeholder and not a reusable silhouette rule.

## Components

### Buttons

- **Shape:** compact rectangular controls with a restrained 4px corner and at least 40–44px height.
- **Primary:** signal-yellow surface with performance-ink label; hover brightens and lifts by 1px.
- **Dark:** performance-ink surface with clean-paper label for finder actions.
- **Outline:** transparent media control with a quiet white border for hero actions.
- **Focus:** a 3px signal-yellow outline with 3px offset on every interactive element.

### Cards / Containers

- **Corner Style:** square editorial geometry.
- **Background:** photography for media cards or clean paper for informational cards.
- **Shadow Strategy:** flat at rest; photographic overlays provide text contrast.
- **Internal Padding:** typically 24px desktop and 16–20px mobile.

### Inputs / Fields

- **Style:** clean-paper field, no decorative chrome, 4px radius, and a 48px control height.
- **Focus:** the global signal-yellow focus ring remains visible above dark and light contexts.

### Navigation

Desktop navigation is a fixed 96px two-tier header that begins transparent and becomes paper-white after scroll. Its mega menu is a 316px white panel controlled by hover, click, keyboard, outside-click, and Escape. Mobile navigation is a fixed 64px row with a full-height paper drawer and native disclosure groups.

### Horizontal Rails

Cards use CSS Scroll Snap with 44px arrow controls on desktop and direct touch scrolling on mobile. The geometry keeps the next card partially visible where the reference signals additional content.

### OEM Sticky Stage

A single optimized factory image scales and unclamps through a long sticky scroll section using GSAP/ScrollTrigger. The stage clips its own transform to prevent horizontal overflow and disables choreography under reduced motion.

## Do's and Don'ts

### Do:

- **Do** preserve the measured section order, container widths, and breakpoint-specific art direction.
- **Do** reserve signal yellow for action, selection, and focus.
- **Do** keep media dimensions explicit and provide AVIF/WebP responsive sources.
- **Do** keep editorial cards square and use tonal or photographic depth.
- **Do** maintain keyboard-complete menu, accordion, and carousel controls.

### Don't:

- **Don't** introduce rounded dashboard-card styling into editorial modules.
- **Don't** replace measured spacing with generic utility defaults.
- **Don't** load proprietary fonts or third-party campaign media without explicit authorization.
- **Don't** add decorative gradients, hard offset shadows, eyebrow labels, or glyph-only controls as a substitute for hierarchy.
- **Don't** turn the editorial homepage into a hydrated SPA.
