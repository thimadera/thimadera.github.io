import type { Locale } from '../types';

/**
 * All UI strings, keyed by locale. Data-driven content (experience, projects,
 * skills, testimonials) lives in src/data and uses LocalizedString objects.
 */
const en = {
  // Navigation
  nav_about: 'About',
  nav_experience: 'Experience',
  nav_projects: 'Projects',
  nav_skills: 'Skills',
  nav_recommendations: 'Recommendations',
  nav_contact: 'Contact',
  nav_menu_open: 'Open menu',
  nav_menu_close: 'Close menu',

  // Hero
  hero_badge: 'Senior Frontend Engineer',
  hero_available: 'Available for international opportunities',
  hero_role: 'Angular • React • Next.js',
  hero_bio:
    'Frontend engineer with 7+ years of experience building enterprise and digital products end to end. Experienced in frontend architecture, application modernization, technical leadership and product development with Angular, React and Next.js. I currently lead frontend deliveries on global projects at Avangrid and build digital products at Brasa, the company I co-own.',
  hero_location: 'Sorocaba, SP, Brazil',
  hero_languages: 'Portuguese (native) • English (C1)',
  hero_cta_projects: 'View projects',
  hero_cta_contact: 'Get in touch',
  hero_scroll: 'Scroll to explore',

  // About
  about_title: 'About',
  about_eyebrow: 'Who I am',
  about_p1:
    "I'm a hands-on Frontend Engineer with 7+ years of experience, currently leading frontend deliveries for Avangrid (USA), a major player in the renewable energy sector, and building Brasa - Presentes & Personalizados from scratch as its owner and product engineer.",
  about_p2:
    'My career merges enterprise-grade governance - 5+ years at NTT DATA working with clients like Avangrid and Itaú, mastering Angular, strict CI/CD and systems that cannot fail - with product speed: React, Next.js and cloud infrastructure (Firebase, AWS) to ship and evolve products end to end.',
  about_p3:
    "I led the Angular → React migration at Cubo Itaú, mentor developers, and work with multicultural teams, with advanced English (C1). Everything I build focuses on accessibility (WCAG), performance (Core Web Vitals) and Developer Experience.",
  about_fact_exp: 'Years of experience',
  about_fact_global: 'Advanced English',
  about_fact_clients: 'Global enterprise clients',
  about_fact_products: 'Projects live',

  // Experience
  experience_title: 'Experience',
  experience_eyebrow: 'Career path',
  experience_education: 'Education',
  experience_present: 'Present',
  experience_nested_lead: 'Allocation',

  // Projects
  projects_title: 'Projects',
  projects_eyebrow: 'Selected work',
  projects_subtitle: 'A selection of products and experiments I built or led.',
  projects_empty: 'Project details coming soon.',
  projects_internal: 'Internal system',
  projects_view_prints: 'View screenshots',
  projects_gallery_close: 'Close gallery',
  projects_gallery_prev: 'Previous image',
  projects_gallery_next: 'Next image',

  // Skills
  skills_title: 'Skills',
  skills_eyebrow: 'Toolbox',
  skills_subtitle:
    'A focused frontend stack - from enterprise Angular to modern React/Next.js products.',

  // Testimonials
  testimonials_title: 'Recommendations',
  testimonials_eyebrow: 'What people say',
  testimonials_subtitle: 'Recommendations from colleagues and managers - originally written in Portuguese.',
  testimonials_note: 'Translated from the original Portuguese recommendation.',
  testimonials_all: 'See all recommendations on LinkedIn',

  // Contact
  contact_title: 'Contact',
  contact_eyebrow: "Let's talk",
  contact_subtitle:
    "Looking for a senior frontend engineer? Let's talk - I'm open to international opportunities.",
  contact_email_label: 'Email',
  contact_phone_label: 'Phone',
  contact_resume: 'Download resume',
  contact_social_label: 'Elsewhere',

  // Footer
  footer_rights: 'All rights reserved.',
  footer_built: 'Built with React, Vite & Tailwind CSS',
} as const;

export type TKey = keyof typeof en;

