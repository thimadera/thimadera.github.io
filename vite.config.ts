import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig, type Plugin } from 'vite';
import { getSeo } from './src/data/seo';

const escapeAttr = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

/**
 * Writes the title and description from src/data/seo.ts into index.html, so
 * the static HTML (what crawlers without JavaScript read) never drifts from
 * the text <SEO /> sets at runtime. English is the static default.
 */
function seoHtml(): Plugin {
  return {
    name: 'seo-html',
    transformIndexHtml(html) {
      const seo = getSeo('en');
      return html
        .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(seo.title)}</title>`)
        .replace(
          /(<meta\b[^>]*\bname="description"[^>]*\bcontent=")[^"]*(")/,
          `$1${escapeAttr(seo.description)}$2`,
        );
    },
  };
}

// base: './' makes the build work on GitHub Pages subpaths
// (e.g. https://<user>.github.io/portfolio-thiago/).
export default defineConfig({
  plugins: [react(), tailwindcss(), seoHtml()],
  base: './',
});
