import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  FileDown,
  ArrowDown,
  ArrowUpRight,
} from 'lucide-react';
import { CONTACT_ITEMS, SOCIALS } from '../data/contact';
import { useI18n } from '../i18n/I18nContext';
import { Section } from './Section';

const CONTACT_ICONS = { email: Mail, phone: Phone } as const;
const SOCIAL_ICONS = { LinkedIn: Linkedin, GitHub: Github, Instagram: Instagram } as const;

export function Contact() {
  const { t, locale } = useI18n();

  const handleDownload = async () => {
    const { downloadResume } = await import('../resume/ResumeDocument');
    await downloadResume(locale);
  };

  return (
    <Section id="contact" eyebrow={t('contact_eyebrow')} title={t('contact_title')}>
      <div className="max-w-xl">
        <p className="max-w-md text-base leading-relaxed text-muted">
          {t('contact_subtitle')}
        </p>

        <div className="mt-8 flex flex-col gap-3">
          {CONTACT_ITEMS.map((contact) => {
            const Icon = CONTACT_ICONS[contact.kind];
            return (
              <a
                key={contact.kind}
                href={contact.href}
                className="group card flex items-center gap-4 p-4 transition-colors hover:border-accent/40"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-2 text-accent">
                  <Icon size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-muted">
                    {t(contact.kind === 'email' ? 'contact_email_label' : 'contact_phone_label')}
                  </span>
                  <span className="block truncate font-mono text-sm text-foreground">
                    {contact.value}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="ml-auto text-muted transition-colors group-hover:text-accent"
                />
              </a>
            );
          })}

          <button
            type="button"
            onClick={() => void handleDownload()}
            className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-accent/30 bg-accent/10 p-4 text-left transition-colors hover:border-accent/50 hover:bg-accent/15"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/15 text-accent">
              <FileDown size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted">{t('contact_resume')}</span>
              <span className="block font-mono text-sm text-foreground">
                PDF · {locale === 'en' ? 'EN' : 'PT'}
              </span>
            </span>
            <ArrowDown
              size={16}
              className="ml-auto text-muted transition-all group-hover:translate-y-0.5 group-hover:text-accent"
            />
          </button>
        </div>

        <div className="mt-8">
          <p className="text-sm text-muted">{t('contact_social_label')}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.name as keyof typeof SOCIAL_ICONS];
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm transition-colors hover:border-accent/50"
                >
                  <Icon size={16} className="text-accent" />
                  {social.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
