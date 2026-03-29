## Why

Drovar needs a launchable portfolio website to establish online presence for the Polish market and attract B2B clients (individual shops and retail chains). The scaffold, theme, and tooling are ready — now we need actual pages, content, and functionality. The MVP prioritizes shipping a complete, professional single-language (Polish) site with hardcoded content, deferring CMS integration, email delivery, and additional languages to post-MVP.

## What Changes

- **Home page** with 10 scrollable sections: Hero, Oferta, Dla kogo pracujemy, Dlaczego warto, Realizacje preview, Projekty dla, Montaz i transport, O nas, Partnerzy, Kontakt snippet
- **Realizations page** (`/pl/realizations`) — grid of 10 cards with cover photos and titles, hardcoded data, no detail pages
- **Contact page** (`/pl/contact`) — contact info + inquiry form (Imie, Email, Telefon, Kraj, Typ sklepu, Powierzchnia, Wiadomosc) with client-side alert on submit (no email delivery for MVP)
- **Sticky navbar** with smooth-scroll anchors for home sections and route links for Realizations/Contact
- **Footer** with contact info, nav links, partner logos
- **Reusable UI components**: SectionHeading, Button, Container
- **All content hardcoded** in Polish translation file (`messages/pl.json`)
- **English URL slugs** with `/pl` locale prefix
- **10 realization cover images** downloaded from MDV Boutique and hosted locally

## Capabilities

### New Capabilities
- `home-page`: Home page with hero section (photo background + dark overlay) and 9 content sections with smooth-scroll navigation
- `realizations-page`: Realizations grid page showing 10 hardcoded project cards with cover photos and titles
- `contact-page`: Contact page with company info and inquiry form (client-side validation, alert on submit)
- `layout-shell`: Sticky navbar with mixed scroll/route navigation, footer with contact info and partner links
- `ui-components`: Reusable UI primitives — SectionHeading (gold underline bar), Button (gold/outline variants), Container (max-w-7xl centered)

### Modified Capabilities
- `i18n`: Add locale-prefixed routing (`/pl/...`) with English URL slugs, expand `pl.json` with all page content, prepare structure for future EN/DE/IT locales

## Impact

- **New files**: ~15-20 component files, 3 page files, updated translation file, realization data/images
- **Modified files**: `layout.tsx` (add navbar/footer), i18n config (locale prefix routing), `next.config.ts` (if needed for i18n)
- **Dependencies**: No new npm packages needed (Lucide icons already installed for iconography)
- **Assets**: ~10 realization cover images (~2-5 MB total) added to `public/assets/realizations/`
