import { motion, useReducedMotion } from 'motion/react';
import { SKILLS } from '../data/skills';
import { useI18n } from '../i18n/I18nContext';
import { Section } from './Section';

export function Skills() {
  const { t, l } = useI18n();
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="skills"
      eyebrow={t('skills_eyebrow')}
      title={t('skills_title')}
      subtitle={t('skills_subtitle')}
    >
      <div className="grid gap-6 md:grid-cols-2">
        {SKILLS.map((category, index) => (
          <motion.div
            key={category.title.en}
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: Math.min(index * 0.08, 0.32) }}
            className="card p-6"
          >
            <h3 className="font-mono text-sm uppercase tracking-[0.15em] text-accent">
              {l(category.title)}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => {
                const key = typeof skill === 'string' ? skill : skill.en;
                return (
                  <li key={key} className="chip">
                    {typeof skill === 'string' ? skill : l(skill)}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
