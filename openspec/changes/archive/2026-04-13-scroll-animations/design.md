# Design: Scroll Animations

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│  globals.css                                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │ .animate-on-scroll        → initial hidden state  │  │
│  │ .animate-on-scroll.visible → final visible state  │  │
│  │ .animate-fade-up          → fade + slide up       │  │
│  │ .animate-fade-in          → fade only             │  │
│  │ .animate-scale-in         → fade + scale          │  │
│  │ .animate-bar-grow         → width 0 → 100%        │  │
│  │ @keyframes hero-entrance  → page-load stagger     │  │
│  │ [data-delay="1..6"]       → stagger delays        │  │
│  │ @media reduced-motion     → disable all           │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  ScrollAnimator.tsx (client component)                  │
│  ┌───────────────────────────────────────────────────┐  │
│  │ useEffect → IntersectionObserver                  │  │
│  │ observes all .animate-on-scroll elements          │  │
│  │ adds .visible class when threshold met            │  │
│  │ unobserves after trigger (one-shot)               │  │
│  │ respects prefers-reduced-motion                   │  │
│  └───────────────────────────────────────────────────┘  │
│                                                         │
│  Components just add CSS classes:                       │
│  ┌───────────────────────────────────────────────────┐  │
│  │ <section className="animate-on-scroll             │  │
│  │   animate-fade-up">                               │  │
│  │                                                   │  │
│  │ <div className="animate-on-scroll animate-fade-up │  │
│  │   data-delay="2">   ← stagger delay              │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## ScrollAnimator Component

- Lives at `components/ui/ScrollAnimator.tsx`
- Rendered once in the root layout (`layout.tsx`)
- Uses `useEffect` to create a single `IntersectionObserver` instance
- Threshold: `0.15` (triggers when 15% of element is visible)
- One-shot: calls `unobserve()` after adding `.visible` — no re-triggering on scroll back up
- Checks `prefers-reduced-motion`: if enabled, immediately adds `.visible` to all elements (no animation, content still shows)

## CSS Animation Classes

### Base trigger class
- `.animate-on-scroll` — marks element for observation, no visual effect on its own

### Animation variants (combine with base class)
| Class | Initial State | Final State | Use Case |
|---|---|---|---|
| `.animate-fade-up` | `opacity: 0; translateY(30px)` | `opacity: 1; translateY(0)` | Sections, cards |
| `.animate-fade-in` | `opacity: 0` | `opacity: 1` | Images, subtle reveals |
| `.animate-scale-in` | `opacity: 0; scale(0.95)` | `opacity: 1; scale(1)` | Feature cards |
| `.animate-bar-grow` | `scaleX(0)` | `scaleX(1)` | SectionHeading accent bar |

### Stagger delays
`data-delay="1"` through `data-delay="6"` → 100ms increments (100ms, 200ms, ... 600ms)

### Timing
- Duration: `0.6s` for sections, `0.5s` for cards
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` (smooth ease-out)
- Stagger gap: `100ms` between cards

## Component-by-Component Plan

### Hero (`HeroSection.tsx`)
- Heading, subtitle, buttons: CSS `@keyframes` animation on page load (not scroll-triggered)
- Staggered with `animation-delay`: heading 0ms → subtitle 200ms → buttons 400ms

### Sections (About, Offer, ForWho, WhyUs, Assembly, Partners, Contact)
- Wrap each section's content in `animate-on-scroll animate-fade-up`

### Cards (RealizationCard, offer cards, project type cards)
- Each card: `animate-on-scroll animate-fade-up data-delay="{index}"`
- Enhance hover: add `hover:-translate-y-1 hover:shadow-lg transition-all duration-300`

### SectionHeading
- The accent bar (`<div>` with `bg-accent`): add `animate-on-scroll animate-bar-grow`
- Use `transform-origin: left` so it grows from left to right

### Navbar
- No changes — already has scroll-triggered background transition

### Footer
- Light `animate-fade-in` on scroll entry

## Accessibility

```css
@media (prefers-reduced-motion: reduce) {
  .animate-on-scroll {
    opacity: 1 !important;
    transform: none !important;
    transition: none !important;
    animation: none !important;
  }
}
```

## Performance Considerations

- Single IntersectionObserver instance (not one per element)
- CSS transitions are GPU-accelerated (opacity + transform only)
- No layout-triggering properties animated (no width/height/margin)
- `will-change` not used (browser handles optimization for simple transitions)
- One-shot observation prevents ongoing scroll listeners
