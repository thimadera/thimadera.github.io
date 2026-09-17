import { Github, Linkedin, Heart } from 'lucide-react';
import { SOCIALS } from '../data/contact';
import { useI18n } from '../i18n/I18nContext';

const FOOTER_ICONS = { GitHub: Github, LinkedIn: Linkedin } as const;
const FOOTER_SOCIALS = SOCIALS.filter((social) => social.name in FOOTER_ICONS);

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <div className="container-portfolio flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">
          © {year} Thiago Madeira. {t('footer_rights')}
        </p>

        <p className="flex items-center gap-1.5 font-mono text-xs text-muted">
          {t('footer_built')}
          <Heart size={12} className="text-accent" aria-label="with love" />
        </p>

        <div className="flex items-center gap-4">
          {FOOTER_SOCIALS.map((social) => {
            const Icon = FOOTER_ICONS[social.name as keyof typeof FOOTER_ICONS];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted transition-colors hover:text-foreground"
                aria-label={social.name}
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
