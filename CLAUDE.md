# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Static export to out/ (next build with output: 'export')
pnpm lint         # Run ESLint
```

No test suite is configured.

## Architecture

This is a personal resume/portfolio site for Lee Ko-Yi (李科邑), built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui (new-york style).

### Routes

Traditional Chinese lives at the root; English and Japanese live under `/[locale]`.

- `/` — Home: ResumeHero, Education, Experience, ResearchProjects, Competitions, Skills, ContactMedia, ContactFormSection
- `/resume` — Condensed print-style resume (hero, work experience, education, skills — inline JSX, no section components)
- `/portfolio` — PortfolioHero + ProjectGrid
- `/en`, `/en/resume`, `/en/portfolio` — English equivalents
- `/ja`, `/ja/resume`, `/ja/portfolio` — Japanese equivalents

`app/[locale]/layout.tsx` generates only `en` and `ja`; `zh` is served from the root route files.

### Component organization

- `components/` — Page-level section components consumed directly by routes
- `components/resume/` — Currently only `competitions.tsx`
- `components/ui/` — shadcn/ui primitives (do not edit manually; regenerate via `pnpm dlx shadcn@latest add <component>`)

### Key conventions

- Path alias `@/` maps to the project root
- All CSS variables and theme tokens are defined in `app/globals.css` (Tailwind v4 config inline)
- **No user-visible text belongs in component files.** All copy lives in `lib/i18n/content/{zh,en,ja}.ts` and reaches components as typed props. `zh.ts` is the canonical type source (`SiteContent = typeof zh`), so adding a key there without adding it to `en.ts` and `ja.ts` breaks the build.
- Images are unoptimized (`images.unoptimized: true`) — required by `output: 'export'`
- Vercel Analytics is loaded in the root layout
- Default site language is Traditional Chinese (`lang="zh-TW"`); `/en` and `/ja` override it via an inline script in `app/[locale]/layout.tsx`

### Deployment

`next.config.mjs` sets `output: 'export'`, so `pnpm build` emits a **pure static site** to `out/` — no SSR, no edge functions, no adapter. Cloudflare Pages must therefore be configured as:

| Setting | Value |
|---|---|
| Build command | `pnpm build` |
| Build output directory | `out` |

Do **not** use `@cloudflare/next-on-pages` or `opennext`. Neither is a dependency, and neither is needed for a static export — `next-on-pages@1.13.16` also fails to install against current `wrangler` due to a `@cloudflare/workers-types` peer conflict.

Because there is no API route, the contact form POSTs to a Google Apps Script Web App (`apps-script/Code.gs`, deployment steps in `ENV_SETUP.md`). Its URL is injected via `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT`, which is **baked into the JS bundle at build time** — it must be set in the Cloudflare Pages environment variables, and changing it requires a rebuild. `.env.local` is gitignored, so it never reaches CI.
