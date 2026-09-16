import { motion, useReducedMotion } from 'motion/react';
import { EXPERIENCE } from '../data/experience';
import { useI18n } from '../i18n/I18nContext';
import { Section } from './Section';
import { formatDuration, formatPeriod } from '../utils/dates';

export function Experience() {
  const { t, l, locale } = useI18n();
  const reduceMotion = useReducedMotion();

  return (
    <Section id="experience" eyebrow={t('experience_eyebrow')} title={t('experience_title')}>
      <ol className="relative space-y-10 border-l border-border pl-8">
        {EXPERIENCE.map((entry, index) => {
          const duration = formatDuration(entry.start, entry.end, locale);
          return (
          <motion.li
            key={`${entry.company.en}-${entry.start.year}-${entry.start.month ?? 0}`}
            initial={reduceMotion ? undefined : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3) }}
            className="relative"
          >
            {/* Timeline dot */}
            <span
              className={`absolute -left-10.25 top-1.5 h-3 w-3 rounded-full border-2 border-background ${
                entry.current ? 'bg-accent' : 'bg-surface-2'
              }`}
              aria-hidden
            />

            <div className={entry.nested ? 'pl-4 md:pl-6' : ''}>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {entry.nested && <span className="mr-1 text-accent">↳</span>}
                  {l(entry.company)}
                </h3>
                {entry.badge && (
                  <span className="chip border-accent/30 text-accent">{l(entry.badge)}</span>
                )}
                <span className="font-mono text-xs text-muted">{formatPeriod(entry.start, entry.end, locale)}</span>
                {duration && <span className="font-mono text-xs text-muted/70">({duration})</span>}
              </div>

              <p className="mt-1 text-sm font-medium text-accent">{l(entry.role)}</p>
              {entry.location && <p className="mt-1 text-xs text-muted">{l(entry.location)}</p>}

              {entry.highlights.length > 0 && (
                <ul className="mt-3 space-y-2">
                  {entry.highlights.map((highlight) => (
                    <li key={highlight.en} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-1.75 h-1 w-1 shrink-0 rounded-full bg-accent/70" aria-hidden />
                      {l(highlight)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
          );
        })}
      </ol>
    </Section>
  );
}
