# iClips

Video platform built with Next.js.

## Requirements

- Node.js 22 (see `.nvmrc`). Next.js requires Node.js 20.9 or newer.
- npm

## Scripts

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm start
```

`npm run dev` starts the app at [http://localhost:3000](http://localhost:3000).

## Stack

- Next.js App Router and Turbopack
- React Server Components
- TypeScript (`strict`)
- Tailwind CSS
- ESLint (`eslint-config-next`)

## Environment

Copy `.env.example` to `.env.local` when you need local configuration. Only variables prefixed with `NEXT_PUBLIC_` are exposed to the browser.

`NEXT_PUBLIC_SITE_URL` sets `metadataBase` and the sitemap URL in `robots.txt`. Leave it unset until the public origin is known.
