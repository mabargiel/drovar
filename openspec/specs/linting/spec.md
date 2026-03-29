## ADDED Requirements

### Requirement: App ESLint configuration
The `app/` project SHALL use ESLint 9 flat config (`eslint.config.mjs`) with `eslint-config-next` (core-web-vitals + typescript presets) and `eslint-config-prettier`. The config SHALL override `no-unused-vars` to allow underscore-prefixed variables/args/caught errors.

#### Scenario: ESLint runs without errors on clean project
- **WHEN** running `npm run lint` inside `app/`
- **THEN** ESLint completes with no errors on the boilerplate code

#### Scenario: Unused underscore variables are allowed
- **WHEN** a variable, argument, or caught error is prefixed with `_`
- **THEN** ESLint does not report an unused-vars error

### Requirement: CMS ESLint configuration
The `cms/` project SHALL use ESLint 9 flat config (`eslint.config.mjs`) with `@typescript-eslint` and `eslint-config-prettier`. It SHALL NOT use `eslint-config-next` (CMS is Vite-based). The same underscore-prefixed unused-vars override SHALL apply.

#### Scenario: ESLint runs without errors on clean CMS project
- **WHEN** running `npm run lint` inside `cms/`
- **THEN** ESLint completes with no errors on the boilerplate code

### Requirement: Prettier configuration (both projects)
Both `app/` and `cms/` SHALL include identical `prettier.config.mjs` files with: `singleQuote: false`, `trailingComma: "all"`, and `prettier-plugin-tailwindcss` (app/) or no Tailwind plugin (cms/).

#### Scenario: Prettier formats consistently
- **WHEN** running `npm run format:check` in either project
- **THEN** all files conform to the Prettier configuration

### Requirement: Stylelint configuration (app only)
The `app/` project SHALL include Stylelint 16 with `stylelint-config-standard` and `stylelint-config-tailwindcss`. The `declaration-empty-line-before` rule SHALL be disabled. A `.stylelintignore` SHALL exclude `.next`, `out`, `build`, and `public` directories.

#### Scenario: Stylelint runs without errors
- **WHEN** running `npm run lint:styles` inside `app/`
- **THEN** Stylelint completes with no errors on the boilerplate CSS

### Requirement: npm scripts for linting
The `app/` project SHALL include scripts: `lint` (ESLint), `lint:styles` (Stylelint), `format` (Prettier write), `format:check` (Prettier check). The `cms/` project SHALL include scripts: `lint` (ESLint), `format` (Prettier write), `format:check` (Prettier check).

#### Scenario: All lint scripts exist in app
- **WHEN** inspecting `app/package.json` scripts
- **THEN** `lint`, `lint:styles`, `format`, and `format:check` are defined

#### Scenario: All lint scripts exist in cms
- **WHEN** inspecting `cms/package.json` scripts
- **THEN** `lint`, `format`, and `format:check` are defined
