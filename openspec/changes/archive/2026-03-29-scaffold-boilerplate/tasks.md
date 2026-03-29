## 1. Root Repository Setup

- [x] 1.1 Create root `.gitignore` with shared ignores (`.DS_Store`, `node_modules/`, `.env`, `.env.*.local`)

## 2. Next.js App — Project Scaffold

- [x] 2.1 Create `app/package.json` with dependencies (next, react, react-dom, @sanity/client, @sanity/image-url) and devDependencies (typescript, @types/node, @types/react, @types/react-dom, eslint, eslint-config-next, eslint-config-prettier, prettier, prettier-plugin-tailwindcss, tailwindcss, @tailwindcss/postcss, stylelint, stylelint-config-standard, stylelint-config-tailwindcss, babel-plugin-react-compiler) and scripts (dev, build, start, lint, lint:styles, format, format:check)
- [x] 2.2 Create `app/tsconfig.json` — strict mode, bundler moduleResolution, `@/*` path alias to `./src/*`
- [x] 2.3 Create `app/next.config.ts` — reactCompiler: true, Sanity CDN remote image pattern
- [x] 2.4 Create `app/postcss.config.mjs` — @tailwindcss/postcss plugin
- [x] 2.5 Create `app/.gitignore` — Next.js-specific ignores (matching reference)
- [x] 2.6 Create `app/.env.example` — document NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET, SANITY_READ_TOKEN, SANITY_REVALIDATE_SECRET

## 3. Next.js App — Linting Configuration

- [x] 3.1 Create `app/eslint.config.mjs` — flat config with eslint-config-next (core-web-vitals + typescript), eslint-config-prettier, underscore unused-vars override, globalIgnores
- [x] 3.2 Create `app/prettier.config.mjs` — singleQuote: false, trailingComma: "all", prettier-plugin-tailwindcss
- [x] 3.3 Create `app/.stylelintrc.cjs` — stylelint-config-standard + stylelint-config-tailwindcss, declaration-empty-line-before: null
- [x] 3.4 Create `app/.stylelintignore` — .next, out, build, public

## 4. Next.js App — Source Files

- [x] 4.1 Create `app/src/app/globals.css` — Tailwind CSS 4 import
- [x] 4.2 Create `app/src/app/layout.tsx` — root layout with HTML structure, metadata, globals.css import
- [x] 4.3 Create `app/src/app/page.tsx` — placeholder homepage
- [x] 4.4 Create `app/src/lib/sanity/env.ts` — read NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET from env
- [x] 4.5 Create `app/src/lib/sanity/client.ts` — configured @sanity/client using env module
- [x] 4.6 Create `app/src/app/api/revalidate/route.ts` — POST handler: validate SANITY_REVALIDATE_SECRET, call revalidateTag, return success/401

## 5. Sanity CMS — Project Scaffold

- [x] 5.1 Create `cms/package.json` with dependencies (sanity, @sanity/vision) and devDependencies (typescript, @types/node, eslint, @typescript-eslint/eslint-plugin, @typescript-eslint/parser, eslint-config-prettier, prettier) and scripts (dev, build, deploy, lint, format, format:check)
- [x] 5.2 Create `cms/tsconfig.json` — strict mode, appropriate for Vite-based Sanity Studio
- [x] 5.3 Create `cms/sanity.config.ts` — Studio config with structureTool, visionTool, env-based projectId/dataset
- [x] 5.4 Create `cms/sanity.cli.ts` — CLI config with env-based projectId/dataset
- [x] 5.5 Create `cms/schemaTypes/index.ts` — empty schema barrel (exports empty array)
- [x] 5.6 Create `cms/.gitignore` — node_modules, dist, .sanity
- [x] 5.7 Create `cms/.env.example` — document SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET

## 6. Sanity CMS — Linting Configuration

- [x] 6.1 Create `cms/eslint.config.mjs` — flat config with @typescript-eslint, eslint-config-prettier, underscore unused-vars override
- [x] 6.2 Create `cms/prettier.config.mjs` — singleQuote: false, trailingComma: "all" (no Tailwind plugin)

## 7. Install and Verify

- [x] 7.1 Run `npm install` in `app/` — verify successful install
- [x] 7.2 Run `npm install` in `cms/` — verify successful install
- [x] 7.3 Run `npm run build` in `app/` — verify Next.js builds without errors
- [x] 7.4 Run `npm run lint` in `app/` — verify ESLint passes
- [x] 7.5 Run `npm run lint` in `cms/` — verify ESLint passes
- [x] 7.6 Run `npm run format:check` in `app/` — verify Prettier passes
- [x] 7.7 Run `npm run format:check` in `cms/` — verify Prettier passes
