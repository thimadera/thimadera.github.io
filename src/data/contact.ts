import type { LocalizedString } from '../types';

/** Single source of truth for contact info - used by the site and the generated resume PDF. */
export interface ContactItem {
  kind: 'email';
  value: string;
  href: string;
}

// The phone number is intentionally not listed: email and LinkedIn are enough
// for remote roles, and a public number only attracts spam.
export const CONTACT_ITEMS: ContactItem[] = [
  { kind: 'email', value: 'thidesui@gmail.com', href: 'mailto:thidesui@gmail.com' },
];

/**
 * `professional` socials also go to the resume PDF and the SEO structured
 * data; the others only appear on the site.
 */
export const SOCIALS: { name: string; url: string; professional?: boolean }[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/thimadera/', professional: true },
  { name: 'GitHub', url: 'https://github.com/thimadera', professional: true },
  { name: 'Instagram', url: 'https://instagram.com/thimadera' },
];

export const LOCATION: LocalizedString = {
  en: 'Sorocaba, SP, Brazil',
  pt: 'Sorocaba, SP, Brasil',
};

export const LANGUAGES: LocalizedString = {
  en: 'Portuguese (native) • English (C1)',
  pt: 'Português (nativo) • Inglês (C1)',
};