const pt: Record<TKey, string> = {
  // Navigation
  nav_about: 'Sobre',
  nav_experience: 'Experiência',
  nav_projects: 'Projetos',
  nav_skills: 'Skills',
  nav_recommendations: 'Recomendações',
  nav_contact: 'Contato',
  nav_menu_open: 'Abrir menu',
  nav_menu_close: 'Fechar menu',

  // Hero
  hero_badge: 'Senior Frontend Engineer',
  hero_available: 'Disponível para oportunidades internacionais',
  hero_role: 'Angular • React • Next.js',
  hero_bio:
    'Engenheiro de frontend com mais de 7 anos de experiência, atuando em produtos corporativos e digitais de ponta a ponta. Experiência em arquitetura frontend, modernização de aplicações, liderança técnica e desenvolvimento de produtos com Angular, React e Next.js. Atualmente, lidero entregas de frontend em projetos globais na Avangrid e desenvolvo produtos digitais na Brasa, empresa da qual sou sócio.',
  hero_location: 'Sorocaba, SP, Brasil',
  hero_languages: 'Português (nativo) • Inglês (C1)',
  hero_cta_projects: 'Ver projetos',
  hero_cta_contact: 'Entre em contato',
  hero_scroll: 'Role para explorar',

  // About
  about_title: 'Sobre',
  about_eyebrow: 'Quem sou eu',
  about_p1:
    'Sou Frontend Engineer hands-on com 7+ anos de experiência, atualmente liderando entregas de frontend para a Avangrid (EUA), gigante do setor de energia renovável, e construindo a Brasa - Presentes & Personalizados do zero como sócio e engenheiro de produto.',
  about_p2:
    'Minha trajetória une a rigidez da governança enterprise - 5+ anos na NTT DATA com clientes como Avangrid e Itaú, dominando Angular, CI/CD rigoroso e sistemas que não podem falhar - com a velocidade de produto: React, Next.js e infraestrutura em nuvem (Firebase, AWS) para construir e evoluir produtos ponta a ponta.',
  about_p3:
    'Liderei a migração Angular → React no Cubo Itaú, faço mentoria de desenvolvedores e trabalho com times multiculturais, com inglês avançado (C1). Tudo o que construo tem foco em acessibilidade (WCAG), performance (Core Web Vitals) e Developer Experience.',
  about_fact_exp: 'Anos de experiência',
  about_fact_global: 'Inglês avançado',
  about_fact_clients: 'Clientes corporativos globais',
  about_fact_products: 'Projetos no ar',

  // Experience
  experience_title: 'Experiência',
  experience_eyebrow: 'Trajetória',
  experience_education: 'Formação',
  experience_present: 'atual',
  experience_nested_lead: 'Alocação',

  // Projects
  projects_title: 'Projetos',
  projects_eyebrow: 'Trabalhos selecionados',
  projects_subtitle: 'Uma seleção de produtos e experimentos que construí ou liderei.',
  projects_empty: 'Detalhes dos projetos em breve.',
  projects_internal: 'Sistema interno',
  projects_view_prints: 'Ver prints',
  projects_gallery_close: 'Fechar galeria',
  projects_gallery_prev: 'Imagem anterior',
  projects_gallery_next: 'Próxima imagem',

  // Skills
  skills_title: 'Skills',
  skills_eyebrow: 'Minhas ferramentas',
  skills_subtitle:
    'Uma stack frontend enxuta - do Angular enterprise ao React/Next.js moderno.',

  // Testimonials
  testimonials_title: 'Recomendações',
  testimonials_eyebrow: 'O que dizem de mim',
  testimonials_subtitle: 'Recomendações de colegas e gestores - escritas originalmente em português.',
  testimonials_note: 'Traduzido da recomendação original em português.',
  testimonials_all: 'Ver todas as recomendações no LinkedIn',

  // Contact
  contact_title: 'Contato',
  contact_eyebrow: 'Vamos conversar',
  contact_subtitle:
    'Procurando um frontend engineer sênior? Vamos conversar - estou aberto a oportunidades internacionais.',
  contact_email_label: 'E-mail',
  contact_phone_label: 'Telefone',
  contact_resume: 'Baixar currículo',
  contact_social_label: 'Onde me encontrar',

  // Footer
  footer_rights: 'Todos os direitos reservados.',
  footer_built: 'Feito com React, Vite & Tailwind CSS',
};

export const translations: Record<Locale, Record<TKey, string>> = { en, pt };
