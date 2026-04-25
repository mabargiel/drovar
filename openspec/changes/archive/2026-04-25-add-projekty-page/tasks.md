## 1. Sanity Schema

- [x] 1.1 Create `sanity/schemas/projektSketch.ts` with `category` (enum: modulowe/kasowe/bary, required), `image` (with hotspot, required), and `order` (number) fields
- [x] 1.2 Register `projektSketch` in `sanity/schemas/index.ts`
- [x] 1.3 Deploy updated schema to Sanity Studio (`sanity deploy` or push to trigger Vercel redeploy)

## 2. Data Layer

- [x] 2.1 Add `ProjektSketch` TypeScript type (with `_id`, `category`, `image` including `asset.metadata.dimensions.{width,height}`, `order`) to the types file
- [x] 2.2 Add `getAllProjektSketches()` GROQ query to `app/src/lib/sanity/queries.ts` — fetches all, orders by `category asc, order asc`, includes image dimension metadata

## 3. Translations

- [x] 3.1 Add `projekty` block to `app/messages/pl.json` — title, tab labels (modulowe/kasowe/bary), descriptions, count string
- [x] 3.2 Add `projekty` block to `app/messages/en.json`
- [x] 3.3 Add `projekty` block to `app/messages/de.json`
- [x] 3.4 Add `projekty` block to `app/messages/it.json`

## 4. Components

- [x] 4.1 Create `app/src/components/projekty/ProjektyGrid.tsx` — CSS columns masonry (`columns-1 md:columns-2 lg:columns-3`), renders image cards with `next/image` using queried dimensions, `break-inside-avoid`, white card + shadow style, click handler to open lightbox; includes inline lightbox (reused from RealizationGallery pattern) with arrow nav, ESC close, and position counter
- [x] 4.2 Create `app/src/components/projekty/ProjektyTabs.tsx` — client component reading `?tab=` via `useSearchParams`, renders tab switcher (3 tabs with gold active underline), tab header (label + description + count), and `ProjektyGrid` for the active category's images

## 5. Page Route

- [x] 5.1 Create `app/src/app/[locale]/projekty/page.tsx` — server component that calls `getAllProjektSketches()`, groups results by category, renders `SectionHeading` + `<Suspense><ProjektyTabs /></Suspense>`, generates metadata with `projekty.title` translation

## 6. Navigation

- [x] 6.1 Add `{ key: "projekty", path: "/projekty", scroll: false }` to `navLinks` in `Navbar.tsx` at index 1 (after Home, before Realizacje)

## 7. Content Upload

- [x] 7.1 Upload 19 Meble modułowe PNGs to Sanity Studio, setting `category: modulowe` and `order` 1–19
- [x] 7.2 Upload 19 Meble kasowe JPGs to Sanity Studio, setting `category: kasowe` and `order` 1–19
- [x] 7.3 Upload 2 Bary JPGs to Sanity Studio, setting `category: bary` and `order` 1–2

## 8. Verification

- [x] 8.1 Verify all four locale routes render correctly: `/pl/projekty`, `/en/projekty`, `/de/projekty`, `/it/projekty`
- [ ] 8.2 Verify tab switching updates URL param and survives page refresh
- [ ] 8.3 Verify masonry grid preserves natural aspect ratios on mobile (375px), tablet (768px), and desktop (1280px)
- [ ] 8.4 Verify lightbox opens, arrow navigation works within category, ESC closes, position counter is correct
- [ ] 8.5 Verify nav active state highlights projekty link when on the page
