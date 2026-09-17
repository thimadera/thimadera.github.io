import { Briefcase, Globe2, Building2, Rocket } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';
import { Section } from './Section';

export function About() {
  const { t } = useI18n();

  const facts = [
    { icon: Briefcase, value: '7+', label: t('about_fact_exp') },
    { icon: Globe2, value: 'C1', label: t('about_fact_global') },
    { icon: Building2, value: '2', label: t('about_fact_clients') },
    { icon: Rocket, value: '10+', label: t('about_fact_products') },
  ];

  return (
    <Section id="about" eyebrow={t('about_eyebrow')} title={t('about_title')}>
      <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-5 text-base leading-relaxed text-muted">
          <p>{t('about_p1')}</p>
          <p>{t('about_p2')}</p>
          <p>{t('about_p3')}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 content-start">
          {facts.map((fact) => (
            <div key={fact.label} className="card flex flex-col items-start gap-2 p-5">
              <fact.icon size={18} className="text-accent" />
              <span className="text-3xl font-semibold tracking-tight">{fact.value}</span>
              <span className="text-sm text-muted">{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
