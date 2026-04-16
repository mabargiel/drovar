## Why

The site is approaching soft-launch. Before stakeholders review it, four interlinked changes are needed:

1. **Public access must be temporarily restricted** with a single shared password, so the production deployment is not crawlable or browsable until it's deemed ready.
2. **Drovar operates from two physical locations** — the Wieliczka registered office (siedziba) and the Myślenice production site (biura, magazyn, produkcja) — but the contact page only shows one. Both addresses must be displayed with their respective maps.
3. **The map for Myślenice must be a real generated map**, not a hand-taken screenshot, so that pin position and zoom are correct and reproducible. Both location maps will be generated consistently from Azure Maps Static Image API.
4. **The mobile navigation has no language switcher** — the desktop language chips are hidden behind `md:flex` and the mobile hamburger overlay never renders them, so non-Polish speakers on mobile cannot change language at all.

These pieces all stem from the same goal (make the site presentable + private until ready) and are individually small, so they ship as one bundled change.

## What Changes

### Site access gate

- Add HTTP Basic Auth in `src/proxy.ts` (Next 16 proxy middleware), gated behind a single env var `SITE_AUTH_BASIC` (base64 of `user:password`).
- Skip the gate in non-production environments so local development is unaffected.
- When the env var is unset (e.g., after launch), the gate is fully disabled with no code change required.
- Flip `robots.ts` to disallow all crawlers globally while the gate is active, controlled by the same env var.
- Make `sitemap.ts` return an empty array while the gate is active.
- The `/api/revalidate` route stays excluded from the gate (already excluded by the existing matcher) — its own webhook secret remains the only protection.
- Server Actions automatically gated (they POST to gated page routes).

### Two locations on contact page and footer

- Replace the single `contact.info.address` string in all four locale files with a `contact.info.locations` structure containing two entries: `headquarters` and `production`. Each entry has a localized role label, plus untranslated company name + street + city.
- Update `ContactInfo.tsx` to render shared phone/email/NIP once at the top, then list both locations stacked in the same column, each followed by its own map.
- Update `Footer.tsx` to list both addresses in the Contact column with their role labels.

### Azure Maps Static for both locations

- Introduce a `<LocationMap>` component used twice on the contact page (replacing `ContactMap.tsx`).
- Add a build-time script `scripts/generate-location-maps.ts` that reads the two addresses from a config, geocodes them via Azure Maps Search Address API, fetches a static PNG via Azure Maps Render Static Image API with a centered pin, and saves both PNGs to `public/images/`.
- The Azure subscription key lives only in `.env.local` (used by the script) and is never bundled or shipped to Vercel runtime.
- The existing `public/images/map-wieliczka.png` is replaced by a script-generated equivalent.

### Mobile language switcher

- Inside the existing hamburger overlay in `Navbar.tsx`, render a row of language chips below the nav links, separated by a thin divider.
- 44×44px minimum touch targets per chip.
- Active locale styled as accent-colored, others as primary with hover.

## Capabilities

### New Capabilities
- `site-access-gate`: HTTP Basic Auth gate covering all page routes in production, toggleable via a single env var, with paired SEO blackout (robots + sitemap).

### Modified Capabilities
- `contact-page`: Replaces single address with two labeled locations (siedziba + produkcja), shared contact details listed once.
- `contact-map`: Generalized from "office location" to "per-location maps". Maps are now produced by a build-time script, not hand-screenshots, and there are two of them.
- `layout-shell`: Footer Contact column lists both addresses; mobile hamburger overlay includes a language switcher.

## Impact

- **Dependencies**: None added. Azure Maps Static API is called via plain `fetch` in a Node script.
- **Environment variables**:
  - `SITE_AUTH_BASIC` — base64 of `user:password` for the gate. Set on Vercel; unset after launch.
  - `AZURE_MAPS_KEY` — used only by `scripts/generate-location-maps.ts`, kept in `.env.local`. **Not** added to Vercel.
- **Files created**:
  - `src/components/contact/LocationMap.tsx`
  - `src/lib/locations.ts` (typed config of the two addresses)
  - `scripts/generate-location-maps.ts`
  - `public/images/map-myslenice.png` (generated)
- **Files modified**:
  - `src/proxy.ts` — gate logic added before i18n middleware
  - `src/app/robots.ts` — conditional disallow
  - `src/app/sitemap.ts` — conditional empty
  - `src/components/contact/ContactInfo.tsx` — render two locations + maps
  - `src/components/contact/ContactMap.tsx` — deleted (replaced by LocationMap used twice)
  - `src/components/layout/Footer.tsx` — list two addresses in Contact column
  - `src/components/layout/Navbar.tsx` — language chips inside mobile overlay
  - `messages/{pl,en,de,it}.json` — replace `address` with `locations` structure, add hamburger labels if needed
  - `public/images/map-wieliczka.png` — regenerated by script
  - `.env.example` — document `SITE_AUTH_BASIC` and `AZURE_MAPS_KEY`
- **Breaking changes**: None at the user-facing level. The `contact.info.address` translation key is removed and consumers (Footer + ContactInfo) are updated in the same change.
- **Operational**: Once `SITE_AUTH_BASIC` is unset on Vercel, the site is fully public again — no redeploy needed beyond the env var change (Vercel auto-restarts the function).
