# site-access-gate Specification

## Purpose
TBD - created by archiving change prepare-soft-launch. Update Purpose after archive.
## Requirements
### Requirement: Site is gated by HTTP Basic Auth in production
The system SHALL restrict access to all page routes (everything matched by the existing `proxy.ts` matcher) when the environment variable `SITE_AUTH_BASIC` is set in production. Requests without valid `Authorization: Basic <base64>` credentials SHALL receive an HTTP 401 response with header `WWW-Authenticate: Basic realm="Drovar"`. Credentials SHALL be compared in constant time using `crypto.timingSafeEqual` to prevent timing attacks.

#### Scenario: Unauthenticated request to a page route is challenged
- **WHEN** a user visits any page route (e.g., `/pl`, `/pl/contact`, `/en/realizations`) in production with `SITE_AUTH_BASIC` set and no `Authorization` header
- **THEN** the response is HTTP 401 with header `WWW-Authenticate: Basic realm="Drovar"`

#### Scenario: Correct credentials grant access
- **WHEN** a user submits the configured username and password via the browser's Basic Auth prompt
- **THEN** the request continues to `next-intl` middleware and the page is rendered normally

#### Scenario: Incorrect credentials are rejected
- **WHEN** a user submits credentials that do not match `SITE_AUTH_BASIC`
- **THEN** the response is HTTP 401 and the browser re-prompts

### Requirement: Gate is bypassed in development and when env var is unset
The system SHALL NOT enforce the gate when `process.env.NODE_ENV !== "production"`. The system SHALL NOT enforce the gate when `process.env.SITE_AUTH_BASIC` is undefined or an empty string. Removing the env var SHALL be sufficient to restore full public access without a code change.

#### Scenario: Local development is unaffected
- **WHEN** the developer runs `npm run dev`
- **THEN** no Basic Auth challenge is issued regardless of `SITE_AUTH_BASIC`

#### Scenario: Disabling the gate by removing env var
- **WHEN** `SITE_AUTH_BASIC` is removed from the production environment
- **THEN** subsequent requests bypass the auth check and reach the i18n middleware unconditionally

### Requirement: Gate composes with existing i18n middleware
The Basic Auth check SHALL run before `next-intl`'s `handleI18n` middleware. When the request is authenticated (or the gate is bypassed), the request SHALL be delegated to `handleI18n` unchanged. The existing matcher `["/((?!api|_next|_vercel|assets|.*\\..*).*)"]` SHALL remain intact.

#### Scenario: Authenticated request reaches i18n middleware
- **WHEN** a request with valid Basic Auth credentials hits `/realizations`
- **THEN** `handleI18n` resolves the locale and renders `/pl/realizations` (or the user's locale)

#### Scenario: Static assets and API routes are unaffected by the gate
- **WHEN** a request hits `/api/revalidate`, `/_next/static/...`, `/assets/logo.svg`, or any path containing a dot
- **THEN** the request bypasses `proxy.ts` entirely (per the existing matcher) and is served without a Basic Auth challenge

### Requirement: SEO is blacked out while gated
The `robots.ts` route handler SHALL return `userAgent: "*", disallow: "/"` with no sitemap entry when `SITE_AUTH_BASIC` is set. The `sitemap.ts` route handler SHALL return an empty array when `SITE_AUTH_BASIC` is set. Both handlers SHALL restore their original behavior when the env var is unset.

#### Scenario: robots.txt blocks all crawlers while gated
- **WHEN** `SITE_AUTH_BASIC` is set and a crawler fetches `/robots.txt`
- **THEN** the response contains `User-agent: *` followed by `Disallow: /` and no sitemap reference

#### Scenario: sitemap.xml is empty while gated
- **WHEN** `SITE_AUTH_BASIC` is set and a crawler fetches `/sitemap.xml`
- **THEN** the response contains an empty `<urlset>` (or the framework equivalent of an empty sitemap)

#### Scenario: SEO is restored when gate is removed
- **WHEN** `SITE_AUTH_BASIC` is unset on the next request
- **THEN** `/robots.txt` returns the original allow + AI-bot blocklist rules, and `/sitemap.xml` lists all real URLs

### Requirement: Server actions inherit gating from page routes
The system SHALL gate Server Actions (e.g., the contact form submission action) by virtue of the actions being POSTed to gated page routes. No separate gating logic SHALL be added for Server Actions.

#### Scenario: Form submission is rejected while gated and unauthenticated
- **WHEN** a user (e.g., via a leaked direct POST) attempts to invoke the contact form Server Action without Basic Auth credentials and `SITE_AUTH_BASIC` is set
- **THEN** the request receives HTTP 401 from the proxy and the action does not execute

