## MODIFIED Requirements

### Requirement: next-intl configuration

The app SHALL install `next-intl` and configure it with Polish (`pl`) as the default locale. URLs SHALL use a locale prefix (`/pl/...`). The app SHALL use a `[locale]` dynamic route segment. A next-intl middleware SHALL redirect `/` to `/pl` and handle locale detection. The routing config SHALL define `locales: ['pl']` and `defaultLocale: 'pl'` with `localePrefix: 'always'`.

#### Scenario: next-intl is configured with locale prefix
- **WHEN** a user navigates to `/`
- **THEN** they are redirected to `/pl`

#### Scenario: Pages are accessible under locale prefix
- **WHEN** a user navigates to `/pl`
- **THEN** the home page is rendered with Polish translations

#### Scenario: English URL slugs are used
- **WHEN** navigating to the realizations page
- **THEN** the URL is `/pl/realizations` (English slug, not `/pl/realizacje`)

### Requirement: Polish messages file

The app SHALL include a `messages/pl.json` file containing all user-facing strings organized by page/section using dot-notation. Sections SHALL include at minimum: `metadata`, `nav`, `hero`, `offer`, `forWho`, `whyUs`, `realizations`, `projectTypes`, `assembly`, `about`, `partners`, `contact`, and `footer`.

#### Scenario: Messages file contains all page sections
- **WHEN** reading `messages/pl.json`
- **THEN** all required section keys are present with their nested content strings

### Requirement: i18n request configuration

The app SHALL include `src/i18n/request.ts` that configures `next-intl` to load messages for the requested locale from the corresponding messages file. It SHALL use `getRequestConfig` from `next-intl/server`.

#### Scenario: Request config loads Polish messages for /pl routes
- **WHEN** a request is processed for the `/pl` locale
- **THEN** `next-intl` provides Polish translations via its context

## ADDED Requirements

### Requirement: next-intl middleware
The app SHALL include a `src/middleware.ts` file that configures next-intl routing middleware. It SHALL define the supported locales and default locale, and handle locale-based redirects.

#### Scenario: Middleware redirects root to default locale
- **WHEN** a user navigates to `/`
- **THEN** the middleware redirects to `/pl`

#### Scenario: Middleware passes through valid locale routes
- **WHEN** a user navigates to `/pl/realizations`
- **THEN** the middleware passes the request through without redirect
