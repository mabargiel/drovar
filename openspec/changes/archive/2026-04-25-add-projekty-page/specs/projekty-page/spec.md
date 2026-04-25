## ADDED Requirements

### Requirement: Page is reachable at /projekty for all locales
The system SHALL expose the route `/[locale]/projekty` for all supported locales (pl, en, de, it) and render a page titled with the `projekty.title` translation key.

#### Scenario: Direct navigation by locale
- **WHEN** a user visits `/pl/projekty`, `/en/projekty`, `/de/projekty`, or `/it/projekty`
- **THEN** the page renders with the correct locale's translated strings and the Navbar active state reflects the projekty link

### Requirement: Nav item "Projekty" appears in all locales
The Navbar SHALL include a link to `/projekty` positioned between Home and Realizacje, labelled with the `nav.projekty` translation key for the active locale.

#### Scenario: Desktop nav displays projekty link
- **WHEN** a user views any page on a screen wider than 768px
- **THEN** the nav shows the projekty label (PL: Projekty, EN: Designs, DE: Entwürfe, IT: Progetti) between Home and Realizacje

#### Scenario: Mobile nav displays projekty link
- **WHEN** a user opens the mobile menu on any page
- **THEN** the projekty link appears in the same ordered position as on desktop

#### Scenario: Active state on projekty page
- **WHEN** the current pathname is `/[locale]/projekty`
- **THEN** the projekty nav link renders in the accent (gold) colour

### Requirement: Three category tabs with URL state
The page SHALL display three tabs — Meble modułowe, Meble kasowe, Bary — whose active state is stored in the `tab` URL query parameter.

#### Scenario: Default tab on first visit
- **WHEN** a user visits `/projekty` with no `tab` query parameter
- **THEN** the "modulowe" tab is active and its images are shown

#### Scenario: Tab selection updates URL
- **WHEN** a user clicks the "kasowe" tab
- **THEN** the URL updates to `?tab=kasowe` without a full page reload and the kasowe images are displayed

#### Scenario: Tab state survives page refresh
- **WHEN** a user visits `/projekty?tab=bary` directly
- **THEN** the "bary" tab is active on load

#### Scenario: Tab header shows label, description, and count
- **WHEN** any tab is active
- **THEN** the tab content area shows: the category label (large), a one-line description from `projekty.descriptions.[category]`, and the image count formatted as `projekty.count` (e.g. "19 projektów")

### Requirement: Images render in a masonry grid
The page SHALL display the active tab's images in a CSS-columns masonry layout that preserves each image's natural aspect ratio.

#### Scenario: Mobile single-column layout
- **WHEN** the viewport width is below 768px
- **THEN** images render in a single column filling the available width

#### Scenario: Tablet two-column layout
- **WHEN** the viewport width is 768px or wider
- **THEN** images render in two columns

#### Scenario: Desktop three-column layout
- **WHEN** the viewport width is 1024px or wider
- **THEN** images render in three columns

#### Scenario: Natural aspect ratios preserved
- **WHEN** an image is rendered in the grid
- **THEN** the image displays at its full natural height proportional to the column width — no cropping, no fixed height container

#### Scenario: Card hover state
- **WHEN** a user hovers over an image card
- **THEN** the card's box shadow increases (shadow-md) indicating it is interactive

### Requirement: Lightbox opens on image click
The page SHALL open a full-screen lightbox when a user clicks any image, showing the image at high resolution with arrow navigation within the active tab's image set.

#### Scenario: Lightbox opens with correct image
- **WHEN** a user clicks the third image in the grid
- **THEN** the lightbox opens showing the third image at full resolution

#### Scenario: Arrow navigation within category
- **WHEN** the lightbox is open and the user clicks the next arrow
- **THEN** the next image in the active tab's category is shown

#### Scenario: Lightbox closes on ESC or overlay click
- **WHEN** the lightbox is open and the user presses ESC or clicks outside the image
- **THEN** the lightbox closes and focus returns to the grid

#### Scenario: Image position indicator
- **WHEN** the lightbox is open
- **THEN** a counter displays the current position (e.g. "3 / 19")

### Requirement: All UI strings come from translation files
Every user-facing string on the Projekty page SHALL use `useTranslations()` with keys under the `projekty.*` namespace. No strings SHALL be hardcoded in components.

#### Scenario: Polish locale strings
- **WHEN** the active locale is `pl`
- **THEN** tab labels show Meble modułowe / Meble kasowe / Bary and descriptions are in Polish

#### Scenario: English locale strings
- **WHEN** the active locale is `en`
- **THEN** tab labels show Modular Furniture / Checkout Counters / Bars and descriptions are in English
