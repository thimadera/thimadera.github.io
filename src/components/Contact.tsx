import {
  Mail,
  Linkedin,
  Github,
  Instagram,
  FileDown,
  ArrowDown,
  ArrowUpRight,
  Check,
  Loader2,
  TriangleAlert,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { CONTACT_ITEMS, SOCIALS } from '../data/contact';
import { useI18n } from '../i18n/I18nContext';
import { Section } from './Section';

const CONTACT_ICONS = { email: Mail } as const;
const SOCIAL_ICONS = { LinkedIn: Linkedin, GitHub: Github, Instagram: Instagram } as const;

type DownloadState = 'idle' | 'loading' | 'done' | 'error';

const MIN_LOADING_MS = 600;

const DOWNLOAD_ICONS = {
  idle: FileDown,
  loading: Loader2,
  done: Check,
  error: TriangleAlert,
} as const;

export function Contact() {
  const { t, locale } = useI18n();
  const [download, setDownload] = useState<DownloadState>('idle');
  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  // The PDF is built in the browser, so show that something is happening and
  // that the download started (the browser's own download UI is easy to miss).
  const handleDownload = async () => {
    if (download === 'loading') return;
    clearTimeout(resetTimer.current);
    setDownload('loading');
    try {
      // Keep the loading state visible for a moment even when the PDF is ready instantly.
      const minimumLoading = new Promise((resolve) => setTimeout(resolve, MIN_LOADING_MS));
      const { downloadResume } = await import('../resume/ResumeDocument');
      await Promise.all([downloadResume(locale), minimumLoading]);
      setDownload('done');
    } catch {
      setDownload('error');
    }
    resetTimer.current = setTimeout(() => setDownload('idle'), 3500);
  };

  const DownloadIcon = DOWNLOAD_ICONS[download];
  const downloadText = {
    idle: `PDF · ${locale === 'en' ? 'EN' : 'PT'}`,
    loading: t('contact_resume_generating'),
    done: t('contact_resume_done'),
    error: t('contact_resume_error'),
  }[download];

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
                    {t('contact_email_label')}
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
            disabled={download === 'loading'}
            aria-busy={download === 'loading'}
            className={`group flex cursor-pointer items-center gap-4 rounded-2xl border p-4 text-left transition-colors disabled:cursor-wait ${
              download === 'error'
                ? 'border-red-400/40 bg-red-400/10'
                : 'border-accent/30 bg-accent/10 hover:border-accent/50 hover:bg-accent/15'
            }`}
          >
            <span
              className={`grid h-10 w-10 shrink-0 place-items-center rounded-lg ${
                download === 'error' ? 'bg-red-400/15 text-red-300' : 'bg-accent/15 text-accent'
              }`}
            >
              <DownloadIcon
                size={18}
                className={download === 'loading' ? 'animate-spin motion-reduce:animate-none' : undefined}
              />
            </span>
            <span className="min-w-0">
              <span className="block text-xs text-muted">{t('contact_resume')}</span>
              <span className="block font-mono text-sm text-foreground" role="status" aria-live="polite">
                {downloadText}
              </span>
            </span>
            {download === 'idle' && (
              <ArrowDown
                size={16}
                className="ml-auto text-muted transition-all group-hover:translate-y-0.5 group-hover:text-accent"
              />
            )}
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
