import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { Locale } from '../types';
import { translations } from './translations';
import type { TKey } from './translations';

const STORAGE_KEY = 'portfolio-thiago.locale';

interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  /** Translate a UI string key. */
  t: (key: TKey) => string;
  /** Pick the right version of a localized string. */
  l: (value: { en: string; pt: string }) => string;
}

const I18nContext = createContext<I18nContextValue | null>(null);

function detectLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'pt') return stored;
  return typeof navigator !== 'undefined' && navigator.language.toLowerCase().startsWith('pt')
    ? 'pt'
    : 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectLocale());

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => setLocaleState(next), []);
  const toggleLocale = useCallback(
    () => setLocaleState((prev) => (prev === 'pt' ? 'en' : 'pt')),
    [],
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t: (key: TKey) => translations[locale][key],
      l: (localized) => localized[locale],
    }),
    [locale, setLocale, toggleLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider');
  return ctx;
}
