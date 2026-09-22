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
  hero_badge: 'Senior Software Engineer',
  hero_role: 'Angular • React • Node.js',
  hero_bio:
    '7+ years building enterprise and product software. I work closely with product and design: I turn business ideas into technical scope, lay out the trade-offs, find the middle ground and build it to scale. Currently at Avangrid through NTT DATA.',
  hero_chip_performance: 'Performance',
  hero_chip_unit_tests: 'Unit Tests',
  hero_chip_e2e_tests: 'E2E Tests',
  hero_chip_accessibility: 'Accessibility',
  hero_chip_cicd: 'CI/CD',
  hero_chip_ai: 'AI-Assisted Development',
  hero_chip_apis: 'REST & GraphQL',
  hero_chip_databases: 'SQL & NoSQL',
  hero_location: 'Sorocaba, SP, Brazil',
  hero_languages: 'Portuguese (native) • English (C1)',
  hero_cta_projects: 'View projects',
  hero_cta_contact: 'Get in touch',
  hero_scroll: 'Scroll to explore',

  // About
  about_title: 'About',
  about_eyebrow: 'Who I am',
  about_p1:
    "I'm a software engineer who works closely with product and design. That means turning business ideas into technical scope, explaining constraints without jargon and finding the middle ground that ships and still scales.",
  about_p2:
    "Since 2019, I've been building software from the database to the interface, with Angular, React, Node.js and PostgreSQL. At NTT DATA, the work happens in multicultural teams under strict governance (CI/CD, accessibility standards, critical systems), for global enterprise clients such as Avangrid (USA) and Itaú.",
  about_p3:
    'Tests are part of the feature, not a step after it: new code ships with unit tests and stays above 90% coverage. I also bring the same care to people and knowledge, mentoring junior developers, including someone moving into software from another career, and documenting the setup and migration process for the team.',
  about_fact_exp: 'Years of experience',
  about_fact_clients: 'Global enterprise clients',
  about_fact_coverage: 'Test coverage on new code',
  about_fact_mentored: 'Developers mentored',

  // Experience
  experience_title: 'Experience',
  experience_eyebrow: 'Career path',
  experience_education: 'Education',
  experience_present: 'Present',
  experience_nested_lead: 'Allocation',

  // Projects
  projects_title: 'Projects',
  projects_eyebrow: 'Selected work',
  projects_subtitle: 'A selection of products and experiments I built.',
  projects_empty: 'Project details coming soon.',
  projects_internal: 'Internal system',
  projects_view_prints: 'View screenshots',
  projects_gallery_close: 'Close gallery',
  projects_gallery_prev: 'Previous image',
  projects_gallery_next: 'Next image',
  projects_carousel_prev: 'Scroll to previous projects',
  projects_carousel_next: 'Scroll to next projects',

  // Skills
  skills_title: 'Skills',
  skills_eyebrow: 'Toolbox',
  skills_subtitle:
    'Technologies, tools and practices I use to build digital products.',

  // Testimonials
  testimonials_title: 'Recommendations',
  testimonials_eyebrow: 'What people say',
  testimonials_subtitle: 'What colleagues and managers say about working with me.',
  testimonials_note: 'Translated from the original Portuguese recommendation.',
  testimonials_all: 'See all recommendations on LinkedIn',

  // Contact
  contact_title: 'Contact',
  contact_eyebrow: "Let's talk",
  contact_subtitle:
    "Interested in talking about an opportunity? Get in touch.",
  contact_email_label: 'Email',
  contact_resume: 'Download resume',
  contact_resume_generating: 'Generating PDF...',
  contact_resume_done: 'Download started',
  contact_resume_error: 'Could not generate the PDF. Try again.',
  contact_social_label: 'Elsewhere',

  // Resume PDF
  resume_summary: 'Summary',
  // Impersonal wording (no pronouns), as is standard in a resume; the site keeps the first-person hero_bio.
  resume_bio:
    'Senior software engineer with 7+ years across Angular, React and Node.js - from a US customer portal of 20+ microfrontends to sole technical ownership of a multi-tenant SaaS running 200+ orders a day (800+ at peak). Works closely with product and design, turning business ideas into technical scope. Currently at Avangrid through NTT DATA.',

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
  hero_badge: 'Engenheiro de Software Sênior',
  hero_role: 'Angular • React • Node.js',
  hero_bio:
    'Mais de 7 anos construindo software corporativo e produtos digitais. Trabalho em parceria com produto e design: transformo ideias de negócio em escopo técnico, explico os trade-offs, encontro o meio-termo e construo pensando em escala. Hoje na Avangrid pela NTT DATA.',
  hero_chip_performance: 'Performance',
  hero_chip_unit_tests: 'Testes unitários',
  hero_chip_e2e_tests: 'Testes E2E',
  hero_chip_accessibility: 'Acessibilidade',
  hero_chip_cicd: 'CI/CD',
  hero_chip_ai: 'Desenvolvimento com IA',
  hero_chip_apis: 'REST e GraphQL',
  hero_chip_databases: 'SQL e NoSQL',
  hero_location: 'Sorocaba, SP, Brasil',
  hero_languages: 'Português (nativo) • Inglês (C1)',
  hero_cta_projects: 'Ver projetos',
  hero_cta_contact: 'Entre em contato',
  hero_scroll: 'Role para explorar',

  // About
  about_title: 'Sobre',
  about_eyebrow: 'Quem sou eu',
  about_p1:
    'Sou engenheiro de software e trabalho lado a lado com produto e design. Isso significa transformar ideias de negócio em escopo técnico, explicar as limitações sem jargão e encontrar o meio-termo que dá para entregar e continua escalando.',
  about_p2:
    'Desde 2019, construo software do banco de dados à interface, com Angular, React, Node.js e PostgreSQL. Na NTT DATA, o trabalho acontece em times multiculturais, com governança rigorosa (CI/CD, padrões de acessibilidade, sistemas críticos), para clientes corporativos globais como Avangrid (EUA) e Itaú.',
  about_p3:
    'Testes fazem parte da funcionalidade, não uma etapa posterior: código novo entra com testes unitários e fica acima de 90% de cobertura. Dedico o mesmo cuidado às pessoas e ao conhecimento do time, orientando desenvolvedores juniores, incluindo alguém em transição de carreira para a programação, e documentando o processo de configuração e migração para o time.',
  about_fact_exp: 'Anos de experiência',
  about_fact_clients: 'Clientes corporativos globais',
  about_fact_coverage: 'Cobertura de testes em código novo',
  about_fact_mentored: 'Desenvolvedores orientados',

  // Experience
  experience_title: 'Experiência',
  experience_eyebrow: 'Trajetória',
  experience_education: 'Formação',
  experience_present: 'atual',
  experience_nested_lead: 'Alocação',

  // Projects
  projects_title: 'Projetos',
  projects_eyebrow: 'Trabalhos selecionados',
  projects_subtitle: 'Uma seleção de produtos e experimentos que construí.',
  projects_empty: 'Detalhes dos projetos em breve.',
  projects_internal: 'Sistema interno',
  projects_view_prints: 'Ver prints',
  projects_gallery_close: 'Fechar galeria',
  projects_gallery_prev: 'Imagem anterior',
  projects_gallery_next: 'Próxima imagem',
  projects_carousel_prev: 'Rolar para projetos anteriores',
  projects_carousel_next: 'Rolar para os próximos projetos',

  // Skills
  skills_title: 'Skills',
  skills_eyebrow: 'Minhas ferramentas',
  skills_subtitle:
    'Tecnologias, ferramentas e práticas que utilizo no desenvolvimento de produtos digitais.',

  // Testimonials
  testimonials_title: 'Recomendações',
  testimonials_eyebrow: 'O que dizem de mim',
  testimonials_subtitle: 'O que colegas e gestores dizem sobre trabalhar comigo.',
  testimonials_note: 'Traduzido da recomendação original em português.',
  testimonials_all: 'Ver todas as recomendações no LinkedIn',

  // Contact
  contact_title: 'Contato',
  contact_eyebrow: 'Vamos conversar',
  contact_subtitle:
    'Quer conversar sobre uma oportunidade? Fale comigo.',
  contact_email_label: 'E-mail',
  contact_resume: 'Baixar currículo',
  contact_resume_generating: 'Gerando PDF...',
  contact_resume_done: 'Download iniciado',
  contact_resume_error: 'Não foi possível gerar o PDF. Tente novamente.',
  contact_social_label: 'Onde me encontrar',

  // Resume PDF
  resume_summary: 'Resumo',
  resume_bio:
    'Engenheiro de software sênior com mais de 7 anos em Angular, React e Node.js - de um portal de cliente dos EUA com mais de 20 microfrontends à responsabilidade técnica completa por um SaaS multi-tenant que processa mais de 200 pedidos por dia (mais de 800 em picos). Atuação próxima a produto e design, transformando ideias de negócio em escopo técnico. Hoje na Avangrid pela NTT DATA.',

  // Footer
  footer_rights: 'Todos os direitos reservados.',
  footer_built: 'Feito com React, Vite & Tailwind CSS',
};

export const translations: Record<Locale, Record<TKey, string>> = { en, pt };
