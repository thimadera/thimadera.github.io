import type { SkillCategory } from '../types';

/**
 * Backend/integration entries here (Node.js, Firebase, Supabase, Cloudflare)
 * reflect current usage at Brasa, not just historical context.
 */
export const SKILLS: SkillCategory[] = [
  {
    title: { en: 'Frontend', pt: 'Frontend' },
    skills: ['Angular', 'React', 'Next.js', 'Vite', 'TypeScript', 'HTML & CSS'],
  },
  {
    title: { en: 'UI & Design', pt: 'UI e Design' },
    skills: ['Tailwind CSS', 'Design Systems', 'Accessibility (WCAG)'],
  },
  {
    title: { en: 'Backend & Integrations', pt: 'Backend e Integrações' },
    skills: ['Node.js', 'Firebase', 'Supabase', 'Cloudflare'],
  },
  {
    title: { en: 'Engineering', pt: 'Engenharia' },
    skills: ['Unit Testing', 'CI/CD (Jenkins, SonarQube)', 'Git', 'Developer Experience'],
  },
  {
    title: { en: 'Leadership', pt: 'Liderança' },
    skills: ['Technical Leadership', 'Mentoring', 'Critical Thinking'],
  },
  {
    title: { en: 'Languages', pt: 'Idiomas' },
    skills: [
      { en: 'Portuguese (native)', pt: 'Português (nativo)' },
      { en: 'English (C1)', pt: 'Inglês (C1)' },
    ],
  },
];
