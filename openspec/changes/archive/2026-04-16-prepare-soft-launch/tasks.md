## 1. Site Access Gate

- [x] 1.1 Add `SITE_AUTH_BASIC` to `.env.example` with a usage comment (`base64("user:password")`, leave blank to disable gate)
- [x] 1.2 In `src/proxy.ts`, add a `requireBasicAuth(req)` check that runs before `handleI18n(req)`:
  - skip if `process.env.NODE_ENV !== "production"`
  - skip if `process.env.SITE_AUTH_BASIC` is undefined or empty
  - parse the `Authorization` header, compare via `crypto.timingSafeEqual` on equal-length buffers
  - on miss, return `new NextResponse("Authentication required", { status: 401, headers: { "WWW-Authenticate": 'Basic realm="Drovar"' } })`
- [x] 1.3 In `src/app/robots.ts`, branch on `process.env.SITE_AUTH_BASIC`: when set, return rules with `userAgent: "*", disallow: "/"` and no sitemap; otherwise return the existing rules unchanged.
- [x] 1.4 In `src/app/sitemap.ts`, return `[]` when `process.env.SITE_AUTH_BASIC` is set; otherwise return the existing sitemap unchanged.
- [ ] 1.5 Manually verify on a local production build (`npm run build && npm run start` with `SITE_AUTH_BASIC` set):
  - browser prompts for credentials when visiting `/`
  - correct credentials grant access; wrong credentials re-prompt
  - `/robots.txt` returns `Disallow: /`
  - `/sitemap.xml` returns an empty document
- [ ] 1.6 Confirm dev mode (`npm run dev`) does not prompt for credentials.
- [ ] 1.7 Set `SITE_AUTH_BASIC` in Vercel project env (Production scope only).

## 2. Locations Data Model

- [x] 2.1 Create `src/lib/locations.ts` exporting a typed `LOCATIONS` const with two entries (`headquarters`, `production`), each containing: `roleLabelKey`, `companyName`, `street`, `cityLine`, `mapsUrl`, `mapImage`, `mapAlt` (key to alt text translation).
- [x] 2.2 In each `messages/{pl,en,de,it}.json`, replace `contact.info.address` with `contact.info.locations.headquarters.label` and `contact.info.locations.production.label` (plus `mapAlt` keys for both). Translate the role labels per locale (PL: "Siedziba" / "Biura, magazyn, produkcja"; EN: "Headquarters" / "Office, Warehouse, Production"; DE: "Sitz" / "Büro, Lager, Produktion"; IT: "Sede" / "Ufficio, magazzino, produzione").

## 3. Azure Static Map Generation

- [x] 3.1 Add `AZURE_MAPS_KEY` to `.env.example` and `.env.local` (already-rotated value). _(`.env.example` updated; user must add their rotated key value to `.env.local`.)_
- [x] 3.2 Create `scripts/generate-location-maps.ts`:
  - imports `LOCATIONS` from `src/lib/locations.ts`
  - for each location: `fetch` Azure Search Address API to geocode, then `fetch` Azure Maps Render Static Image API with `pins=default|...lon lat`, `zoom=15`, `width=800`, `height=450`
  - write the PNG buffer to the location's `mapImage` path under `public/`
  - exit non-zero on any error
- [x] 3.3 Add an npm script `"generate:maps": "tsx scripts/generate-location-maps.ts"` in `package.json`. _(Uses `npx tsx` so no devDep is needed.)_
- [x] 3.4 Run the script and commit the two regenerated PNGs (`public/images/map-wieliczka.png`, `public/images/map-myslenice.png`). _(Generated with the still-active key. Both pins verified visually — HQ near ul. Sebastiana, production at Polanka 287, Myślenice. Commit pending.)_
- [ ] 3.5 In the Azure portal, restrict the key to referers/origins for production + localhost, rotate the previously-shared key. _(User action in Azure portal.)_

## 4. Contact Page Updates

- [x] 4.1 Create `src/components/contact/LocationMap.tsx` accepting `{ image, alt, mapsUrl }`. Render an `<a>` to `mapsUrl` (target=_blank, noopener) wrapping a `next/image` PNG with the inset border treatment used by the current `ContactMap.tsx`.
- [x] 4.2 Delete `src/components/contact/ContactMap.tsx`.
- [x] 4.3 Update `src/components/contact/ContactInfo.tsx`:
  - render shared phone/email/NIP block as today
  - then iterate `LOCATIONS` and for each render: role label (translated), company name, street, city line, then `<LocationMap>`
  - use `space-y-*` to separate locations clearly; add a subtle divider or stronger label styling between them
- [ ] 4.4 Verify on 375px / 768px / 1280px viewports that both addresses and maps stack cleanly inside the `lg:col-span-2` info column. _(Manual visual check — code is in place.)_

## 5. Footer Updates

- [x] 5.1 In `src/components/layout/Footer.tsx`, replace `<li>{tContact("address")}</li>` with two `<li>` blocks (one per location), each prefixed by the role label and listing the address on subsequent lines.
- [ ] 5.2 Verify footer Contact column reads cleanly at all breakpoints. _(Manual visual check.)_

## 6. Mobile Language Switcher

- [x] 6.1 In `src/components/layout/Navbar.tsx`, inside the existing mobile overlay (`{menuOpen && (...)}` block), append after the `<ul>` of nav links:
  - a thin top divider (`border-t border-primary/10`)
  - a horizontal row of language chips, one `<Link>` per locale, each with `min-h-[44px] min-w-[44px] flex items-center justify-center px-4`
  - active locale: `text-accent`, inactive: `text-primary hover:text-accent`
  - thin `|` separators between chips matching desktop styling
  - close the overlay on click via the existing `setMenuOpen(false)` flow
- [ ] 6.2 Verify on a 375px viewport: hamburger opens, language chips are visible below nav links, tapping a chip switches locale and closes the overlay. _(Manual visual check.)_

## 7. Verify

- [x] 7.1 `npm run build` passes
- [ ] 7.2 `npm run lint` passes _(2 errors + 3 warnings exist on `main` before this change and are unchanged after — no new lint issues introduced. Out of scope to fix.)_
- [ ] 7.3 With `SITE_AUTH_BASIC` set: site is gated, robots/sitemap blackout, contact form cannot submit.
- [ ] 7.4 With `SITE_AUTH_BASIC` unset: site is fully public, robots/sitemap restored, contact form works.
- [ ] 7.5 Both location maps render correctly on contact page; tapping each opens the correct external maps URL.
- [ ] 7.6 Mobile language switcher works in all four locales.
