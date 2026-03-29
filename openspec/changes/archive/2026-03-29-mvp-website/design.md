## Context

Drovar is a greenfield Next.js 16 project with scaffold complete: Tailwind 4 with brand tokens (primary/accent/cream), Lato font, next-intl (hardcoded Polish, no URL prefix), Sanity client (unused for MVP), and Lucide icons. Zero components or pages exist. The MVP ships a complete Polish-language portfolio site with hardcoded content and 10 realization photos from MDV Boutique.

## Goals / Non-Goals

**Goals:**
- Ship a complete, professional portfolio website in Polish
- Establish component architecture that scales to post-MVP features (CMS, i18n, email)
- All content driven by `pl.json` translation file (no hardcoded strings in components)
- English URL slugs with locale prefix (`/pl/realizations`, `/pl/contact`)
- Mobile-first responsive design at 375px / 768px / 1280px breakpoints

**Non-Goals:**
- Sanity CMS integration (content hardcoded for MVP)
- Email delivery via Resend (form shows alert with data)
- EN/DE/IT translations (Polish only)
- Realization detail pages (grid only, no click-through)
- Video hero section
- SEO optimization beyond basic metadata
- Analytics integration

## Decisions

### 1. Routing: `[locale]` dynamic segment with next-intl middleware

Switch from current hardcoded Polish (no prefix) to `app/[locale]/` dynamic segment with next-intl middleware that redirects `/` to `/pl`. This costs a bit more setup now but avoids a painful migration when adding EN/DE/IT later.

**Alternative considered:** Keep flat routing, add locale later. Rejected because restructuring pages into `[locale]/` after building 3 pages with components is more painful than starting with it.

**Structure:**
```
app/src/app/[locale]/
  layout.tsx          → wraps children with Navbar + Footer
  page.tsx            → Home (all sections)
  realizations/
    page.tsx          → Realizations grid
  contact/
    page.tsx          → Contact form
```

### 2. Content: All strings in `pl.json`, realization data in a TypeScript file

All UI strings go through `useTranslations()` from `pl.json`. Realization data (title, cover image path, category) lives in a typed `lib/data/realizations.ts` array — this is structured data, not translatable UI text, and will move to Sanity later.

**Alternative considered:** Put realization titles in `pl.json` too. Rejected because realization data is a unit (title + image + category) that will move to Sanity as a whole — splitting it across translation files and data files creates coupling.

### 3. Home page: Single page component composing section components

Each home section is its own component in `components/home/`. The page file imports and stacks them. Sections receive an `id` prop for smooth-scroll targeting from the navbar.

**Section component map:**
```
components/home/
  HeroSection.tsx
  OfferSection.tsx
  ForWhoSection.tsx
  WhyUsSection.tsx
  RealizationsPreview.tsx
  ProjectTypesSection.tsx
  AssemblySection.tsx
  AboutSection.tsx
  PartnersSection.tsx
  ContactPreview.tsx
```

### 4. Navbar: Hybrid scroll/route navigation

Navbar links for Oferta, O nas → smooth scroll (`#offer`, `#about`). Links for Realizacje, Kontakt → route navigation (`/pl/realizations`, `/pl/contact`). On non-home pages, Oferta/O nas links navigate to `/#offer`, `/#about`.

Navbar is transparent over the hero, becomes solid (cream background) on scroll past hero height using an IntersectionObserver or scroll listener.

### 5. Hero: Static image with CSS gradient overlay

`hero-bg.png` as a full-width background using `next/image` with `fill` + `object-cover`. Dark gradient overlay from left and bottom (CSS `bg-gradient-to-r` or a positioned pseudo-element). Text and CTAs positioned over the overlay.

Desktop: 85vh height. Mobile: 70vh height.

### 6. Contact form: Client-side only with browser alert

Form uses controlled React state. On submit, validate required fields client-side, then show `window.alert()` or a styled toast/modal with the submitted data as JSON. No API route needed for MVP.

**Alternative considered:** Build the API route now with a placeholder. Rejected — YAGNI for MVP, and the Resend integration will reshape the API route anyway.

### 7. Images: Static assets in `public/assets/realizations/`

10 cover images downloaded from MDV, stored at `public/assets/realizations/{slug}.jpg`. Referenced from the realizations data file by filename. Using `next/image` with static dimensions for proper optimization.

### 8. UI components: Minimal shared primitives

- `SectionHeading` — heading text + gold underline bar (the brand element)
- `Button` — two variants: `primary` (gold bg) and `outline` (border only)
- `Container` — `max-w-7xl mx-auto px-5 lg:px-8` wrapper

These live in `components/ui/`. Everything else is page/section-specific.

## Risks / Trade-offs

**[Hardcoded content limits client autonomy]** → Acceptable for MVP. Sanity integration is the planned next phase. Realization data structure is designed to map 1:1 to a future Sanity schema.

**[10 local images add ~2-5 MB to repo]** → Acceptable for MVP with 10 images. Post-MVP, images move to Sanity's CDN. Using `next/image` ensures they're served optimized.

**[No email on contact form]** → Client-side alert is a placeholder. Form structure and validation are production-ready so the Resend integration later only adds the API route and email templates.

**[French "Tabac" text visible in hero image]** → Dark gradient overlay will mostly obscure it. Can be cropped or replaced with a better photo later.
