# Tasks

## M1 — Setup
- [x] Criar repo GitHub `portfolio`
- [ ] `create-next-app` com TypeScript + Tailwind + App Router + src/
- [ ] Configurar Tailwind: paleta Dracula, Inter via `@next/font`
- [ ] Configurar next-intl (pt + en)
- [ ] Estruturar diretórios (components/, data/, lib/, public/thumbnails/)
- [ ] ESLint + Prettier
- [ ] `git init` + remote + push
- [ ] Deploy Vercel → `portfolio.vercel.app`

## M2 — Projetos estáticos
- [ ] `src/data/projetos.ts` com 5 melhores projetos mock
- [ ] `CardProjeto` (thumbnail, título, badge categoria + badge Short)
- [ ] Grid responsivo em `/projetos` com filtro Tech / Creative
- [ ] Página `/projetos/[slug]` com react-player + descrição
- [ ] Renomear thumbnails → `/public/thumbnails/`

## M3 — Vitrine dinâmica
- [ ] Google Cloud Project + YouTube Data API v3
- [ ] `src/lib/youtube.ts` (fetch, cache revalidate, fallback estático)
- [ ] Substituir dados mock pelos dinâmicos

## M4 — Páginas completas
- [ ] Home: hero + CTA + embed YouTube (melhor vídeo)
- [ ] `/servicos`: grid cards de serviços
- [ ] `/sobre`: bio (Perfil Editor + Currículo)
- [ ] `/contato`: formulário Resend + WhatsApp + Instagram + LinkedIn + email

## M5 — Deploy & polimento
- [ ] SEO: `generateMetadata()`, sitemap.xml
- [ ] Responsivo mobile/tablet/desktop
- [ ] Deploy final Vercel
