import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

/** Consistent section shell: eyebrow + title + optional subtitle. */
export function Section({ id, eyebrow, title, subtitle, children }: SectionProps) {
  const reduceMotion = useReducedMotion();

  return (
    <section id={id} className="scroll-mt-20 pb-24">
      <div className="container-portfolio">
        <motion.div
          initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-3 max-w-2xl text-muted">{subtitle}</p>}
        </motion.div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
