# AGENTS.md

## Verification

- `npm run lint` - ESLint (must pass with 0 errors)
- `npm run build` - Vite production build (must succeed)
- `npm run dev` - local dev server on http://localhost:3000
- Manual checks: PT/EN toggle (localStorage `portfolio-thiago.locale`), mobile menu (375px), no horizontal overflow

## Notes

- `vite.config.ts` uses `base: './'` so the build works on GitHub Pages subpaths.
- The site is dark-only (no light theme) by design; accent color is defined in `src/index.css` (`@theme`).
- Content is intentionally frontend-focused. Backend technologies appear only as historical context in `src/data/experience.ts`.
- Data (dates, company names) must stay consistent with the LinkedIn profile - recruiters cross-check.
- The resume PDF is generated client-side (button in Contact) from the same data files as the site (`src/data/experience.ts`, `src/data/skills.ts`, `src/data/contact.ts`) via `@react-pdf/renderer` (see `src/resume/ResumeDocument.tsx`). There are no static PDFs in `public/` - do not add any; edit the data files instead.
- Deployment: GitHub Actions workflow in `.github/workflows/deploy.yml` (Pages source must be set to "GitHub Actions" in repo settings).
