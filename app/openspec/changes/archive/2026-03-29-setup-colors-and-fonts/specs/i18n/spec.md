## ADDED Requirements

### Requirement: next-intl configuration

The app SHALL install `next-intl` and configure it with Polish (`pl`) as the default and only locale. No locale prefix SHALL appear in URLs.

#### Scenario: next-intl is configured

- **WHEN** inspecting the i18n request config
- **THEN** `defaultLocale` is `"pl"` and messages are loaded from the Polish messages file

### Requirement: Polish messages file

The app SHALL include a `messages/pl.json` file with a basic structure containing at least a `metadata` section with `title` and `description` keys.

#### Scenario: Messages file exists and is valid JSON

- **WHEN** importing or reading `messages/pl.json`
- **THEN** valid JSON with a `metadata` section is returned

### Requirement: i18n request configuration

The app SHALL include `src/i18n/request.ts` that configures `next-intl` with the default locale and loads the corresponding messages file.

#### Scenario: Request config loads Polish messages

- **WHEN** a request is processed by the app
- **THEN** `next-intl` provides Polish translations via its context
