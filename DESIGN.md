---
name: Rogerio Barbosa — Portfolio
description: Dark, bold video editor portfolio. Midnight Ink background, Electric Lavender accents, Inter typography.
colors:
  primary: "#bd93f9"
  secondary: "#8be9fd"
  tertiary: "#ff79c6"
  neutral-bg: "#1a1b26"
  neutral-surface: "#282a36"
  neutral-elevated: "#2d2f42"
  neutral-border: "#44475a"
  neutral-text: "#f8f8f2"
  neutral-muted: "#6272a4"
  success: "#50fa7b"
typography:
  display:
    fontFamily: "Inter, system-ui, sans-serif"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Inter, system-ui, sans-serif"
    fontWeight: 500
    fontSize: "0.875rem"
    lineHeight: 1.4
rounded:
  md: "8px"
  sm: "4px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral-bg}"
  card-project:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "0 0 16px"
  input-default:
    backgroundColor: "{colors.neutral-bg}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    typography: "{typography.body}"
  input-focus:
    backgroundColor: "{colors.neutral-bg}"
  nav-link:
    typography: "{typography.label}"
  chip-tech:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
  chip-creative:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
  chip-short:
    backgroundColor: "{colors.success}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.sm}"
---

# Design System: Rogerio Barbosa — Portfolio

## 1. Overview

**Creative North Star: "The Midnight Edit"**

This is a portfolio that opens like a film. The screen is dark — not the soft gray of an app, but the purposeful dark of an edit suite at midnight. Light comes from the work itself: thumbnails glow, the purple accent strikes like a grade LUT, and the viewer moves through projects like reels on a timeline.

The system is dark, bold, and energetic, but the energy comes from the palette and typography, not from frantic motion. Interactions are refined and restrained — subtle color shifts, intentional state changes. The boldness is in the commitment to darkness and the saturation of the accent palette, not in decorative flourishes. This is a portfolio that trusts its work to command attention.

The palette is the Dracula theme adapted for brand use: a deep blue-black background (Midnight Ink), a blue-purple accent (Electric Lavender) as the primary signal, Ice Cyan and Neon Rose as category markers, and Moonstone white for text. Elevation is conveyed through lightness shifts, not shadows — tonal layering keeps the surface clean and modern.

This system explicitly rejects: cream/sand/beige backgrounds, glassmorphism, gradient text, numbered "01 / 02 / 03" section markers, all-caps tracked kickers above every heading, identical icon+heading+text card grids, and old video editor clichés (film reels, clapperboards, wipe transitions).

**Key Characteristics:**
- Dark-by-commitment: Midnight Ink background is not a default — it's the scene
- Accent rarity: Electric Lavender is the single voice; It appears on ≤15% of any screen
- Tonal depth, no shadows: surfaces stack by lightness, not box-shadow
- Refined interactions: state changes are subtle color shifts, not transforms or bounces
- Genre-adaptive palette: tech work gets Ice Cyan framing, creative work gets Neon Rose — same system, different face

## 2. Colors

The palette is adapted from Dracula for brand use on a dark background. Each accent has a specific communicative role, not just decorative function.

