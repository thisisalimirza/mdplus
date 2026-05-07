# MDplus

The community for physicians and med students building in tech, data, AI, and entrepreneurship — without figuring it out alone.

This is the marketing site for [MDplus](https://mdplus.community), a 501(c)3 non-profit. The Skills Library lives separately at `skills.mdplus.community`.

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4 (CSS-first config in `src/app/globals.css`)
- Deployed on Vercel

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Design tokens

All brand colors, typography, radii, spacing, and shadows are defined as CSS custom properties under `@theme` in `src/app/globals.css`. Use Tailwind utility classes that reference them (e.g. `bg-denim-500`, `text-rhino-700`). Don't hardcode colors anywhere else.

Brand palette: Lightning Yellow (`#FFCB21`), Denim (`#1D7BBD`), Rhino (`#36366F`), with full tonal scales and a cool-neutral system.
