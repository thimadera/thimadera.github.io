/**
 * Renders the resume PDF (EN) from src/resume/ResumeDocument.tsx into
 * static files, so other tools (job-tracker) can serve them without running
 * the site. Same data files as the site/PDF button — zero drift.
 *
 * Usage: npm run export-resume [outDir]   (default: ../job-tracker/public)
 */
import { createServer } from 'vite';
import { mkdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(here);
const outDir = path.resolve(root, process.argv[2] ?? '../job-tracker/public');

const server = await createServer({
  root,
  logLevel: 'error',
  appType: 'custom',
  server: { middlewareMode: true },
});

try {
  const { renderResume } = await server.ssrLoadModule('/scripts/resume-entry.tsx');
  mkdirSync(outDir, { recursive: true });
  for (const locale of ['en']) {
    const blob = await renderResume(locale);
    const file = path.join(outDir, `resume-${locale}.pdf`);
    writeFileSync(file, Buffer.from(await blob.arrayBuffer()));
    console.log(`resume-${locale}.pdf -> ${file}`);
  }
} finally {
  await server.close();
}
