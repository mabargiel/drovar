## 1. Setup & Environment

- [x] 1.1 Install `resend` package
- [x] 1.2 Add `RESEND_API_KEY` to `.env.local` and add placeholder to `.env.example`

## 2. Update Contact Data

- [x] 2.1 Update all 4 translation files (`pl.json`, `en.json`, `de.json`, `it.json`) with real contact info (phone, email, address) and add NIP translation key
- [x] 2.2 Add NIP as 4th item in `ContactInfo.tsx` with an icon

## 3. Static Map

- [x] 3.1 Generate static map image from Azure Maps Render API (Wieliczka pin) and save to `public/images/map-wieliczka.png`
- [x] 3.2 Create `ContactMap.tsx` component using `next/image` with inset border styling
- [x] 3.3 Integrate `ContactMap` into the contact page below ContactInfo

## 4. Email Sending

- [x] 4.1 Create server action `actions.ts` with form validation, honeypot check, and rate limiting logic
- [x] 4.2 Implement Resend email sending in the server action (admin notification + sender confirmation)
- [x] 4.3 Add email-related translation keys for confirmation email subject/body across all 4 locales

## 5. Wire Up Form

- [x] 5.1 Add honeypot hidden field to `ContactForm.tsx`
- [x] 5.2 Replace `alert()` submission with server action call using `useTransition`
- [x] 5.3 Add loading state (disabled inputs, sending text on button) and error display
- [x] 5.4 Add translation keys for rate-limit and server error messages across all 4 locales

## 6. Verify

- [ ] 6.1 Test form submission end-to-end (success, validation errors, rate limit)
- [ ] 6.2 Verify map displays correctly on mobile and desktop
- [x] 6.3 Build passes (`npm run build`)
