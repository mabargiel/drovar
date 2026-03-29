# CLAUDE.md

## Project

DROVAR — shop fitting company website. Next.js 14 + Sanity CMS + Tailwind CSS.

## Non-Functional Requirements (apply to ALL code)

### Mobile First
- Write all CSS/Tailwind mobile-first: base styles = mobile, then `md:` and `lg:` for larger screens
- Test every component mentally at 375px, 768px, 1280px
- Touch targets minimum 44x44px
- No horizontal scroll on any viewport

### Clean Code
- TypeScript strict mode, no `any` types
- Components: single responsibility, under 150 lines — extract if larger
- Name files and components descriptively (RealizationCard.tsx not Card.tsx)
- Co-locate: component + its types in same file, or component + .types.ts next to it
- No unused imports, no commented-out code, no console.logs in committed code
- Use early returns over nested conditionals

### Performance
- Use `next/image` for ALL images — never raw `<img>` tags
- Lazy load below-fold sections
- Use `loading="lazy"` or Framer Motion viewport detection
- Sanity images: always use image URL builder with `.width().format('webp')`
- Keep bundle size small: import only what you need (e.g., `import { motion } from 'framer-motion'` not the whole lib)

### Accessibility
- Semantic HTML: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- All images need meaningful `alt` text
- Form inputs need associated `<label>` elements
- Focus states on all interactive elements
- Color contrast: WCAG AA minimum

### Internationalization
- Never hardcode UI strings — always use `useTranslations()` from next-intl
- Translation keys: dot-notation grouped by page/section (e.g., `hero.title`, `contact.form.submit`)
- All user-facing text must come from `/messages/{locale}.json`

### Styling
- Tailwind utility classes only — no custom CSS unless absolutely necessary
- Use the project color tokens (primary, accent, cream) — never hardcode hex values in components
- Consistent spacing: use `py-20 lg:py-28` for sections, `max-w-7xl mx-auto px-5 lg:px-8` for containers
- The gold heading underline bar is a reusable SectionHeading component — use it, don't recreate it

### Git Discipline
- Small, focused commits
- Commit message format: `type: description` (feat:, fix:, chore:, style:, refactor:)
- Don't commit broken builds

## Project Structure Reference

```
app/[locale]/           → pages (layout.tsx has Navbar + Footer)
components/layout/      → Navbar, Footer, LanguageSwitcher
components/home/        → Hero, FeaturedRealizations
components/realizations/ → RealizationGrid, RealizationCard, Gallery
components/contact/     → ContactForm
components/ui/          → Button, SectionHeading, Container
lib/sanity/             → client, queries, image helper
lib/i18n/               → config, request
messages/               → pl.json, en.json, de.json, it.json
sanity/schemas/         → realization.ts
scripts/                → seed-realizations.ts
```
