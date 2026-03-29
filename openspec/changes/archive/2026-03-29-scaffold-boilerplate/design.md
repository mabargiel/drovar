## Context

Drovar is a greenfield company portfolio website. The reference project (alghero-house) uses a proven stack — Next.js 16, Tailwind CSS 4, Sanity CMS — but splits UI and CMS into separate repositories. This creates deployment coordination overhead. Drovar consolidates both into a single repository with two independent projects at the root: `app/` (Next.js) and `cms/` (Sanity Studio).

The repository currently contains only OpenSpec configuration. No code, no package files, no git history of application code.

## Goals / Non-Goals

**Goals:**
- Establish a working Next.js 16 project (`app/`) that builds and runs with zero application code beyond a placeholder page
- Establish a working Sanity Studio v3 project (`cms/`) that launches with an empty schema
- Replicate the linting toolchain from alghero-house exactly (ESLint 9, Prettier 3, Stylelint 16)
- Wire up the Sanity client in the Next.js app with environment-based configuration
- Set up the on-demand ISR revalidation endpoint
- Provide `.env.example` files documenting required environment variables

**Non-Goals:**
- Monorepo tooling (no workspaces, no Turborepo, no shared configs)
- CI/CD pipeline setup (future change)
- Any application features (i18n, analytics, email, animations, maps)
- Sanity schema definitions (empty barrel only)
- Deployment configuration (Vercel, Docker, etc.)
- Testing setup (Playwright, Vitest, etc.)

## Decisions

### 1. Root-level project directories (not under `src/`)

**Decision**: Place `app/` and `cms/` at the repository root.

**Alternatives considered**:
- `src/app/` and `src/cms/` — creates confusing double nesting (`src/app/src/app/page.tsx`) since Next.js uses its own `src/` convention
- Flat structure with prefixed dirs — unnecessary complexity for two projects

**Rationale**: Matches the reference project's pattern. Clear, discoverable, no path stutter.

### 2. Independent projects, no workspaces

**Decision**: Each project has its own `package.json` and `node_modules`. No root `package.json`, no workspace linking.

**Alternatives considered**:
- npm/pnpm workspaces — would couple install/build steps and risk dependency conflicts between Next.js and Sanity's Vite-based toolchain
- Nx/Turborepo — overkill for two projects with no shared code

**Rationale**: The projects share a repository for deployment convenience, not for code sharing. Independence keeps them simple and avoids toolchain conflicts.

### 3. Duplicated linting configs

**Decision**: Each project carries its own ESLint, Prettier, and (where applicable) Stylelint config files.

**Alternatives considered**:
- Shared root config extended by both — introduces coupling; different base configs needed (eslint-config-next vs @typescript-eslint)
- Published shared config package — massive overhead for two consumers

**Rationale**: The ESLint configs must differ (Next.js plugins vs plain TypeScript). Prettier configs are identical but trivially small. Duplication is the simplest correct approach.

### 4. Sanity Studio as standalone (not embedded in Next.js)

**Decision**: `cms/` is a standalone Sanity Studio v3 project, deployed separately, never accessible via the Next.js app.

**Alternatives considered**:
- Embedded Studio via Next.js route (`/studio`) — couples CMS to app deployment, adds Studio's bundle to the app

**Rationale**: Portfolio site should be purely presentational. CMS is an internal tool for content editors, deployed independently.

### 5. Next.js version: latest (16.x)

**Decision**: Use the latest Next.js 16.x, matching the reference project's major version.

**Rationale**: Reference project runs 16.1.6. Using latest ensures we start with the most recent patches. React Compiler support is stable in this version.

### 6. Revalidation pattern: shared secret + tag-based

**Decision**: Replicate the reference project's `/api/revalidate` route that accepts a Sanity webhook with a shared secret and triggers `revalidateTag`.

**Rationale**: Proven pattern from the reference project. On-demand ISR means pages are static by default but can be refreshed instantly when content changes in Sanity.

## Risks / Trade-offs

- **[Two `npm install` steps]** → Each project requires its own install. CI pipeline must handle both. Acceptable given the independence requirement.
- **[Config drift between projects]** → Duplicated configs may diverge over time. → Mitigated by keeping configs minimal and reviewing both during linting changes.
- **[No shared types]** → Sanity schema types won't automatically be available in the Next.js app. → Accepted for now; can be addressed later with a codegen step or manual type definitions.
- **[Empty scaffold may not build]** → A truly minimal Next.js app needs at least a root layout and page. → Will include the minimum files needed for `next build` to succeed.
