## ADDED Requirements

### Requirement: Next.js project structure
The `app/` directory SHALL be a self-contained Next.js 16 project with its own `package.json`, `node_modules`, and configuration files. The project SHALL use the App Router with a `src/` directory for source code.

#### Scenario: Project builds successfully
- **WHEN** running `npm run build` inside `app/`
- **THEN** the build completes without errors, producing a working Next.js application

#### Scenario: Development server starts
- **WHEN** running `npm run dev` inside `app/`
- **THEN** the Next.js development server starts and serves the placeholder page

### Requirement: Root layout and placeholder page
The app SHALL include a root layout (`src/app/layout.tsx`) that loads Lato via `next/font/google`, applies the font CSS variable to the body, imports `globals.css`, sets HTML lang to `"pl"`, and wraps children with `NextIntlClientProvider`. The homepage (`src/app/page.tsx`) SHALL remain a placeholder.

#### Scenario: Homepage renders with Lato font and cream background
- **WHEN** navigating to `/`
- **THEN** a placeholder page is displayed with Lato font, cream background, and `lang="pl"` on the html element

### Requirement: Tailwind CSS 4 integration
The app SHALL use Tailwind CSS 4 via `@tailwindcss/postcss` plugin. Global styles SHALL be defined in `src/app/globals.css` with Tailwind imports.

#### Scenario: Tailwind classes work
- **WHEN** using Tailwind utility classes in a component
- **THEN** the corresponding CSS is generated and applied

### Requirement: React Compiler enabled
The Next.js config SHALL enable React Compiler (`reactCompiler: true`).

#### Scenario: Config includes React Compiler
- **WHEN** inspecting `next.config.ts`
- **THEN** `reactCompiler` is set to `true`

### Requirement: TypeScript configuration
The project SHALL use TypeScript 5 with strict mode, bundler module resolution, and a `@/*` path alias mapping to `./src/*`.

#### Scenario: Path alias resolves
- **WHEN** importing a module using `@/components/Foo`
- **THEN** it resolves to `src/components/Foo`

### Requirement: Sanity client configuration
The app SHALL include a Sanity client module (`src/lib/sanity/client.ts`) configured via environment variables, and an env module (`src/lib/sanity/env.ts`) that reads `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`.

#### Scenario: Client uses environment variables
- **WHEN** the Sanity client is imported
- **THEN** it is configured with the project ID and dataset from environment variables

### Requirement: On-demand ISR revalidation endpoint
The app SHALL expose an API route at `/api/revalidate` that accepts POST requests from Sanity webhooks. The route SHALL validate a shared secret (`SANITY_REVALIDATE_SECRET`) and call `revalidateTag` to refresh cached content.

#### Scenario: Valid webhook triggers revalidation
- **WHEN** a POST request arrives at `/api/revalidate` with a valid secret
- **THEN** the specified tag is revalidated and a success response is returned

#### Scenario: Invalid secret is rejected
- **WHEN** a POST request arrives at `/api/revalidate` with an invalid or missing secret
- **THEN** a 401 Unauthorized response is returned

### Requirement: Sanity image URL support
The app SHALL include `@sanity/image-url` as a dependency for generating image URLs from Sanity assets.

#### Scenario: Image URL package available
- **WHEN** inspecting `app/package.json` dependencies
- **THEN** `@sanity/image-url` is listed

### Requirement: Environment variables documented
An `.env.example` file SHALL document all required environment variables: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`, `SANITY_READ_TOKEN`, `SANITY_REVALIDATE_SECRET`.

#### Scenario: Example env file exists
- **WHEN** inspecting `app/.env.example`
- **THEN** all required variables are listed with placeholder values

### Requirement: Next.js image remote patterns
The Next.js config SHALL allow remote images from `cdn.sanity.io` via the `images.remotePatterns` configuration.

#### Scenario: Sanity images load
- **WHEN** using `next/image` with a Sanity CDN URL
- **THEN** the image is served without domain errors
