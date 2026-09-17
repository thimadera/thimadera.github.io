import { Languages, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/I18nContext';

const NAV_ITEMS = [
  { key: 'nav_about', href: '#about' },
  { key: 'nav_projects', href: '#projects' },
  { key: 'nav_experience', href: '#experience' },
  { key: 'nav_skills', href: '#skills' },
  { key: 'nav_recommendations', href: '#recommendations' },
  { key: 'nav_contact', href: '#contact' },
] as const;

export function Navbar() {
  const { t, toggleLocale, locale } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <nav className="container-portfolio flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-accent">~/</span>thimadera
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {t(item.key)}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:border-accent/50 hover:text-foreground"
            aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            <Languages size={14} className="text-accent" />
            {locale === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="flex items-center gap-1.5 rounded-full border border-border bg-surface-2 px-3 py-1.5 font-mono text-xs text-muted"
            aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
          >
            <Languages size={14} className="text-accent" />
            {locale === 'pt' ? 'EN' : 'PT'}
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-surface-2 text-foreground"
            aria-label={open ? t('nav_menu_close') : t('nav_menu_open')}
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container-portfolio flex flex-col gap-1 py-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
              >
                {t(item.key)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
