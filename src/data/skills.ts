import type { SkillCategory } from '../types';

/**
 * Concept-first: each group is a concept, and the tools sit next to it as
 * detail. Plain strings render as-is in both locales (tool names); use a
 * localized entry when the concept itself needs translation.
 */
export const SKILLS: SkillCategory[] = [
  {
    title: { en: 'Frontend architecture', pt: 'Arquitetura frontend' },
    skills: [
      'Angular',
      'React',
      'Next.js',
      'TypeScript',
      'Microfrontends (single-spa)',
      'RxJS',
      'TanStack Query',
      'Zustand',
      'PWAs',
      'Three.js',
      { en: 'Performance optimization', pt: 'Otimização de performance' },
    ],
  },
  {
    title: { en: 'UI and accessibility', pt: 'UI e acessibilidade' },
    skills: [
      'Design systems',
      { en: 'Accessibility', pt: 'Acessibilidade' },
      'Styled Components',
      'Tailwind CSS',
      'SCSS',
      'Figma',
    ],
  },
  {
    title: { en: 'Testing and code quality', pt: 'Testes e qualidade de código' },
    skills: [
      { en: 'Unit tests (Jest, Karma, Vitest)', pt: 'Testes unitários (Jest, Karma, Vitest)' },
      { en: 'E2E tests (Playwright)', pt: 'Testes E2E (Playwright, projetos próprios)' },
      { en: 'Static analysis (Sonar, ESLint, Prettier)', pt: 'Análise estática (Sonar, ESLint, Prettier)' },
    ],
  },
  {
    title: { en: 'CI/CD and delivery', pt: 'CI/CD e entrega' },
    skills: [
      'CI/CD (GitHub Actions)',
      'Git',
      { en: 'Docker (local environments)', pt: 'Docker (ambientes locais)' },
      'Vercel',
    ],
  },
  {
    title: { en: 'Observability', pt: 'Observabilidade' },
    skills: [
      'Sentry',
      { en: 'Structured logging', pt: 'Logs estruturados' },
      { en: 'Retries, error filtering and deduplication', pt: 'Retries, filtro e deduplicação de erros' },
    ],
  },
  {
    title: { en: 'APIs and integrations', pt: 'APIs e integrações' },
    skills: [
      'Node.js',
      { en: 'REST APIs', pt: 'APIs REST' },
      'OAuth 2.0',
      'GraphQL (Shopify)',
      'Shopify (Liquid)',
      { en: 'Webhooks and queues', pt: 'Webhooks e filas' },
      'C#',
    ],
  },
  {
    title: { en: 'Data', pt: 'Dados' },
    skills: ['PostgreSQL (Prisma, RLS, migrations)', 'SQL Server', 'NoSQL (Firestore)'],
  },
  {
    title: { en: 'Cloud', pt: 'Nuvem' },
    skills: [
      { en: 'AWS (S3, hosting)', pt: 'AWS (S3, hospedagem)' },
      'Cloudflare (R2, DNS)',
      'Firebase',
      'Supabase',
    ],
  },
  {
    title: { en: 'AI', pt: 'IA' },
    skills: [
      { en: 'Generative AI / LLM-powered features (Gemini API)', pt: 'IA generativa / features com LLM (API Gemini)' },
      'MCP servers',
      { en: 'Daily use of coding agents, with per-project rules', pt: 'Uso diário de agentes de código, com regras por projeto' },
    ],
  },
  {
    title: { en: 'Collaboration', pt: 'Colaboração' },
    skills: [
      { en: 'Mentoring', pt: 'Mentoria' },
      { en: 'Technical documentation', pt: 'Documentação técnica' },
      { en: 'Product and design partnership', pt: 'Parceria com produto e design' },
      { en: 'Multicultural teams', pt: 'Times multiculturais' },
      'Jira',
    ],
  },
  {
    title: { en: 'Languages', pt: 'Idiomas' },
    skills: [
      { en: 'Portuguese (native)', pt: 'Português (nativo)' },
      { en: 'English (C1)', pt: 'Inglês (C1)' },
    ],
  },
];
