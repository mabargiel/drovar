## 1. Dependencies

- [x] 1.1 Install `next-intl` in `app/`
- [x] 1.2 Install `lucide-react` in `app/`

## 2. Theme — Colors and Typography

- [x] 2.1 Update `app/src/app/globals.css` — add `:root` block with all 13 brand color CSS variables
- [x] 2.2 Update `app/src/app/globals.css` — add `@theme inline` block mapping colors to Tailwind tokens (`--color-*`) and font (`--font-sans`)
- [x] 2.3 Update `app/src/app/globals.css` — add base `html` and `body` styles (smooth scrolling, background, foreground, font-family)
- [x] 2.4 Update `app/src/app/layout.tsx` — load Lato via `next/font/google` (weights 300, 400, 700), apply CSS variable to body

## 3. i18n — next-intl Setup

- [x] 3.1 Create `app/src/i18n/request.ts` — configure `next-intl` with `defaultLocale: "pl"`, load messages from `messages/pl.json`
- [x] 3.2 Create `app/messages/pl.json` — basic structure with `metadata.title` and `metadata.description`
- [x] 3.3 Update `app/next.config.ts` — add `createNextIntlPlugin` wrapper
- [x] 3.4 Update `app/src/app/layout.tsx` — set `lang="pl"`, wrap children with `NextIntlClientProvider`

## 4. Assets

- [x] 4.1 Place Drovar logo in `app/public/assets/logo.png` (user to provide clean version without teal background)

## 5. Verify

- [x] 5.1 Run `npm run build` — verify build passes
- [x] 5.2 Run `npm run lint` — verify ESLint passes
- [x] 5.3 Run `npm run format:check` — verify Prettier passes (run `format` first if needed)
