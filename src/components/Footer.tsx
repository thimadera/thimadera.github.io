import { Github, Linkedin, Heart } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

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
          <a
            href="https://github.com/thimadera"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/thimadera/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
