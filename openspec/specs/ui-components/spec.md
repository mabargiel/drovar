## Requirements

### Requirement: SectionHeading component
The system SHALL provide a `SectionHeading` component at `components/ui/SectionHeading.tsx` that renders a heading with a gold underline bar. It SHALL accept `title` (string), optional `subtitle` (string), and optional `centered` (boolean, default false) props. The gold underline bar SHALL use the `accent` color token. The component SHALL render an `<h2>` element with semantic HTML.

#### Scenario: SectionHeading renders with title only
- **WHEN** `<SectionHeading title="O nas" />` is rendered
- **THEN** an `<h2>` with text "O nas" and a gold underline bar below it is displayed, left-aligned

#### Scenario: SectionHeading renders centered with subtitle
- **WHEN** `<SectionHeading title="Realizacje" subtitle="Zobacz nasze projekty" centered />` is rendered
- **THEN** heading and subtitle are center-aligned with gold underline bar centered below the heading

### Requirement: Button component
The system SHALL provide a `Button` component at `components/ui/Button.tsx` with two variants: `primary` (gold background with dark text) and `outline` (transparent with border). It SHALL accept `variant`, `href` (optional, renders as `<a>`), `type` (optional, for form buttons), and `children` props. Minimum touch target SHALL be 44x44px. The component SHALL render as a `<Link>` when `href` is provided, or `<button>` otherwise.

#### Scenario: Primary button renders with gold background
- **WHEN** `<Button variant="primary">Zobacz realizacje</Button>` is rendered
- **THEN** a button with `accent` background color and `primary-dark` text color is displayed

#### Scenario: Button renders as link when href provided
- **WHEN** `<Button variant="outline" href="/pl/contact">Skontaktuj sie</Button>` is rendered
- **THEN** an `<a>` tag (via Next.js Link) with border styling is rendered, navigating to `/pl/contact`

### Requirement: Container component
The system SHALL provide a `Container` component at `components/ui/Container.tsx` that wraps children with `max-w-7xl mx-auto px-5 lg:px-8` classes. It SHALL accept optional `className` for extending styles and optional `as` prop for the HTML element (default `div`).

#### Scenario: Container wraps content with consistent padding
- **WHEN** `<Container>` wraps child content
- **THEN** children are rendered inside a `div` with max-width 7xl, auto horizontal margins, and responsive horizontal padding
