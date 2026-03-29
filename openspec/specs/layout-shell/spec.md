## Requirements

### Requirement: Navbar component
The system SHALL provide a `Navbar` component at `components/layout/Navbar.tsx` that renders a sticky navigation bar at the top of every page. It SHALL display the Drovar logo (linking to home) on the left, navigation links in the center, and a language indicator ("PL") on the right.

Navigation links SHALL be: Oferta, Realizacje, O nas, Kontakt. Oferta and O nas SHALL smooth-scroll to `#offer` and `#about` anchors on the home page. When on a non-home page, these links SHALL navigate to `/#offer` and `/#about`. Realizacje and Kontakt SHALL be route links to `/pl/realizations` and `/pl/contact`.

On the home page, the navbar SHALL be transparent over the hero section and transition to a solid cream background when the user scrolls past the hero. On other pages, the navbar SHALL always have a solid cream background.

#### Scenario: Navbar on home page over hero
- **WHEN** the home page loads and the hero section is in view
- **THEN** the navbar is transparent with white/cream text

#### Scenario: Navbar becomes solid on scroll
- **WHEN** the user scrolls past the hero section on the home page
- **THEN** the navbar background transitions to solid cream with dark text

#### Scenario: Navbar smooth-scrolls to sections
- **WHEN** the user clicks "Oferta" in the navbar while on the home page
- **THEN** the page smooth-scrolls to the `#offer` section

#### Scenario: Navbar navigates to home section from another page
- **WHEN** the user clicks "O nas" in the navbar while on `/pl/realizations`
- **THEN** the browser navigates to `/pl/#about`

### Requirement: Mobile navigation
The system SHALL provide a hamburger menu button (44x44px minimum) visible on screens below `md` breakpoint. When tapped, it SHALL open a full-screen or slide-in overlay with the same navigation links. The menu SHALL close when a link is clicked or when the user taps outside/close button.

#### Scenario: Mobile hamburger opens menu
- **WHEN** the user taps the hamburger icon on a mobile viewport
- **THEN** a navigation overlay appears with all nav links

#### Scenario: Mobile menu closes on link click
- **WHEN** the user taps a navigation link in the mobile menu
- **THEN** the mobile menu closes and navigation occurs

### Requirement: Footer component
The system SHALL provide a `Footer` component at `components/layout/Footer.tsx` that renders at the bottom of every page. It SHALL include: Drovar logo, navigation links (same as navbar), contact information (phone, email, address), partner section (MDV Boutique logo with external link), and a copyright line.

#### Scenario: Footer displays contact info and partner link
- **WHEN** any page is rendered
- **THEN** the footer displays phone, email, address, and a clickable MDV Boutique partner logo/link

### Requirement: Layout wraps all pages
The `app/[locale]/layout.tsx` file SHALL render the Navbar above and Footer below all page content. It SHALL provide the next-intl provider and set the HTML `lang` attribute from the locale parameter.

#### Scenario: Every page has navbar and footer
- **WHEN** any page route is accessed
- **THEN** the Navbar is rendered above and the Footer below the page content
