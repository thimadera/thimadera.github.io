import type { SkillCategory } from '../types';

/**
 * Frontend-focused skill grid. Deliberately excludes backend-focused
 * technologies (Node.js, Java, C#, SQL) - they are only mentioned as
 * historical context in the experience timeline.
 */
export const SKILLS: SkillCategory[] = [
  {
    title: { en: 'Core', pt: 'Core' },
    skills: ['Angular', 'React', 'Next.js', 'TypeScript', 'HTML & CSS', 'Tailwind CSS'],
  },
  {
    title: { en: 'Ecosystem', pt: 'Ecossistema' },
    skills: ['Vite', 'Firebase', 'Supabase', 'AWS', 'Cloudflare', 'Git'],
  },
  {
    title: { en: 'Practices', pt: 'Práticas' },
    skills: [
      'Accessibility (WCAG)',
      'Performance (Core Web Vitals)',
      'Unit Testing',
      'CI/CD (Jenkins, SonarQube)',
      'Design Systems',
      'Developer Experience',
    ],
  },
  {
    title: { en: 'Soft Skills', pt: 'Soft Skills' },
    skills: [
      'Technical Leadership',
      'Mentoring',
      'Global Communication (EN/PT)',
      'Critical Thinking',
    ],
  },
];
