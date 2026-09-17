import type { DatePoint, Locale } from '../types';

/**
 * Date helpers for the experience timeline. Periods and durations are
 * computed from structured dates so they never go stale.
 */

const PT_MONTHS = ['', 'jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const EN_MONTHS = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function formatPoint(point: DatePoint, locale: Locale): string {
  const year = String(point.year);
  if (!point.month) return year;
  return locale === 'pt' ? `${PT_MONTHS[point.month]}/${year}` : `${EN_MONTHS[point.month]} ${year}`;
}

/** "jun/2021" / "Jun 2021" - for standalone dates (e.g. testimonials). */
export function formatDate(point: DatePoint, locale: Locale): string {
  return formatPoint(point, locale);
}

/** "jun/2021 - atual" / "Jun 2021 - Present". */
export function formatPeriod(start: DatePoint, end: DatePoint | undefined, locale: Locale): string {
  const endText = end ? formatPoint(end, locale) : locale === 'pt' ? 'atual' : 'Present';
  return `${formatPoint(start, locale)} - ${endText}`;
}

/**
 * Inclusive month count, matching the LinkedIn convention. Returns null when
 * there is no month-level granularity (e.g. year-only education).
 */
export function formatDuration(start: DatePoint, end: DatePoint | undefined, locale: Locale): string | null {
  if (!start.month || (end && !end.month)) return null;
  const now = new Date();
  const endMonth = end?.month ?? now.getMonth() + 1;
  const endYear = end?.year ?? now.getFullYear();
  const months = Math.max(0, (endYear - start.year) * 12 + (endMonth - start.month) + 1);
  const years = Math.floor(months / 12);
  const rest = months % 12;

  if (locale === 'pt') {
    const y = years > 0 ? `${years} ${years === 1 ? 'ano' : 'anos'}` : '';
    const m = rest > 0 ? `${rest} ${rest === 1 ? 'mês' : 'meses'}` : '';
    return [y, m].filter(Boolean).join(' ');
  }
  const y = years > 0 ? `${years} ${years === 1 ? 'yr' : 'yrs'}` : '';
  const m = rest > 0 ? `${rest} ${rest === 1 ? 'mo' : 'mos'}` : '';
  return [y, m].filter(Boolean).join(' ');
}
