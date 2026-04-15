## Why

The contact page has a working form UI but no backend — submission triggers a browser `alert()` with JSON data instead of sending emails. Contact info displays placeholder data (fake phone, address). There is no map showing the company location. The page needs to be production-ready before launch.

## What Changes

- Wire up the contact form to send emails via Resend (server action):
  - Notification email with all form fields to `info@drovar.pl`
  - Confirmation email to the person who submitted the form
- Add spam protection: honeypot hidden field + server-side rate limiting
- Update all translation files with real contact data (phone, email, address, NIP)
- Add NIP (tax ID) as a 4th item in the ContactInfo component
- Add a static map image (generated once from Azure Maps) showing the Wieliczka office location with a pin, displayed with an inset border

## Capabilities

### New Capabilities
- `contact-form-submission`: Server action that validates form data, checks honeypot, rate-limits, and sends two emails via Resend (notification to admin + confirmation to sender)
- `contact-map`: Static map image of the office location displayed with next/image and an inset border

### Modified Capabilities
- `contact-page`: Update placeholder contact info with real data (phone, email, address), add NIP display as 4th ContactInfo item, integrate map and form submission

## Impact

- **Dependencies**: `resend` package added
- **Environment**: `RESEND_API_KEY` added to `.env.local` (deployed via Vercel env vars)
- **Files created**: server action (`actions.ts`), map component (`ContactMap.tsx`), static map image in `public/`
- **Files modified**: `ContactForm.tsx`, `ContactInfo.tsx`, all 4 translation files, `.env.example`
- **No breaking changes** — existing form UI and validation remain intact
