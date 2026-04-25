## Context

Drovar's site currently has Realizacje (finished projects) but no showcase of the design process. The client holds ~40 professional architectural pencil drawings across three product categories. These are high-quality artworks that vary significantly in aspect ratio (tall portrait for modular units, near-square for cash counter perspectives, wide landscape for bar interiors). No copy exists per image — the drawings speak for themselves.

The site is Next.js 14 with App Router, Sanity CMS, next-intl (4 locales: pl, en, de, it), and Tailwind CSS. An existing lightbox implementation lives in `RealizationGallery.tsx`.

## Goals / Non-Goals

**Goals:**
- New `/projekty` route visible in nav across all locales
- Three-tab gallery (Meble modułowe / Meble kasowe / Bary) with shareable URL state
- Masonry grid that preserves natural aspect ratios of each drawing
- Full-screen lightbox for detail viewing
- Sanity-managed content — client can add drawings without code changes
- Fully i18n: all strings from translation files

**Non-Goals:**
- Per-image title or description (zero text on cards by design)
- Animated page transitions beyond tab switching
- Any changes to existing pages or routes
- Image processing or optimization beyond Sanity URL builder + WebP

## Decisions

### D1: URL path — `/projekty` (not `/projects`)

`/realizations` already uses an English slug; `/projekty` follows the same convention (locale-independent path, localized label). More importantly, `/projects` would semantically overlap with Realizacje in English-speaking users' minds — "projects" = finished things. `/projekty` is unambiguous and reads fine in a URL.

_Alternative considered_: `/designs` — cleaner in English but inconsistent with the Polish product name established by the client.

### D2: Tab state in URL query param (`?tab=modulowe`)

A URL param means tabs are shareable, survive hard refresh, and work without JavaScript hydration for the initial render. The param defaults to `modulowe` when absent.

_Alternative considered_: `useState` — simpler but state is lost on refresh and the link is unshareable. Rejected.

Implementation note: `useSearchParams()` in Next.js 14 requires the component to be wrapped in a `<Suspense>` boundary, which the page server component provides.

### D3: CSS columns masonry (no JS library)

The drawings have unpredictable aspect ratios. A rigid aspect-ratio grid would either crop them or leave awkward whitespace. CSS `columns-1 md:columns-2 lg:columns-3` stacks items naturally and costs zero bundle bytes.

_Alternative considered_: `masonry-layout` npm package — adds ~8KB, requires JS, and the native CSS columns achieve the same visual result for this use case. Rejected.

_Alternative considered_: CSS Grid `grid-template-rows: masonry` — experimental, Firefox-only behind a flag. Rejected.

### D4: Reuse RealizationGallery lightbox pattern

The existing lightbox in `RealizationGallery.tsx` handles arrow navigation, keyboard ESC, focus trap, and image counter. Building a new one would duplicate ~120 lines. The new `ProjektyGrid` component extracts the same logic and applies it to the per-tab image array.

_Alternative considered_: A shared `Lightbox` component extracted from RealizationGallery — valid future refactor, but out of scope here to avoid touching working code.

### D5: Sanity individual documents (not singleton page)

A `projektSketch` document per image allows: independent ordering per category, future additional fields (e.g., title, project date) without schema migration, and standard Sanity content management. The client can reorder and add drawings via the studio UI.

_Alternative considered_: Singleton `projektyPage` document with three image arrays — simpler but ordering within a category requires drag-and-drop inside an array, and adding new categories later would require schema changes. Rejected.

### D6: `next/image` with queried dimensions

CSS columns masonry requires images to have a natural height (not `fill` layout, which needs a sized container). The Sanity query fetches `image.asset->{ metadata { dimensions { width, height } } }`, so each image is rendered with its actual pixel dimensions scaled down to the column width.

_Alternative considered_: Fixed height with `object-cover` — destroys the drawings' proportions. Rejected.

## Risks / Trade-offs

**CSS columns ordering** → Items flow top-to-bottom within each column, not left-to-right. This means the visual reading order on desktop differs from the Sanity `order` field. The `order` field still determines the overall sequence, but column placement is browser-controlled. Mitigation: set `order` in Sanity to put the most representative drawing first (top of column 1).

**Suspense boundary for `useSearchParams`** → Without it, Next.js 14 will error at build time. The page server component must wrap `<ProjektyTabs>` in `<Suspense fallback={<loading skeleton>}>`. Mitigation: handled in implementation — a simple skeleton div suffices.

**Only 2 Bary images at launch** → The tab will look sparse. Mitigation: this is expected and documented. The grid handles 2 images correctly; the client will add more via Sanity.

**Schema deployment before content upload** → The Sanity schema must be deployed (pushed to production studio) before images can be uploaded. Mitigation: schema deployment is the first implementation task; content upload follows.

## Migration Plan

1. Deploy `projektSketch` schema to Sanity studio (via `sanity deploy` or Vercel redeploy with schema in repo)
2. Upload ~40 images via Sanity studio UI, setting `category` and `order` for each
3. Deploy Next.js changes (new page, components, nav, translations)
4. Verify all 4 locale URLs: `/pl/projekty`, `/en/projekty`, `/de/projekty`, `/it/projekty`

Rollback: removing the nav link and page route restores the previous state without data loss.

## Open Questions

- None — all decisions resolved during exploration phase.
