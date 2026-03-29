## Why

Drovar needs a project foundation — a company portfolio website backed by a headless CMS. The reference project (alghero-house) splits UI and CMS across two repositories, making deployment coordination painful. A single-repo setup with two independent projects eliminates that friction while keeping a clean separation of concerns.

## What Changes

- Create `app/` — a Next.js 16 project with React 19, Tailwind CSS 4, TypeScript 5, and ISR via Sanity webhooks
- Create `cms/` — a standalone Sanity Studio v3 project for content management
- Set up identical linting toolchains in both projects (ESLint 9, Prettier 3, Stylelint in app/) — duplicated, not shared
- Add a root `.gitignore` for repository-level ignores
- Establish the revalidation pattern (`/api/revalidate`) for on-demand ISR triggered by Sanity content changes
- Wire up Sanity client in the Next.js app (`@sanity/client` + env-based config)

## Capabilities

### New Capabilities
- `nextjs-app`: Next.js 16 project scaffold with App Router, Tailwind CSS 4, React Compiler, ISR revalidation endpoint, and Sanity client integration
- `sanity-cms`: Standalone Sanity Studio v3 project with CLI config, empty schema barrel, and environment-based project configuration
- `linting`: Duplicated linting setup across both projects — ESLint 9 flat config, Prettier 3 with Tailwind plugin, Stylelint 16 (app/ only)

### Modified Capabilities

_None — greenfield project._

## Impact

- **New directories**: `app/`, `cms/` at repository root
- **Dependencies**: Two independent `package.json` files with separate `node_modules`
- **Environment variables**: Both projects need Sanity project ID and dataset; app/ additionally needs a revalidation secret and read token
- **CI/CD**: Future pipeline will deploy in two stages — CMS schemas first, then the Next.js app
- **Hosting**: App requires a Node.js runtime for ISR (e.g., Vercel); CMS can be hosted on Sanity or any static host
