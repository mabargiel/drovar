## Why

The boilerplate has no design tokens — no colors, no typography, no base styles. Before any UI work can begin, the app needs a theme that reflects Drovar's brand identity (dark grays + gold accent on cream, Lato font). Additionally, the site will serve Polish and international markets, so `next-intl` needs to be configured now (Polish only for the moment) to avoid retrofitting locale support into every component later.

## What Changes

- Define 13 brand colors as CSS custom properties in `:root` and wire them into Tailwind via `@theme inline`
- Load Lato font (weights 300, 400, 700) via `next/font/google` and register it as the Tailwind `--font-sans`
- Add base body styles (background, foreground color, font-family, smooth scrolling)
- Install and configure `next-intl` for Polish language (single locale, no URL prefix)
- Create Polish messages file structure
- Install `lucide-react` as the icon library
- Place the Drovar logo in `public/assets/`

## Capabilities

### New Capabilities

- `theme`: Brand color tokens and typography setup via CSS custom properties and Tailwind CSS 4 `@theme inline`
- `i18n`: Internationalization setup with `next-intl` — locale configuration, messages structure, request config

### Modified Capabilities

- `nextjs-app`: Root layout changes to integrate font loading and `next-intl` provider

## Impact

- **Files modified**: `app/src/app/globals.css`, `app/src/app/layout.tsx`, `app/next.config.ts`
- **New files**: `app/src/i18n/`, `app/messages/pl.json`
- **New dependencies**: `next-intl`, `lucide-react`
- **New assets**: `public/assets/logo.png`
- **No breaking changes** — all existing functionality preserved
