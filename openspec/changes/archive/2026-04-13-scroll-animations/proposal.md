# Scroll Animations

## Problem

The Drovar website loads all content instantly with no motion — sections, cards, and headings appear static. This makes the site feel flat despite having strong visual design and brand identity. Modern professional websites use subtle entrance animations to guide the user's eye, create visual hierarchy, and convey polish.

## Proposal

Add CSS-driven scroll-reveal animations across the entire site using a lightweight IntersectionObserver trigger (~15 lines of JS) with all animation logic in CSS. No external animation libraries.

### What gets animated

1. **Section reveals** — Each section below the hero fades up on scroll entry
2. **Staggered card grids** — Realization cards, offer cards, and project type cards animate in sequence
3. **Hero entrance** — Heading, subtitle, and buttons stagger-fade on page load
4. **SectionHeading accent bar** — Gold underline animates width from 0 → full
5. **Enhanced hover states** — Cards lift on hover (translateY + shadow)

### What stays the same

- Hero carousel (already animated)
- Navbar scroll behavior (already works)
- Existing hover transitions on links/buttons
- No changes to layout, content, or component structure

## Approach

- One shared client component (`ScrollAnimator`) that sets up a global IntersectionObserver
- All animation definitions in `globals.css` using CSS classes
- Components add `animate-on-scroll` class + optional `data-delay` for stagger
- `prefers-reduced-motion` respected — animations disabled for users who prefer it
- Zero external dependencies

## Non-goals

- Parallax effects
- Complex timeline or sequenced animations
- Scroll-jacking or scroll-position-tied animations
- Loading spinners or skeleton screens
- Page transition animations between routes