### Primary
- **Electric Lavender** (#bd93f9 / oklch(0.742 0.149 301.9)): Primary action color. Used for CTAs, active nav links, hover states, and section headings. High contrast (7:1) against Midnight Ink. Rarity is the point — this color leads.

### Secondary
- **Ice Cyan** (#8be9fd / oklch(0.883 0.093 212.8)): Secondary signal. Marks tech-category projects, hover on CTA (shift from lavender to cyan indicates "action"), and decorative list markers in the Sobre section.

### Tertiary
- **Neon Rose** (#ff79c6 / oklch(0.755 0.183 346.8)): Creative-category marker. Applied to badges and decorative markers for creative/short-form projects. Distinct from the tech cyan at a glance.

### Success
- **Neon Mint** (#50fa7b / oklch(0.871 0.220 148.0)): Success-only. Used for Short badges, form success messages, and decorative list items. Not a general accent.

### Neutral
- **Midnight Ink** (#1a1b26 / oklch(0.226 0.021 280.5)): Body background. The scene-setting dark. All surfaces sit on this.
- **Dark Slate** (#282a36 / oklch(0.288 0.022 277.5)): Surface background. Used for cards, footer, inactive filter buttons, mobile menu.
- **Elevated Slate** (#2d2f42 / oklch(0.312 0.034 279.6)): Elevated surface. Defined but not yet in active use — available for modals or dropdowns.
- **Steel** (#44475a / oklch(0.403 0.032 277.8)): Border and divider color. Subtle separation without visual weight.
- **Moonstone** (#f8f8f2 / oklch(0.977 0.008 106.5)): Primary text and headings. Maximum contrast (16:1) against Midnight Ink.
- **Muted Indigo** (#6272a4 / oklch(0.560 0.080 270.1)): Secondary text, descriptions, inactive nav links, placeholder text. Contrast is 3.6:1 against Midnight Ink — acceptable for secondary/large text (≥18px) but below AA for body copy. See Do's and Don'ts.

### Named Rules
**The Rarity Rule.** Electric Lavender appears on ≤15% of any given screen. Its scarcity is the source of its signal power. When everything is purple, nothing is.

**The Genre Switch Rule.** Tech content uses Ice Cyan framing (badges, list dots). Creative content uses Neon Rose. The same component (CardProjeto) speaks a different accent based on context — the palette is a communication system, not decoration.

## 3. Typography

**Display & Body Font:** Inter (variable, with fallback system-ui, sans-serif)
**Label Font:** Inter (medium weight, 0.875rem)

**Character:** A single-family system. Inter is technical without being cold, warm without being soft. On a dark background at 16px body, it reads as precise and confident — appropriate for a craftsman who works in both DaVinci Resolve and Next.js. The sole family forces contrast through weight and size rather than font pairing, which keeps the system coherent across seven pages and two languages.

### Hierarchy
- **Display** (700, clamp(2.25rem, 5vw, 3rem) / 1.1): Hero title. One per page. `text-wrap: balance`.
- **Headline** (700, 1.875rem / 1.2): Section headings (projetos, sobre, contato).
- **Title** (600, 1.125rem / 1.3): Card titles, list group headings.
- **Body** (400, 1rem / 1.6): Running text, descriptions. Max line length 70ch.
- **Body Large** (400, 1.125rem / 1.6): Hero subtitle, project detail descriptions.
- **Label** (500, 0.875rem / 1.4): Nav links, filter buttons, metadata, form labels.
- **Small** (500, 0.75rem / 1.4): Language toggle, secondary metadata.

Light text on dark backgrounds at Inter's default line-height reads cramped. Body text at 1.6 provides the breathing room a dark interface needs.

### Named Rules
**The Single-Family Rule.** Inter is the only font. No pairings, no display face. Distinction comes from weight and size contrast, not from introducing a second family. This is a deliberate constraint, not an unexamined default.

## 4. Elevation

The system uses **tonal layering** — depth is conveyed through background lightness, not shadows. Each surface level gets progressively lighter against Midnight Ink:

| Layer | Color | Lightness |
|---|---|---|
| Background | Midnight Ink | oklch 0.226 |
| Surface | Dark Slate | oklch 0.288 |
| Elevated | Elevated Slate | oklch 0.312 |

Cards, footer, mobile menus, and inactive filter buttons sit at the Surface level. The Elevated level is available for modals, dropdowns, or focused overlays. Steel (oklch 0.403) serves as the border between layers — fine lines rather than gaps.

There are no box-shadows in the system. The tonal shift provides sufficient depth without the visual noise of shadow on a dark background. The hover treatment on cards (`-translate-y-1`) is a positional shift, not an elevation change.

**The No-Shadow Rule.** Shadows are not part of the vocabulary. Depth is read from lightness, not from cast light. A box-shadow on a dark background reads as dirty, not elevated.

## 5. Components

### Buttons
- **Shape:** Gently curved (8px / rounded-md).
- **Primary CTA:** Electric Lavender background, Midnight Ink text, 12px 24px padding, medium weight (500). The hover shifts to Ice Cyan background — a color transition that signals "action" without animation fanfare. Disabled state: 50% opacity.
- **Secondary / Filter:** Dark Slate background, Muted Indigo text, 8px 16px padding, Steel border. Active state: Electric Lavender background, Midnight Ink text. Hover on inactive: text shifts to Moonstone.

The primary button is rare. Most navigational elements are text links (nav) or filter pills. The primary CTA appears only once: the "View Projects" link on the hero, and the "Send" submit on the contact form.

### Badges / Chips
- **Shape:** Tightly rounded (4px / rounded-sm), 2px 8px padding.
- **Tech badge:** Ice Cyan background, Midnight Ink text. Marks tech-category projects.
- **Creative badge:** Neon Rose background, Midnight Ink text. Marks creative-category projects.
- **Short badge:** Neon Mint background, Midnight Ink text. Marks short-form projects, stacked alongside the category badge.
- **State:** Static. No hover or interactive state. These are labels, not controls.

### Cards (Project Card)
- **Corner Style:** Gently curved (8px / rounded-md).
- **Background:** Dark Slate. Image area: aspect-video ratio with object-fit cover.
- **Border:** Steel (1px). Hover border transitions to Electric Lavender.
- **Shadow Strategy:** No shadows. Hover treatment: `translateY(-4px)` position shift + border color change.
- **Internal Padding:** 16px below the image. Title is Moonstone, hover title transitions to Electric Lavender.
- **Image:** 16:9 aspect ratio. On hover, image scales to 105% with a 300ms ease-out transform.

### Inputs / Fields
- **Style:** Midnight Ink background, Steel border (1px), 8px 16px padding, Moonstone text.
- **Focus:** Border transitions to Electric Lavender. No glow, no ring — the color shift is the signal.
- **Error:** Inline red text below the field (no system error color yet).
- **Disabled:** Inherits default, no custom styling.
- **Placeholder:** Inherits Moonstone text at reduced opacity. Note: Muted Indigo at 3.6:1 fails AA for placeholder body text sizing — see Do's and Don'ts.

### Navigation
- **Layout:** Sticky header (z-50), 64px height, full-width with optional backdrop-blur on scroll.
- **Desktop:** Horizontal link row, 6px gap. Inactive links: Muted Indigo, hover to Moonstone. Active link: Electric Lavender (medium weight). Language toggle: Muted Indigo with Steel left border separator.
- **Mobile:** Hamburger button (inline SVG, Moonstone). Open state: full-width dropdown with Dark Slate background, top border. Links stack vertically, same color treatment. Language toggle at bottom with Steel top separator.

### Footer
- **Layout:** Dark Slate background, Steel top border. 32px vertical padding. Flex row (stacks on mobile): copyright left, social links right.
- **Copyright:** Muted Indigo, 14px.
- **Social Links:** Muted Indigo, hover to Electric Lavender. No separator between links — spacing is the visual grouping.

### Hero
- **Layout:** Two-column flex (stacks on mobile). Left: text block (centered on mobile, left-aligned on desktop). Right: video thumbnail (16:9) with Steel border.
- **Video:** react-player with YouTube source. `light` prop uses project thumbnail. Aspect-video container with rounded corners (8px).
- **CTA:** Primary button, "View Projects" → `/projetos`.

## 6. Do's and Don'ts

### Do:
- **Do** use Electric Lavender sparingly — ≤15% of any screen. Its power comes from its rarity.
- **Do** use tonal layering for depth: Midnight Ink → Dark Slate → Elevated Slate. No shadows.
- **Do** assign Ice Cyan to tech content and Neon Rose to creative content. The palette is a categorization system.
- **Do** use `text-wrap: balance` on h1–h3 for even line lengths.
- **Do** keep body text at 70ch max width for readability.
- **Do** use Inter at multiple weights for hierarchy instead of introducing a second font.
- **Do** provide a `@media (prefers-reduced-motion: reduce)` alternative for every animation — typically a crossfade or instant transition.
- **Do** verify contrast against Midnight Ink for any new color introduced to the system.

### Don't:
- **Don't** use Muted Indigo (#6272a4) for body text smaller than 18px (bold) or below. At 16px it scores 3.6:1, below the 4.5:1 AA threshold. Use Moonstone for primary body copy and reserve Muted Indigo for labels, metadata, and secondary text at ≥14px bold or ≥18px regular.
- **Don't** add box-shadows. Depth is tonal. Shadows on a dark background read as dirty.
- **Don't** use gradient text (`background-clip: text`). Solid Electric Lavender or Moonstone only.
- **Don't** use glassmorphism (blurred backgrounds, glass cards). The dark system is opaque and intentional.
- **Don't** add numbered "01 / 02 / 03" markers above sections. The sequence metaphor doesn't apply to a portfolio.
- **Don't** use all-caps tracked kickers ("PROJETOS", "SOBRE") above section headings. Section titles are sentence-case or title-case at headline weight.
- **Don't** include film reel, clapperboard, or wipe-transition imagery. The portfolio demonstrates editing; it doesn't decorate with editing icons.
- **Don't** use side-stripe borders (border-left or border-right as colored accents). Use full border, background tint, or nothing.
- **Don't** use cream/sand/beige anywhere. The system is dark and committed.
