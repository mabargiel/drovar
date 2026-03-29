## Context

The app scaffolding is complete but has no visual identity. `globals.css` contains only `@import "tailwindcss"` and the layout has no font loaded. The reference project (alghero-house) demonstrates the Tailwind CSS 4 theming pattern: CSS custom properties in `:root` mapped to Tailwind tokens via `@theme inline`.

The site will serve 4 languages (PL, EN, DE, IT). Setting up `next-intl` now with Polish only avoids retrofitting i18n into every component later. The reference project uses `next-intl` with a `[locale]` route segment, but since we're starting with a single locale, no URL prefix is needed.

## Goals / Non-Goals

**Goals:**

- Define all 13 brand colors as CSS variables and Tailwind tokens
- Load Lato (300, 400, 700) via `next/font/google` and wire it as the default sans font
- Set base body styles (background, foreground, font-family, smooth scrolling)
- Configure `next-intl` for Polish with a messages file structure ready for future locales

**Non-Goals:**

- Dark mode or theme switching
- Responsive typography / fluid type scale
- Any UI components or page content
- Additional locales beyond Polish
- Sanity CMS integration for translations

## Decisions

### 1. Two-layer theming: `:root` + `@theme inline`

**Decision**: Define colors as CSS custom properties in `:root`, then map them to Tailwind tokens in `@theme inline`.

**Alternatives considered**:

- Direct values in `@theme` (simpler but no CSS variable access outside Tailwind)
- `tailwind.config.ts` (not supported in Tailwind CSS 4)

**Rationale**: Matches the reference project pattern. CSS variables are accessible everywhere (inline styles, third-party components, CSS animations) while `@theme inline` makes them available as Tailwind classes (`bg-primary`, `text-accent`, etc.).

### 2. Lato only — no display font

**Decision**: Use Lato as the single font family for all text. Visual hierarchy through weight (300/400/700) and size, not font pairing.

**Alternatives considered**:

- Adding a serif display font (Playfair Display, DM Serif Display) for hero headings

**Rationale**: Drovar is a B2B manufacturing company. The logo already carries the brand personality with its material textures. A single clean sans-serif says "professional, reliable, precise." The reference project uses two fonts (Lato + Cormorant Garamond) but that suits a luxury villa rental, not industrial fitout.

### 3. `next-intl` with single locale, no URL prefix

**Decision**: Configure `next-intl` with `defaultLocale: "pl"` and no locale prefix in URLs. No `[locale]` route segment for now.

**Alternatives considered**:

- `[locale]` routing from the start (matches reference project)
- Skip i18n entirely, add later

**Rationale**: Adding `[locale]` routing now would restructure the entire `src/app/` directory prematurely. With a single locale, `next-intl` works without routing — just a provider and `useTranslations`. When additional locales are added, the routing can be introduced in a dedicated change.

## Risks / Trade-offs

- **[Single locale now → routing change later]** → When adding EN/DE/IT, we'll need to introduce `[locale]` segments and restructure routes. Accepted — it's a clean migration path documented by `next-intl`.
- **[No fluid typography]** → Fixed sizes may need adjustment for mobile. → Will be addressed per-component, not as a global system.
