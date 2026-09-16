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
    highlights: [
      {
        en: 'Modernization and performance: refactored legacy systems and took part in the Angular 12 → 16 migration — faster, smoother and more scalable apps, with TypeScript, RxJS and SCSS.',
        pt: 'Modernização e performance: refatorei sistemas legados e participei da migração Angular 12 → 16 — aplicações mais rápidas, fluidas e escaláveis, com TypeScript, RxJS e SCSS.',
      },
      {
        en: 'Critical projects in the customer portal: built solutions from scratch (already on Angular 21) and reorganized poorly structured apps mid-development — from power outage and move in/move out processes to energy usage charts — with microfrontends (single-spa) and prototyping in Figma.',
        pt: 'Projetos críticos no portal do cliente: criei soluções do zero (já em Angular 21) e reorganizei aplicações mal estruturadas em andamento — de processos de outage de energia e move in/move out a gráficos de consumo — em microfrontends com single-spa, com prototipagem no Figma.',
      },
      {
        en: 'Quality: raised test coverage from 0 to 80% (Jest/Karma), with CI in Jenkins and static analysis in SonarQube.',
        pt: 'Qualidade: elevei a cobertura de testes de 0 para 80% (Jest/Karma), com integração contínua no Jenkins e análise estática no SonarQube.',
      },
      {
        en: 'Fullstack mindset: built an API with Java Spring Boot in a dedicated engagement, delivering the frontend end to end.',
        pt: 'Visão fullstack: criei uma API com Java Spring Boot em atuação pontual, para entregar o frontend de ponta a ponta.',
      },
      {
        en: 'Technical leadership: mentored two junior developers until full autonomy and took part in documenting the Angular 12 → 16 migration and in technology/refactoring decisions — in a global multicultural team (USA, India, Brazil).',
        pt: 'Liderança técnica: mentorei dois devs juniors até a autonomia completa e fiz parte da documentação da migração Angular 12 → 16 e das decisões de tecnologia e refatoração — em time global multicultural (EUA, Índia, Brasil).',
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
    highlights: [
      {
        en: 'Angular → React migration: took part in the migration of Cubo Itaú\'s customer portal — from Angular 8 to React with Next.js and Styled Components — received the design system in Figma, set up the React project and rebuilt the Angular pages following the new design system, with Angular and React coexisting until completion.',
        pt: 'Migração Angular → React: participei da migração do portal do cliente do Cubo Itaú — de Angular 8 para React com Next.js e Styled Components — recebi o design system no Figma, criei o projeto React e refiz as páginas que eram em Angular seguindo o novo design system, com Angular e React convivendo até a conclusão.',
      },
      {
        en: 'Screen development: built screens with complex forms, dynamic data and componentization, refactoring to keep the code scalable.',
        pt: 'Desenvolvimento de telas: construí telas com formulários complexos, dados dinâmicos e componentização, refatorando para manter o código escalável.',
      },
      {
        en: 'Mentoring: mentored a junior developer in a career transition — she learned Angular and took part in the React migration.',
        pt: 'Mentoria: mentorei uma dev junior em transição de carreira — ela aprendeu Angular e participou da migração para React.',
      },
      {
        en: 'Product and agility: first hands-on experience with agile methodologies — worked in sprints, side by side with PMs and design, delivering business-aligned solutions.',
        pt: 'Produto e agilidade: primeira experiência prática com metodologias ágeis — atuei em sprints, lado a lado com PMs e design, entregando soluções alinhadas ao negócio.',
      },
    ],
  },
  {
    company: { en: 'Brasa - Presentes & Personalizados', pt: 'Brasa - Presentes & Personalizados' },
    role: { en: 'Owner | Product Engineer', pt: 'Sócio proprietário | Engenheiro de Produto' },
    start: { month: 5, year: 2024 },
    location: { en: 'Sorocaba, SP, Brazil', pt: 'Sorocaba, SP, Brasil' },
    current: true,
    highlights: [
      {
        en: 'Products from scratch: built Brasa\'s digital operation from zero — Shopify e-commerce, production system and HR portal in Next.js/Firebase and React 19/Vite.',
        pt: 'Produtos do zero: construí a operação digital da Brasa do zero — e-commerce em Shopify, sistema de produção e portal de RH em Next.js/Firebase e React 19/Vite.',
      },
      {
        en: 'Integrations: connected ERPs and marketplaces via APIs and webhooks — Olist, Shopify, Shopee and TikTok Shop.',
        pt: 'Integrações: conectei ERPs e marketplaces por APIs e webhooks — Olist, Shopify, Shopee e TikTok Shop.',
      },
      {
        en: 'Fullstack: work end to end — Node.js APIs on Vercel, Firebase Functions, Supabase/Postgres with Prisma and Cloudflare, from database to deploy.',
        pt: 'Fullstack: atuo ponta a ponta — APIs em Node.js na Vercel, Firebase Functions, Supabase/Postgres com Prisma e Cloudflare, do banco ao deploy.',
      },
      {
        en: 'Sidra: created Sidra, a multi-tenant SaaS for shipping automation that processes 200+ orders per day, replacing the Olist-dependent operation.',
        pt: 'Sidra: criei a Sidra, SaaS multi-tenant de automação de expedição que processa 200+ pedidos por dia, substituindo a operação dependente do Olist.',
      },
      {
        en: 'Product and business: beyond code, handle admin and accounting — full ownership from ideation to product evolution.',
        pt: 'Produto e negócio: além do código, cuido do administrativo e da contabilidade — autonomia total da ideação à evolução do produto.',
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
      {
        en: 'Angular hands-on: first contact with Angular — learned on the job, from the basics to the full production service app.',
        pt: 'Angular na prática: foi meu primeiro contato com Angular — aprendi na prática, do básico até o app completo de atendimento em produção.',
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
