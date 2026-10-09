import { pdf } from '@react-pdf/renderer';
import { ResumeDocument } from '../src/resume/ResumeDocument';
import type { Locale } from '../src/types';

/** Render the resume PDF for a locale. Used by scripts/export-resume.mjs (esbuild-bundled). */
export async function renderResume(locale: Locale): Promise<Blob> {
  return pdf(<ResumeDocument locale={locale} />).toBlob();
}
