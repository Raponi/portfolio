<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Commands

- `npm run dev` — dev server
- `npm run build` — production build (runs TS typecheck implicitly)
- `npm run lint` — ESLint v9 flat config (`eslint.config.mjs`)
- No test infra exists (no jest, vitest, playwright)

# Architecture

- Next.js 16 App Router + i18n via next-intl (`pt`/`en`). `localePrefix: "as-needed"` → `/` = pt, `/en` = en
- Root `src/app/page.tsx` redirects `/` → `/pt`
- `params` use `Promise<{ locale: string }>` — Next.js 16 async pattern
- Use `@/i18n/navigation` `Link` + `redirect` (not `next/link`) for locale-aware routing
- Pages: Home (`/`), Projetos (`/projetos` + `/[slug]`), Servicos, Sobre, Contato
- API: `POST /api/contact` — sends email via Resend
- `src/app/layout.tsx` is a minimal shell (no `<html>`/`<body>` tags); the real layout with Navbar/Footer is `[locale]/layout.tsx`
- No route groups, no loading/error boundaries, no layouts beyond `[locale]/layout.tsx`

# Components

- All `src/components/` are `"use client"` except `CardProjeto` (server component)
- `ReactPlayer` from `react-player` is always imported via `next/dynamic(() => import(...), { ssr: false })`

# Data

- `src/data/projetos-source.ts` — static YouTube IDs with `categoria`/`slug`
- Enriched at request time via YouTube API in `src/lib/get-projetos.ts` (ISR with `revalidate: 3600`)
- Graceful fallback when `YOUTUBE_API_KEY` missing: static thumbnails, empty stats
- `src/lib/youtube.ts` is **dead code** (channel-level search helpers, never imported); only `get-projetos.ts` is wired to pages

# Env

```
YOUTUBE_API_KEY=
RESEND_API_KEY=
```
Both optional — missing keys degrade gracefully.

# Config quirks

- Tailwind v4 via `@tailwindcss/postcss` — not the classic `tailwindcss` PostCSS plugin
- Dracula theme: CSS custom properties in `src/app/globals.css` (pattern: `--color-dracula-*`)
- `.env*` gitignored. `next-env.d.ts` exists in repo despite being in `.gitignore`
- Vercel-deployed: `.vercel/repo.json` has project/org IDs
- `next.config.ts` `images.remotePatterns` only allows `i.ytimg.com` — new `next/image` hosts must be added here
