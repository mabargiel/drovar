## MODIFIED Requirements

### Requirement: Mobile navigation
The system SHALL provide a hamburger menu button (44x44px minimum) visible on screens below `md` breakpoint. When tapped, it SHALL open a full-screen overlay with the same navigation links AND a language switcher row. The menu SHALL close when a link or language chip is tapped, or when the user taps the close button.

#### Scenario: Mobile hamburger opens menu
- **WHEN** the user taps the hamburger icon on a mobile viewport
- **THEN** a navigation overlay appears with all nav links and a language switcher row below them

#### Scenario: Mobile menu closes on link click
- **WHEN** the user taps a navigation link in the mobile menu
- **THEN** the mobile menu closes and navigation occurs

#### Scenario: Language switcher visible on mobile
- **WHEN** the mobile overlay is open
- **THEN** four language chips (PL, EN, DE, IT) are visible below the nav links, separated from them by a thin divider

#### Scenario: Active locale is highlighted
- **WHEN** the mobile overlay is open and the current locale is `en`
- **THEN** the EN chip is rendered with the accent color while the other chips use the primary color

#### Scenario: Tapping a language chip switches locale
- **WHEN** the user taps a language chip for a different locale (e.g., DE)
- **THEN** the URL pathname is rewritten with the new locale prefix, the page navigates, and the overlay closes

#### Scenario: Touch targets meet minimum size
- **WHEN** any language chip in the mobile overlay is rendered
- **THEN** its hit area is at least 44×44 pixels

### Requirement: Footer component
The system SHALL provide a `Footer` component at `components/layout/Footer.tsx` that renders at the bottom of every page. It SHALL include: Drovar logo, navigation links (same as navbar), shared contact details (phone, email) followed by both physical addresses each prefixed with their translated role label, partner section (MDV Boutique logo with external link), and a copyright line.

#### Scenario: Footer displays both addresses
- **WHEN** any page is rendered
- **THEN** the footer Contact column displays the phone, email, and both location entries (headquarters with its role label and address, then production with its role label and address)

#### Scenario: Footer displays partner link
- **WHEN** any page is rendered
- **THEN** the footer displays a clickable MDV Boutique partner link
