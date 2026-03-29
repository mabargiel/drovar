## 1. I18n & Routing Setup

- [x] 1.1 Add `[locale]` dynamic segment: move `app/src/app/page.tsx` and `layout.tsx` into `app/src/app/[locale]/`, update layout to read locale param and set `lang` attribute
- [x] 1.2 Create `src/middleware.ts` with next-intl middleware config (locales: ['pl'], defaultLocale: 'pl', localePrefix: 'always')
- [x] 1.3 Update `src/i18n/request.ts` to load messages dynamically based on locale param
- [x] 1.4 Expand `messages/pl.json` with all section keys: nav, hero, offer, forWho, whyUs, realizations, projectTypes, assembly, about, partners, contact, footer, metadata

## 2. UI Components

- [x] 2.1 Create `components/ui/Container.tsx` — max-w-7xl centered wrapper with responsive padding
- [x] 2.2 Create `components/ui/SectionHeading.tsx` — heading with gold underline bar, optional subtitle and centered variant
- [x] 2.3 Create `components/ui/Button.tsx` — primary (gold) and outline variants, renders as Link or button

## 3. Layout Shell

- [x] 3.1 Create `components/layout/Navbar.tsx` — sticky nav with logo, links (scroll + route), transparent-to-solid transition on home page, language indicator
- [x] 3.2 Create mobile navigation (hamburger menu with overlay) inside Navbar
- [x] 3.3 Create `components/layout/Footer.tsx` — logo, nav links, contact info, partner logo/link, copyright
- [x] 3.4 Update `app/[locale]/layout.tsx` to compose Navbar + Footer around page content

## 4. Home Page Sections

- [x] 4.1 Create `components/home/HeroSection.tsx` — full-width background image with dark gradient overlay, heading, subheading, two CTAs (85vh desktop, 70vh mobile)
- [x] 4.2 Create `components/home/OfferSection.tsx` — 6 product categories with Lucide icons, id="offer"
- [x] 4.3 Create `components/home/ForWhoSection.tsx` — two audience blocks (individual shops, retail chains)
- [x] 4.4 Create `components/home/WhyUsSection.tsx` — 5 trust-builder items with icons
- [x] 4.5 Create `components/home/RealizationsPreview.tsx` — 3-4 realization cards + "see all" CTA
- [x] 4.6 Create `components/home/ProjectTypesSection.tsx` — 5 industry types (convenience, tobacco, grocery, pharmacy, chains)
- [x] 4.7 Create `components/home/AssemblySection.tsx` — assembly teams and logistics description
- [x] 4.8 Create `components/home/AboutSection.tsx` — company description, id="about"
- [x] 4.9 Create `components/home/PartnersSection.tsx` — MDV Boutique logo with external link
- [x] 4.10 Create `components/home/ContactPreview.tsx` — CTA text + button linking to /pl/contact
- [x] 4.11 Compose all sections in `app/[locale]/page.tsx` (home page)

## 5. Realizations Page

- [x] 5.1 Download 10 realization cover images from MDV Boutique into `public/assets/realizations/`
- [x] 5.2 Create `lib/data/realizations.ts` — typed array of 10 realizations (id, slug, title, category, coverImage)
- [x] 5.3 Create `components/realizations/RealizationCard.tsx` — cover image + title card with hover effect
- [x] 5.4 Create `app/[locale]/realizations/page.tsx` — SectionHeading + responsive grid (1/2/3 cols)

## 6. Contact Page

- [x] 6.1 Create `components/contact/ContactInfo.tsx` — phone (tel:), email (mailto:), address display
- [x] 6.2 Create `components/contact/ContactForm.tsx` — 7 fields (Imie, Email, Telefon, Kraj, Typ sklepu select, Powierzchnia number, Wiadomosc textarea), client-side validation, alert on submit
- [x] 6.3 Create `app/[locale]/contact/page.tsx` — two-column layout (info + form), stacks on mobile

## 7. Final Integration

- [x] 7.1 Verify all pages render without errors at 375px, 768px, 1280px
- [x] 7.2 Verify all text comes from pl.json (no hardcoded Polish strings in components)
- [x] 7.3 Verify navbar scroll/route behavior on home and sub-pages
- [x] 7.4 Verify contact form validation and alert submission
