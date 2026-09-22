import type { Locale } from '../types';
import { translations } from '../i18n/translations';
import { SKILLS } from './skills';

/**
 * Single source of truth for SEO text. Used by <SEO /> at runtime and by the
 * `seo-html` plugin in vite.config.ts, which writes the same title and
 * description into index.html at dev/build time (crawlers that do not run
 * JavaScript read that static copy). Title and role come from the Hero
 * translations, so they can never drift from what the page says.
 */

export const SITE_URL = 'https://thimadera.github.io';
export const PERSON_NAME = 'Thiago Madeira';
export const JOB_TITLE = 'Senior Software Engineer';

const DESCRIPTIONS: Record<Locale, string> = {
  en: 'Senior Software Engineer with 7+ years building enterprise and product software with Angular, React and Node.js, working closely with product and design.',
  pt: 'Engenheiro de Software Sênior com mais de 7 anos construindo software corporativo e produtos digitais com Angular, React e Node.js, atuando próximo a produto e design.',
};

// Groups that describe how you work rather than what you know.
const NON_TECHNICAL_GROUPS = ['Collaboration', 'Languages'];

/**
 * Skill names without the tool detail in parentheses, technical groups only.
 * An item that is itself a comma-separated list is replaced by its group title.
 */
export const KNOWS_ABOUT: string[] = [
  ...new Set(
    SKILLS.filter((category) => !NON_TECHNICAL_GROUPS.includes(category.title.en)).flatMap((category) =>
      category.skills.map((skill) => {
        const name = (typeof skill === 'string' ? skill : skill.en).replace(/\s*\(.*\)$/, '');
        return name.includes(',') ? category.title.en : name;
      }),
    ),
  ),
];

export function getSeo(locale: Locale) {
  const t = translations[locale];
  // The headline stack (Angular • React • Node.js) leads the keywords.
  const headlineStack = t.hero_role.split(' • ');
  return {
    siteName: `${PERSON_NAME} - ${t.hero_badge}`,
    title: `${PERSON_NAME} - ${t.hero_badge} | ${t.hero_role}`,
    description: DESCRIPTIONS[locale],
    keywords: [...new Set([JOB_TITLE, ...headlineStack, ...KNOWS_ABOUT])].slice(0, 10).join(', '),
  };
}
