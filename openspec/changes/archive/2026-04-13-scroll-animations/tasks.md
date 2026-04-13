# Tasks: Scroll Animations

## 1. CSS foundation
- [x] Add animation classes to `globals.css`: `.animate-on-scroll`, `.animate-fade-up`, `.animate-fade-in`, `.animate-scale-in`, `.animate-bar-grow`
- [x] Add stagger delay data attributes (`[data-delay="1"]` through `[data-delay="6"]`)
- [x] Add `@keyframes hero-entrance` for page-load hero animation
- [x] Add `@media (prefers-reduced-motion: reduce)` overrides

## 2. ScrollAnimator component
- [x] Create `components/ui/ScrollAnimator.tsx` — client component with IntersectionObserver
- [x] Add `ScrollAnimator` to root layout (`app/[locale]/layout.tsx`)

## 3. Hero entrance animation
- [x] Add CSS keyframe animation to hero heading, subtitle, and buttons in `HeroSection.tsx`
- [x] Stagger: heading 0ms → subtitle 200ms → buttons 400ms

## 4. Section scroll reveals
- [x] `AboutSection.tsx` — add `animate-on-scroll animate-fade-up`
- [x] `OfferSection.tsx` — section + staggered cards
- [x] `ForWhoSection.tsx` — add `animate-on-scroll animate-fade-up`
- [x] `WhyUsSection.tsx` — section + staggered items
- [x] `AssemblySection.tsx` — add `animate-on-scroll animate-fade-up`
- [x] `ProjectTypesSection.tsx` — section + staggered cards
- [x] `PartnersSection.tsx` — add `animate-on-scroll animate-fade-up`
- [x] `ContactPreview.tsx` — add `animate-on-scroll animate-fade-up`
- [x] `RealizationsPreview.tsx` — section + staggered cards

## 5. SectionHeading accent bar
- [x] Animate the gold bar in `SectionHeading.tsx` with `animate-bar-grow` + `transform-origin: left`

## 6. Card hover enhancements
- [x] `RealizationCard.tsx` — add `hover:-translate-y-1 hover:shadow-lg transition-all`
- [x] Offer/project type cards — same hover lift treatment

## 7. Realizations page
- [x] `/realizations/page.tsx` — staggered card grid animation
- [x] `/realizations/[slug]/page.tsx` — fade-in hero banner and content

## 8. Footer
- [x] `Footer.tsx` — add `animate-on-scroll animate-fade-in`
