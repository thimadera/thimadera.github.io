import { Helmet } from 'react-helmet-async';
import { useI18n } from '../i18n/I18nContext';

const SITE_URL = 'https://thimadera.github.io';
const SITE_NAME = 'Thiago Madeira - Frontend Engineer';
const IMAGE_URL = `${SITE_URL}/profile.jpg`;

/**
 * Per-locale SEO: title, description, Open Graph and hreflang alternates.
 * Update SITE_URL if a custom domain is ever set up.
 */
export function SEO() {
  const { locale } = useI18n();

  const meta = {
    title: 'Thiago Madeira - Frontend Engineer (Angular • React)',
    description:
      locale === 'pt'
        ? 'Frontend Engineer especializado em Angular e React/Next.js. Acessibilidade, performance e Developer Experience - atuando com times globais, com inglês avançado (C1).'
        : 'Frontend Engineer specialized in Angular and React/Next.js. Accessibility, performance and Developer Experience - working with global teams, with advanced English (C1).',
  };

  return (
    <Helmet>
      <html lang={locale === 'pt' ? 'pt-BR' : 'en'} />
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical" href={SITE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:image" content={IMAGE_URL} />
      <meta property="og:locale" content={locale === 'pt' ? 'pt_BR' : 'en_US'} />
      <meta property="og:locale:alternate" content={locale === 'pt' ? 'en_US' : 'pt_BR'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={IMAGE_URL} />

      {/* hreflang alternates */}
      <link rel="alternate" hrefLang="pt-BR" href={SITE_URL} />
      <link rel="alternate" hrefLang="en" href={SITE_URL} />
      <link rel="alternate" hrefLang="x-default" href={SITE_URL} />
      <meta name="theme-color" content="#0a0a0b" />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Thiago Madeira" />
      <meta name="keywords" content="Frontend Engineer, Angular, React, Next.js, TypeScript, Senior Frontend" />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Thiago Madeira',
          jobTitle: 'Frontend Engineer',
          url: SITE_URL,
          image: IMAGE_URL,
          email: 'mailto:thiagoemadeira@gmail.com',
          sameAs: [
            'https://www.linkedin.com/in/thimadera/',
            'https://github.com/thimadera',
            'https://instagram.com/thimadera',
          ],
          knowsAbout: ['Angular', 'React', 'Next.js', 'TypeScript', 'Accessibility', 'Performance'],
        })}
      </script>
    </Helmet>
  );
}
