## Requirements

### Requirement: Hero section
The system SHALL render a hero section as the first content on the home page. It SHALL display `hero-bg.png` as a full-width background image using `next/image` with `fill` and `object-cover`. A dark gradient overlay SHALL be applied from the left and bottom for text readability. The section SHALL display a main heading, a subheading with "projekt · produkcja · montaz" keywords, a descriptive paragraph, and two CTA buttons: primary "Zobacz realizacje" (linking to `/pl/realizations`) and outline "Skontaktuj sie" (linking to `/pl/contact`). Desktop height SHALL be approximately 85vh, mobile 70vh.

#### Scenario: Hero renders with background image and CTAs
- **WHEN** the home page loads
- **THEN** the hero section displays the background photo with dark overlay, heading text, and two CTA buttons

#### Scenario: Hero is responsive
- **WHEN** viewed on a 375px viewport
- **THEN** the hero height is 70vh and text is readable over the overlay

### Requirement: Offer section
The system SHALL render an Oferta section with `id="offer"` listing what Drovar produces: shop shelves, sales counters, display modules, wall units, convenience store equipment, and tobacco shop/point-of-sale equipment. Each item SHALL be presented as a card or list item with an icon (from Lucide) and description.

#### Scenario: Offer section lists all product types
- **WHEN** the offer section is in view
- **THEN** all 6 product categories are displayed with icons and descriptions

### Requirement: For Who section
The system SHALL render a "Dla kogo pracujemy" section with two blocks: one for individual shops (customization, fast quotes, full service) and one for retail chains (standardization, repeatability, logistics, multi-location assembly).

#### Scenario: Two audience blocks are displayed
- **WHEN** the For Who section is in view
- **THEN** two distinct blocks for "single shops" and "retail chains" are displayed with their respective benefits

### Requirement: Why Us section
The system SHALL render a "Dlaczego warto" section with 5 trust-building points: international experience, full-service pipeline (design to assembly), custom solutions, proven production/logistics system, and on-time delivery. Each point SHALL have an icon and brief text.

#### Scenario: Five trust builders displayed
- **WHEN** the Why Us section is in view
- **THEN** 5 items with icons and descriptions are displayed

### Requirement: Realizations preview section
The system SHALL render a preview of 3-4 realization cards from the hardcoded data, followed by a CTA link "Zobacz wszystkie realizacje" that navigates to `/pl/realizations`. Cards SHALL show the cover image and title.

#### Scenario: Preview shows subset of realizations
- **WHEN** the home page loads
- **THEN** 3 or 4 realization cards are displayed with a "see all" link to `/pl/realizations`

### Requirement: Project Types section
The system SHALL render a "Realizujemy projekty dla" section listing target industries: convenience stores, tobacco shops, grocery stores, pharmacies, and retail chains. Each type SHALL be visually distinct (cards or icon+label layout).

#### Scenario: All project types are listed
- **WHEN** the Project Types section is in view
- **THEN** 5 industry types are displayed

### Requirement: Assembly and Transport section
The system SHALL render a "Montaz i transport" section describing Drovar's specialized assembly teams and logistics partner. It SHALL communicate reliable delivery and professional assembly according to agreed schedules.

#### Scenario: Assembly section content is displayed
- **WHEN** the Assembly section is in view
- **THEN** text about assembly teams, logistics, and on-schedule delivery is shown

### Requirement: About section
The system SHALL render an "O nas" section with `id="about"` describing Drovar's specialization in custom shop equipment, focus on functionality/aesthetics/quality, and experience with small shops and large retail spaces in Poland and abroad.

#### Scenario: About section renders with company description
- **WHEN** the About section is in view
- **THEN** company description text is displayed

### Requirement: Partners section
The system SHALL render a "Nasi Partnerzy" section displaying the MDV Boutique logo with an external link to `https://mdv-boutique.com/`. The link SHALL open in a new tab with `rel="noopener noreferrer"`.

#### Scenario: Partner logo links to external site
- **WHEN** the user clicks the MDV Boutique partner logo
- **THEN** a new tab opens navigating to `https://mdv-boutique.com/`

### Requirement: Contact preview section
The system SHALL render a contact snippet at the bottom of the home page with a brief call-to-action message and a primary CTA button linking to `/pl/contact`.

#### Scenario: Contact CTA links to contact page
- **WHEN** the user clicks the contact CTA on the home page
- **THEN** the browser navigates to `/pl/contact`

### Requirement: All sections use translation keys
Every section's user-facing text SHALL be rendered via `useTranslations()` from `next-intl`. No hardcoded Polish strings SHALL appear in component files.

#### Scenario: Section text comes from translations
- **WHEN** any home section component is rendered
- **THEN** all visible text is sourced from the `pl.json` messages file via `useTranslations()`
