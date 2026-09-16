/**
 * Project screenshots, discovered at build time from
 * `src/assets/projects/<slug>/` folders. Adding a new image to a folder
 * automatically includes it in the gallery on the next build - no code
 * change needed. The first image (sorted by filename) is the card cover.
 */
const modules = import.meta.glob('../assets/projects/*/*.{png,jpg,jpeg,webp,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const imagesBySlug = new Map<string, string[]>();

for (const key of Object.keys(modules).sort()) {
  const slug = key.split('/').slice(-2, -1)[0] ?? '';
  const url = modules[key];
  if (!url) continue;
  const list = imagesBySlug.get(slug) ?? [];
  list.push(url);
  imagesBySlug.set(slug, list);
}

/** All screenshots for a project slug, sorted by filename. */
export function getProjectImages(slug: string): string[] {
  return imagesBySlug.get(slug) ?? [];
}
