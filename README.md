# Falcon Crypto Signals — Landing Page

Production-ready Next.js 15 landing page for the Falcon Crypto Signals Telegram bot.

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons

## Before you deploy — things to personalize

1. **Logo**: `public/logo.svg` is a placeholder falcon mark built from your brand palette
   (no real logo file was provided). Swap it for your actual logo, and re-check
   `tailwind.config.ts` colors if your real mark uses different tones.
2. **Telegram link**: set the real bot/channel URL in `lib/data.ts` → `SITE.telegramUrl`.
3. **Domain**: replace `falconcryptosignals.com` in `app/layout.tsx`, `app/sitemap.ts`,
   and `app/robots.ts` with your real domain once purchased.
4. **OG image**: add a real `public/og-image.png` (1200×630) for social share previews.
5. **Live data**: `lib/data.ts` holds all stats, signal samples, performance numbers, and
   copy. Everything is illustrative/sample data as instructed — wire this up to your bot's
   real API or a scheduled data export before going live, especially `PERFORMANCE` and
   `LATEST_SIGNALS`.
6. **Legal pages**: `#` links for Privacy Policy and Terms in the footer need real pages —
   add `app/privacy/page.tsx` and `app/terms/page.tsx`.

## Run locally
```bash
npm install
npm run dev
```
Visit http://localhost:3000

## Deploy to Vercel
```bash
npm install -g vercel
vercel
```
Or push this folder to a GitHub repo and import it at vercel.com/new — zero config needed,
Vercel auto-detects Next.js.

## Notable implementation details
- **Falcon-landing intro**: `components/FalconIntro.tsx` plays once per browser session
  (sessionStorage-gated) and respects `prefers-reduced-motion`.
- **Smooth scroll performance**: scroll listeners are `passive` and throttled via
  `requestAnimationFrame`; heavy animations use `whileInView` with `once: true` so they
  fire a single time instead of re-triggering on every scroll pass.
- **Compliance copy**: the "Market Mindset" section and footer include a DYOR / no-guaranteed-
  profit disclaimer, matching what a crypto signal product should disclose. Please review with
  a lawyer for your jurisdiction before launch.
