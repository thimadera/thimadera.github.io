# AGENTS.md

## Verification

- `npm run lint` - ESLint (must pass with 0 errors)
- `npm run build` - Vite production build (must succeed)
- `npm run dev` - local dev server on http://localhost:3000
- Manual checks: PT/EN toggle (localStorage `portfolio-thiago.locale`), mobile menu (375px), no horizontal overflow

## Notes

- `vite.config.ts` uses `base: './'` so the build works on GitHub Pages subpaths.
- The site is dark-only (no light theme) by design; accent color is defined in `src/index.css` (`@theme`).
- Positioning is fullstack: Angular (deepest experience), React (current day-to-day at Brasa and what remote/foreign roles ask for most), Node.js (main backend stack). Other backend tech (e.g. C#) appears only as historical context in `src/data/experience.ts`.
- Data (dates, company names) must stay consistent with the LinkedIn profile - recruiters cross-check.
- The resume PDF is generated client-side (button in Contact) from the same data files as the site (`src/data/experience.ts`, `src/data/skills.ts`, `src/data/contact.ts`) via `@react-pdf/renderer` (see `src/resume/ResumeDocument.tsx`). There are no static PDFs in `public/` - do not add any; edit the data files instead.
- `npm run export-resume` (`scripts/export-resume.mjs`) renders `resume-en.pdf` via `vite.ssrLoadModule` — same component, no duplication. Default output is the sibling repo `../job-tracker/public` (pass an outDir to override). Run it after editing `src/data` to keep the tracker's copies fresh.
- Deployment: GitHub Actions workflow in `.github/workflows/deploy.yml` (Pages source must be set to "GitHub Actions" in repo settings).
- `posts/` holds standalone HTML cards for LinkedIn posts (e.g. `posts/react-use-hook.html`). They use the site's palette/fonts, fixed 1:1 (1080×1080) layout, and an Export JPEG button (html-to-image CDN). For a new post, copy an existing file and edit the content — not part of the Vite build.
