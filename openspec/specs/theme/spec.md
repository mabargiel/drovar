## ADDED Requirements

### Requirement: Brand color tokens

The app SHALL define the following colors as CSS custom properties in `:root` and map them to Tailwind tokens via `@theme inline`:

- `primary` (#3A3A3A), `primary-light` (#5A5A5A), `primary-dark` (#1E1E1E)
- `accent` (#C8A04A), `accent-light` (#D4B266), `accent-dark` (#A88530)
- `cream` (#F2EDE4), `cream-light` (#FAF8F4), `cream-dark` (#E8E0D4)
- `border` (#D4D0C8)
- `muted` (#8A8580)
- `error` (#C75050)
- `success` (#5A8A6A)

#### Scenario: Colors available as Tailwind classes

- **WHEN** using a Tailwind utility class like `bg-primary` or `text-accent`
- **THEN** the corresponding brand color is applied

#### Scenario: Colors available as CSS variables

- **WHEN** referencing `var(--primary)` or `var(--accent)` in CSS
- **THEN** the corresponding hex value is resolved

### Requirement: Lato font loading

The app SHALL load the Lato font via `next/font/google` with weights 300 (Light), 400 (Regular), and 700 (Bold). The font SHALL be registered as a CSS variable `--font-lato` and mapped to `--font-sans` in `@theme inline`.

#### Scenario: Lato renders as default body font

- **WHEN** viewing any page in the app
- **THEN** text renders in Lato

#### Scenario: All three weights are available

- **WHEN** using `font-light`, `font-normal`, or `font-bold` Tailwind classes
- **THEN** Lato 300, 400, or 700 is rendered respectively

### Requirement: Base body styles

The app SHALL apply base styles to the body: `cream` background color, `primary` foreground color, Lato font-family, and smooth scrolling on `html`.

#### Scenario: Default page appearance

- **WHEN** loading any page with no additional styling
- **THEN** the page has a cream background, dark gray text, and Lato font
