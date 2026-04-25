## Why

Drovar has a collection of high-quality architectural pencil drawings — design concepts for modular furniture, checkout counters, and bar interiors — with no dedicated place on the site to show them. Adding a "Projekty" page creates a portfolio of the design process, differentiating Drovar from competitors who only show finished installations, and giving prospective clients a window into bespoke craftsmanship before construction begins.

## What Changes

- New route `/projekty` (all locales) with a tabbed gallery page
- New Sanity document type `projektSketch` for client-managed content
- New nav item "Projekty" inserted between Home and Realizacje across all locales
- New translation keys under `projekty.*` in all 4 locale files (pl, en, de, it)
- New components: `ProjektyTabs`, `ProjektyGrid`
- Seed script (or manual upload) to populate ~40 initial sketches in Sanity

## Capabilities

### New Capabilities

- `projekty-page`: Tabbed gallery page at `/projekty` with three categories (Meble modułowe, Meble kasowe, Bary), CSS masonry grid, lightbox viewer, URL-param tab state, category descriptions, and image counts — all i18n-ready
- `projekt-sketch-schema`: Sanity `projektSketch` document type with `category`, `image`, and `order` fields enabling client-managed content additions without code changes

### Modified Capabilities

- `navbar`: New nav link added (`projekty`) — navigation shape changes but no requirement-level behavior changes to existing links

## Impact

- **New files**: `sanity/schemas/projektSketch.ts`, `app/src/app/[locale]/projekty/page.tsx`, `app/src/components/projekty/ProjektyTabs.tsx`, `app/src/components/projekty/ProjektyGrid.tsx`
- **Modified files**: `sanity/schemas/index.ts`, `app/src/lib/sanity/queries.ts`, Sanity types, `Navbar.tsx`, all 4 `messages/*.json` files
- **Sanity**: New schema deployed to studio; ~40 images to be uploaded
- **No breaking changes** to existing pages or routes
