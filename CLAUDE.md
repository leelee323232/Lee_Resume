# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production (uses opennext for Cloudflare deployment)
pnpm lint         # Run ESLint
```

No test suite is configured.

## Architecture

This is a personal resume/portfolio site for Lee Ko-Yi (李科邑), built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui (new-york style).

### Routes

- `/` — Home page: resume overview (ResumeHero, Education, Experience, Skills, ContactMedia)
- `/resume` — Detailed resume page with five domain sections (BlockchainCourses, EventPlanning, ResearchProjects, ESGSociety, EntrepreneurshipExperience)
- `/portfolio` — Portfolio page (PortfolioHero, ProjectGrid)

### Component organization

- `components/` — Page-level section components consumed directly by routes
- `components/resume/` — Detailed resume section components used only by `/resume`
- `components/ui/` — shadcn/ui primitives (do not edit manually; regenerate via `pnpm dlx shadcn@latest add <component>`)

### Key conventions

- Path alias `@/` maps to the project root
- All CSS variables and theme tokens are defined in `app/globals.css` (Tailwind v4 config inline)
- `typescript.ignoreBuildErrors: true` is set in `next.config.mjs` — TypeScript errors won't block builds
- Images are unoptimized (`images.unoptimized: true`) for static/edge deployment compatibility
- The build output uses `opennext` (Cloudflare Workers/Pages compatible), not the standard Next.js output
- Vercel Analytics is loaded in the root layout
- The site language is Traditional Chinese (`lang="zh-TW"`); all user-visible text is in Traditional Chinese
