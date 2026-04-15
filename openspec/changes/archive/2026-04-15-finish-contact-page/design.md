## Context

The contact page (`app/src/app/[locale]/contact/`) has a working form with client-side validation and i18n, but submission only triggers `alert()`. ContactInfo shows placeholder data. No map exists. The page needs real email sending, correct business info, and a location map before launch.

The project runs Next.js 16 with App Router, uses `next-intl` for translations (4 locales), and Tailwind CSS v4 for styling. One API route exists (`/api/revalidate`). Environment variables are managed via `.env.local` and deployed to Vercel.

## Goals / Non-Goals

**Goals:**
- Form submissions send real emails via Resend
- Contact info displays accurate business data
- Office location is visible on a static map
- Basic spam protection prevents abuse

**Non-Goals:**
- Interactive/dynamic map (pan, zoom)
- Email templates with complex HTML/branding (plain, clean emails are fine)
- CAPTCHA or third-party bot detection
- Form data persistence (database, CMS)
- Analytics or submission tracking

## Decisions

### 1. Server Action over API Route

**Choice**: Next.js Server Action in `app/[locale]/contact/actions.ts`

**Why**: The form is the only consumer. Server Actions are co-located, type-safe, and don't require a separate endpoint. Progressive enhancement is a bonus.

**Alternative considered**: `/api/contact` route — would be needed if external systems called the endpoint, but nothing does.

### 2. Static map image (one-time generation)

**Choice**: Fetch a static PNG from Azure Maps Render API once during development, save to `public/images/map-wieliczka.png`, display with `next/image`.

**Why**: The office location never changes. A runtime map dependency (Azure Maps SDK at ~250KB or an API proxy route) adds complexity and bundle size for zero benefit. A static image is fast, accessible, and zero-JS.

**Alternative considered**: Azure Maps JS SDK (interactive) — too heavy for a simple location pin. API proxy route — unnecessary overhead for a static location.

### 3. Honeypot + in-memory rate limiting

**Choice**: Hidden form field (honeypot) that bots fill but humans don't + a simple in-memory Map tracking submissions per IP with a sliding window.

**Why**: Honeypot catches naive bots with zero UX friction. Rate limiting (e.g., 3 submissions per IP per 15 minutes) prevents abuse. In-memory is sufficient for a low-traffic company site on Vercel (serverless functions reset state, so the rate limiter is per-instance — good enough, not bulletproof).

**Alternative considered**: Cloudflare Turnstile / reCAPTCHA — adds external dependency, cookie banners, and UX friction for a site that doesn't expect high bot traffic.

### 4. Email structure

**Choice**: Two plain HTML emails per submission:
- **Admin email** (`info@drovar.pl`): contains all form fields in a readable table format. Subject includes sender name.
- **Confirmation email** (sender's address): brief thank-you message in the locale the form was submitted in. From: `noreply@drovar.pl`.

**Why**: Simple, professional, no external template library needed. Locale-aware confirmation respects the international audience.

### 5. Form state management

**Choice**: Keep existing `useState`-based form with client-side validation. Add `useActionState` (React 19) to manage server action pending/error/success states. The server action returns a typed result object.

**Why**: Client-side validation gives instant feedback. Server action handles the actual sending and returns errors for edge cases (rate limit, server error). `useActionState` is the standard React 19 pattern for this.

## Risks / Trade-offs

- **In-memory rate limiting resets on cold starts** → Acceptable for a low-traffic site. If abuse becomes an issue, switch to Vercel KV or Upstash Redis.
- **Static map image becomes stale if office moves** → Regenerate the image. This is a deliberate trade-off for zero runtime dependencies.
- **Resend free tier has 100 emails/day limit** → Sufficient for a contact form. Monitor usage in Resend dashboard.
- **Honeypot can be bypassed by sophisticated bots** → Rate limiting is the second layer. If needed, add Turnstile later.
