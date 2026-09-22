import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CONTACT_ITEMS, SOCIALS } from '../data/contact';
import { JOB_TITLE, KNOWS_ABOUT, PERSON_NAME, SITE_URL, getSeo } from '../data/seo';
import { useI18n } from '../i18n/I18nContext';

const IMAGE_URL = `${SITE_URL}/profile-900.jpg`;
const EMAIL = CONTACT_ITEMS.find((item) => item.kind === 'email');

/**
 * Per-locale SEO: title, description, Open Graph and hreflang alternates.
 * The text lives in src/data/seo.ts. Update SITE_URL there if a custom domain
 * is ever set up.
 */
export function SEO() {
  const { locale } = useI18n();
  const meta = getSeo(locale);

  // The description tag lives in index.html (so crawlers without JavaScript
  // read it); update it in place instead of adding a second one via Helmet.
  useEffect(() => {
    document.head.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
  }, [meta.description]);

  return (
    <Helmet>
      <html lang={locale === 'pt' ? 'pt-BR' : 'en'} />
      <title>{meta.title}</title>
      <link rel="canonical" href={SITE_URL} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={meta.siteName} />
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
      <meta name="author" content={PERSON_NAME} />
      <meta name="keywords" content={meta.keywords} />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: PERSON_NAME,
          jobTitle: JOB_TITLE,
          url: SITE_URL,
          image: IMAGE_URL,
          ...(EMAIL && { email: EMAIL.href }),
          sameAs: SOCIALS.filter((social) => social.professional).map((social) => social.url),
          knowsAbout: KNOWS_ABOUT,
        })}
      </script>
    </Helmet>
  );
}
