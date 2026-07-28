<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Cursor Cloud specific instructions

MDplus is a single Next.js 16 (App Router) marketing site — no backend service or database to run separately. Standard commands live in `package.json` (`npm run dev`, `build`, `lint`, `start`); see `README.md`.

- Dev server: `npm run dev` (Turbopack) on `http://localhost:3000`. Run it in a background/tmux session, not blocking.
- All external integrations are optional and degrade gracefully when their env vars are absent, so the site runs fully without any secrets:
  - Sanity CMS (`NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`) — `/studio` and Sanity-backed content (learn/articles, podcast, events, etc.) render, but list content is empty without a configured project (`isSanityConfigured` in `src/sanity/lib/client.ts`).
  - Mailchimp newsletter (`MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`) — without these, `POST /api/newsletter/subscribe` returns 503 "temporarily unavailable" by design.
- `/ai-course/*` is gated by `src/proxy.ts` (Next.js middleware/proxy). The access code defaults to `frontSeat` (`COURSE_PASSWORD` env var overrides). Enter it on `/ai-course/unlock` to set the `mdplus_course_auth` cookie and reach the course page — a good no-secret end-to-end smoke test.
- `npm run lint` currently reports pre-existing `react-hooks/set-state-in-effect` errors in `MobileMenu.tsx` / `NavDropdown.tsx`. These do not block `npm run build`.
