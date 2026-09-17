import type { LocalizedString } from '../types';

/** Single source of truth for contact info - used by the site and the generated resume PDF. */
export interface ContactItem {
  kind: 'email' | 'phone';
  value: string;
  href: string;
}

export const CONTACT_ITEMS: ContactItem[] = [
  { kind: 'email', value: 'thiagoemadeira@gmail.com', href: 'mailto:thiagoemadeira@gmail.com' },
  { kind: 'phone', value: '+55 15 92000-4956', href: 'tel:+5515920004956' },
];

export const SOCIALS: { name: string; url: string }[] = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/thimadera/' },
  { name: 'GitHub', url: 'https://github.com/thimadera' },
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
