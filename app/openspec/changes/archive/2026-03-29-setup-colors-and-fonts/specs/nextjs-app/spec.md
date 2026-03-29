## MODIFIED Requirements

### Requirement: Root layout and placeholder page

The app SHALL include a root layout (`src/app/layout.tsx`) that loads Lato via `next/font/google`, applies the font CSS variable to the body, imports `globals.css`, sets HTML lang to `"pl"`, and wraps children with `NextIntlClientProvider`. The homepage (`src/app/page.tsx`) SHALL remain a placeholder.

#### Scenario: Homepage renders with Lato font and cream background

- **WHEN** navigating to `/`
- **THEN** a placeholder page is displayed with Lato font, cream background, and `lang="pl"` on the html element
