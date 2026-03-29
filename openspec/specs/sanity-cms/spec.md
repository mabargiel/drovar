## ADDED Requirements

### Requirement: Sanity Studio project structure
The `cms/` directory SHALL be a self-contained Sanity Studio v3 project with its own `package.json`, `node_modules`, and configuration files. It SHALL be fully independent from the `app/` project.

#### Scenario: Studio starts successfully
- **WHEN** running `npx sanity dev` (or the configured dev script) inside `cms/`
- **THEN** the Sanity Studio development server launches

### Requirement: Studio configuration
The project SHALL include `sanity.config.ts` that configures the Studio with project ID and dataset from environment variables, and includes the `structureTool` and `visionTool` plugins.

#### Scenario: Config uses environment variables
- **WHEN** inspecting `sanity.config.ts`
- **THEN** `projectId` and `dataset` are read from environment variables

### Requirement: CLI configuration
The project SHALL include `sanity.cli.ts` for Sanity CLI operations, configured with the same environment-based project ID and dataset.

#### Scenario: CLI config exists
- **WHEN** running `npx sanity` commands inside `cms/`
- **THEN** the CLI uses the configured project ID and dataset

### Requirement: Empty schema barrel
The project SHALL include `schemaTypes/index.ts` that exports an empty array of schema types, ready for future schema definitions.

#### Scenario: Schema barrel exports empty array
- **WHEN** importing from `schemaTypes/index.ts`
- **THEN** an empty array is returned

### Requirement: TypeScript configuration
The project SHALL use TypeScript 5 with strict mode and configuration appropriate for a Vite-based Sanity Studio project.

#### Scenario: TypeScript compiles
- **WHEN** running TypeScript compilation in `cms/`
- **THEN** no type errors are produced

### Requirement: Environment variables documented
An `.env.example` file SHALL document required environment variables: `SANITY_STUDIO_PROJECT_ID`, `SANITY_STUDIO_DATASET`.

#### Scenario: Example env file exists
- **WHEN** inspecting `cms/.env.example`
- **THEN** all required variables are listed with placeholder values

### Requirement: Sanity Vision plugin
The Studio SHALL include `@sanity/vision` for GROQ query testing.

#### Scenario: Vision tool available
- **WHEN** opening the Sanity Studio
- **THEN** the Vision tool is accessible for running GROQ queries
