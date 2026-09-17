import { ArrowDown, MapPin, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { useI18n } from '../i18n/I18nContext';

const BADGES = ['Angular', 'React', 'Next.js', 'TypeScript', 'A11y (WCAG)'];

export function Hero() {
  const { t } = useI18n();
  const reduceMotion = useReducedMotion();

  const fadeUp = (delay: number) => ({
    initial: reduceMotion ? undefined : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.6, delay, ease: 'easeOut' as const },
  });

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-120 w-180 -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="container-portfolio relative py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="chip border-accent/30 text-accent">
                <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-accent" />
                {t('hero_badge')}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="mt-6 text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl"
            >
              Thiago Madeira
              <span className="block bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
                {t('hero_role')}
              </span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {t('hero_bio')}
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-sm text-muted">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-accent" />
                {t('hero_location')}
              </span>
              <span>{t('hero_languages')}</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {t('hero_available')}
              </span>
            </motion.div>

            <motion.div {...fadeUp(0.35)} className="mt-8 flex flex-wrap gap-3">
              {BADGES.map((badge) => (
                <span key={badge} className="chip">
                  {badge}
                </span>
              ))}
            </motion.div>

            <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-all hover:brightness-110"
              >
                {t('hero_cta_projects')}
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-accent/50"
              >
                {t('hero_cta_contact')}
              </a>
            </motion.div>
          </div>

          {/* Profile photo */}
          <motion.div {...fadeUp(0.25)} className="relative mx-auto hidden w-full max-w-sm lg:block">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-full bg-accent/15 blur-3xl"
            />
            <div className="relative overflow-hidden rounded-3xl border border-border">
              <img
                src="./profile.jpg"
                alt="Thiago Madeira"
                className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div aria-hidden className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp(0.5)} className="mt-24 hidden justify-center md:flex">
          <a href="#about" className="flex flex-col items-center gap-2 text-muted transition-colors hover:text-foreground" aria-label={t('hero_scroll')}>
            <span className="font-mono text-xs uppercase tracking-[0.2em]">{t('hero_scroll')}</span>
            <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 1.6, repeat: Infinity }}>
              <ArrowDown size={16} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
