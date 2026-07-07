# Portfólio — Rogerio Barbosa

Video Editor & Developer portfolio.

**Stack:** Next.js 14 (App Router, TypeScript, `src/`) · Tailwind CSS (Dracula) · next-intl · react-player · Resend · YouTube Data API v3

**Deploy:** Vercel Hobby → `portfolio.vercel.app`

**Repo:** Público

## Setup

```bash
npm install
npm run dev
```

## Milestones

| M | Nome | Status |
|---|------|--------|
| M1 | Setup (create-next-app, Tailwind, ESLint, git, Vercel) | 🔜 |
| M2 | Projetos estáticos (data mock, CardProjeto, grid, /projetos/[slug]) | ⏳ |
| M3 | Vitrine dinâmica (YouTube Data API v3) | ⏳ |
| M4 | Páginas completas (Home, Serviços, Sobre, Contato + Resend) | ⏳ |
| M5 | Deploy & polimento (SEO, responsivo, domínio) | ⏳ |

## Páginas

1. **Home** (`/`) — Hero + CTA + embed YouTube (melhor vídeo) + grid destaques
2. **Projetos** (`/projetos`) — Grid filtrado: Tech / Creative
3. **Projeto Individual** (`/projetos/[slug]`) — Embed + descrição
4. **Serviços** (`/servicos`) — Edição, Motion, Color Grading, Finalização
5. **Sobre** (`/sobre`) — Bio + stack técnico
6. **Contato** (`/contato`) — Formulário Resend + WhatsApp + Instagram + LinkedIn

## Estrutura

```
/src/app/[locale]/   ← next-intl páginas
/src/components/     ← CardProjeto, Hero, Navbar, Footer, FormContato
/src/data/           ← projetos.ts
/src/lib/            ← youtube.ts
/messages/           ← pt.json, en.json
/public/thumbnails/  ← assets renomeados
```
