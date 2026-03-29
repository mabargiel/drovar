## Requirements

### Requirement: Realizations data file
The system SHALL include a typed data file at `lib/data/realizations.ts` exporting an array of 10 realization objects. Each object SHALL have: `id` (string), `slug` (string), `title` (string), `category` (string), and `coverImage` (string path to local image). The TypeScript type `Realization` SHALL be exported from this file.

#### Scenario: Realizations data is typed and complete
- **WHEN** importing from `lib/data/realizations.ts`
- **THEN** an array of 10 `Realization` objects is returned with all required fields populated

### Requirement: Realizations grid page
The system SHALL render a page at `/pl/realizations` displaying all 10 realizations in a responsive grid. The page SHALL have a `SectionHeading` at the top. The grid SHALL be 1 column on mobile, 2 columns on `md`, and 3 columns on `lg`.

#### Scenario: Grid is responsive
- **WHEN** the realizations page is viewed at 375px width
- **THEN** cards are displayed in a single column

#### Scenario: Grid shows all realizations
- **WHEN** the realizations page loads
- **THEN** all 10 realization cards are displayed

### Requirement: Realization card component
The system SHALL provide a `RealizationCard` component at `components/realizations/RealizationCard.tsx` that displays a cover image (using `next/image`) and a title. The card SHALL have a hover effect (subtle scale or shadow transition). The image SHALL use `loading="lazy"` for below-fold cards.

#### Scenario: Card displays image and title
- **WHEN** a `RealizationCard` is rendered with realization data
- **THEN** the cover image and title are displayed

#### Scenario: Card image uses next/image
- **WHEN** a `RealizationCard` is rendered
- **THEN** the image is rendered via `next/image` with defined width and height

### Requirement: Realization cover images
The system SHALL include 10 cover images in `public/assets/realizations/` downloaded from MDV Boutique's portfolio. Each image SHALL be referenced by its filename in the realizations data file.

#### Scenario: All cover images are loadable
- **WHEN** the realizations page renders all 10 cards
- **THEN** all 10 images load successfully from local assets
