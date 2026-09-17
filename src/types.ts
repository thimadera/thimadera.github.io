export type Locale = 'en' | 'pt';

/** A string that has both language versions. */
export interface LocalizedString {
  en: string;
  pt: string;
}

/** A month/year point. `month` is optional - when absent the date is year-only. */
export interface DatePoint {
  /** 1-12. Omit for year-only dates (e.g. education). */
  month?: number;
  year: number;
}

export interface ExperienceEntry {
  /** Employer / education institution name. */
  company: LocalizedString;
  /** Role title. */
  role: LocalizedString;
  /** Start date. Absent `end` means "Present"/"atual". */
  start: DatePoint;
  end?: DatePoint;
  /** Optional location, localized. */
  location?: LocalizedString;
  /** True when this entry is a sub-allocation inside a company. */
  nested?: boolean;
  current?: boolean;
  /** Optional badge, e.g. "Education". */
  badge?: LocalizedString;
  highlights: LocalizedString[];
}

export interface ProjectLink {
  label: LocalizedString;
  url: string;
}

export interface Project {
  name: string;
  description: LocalizedString;
  tags: string[];
  links: ProjectLink[];
  /** Folder name in src/assets/projects/ containing the screenshots. */
  slug: string;
  /** Internal system: rendered with a badge instead of a public link. */
  internal?: boolean;
  /** Highlighted project: rendered spanning more columns in the grid. */
  featured?: boolean;
  /** Creation year, shown as a badge on the card (e.g. older side projects). */
  year: number;
}

export interface SkillCategory {
  title: LocalizedString;
  skills: string[];
}

export interface Testimonial {
  name: string;
  role: LocalizedString;
  date: string;
  text: LocalizedString;
}
