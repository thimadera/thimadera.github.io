import type { ExperienceEntry } from '../types';

/**
 * Hybrid timeline: employer entries with nested allocations, plus previous
 * experiences and education. Dates/text follow the LinkedIn profile so
 * recruiters see consistent information across sources.
 */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: { en: 'NTT DATA Europe & Latam', pt: 'NTT DATA Europe & Latam' },
    role: { en: 'Frontend Engineer', pt: 'Frontend Engineer' },
    start: { month: 6, year: 2021 },
    location: { en: 'Brazil (remote, global teams)', pt: 'Brasil (remoto, times globais)' },
    current: true,
    highlights: [],
  },
  {
    company: { en: 'Avangrid (USA)', pt: 'Avangrid (EUA)' },
    role: { en: 'Tech Lead | Frontend Engineer', pt: 'Líder Técnico | Frontend Engineer' },
    start: { month: 8, year: 2023 },
    location: { en: 'USA (remote)', pt: 'EUA (remoto)' },
    nested: true,
    current: true,
    badge: { en: 'Client engagement', pt: 'Alocação' },
    highlights: [
      {
        en: 'Modernized legacy applications and took part in the Angular 12 → 16 migration, using TypeScript, RxJS and SCSS.',
        pt: 'Modernizei aplicações legadas e participei da migração de Angular 12 para Angular 16, utilizando TypeScript, RxJS e SCSS.',
      },
      {
        en: 'Built features for the customer portal, including power outage processes, move-in/move-out and energy usage visualization.',
        pt: 'Desenvolvi funcionalidades para o portal do cliente, incluindo processos de interrupção de energia, move-in/move-out e visualização de consumo.',
      },
      {
        en: 'Contributed to organizing the applications into a microfrontends architecture with single-spa.',
        pt: 'Contribuí para a organização de aplicações em uma arquitetura de microfrontends com single-spa.',
      },
      {
        en: 'Raised test coverage from 0 to 80% (Jest/Karma), with continuous integration in Jenkins and static analysis in SonarQube.',
        pt: 'Aumentei a cobertura de testes de 0 para 80% (Jest/Karma), com integração contínua no Jenkins e análise estática no SonarQube.',
      },
      {
        en: 'Took part in technical decisions and architecture documentation, while mentoring two junior developers in a multicultural team (USA, India, Brazil).',
        pt: 'Atuei em decisões técnicas e documentação de arquitetura, além de orientar dois desenvolvedores juniores em um time multicultural (EUA, Índia, Brasil).',
      },
    ],
  },
  {
    company: { en: 'Cubo Itaú', pt: 'Cubo Itaú' },
    role: { en: 'Frontend Engineer', pt: 'Frontend Engineer' },
    start: { month: 7, year: 2021 },
    end: { month: 7, year: 2023 },
    location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    nested: true,
    badge: { en: 'Client engagement', pt: 'Alocação' },
    highlights: [
      {
        en: 'Took part in migrating the customer portal from Angular 8 to React with Next.js and Styled Components.',
        pt: 'Participei da migração do portal do cliente de Angular 8 para React com Next.js e Styled Components.',
      },
      {
        en: 'Set up the React project, defined component and styling patterns for the team, and implemented pages based on the new design system, using the specifications available in Figma.',
        pt: 'Estruturei o projeto React, defini padrões de componentização e estilização para o time e implementei páginas com base no novo design system, utilizando as especificações disponibilizadas no Figma.',
      },
      {
        en: 'Kept Angular and React running side by side until the migration was complete.',
        pt: 'Durante a transição, mantivemos Angular e React em funcionamento até a conclusão da migração.',
      },
      {
        en: 'Built complex forms and data-driven interfaces, prioritizing componentization and maintainability.',
        pt: 'Desenvolvi formulários complexos e interfaces com dados dinâmicos, priorizando componentização e manutenção do código.',
      },
      {
        en: 'Mentored a junior developer in a career transition, supporting her Angular learning and her work in the React migration.',
        pt: 'Orientei uma desenvolvedora júnior em sua transição de carreira, apoiando seu aprendizado de Angular e sua participação na migração para React.',
      },
    ],
  },
  {
    company: { en: 'Brasa - Presentes & Personalizados', pt: 'Brasa - Presentes & Personalizados' },
    role: { en: 'Co-founder & Product Engineer', pt: 'Sócio-fundador | Engenheiro de Produto' },
    start: { month: 5, year: 2024 },
    location: { en: 'Sorocaba, SP, Brazil', pt: 'Sorocaba, SP, Brasil' },
    current: true,
    highlights: [
      {
        en: 'Product development: built Brasa\'s digital operation from scratch — Shopify e-commerce, plus Next.js/Firebase on the production system and React 19/Vite on the HR portal.',
        pt: 'Desenvolvimento de produtos: construí a operação digital da Brasa do zero — e-commerce em Shopify; Next.js e Firebase no sistema de produção; React 19 e Vite no portal de RH.',
      },
      {
        en: 'Integrations: built integrations with Olist, Shopify, Shopee and TikTok Shop via APIs and webhooks.',
        pt: 'Integrações: desenvolvi integrações com Olist, Shopify, Shopee e TikTok Shop por meio de APIs e webhooks.',
      },
      {
        en: 'Technical responsibilities: architecture, integrations and evolution of the systems — Node.js APIs on Vercel, Firebase Functions, Supabase/Postgres with Prisma and Cloudflare.',
        pt: 'Responsabilidades técnicas: arquitetura, integrações e evolução dos sistemas — APIs em Node.js na Vercel, Firebase Functions, Supabase/Postgres com Prisma e Cloudflare.',
      },
      {
        en: 'Product and business: beyond the technical responsibilities, I also handle the company\'s admin and accounting.',
        pt: 'Produto e negócio: além das responsabilidades técnicas, cuido do administrativo e da contabilidade da empresa.',
      },
    ],
  },
  {
    company: { en: 'Promotora Presença', pt: 'Promotora Presença' },
    role: { en: 'Fullstack Developer', pt: 'Desenvolvedor Fullstack' },
    start: { month: 9, year: 2019 },
    end: { month: 7, year: 2021 },
    location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    highlights: [
      {
        en: 'Call center service app: built in Angular + Ionic (PWA and Android WebView) the app that shows customer data and available products during the call — with negotiation and sale closing — enabling calls directly from the phone and modernizing the operation.',
        pt: 'App de atendimento do call center: desenvolvi em Angular + Ionic (PWA e WebView Android) o app que, durante a ligação, mostra os dados do cliente e os produtos disponíveis — com negociação e fechamento de venda — permitindo ligações diretamente pelo celular e modernizando a operação.',
      },
      {
        en: 'Real impact: 40+ daily users — pre-selection process, courses, charts and real-time commission all moved into the app.',
        pt: 'Impacto real: 40+ usuários diários — o pré-processo seletivo, cursos, gráficos e comissão em tempo real passaram a ser feitos direto pelo app.',
      },
      {
        en: 'Backend and automations: built APIs in C#, worked with SQL Server and developed Node.js systems that generated Excel files with commission rules for finance to process payments.',
        pt: 'Backend e automações: criei APIs em C#, trabalhei com SQL Server e desenvolvi sistemas em Node.js que geravam Excel com as regras de comissão para o financeiro processar os pagamentos.',
      },
    ],
  },
  {
    company: { en: 'Promotora Presença', pt: 'Promotora Presença' },
    role: {
      en: 'Computer Engineering Intern',
      pt: 'Estagiário de Engenharia de Computação',
    },
    start: { month: 3, year: 2019 },
    end: { month: 9, year: 2019 },
    location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    highlights: [
      {
        en: 'Chatbot: trained the company\'s chatbot (Blip) and built functions to clean and validate name and CPF inside messages.',
        pt: 'Chatbot: treinei o chatbot da empresa (Blip) e criei funções para limpar e validar nome e CPF dentro das mensagens.',
      },
      {
        en: 'APIs and Airtable: built C# APIs integrated with Airtable, giving admin and finance real-time data.',
        pt: 'APIs e Airtable: criei APIs em C# integradas ao Airtable, dando ao administrativo e ao financeiro dados em tempo real.',
      },
      {
        en: 'Exploration and focus: tried several stacks (C#, Node.js, SQL Server, Angular, Ionic, Flutter, Firebase) and defined frontend as my career focus.',
        pt: 'Exploração e foco: passei por várias stacks (C#, Node.js, SQL Server, Angular, Ionic, Flutter, Firebase) — foi onde defini o frontend como foco da carreira.',
      },
    ],
  },
  {
    company: {
      en: 'UNASP/SP - Adventist University Center of São Paulo',
      pt: 'UNASP/SP - Centro Universitário Adventista de São Paulo',
    },
    role: {
      en: 'Administrative Assistant - Graduate Studies, Research & Extension',
      pt: 'Auxiliar de Secretaria de Pós-Graduação, Pesquisa e Extensão',
    },
    start: { month: 2, year: 2017 },
    end: { month: 12, year: 2018 },
    location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    highlights: [
      {
        en: 'Excel automation (VBA): built macros with VBA and complex formulas — including batch email sends of course certificates — cutting a full day of work down to under an hour.',
        pt: 'Automação em Excel (VBA): criei macros com VBA e fórmulas complexas — incluindo envio em lote de e-mails com certificados de cursos — reduzindo um dia inteiro de trabalho para menos de uma hora.',
      },
      {
        en: 'Operations and support: phone, email and in-person service; calls to recover abandoned checkouts; organized academic events (special classes, lectures).',
        pt: 'Operação e atendimento: atendimento por telefone, e-mail e presencial; ligações para recuperar checkouts abandonados; organização de eventos acadêmicos (aulas especiais, palestras).',
      },
      {
        en: 'First steps in programming: during the Computer Engineering degree, built projects in C in programming classes.',
        pt: 'Primeiros passos em programação: durante a graduação em Engenharia de Computação, desenvolvia projetos em C nas aulas de programação.',
      },
    ],
  },
  {
    company: {
      en: 'UNASP/SP - Adventist University Center of São Paulo',
      pt: 'UNASP/SP - Centro Universitário Adventista de São Paulo',
    },
    role: { en: 'Computer Engineering', pt: 'Engenharia de Computação' },
    start: { year: 2017 },
    end: { year: 2021 },
    location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    badge: { en: 'Education', pt: 'Formação' },
    highlights: [
      {
        en: "Bachelor's degree in Computer Engineering.",
        pt: 'Graduação em Engenharia de Computação.',
      },
    ],
  },
];
