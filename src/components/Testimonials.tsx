import { Quote, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { TESTIMONIALS } from '../data/testimonials';
import { useI18n } from '../i18n/I18nContext';
import { Section } from './Section';

const LINKEDIN_RECOMMENDATIONS =
  'https://www.linkedin.com/in/thimadera/details/recommendations/';

export function Testimonials() {
  const { t, l, locale } = useI18n();
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="recommendations"
      eyebrow={t('testimonials_eyebrow')}
      title={t('testimonials_title')}
      subtitle={t('testimonials_subtitle')}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.figure
            key={testimonial.name}
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.32) }}
            className="card flex flex-col gap-4 p-6"
          >
            <Quote size={20} className="text-accent" aria-hidden />
            <blockquote className="text-sm leading-relaxed text-muted">
              {l(testimonial.text)}
            </blockquote>
            <figcaption className="mt-auto flex items-center justify-between gap-4 border-t border-border pt-4">
              <div>
                <div className="text-sm font-medium">{testimonial.name}</div>
                <div className="text-xs text-muted">
                  {l(testimonial.role)} • {testimonial.date}
                </div>
              </div>
              {locale === 'pt' ? null : (
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted/60">
                  {t('testimonials_note')}
                </span>
              )}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <div className="mt-10">
        <a
          href={LINKEDIN_RECOMMENDATIONS}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent/50"
        >
          {t('testimonials_all')}
          <ArrowUpRight size={16} className="text-accent" />
        </a>
      </div>
    </Section>
  );
}
