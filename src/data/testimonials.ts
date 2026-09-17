import type { Testimonial } from '../types';

/**
 * Real recommendations copied from LinkedIn. The original text is in
 * Portuguese; the English version is a translation (labeled as such in the UI).
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Alan Oliveira',
    role: { en: 'Back-end Developer', pt: 'Back-end Developer' },
    date: { month: 5, year: 2023 },
    text: {
      pt: 'Thiago sempre se mostrou como uma pessoa de referência dentro da squad que estávamos juntos, liderando de forma direta e indireta graças a seus conhecimentos tanto em soft quanto em hard skills! Sempre atuando com muita competência e proatividade nos acolheu e guiou por várias entregas de valor ao longo do tempo juntos. Mesmo com atuação em frontend, foi capaz de ajudar de diversas formas em soluções para problemas de back e infra.',
      en: 'Thiago always stood out as a reference within the squad we were in, leading directly and indirectly thanks to his knowledge in both soft and hard skills! Always acting with great competence and proactivity, he welcomed and guided us through several value deliveries during our time together. Even working in frontend, he was able to help in many ways with solutions to back and infra problems.',
    },
  },
  {
    name: 'Caroline Calixto',
    role: { en: 'Fullstack Developer', pt: 'Fullstack Developer' },
    date: { month: 6, year: 2022 },
    text: {
      pt: 'Thiago demonstra domínio em Angular como nenhum outro profissional e sempre tem sugestões muito assertivas no desenvolvimento do projeto, sejam em questões de usabilidade, como no Back-End. Ele é organizado, tem grandes skills de liderança e paixão pelo o que faz. Tudo que aprendi de Angular foi graças a sua grande capacidade técnica e dedicação em ajudar os demais. Sem dúvidas um excelente profissional e a melhor escolha para time.',
      en: 'Thiago shows mastery in Angular like no other professional and always has very assertive suggestions in project development, whether on usability or back-end matters. He is organized, has great leadership skills and passion for what he does. Everything I learned about Angular was thanks to his great technical capacity and dedication to helping others. Without a doubt an excellent professional and the best choice for any team.',
    },
  },
  {
    name: 'Igor Rykovski',
    role: { en: 'Solutions Architect', pt: 'Arquiteto de Soluções' },
    date: { month: 11, year: 2021 },
    text: {
      pt: 'Para terem ideia de quem é o Thiago, o conheci como estagiário na empresa. E meu primeiro contato foi ele explicando como funcionavam os eventos do AngularJS para um dev pleno. Tanto é que por alguns dias, achei que ele era o dev e o outro estagiário. Ele foi de longe o melhor estagiário que trabalhei junto. Quando saí da empresa, ele já havia sido efetivado e era responsável por todo o frontend, além de atuar como backend em NodeJS e .NET Core.',
      en: 'To give you an idea of who Thiago is, I met him as an intern at the company. My first contact was him explaining how AngularJS events worked to a mid-level dev. So much so that for a few days I thought he was the dev and the other one was the intern. He was by far the best intern I ever worked with. When I left the company, he had already been hired and was responsible for the entire frontend, also working on backend with NodeJS and .NET Core.',
    },
  },
];
