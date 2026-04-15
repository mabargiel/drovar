## ADDED Requirements

### Requirement: Static map displays office location
The system SHALL display a static map image showing the Drovar office location (ul. Sebastiana 12, 32-020 Wieliczka) with a pin marker. The image SHALL be stored as a static asset in `public/images/` and rendered using `next/image`.

#### Scenario: Map image renders on contact page
- **WHEN** the contact page loads
- **THEN** a map image showing the Wieliczka office location with a pin is visible below the contact info

#### Scenario: Map image is optimized
- **WHEN** the map image renders
- **THEN** it uses `next/image` with appropriate width, height, and alt text

### Requirement: Map has inset border styling
The system SHALL display the map image with an inset border effect using CSS (e.g., `ring-inset` or `shadow-inner` combined with a visible border), consistent with the project's design language.

#### Scenario: Inset border is visible
- **WHEN** the map image renders
- **THEN** it has a visible inset border effect around the image

### Requirement: Map is responsive
The map image SHALL fill the available width of its container and maintain aspect ratio across all viewports.

#### Scenario: Map fills container on mobile
- **WHEN** viewed on a 375px viewport
- **THEN** the map image fills the full width of the contact info column

#### Scenario: Map fills container on desktop
- **WHEN** viewed on a 1280px viewport
- **THEN** the map image fills the width of the left column (lg:col-span-2)
