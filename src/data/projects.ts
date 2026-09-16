import type { Project } from '../types';

/**
 * All projects, ordered by importance. Internal systems carry no public
 * link - they are shown with screenshots only.
 *
 * Screenshots live in `src/assets/projects/<slug>/`: `01.png` is the card
 * cover and every file in the folder is shown in the project's gallery
 * (see `projectImages.ts`).
 */

export const PROJECTS: Project[] = [
  {
    name: 'Sidra',
    slug: 'sidra',
    description: {
      en: 'Shipping automation for e-commerce ERPs: invoiced orders sync automatically, shipping labels are generated as soon as the invoice is authorized and picking lists come ready to print. Multi-tenant SaaS that replaced a legacy Olist-dependent stack.',
      pt: 'Automação de expedição para ERPs de e-commerce: pedidos faturados sincronizam sozinhos, etiquetas são geradas assim que a nota é autorizada e separações saem prontas para impressão. SaaS multi-tenant que substituiu uma stack legada dependente do Olist.',
    },
    year: 2026,
    tags: ['Vite', 'React', 'TypeScript', 'Supabase', 'Prisma', 'Edge Functions'],
    links: [{ label: { en: 'Live app', pt: 'App ao vivo' }, url: 'https://sidra-three.vercel.app/' }],
  },
  {
    name: 'Oessi',
    slug: 'oessi',
    description: {
      en: 'Complete management platform for beauty salons: scheduling, clients, inventory, services and finances. Shows the real profitability of each service - deducting payment fees, inputs and costs - with offline-first sync and WhatsApp reminders.',
      pt: 'Plataforma de gestão completa para salões de beleza: agenda, clientes, estoque, serviços e finanças. Mostra a lucratividade real de cada atendimento - descontando taxas de pagamento, insumos e custos - com sincronização offline-first e lembretes via WhatsApp.',
    },
    year: 2026,
    tags: ['React', 'TypeScript', 'Firebase', 'Offline-first'],
    links: [{ label: { en: 'Live app', pt: 'App ao vivo' }, url: 'https://oessi.com.br/' }],
  },
  {
    name: 'levebrasa.com',
    slug: 'brasa',
    description: {
      en: 'Live e-commerce of gifts and personalized products, running the day-to-day of the business on a fully customized Shopify storefront - with a 3D product viewer and real-time preview of the personalization.',
      pt: 'E-commerce de presentes e personalizados, rodando o dia a dia do negócio em uma loja Shopify totalmente customizada - com visualizador 3D de produtos e preview em tempo real da personalização.',
    },
    year: 2024,
    tags: ['Shopify', 'Liquid', '3D', 'E-commerce'],
    links: [{ label: { en: 'Live store', pt: 'Loja ao vivo' }, url: 'https://levebrasa.com' }],
  },
  {
    name: 'brasa-admin',
    slug: 'brasa-admin',
    description: {
      en: 'Internal operations system that runs Brasa\'s production - order separation, art queue, printing, labels, products and raw-material inventory. The team\'s daily tool for over a year.',
      pt: 'Sistema operacional interno que roda a produção da Brasa - separação de pedidos, fila de artes, impressão, etiquetas, produtos e estoque de matéria-prima. Ferramenta diária do time há mais de um ano.',
    },
    year: 2025,
    tags: ['Next.js', 'Firestore', 'Firebase Functions'],
    links: [],
    internal: true,
  },
  {
    name: 'brasa-portal',
    slug: 'brasa-portal',
    description: {
      en: 'Internal HR portal for Brasa\'s team: electronic time tracking, vacation management, payments and a team dashboard. PWA with push notifications.',
      pt: 'Portal de RH interno para o time da Brasa: ponto eletrônico, férias, pagamentos e dashboard da equipe. PWA com notificações push.',
    },
    year: 2026,
    tags: ['React 19', 'Vite', 'Firebase', 'PWA'],
    links: [],
    internal: true,
  },
  {
    name: 'cafof.in',
    slug: 'cafof-in',
    description: {
      en: 'Everything for your home in one place: chores, plants, grocery list, recipes and house rules - realtime sync, invites and daily reminders. An app I use every day.',
      pt: 'Tudo para a casa em um só lugar: tarefas, plantas, lista de compras, receitas e regras - sincronização em tempo real, convites e lembretes diários. Um app que uso no dia a dia.',
    },
    year: 2026,
    tags: ['Vite', 'React', 'TypeScript', 'Supabase', 'PWA'],
    links: [{ label: { en: 'Live app', pt: 'App ao vivo' }, url: 'https://cafof.in/' }],
  },
  {
    name: 'Vitor Madeira Hair',
    slug: 'vitor-madeira-hair',
    description: {
      en: 'Professional website for Vitor Madeira, a hairstylist in Sorocaba/SP: about, services (hair color, curls, straightening, hairstyles), portfolio gallery and online booking.',
      pt: 'Site profissional para Vitor Madeira, cabeleireiro em Sorocaba/SP: sobre, serviços (coloração, cachos, alisamentos, penteados), galeria de trabalhos e agendamento online.',
    },
    year: 2026,
    tags: ['Vite', 'React', 'Tailwind', 'Motion'],
    links: [{ label: { en: 'Live site', pt: 'Site ao vivo' }, url: 'https://vitor-madeira-hair.vercel.app/' }],
  },
  {
    name: 'Jogo do Impostor',
    slug: 'jogo-do-impostor',
    description: {
      en: 'Pass-and-play social deduction game for 3-15 players: everyone knows the secret word except the impostor - find out who is faking it, or blend in so nobody discovers you.',
      pt: 'Jogo de festa pass-and-play de dedução social para 3-15 jogadores: todos sabem a palavra secreta, menos o impostor - descubra quem está fingindo, ou se disfarce para que ninguém descubra que é você.',
    },
    year: 2026,
    tags: ['React', 'TypeScript', 'PWA', 'Zustand'],
    links: [{ label: { en: 'Live app', pt: 'App ao vivo' }, url: 'https://jogo-do-impostor.vercel.app/' }],
  },
  {
    name: 'Producer Dashboard',
    slug: 'producer-dashboard',
    description: {
      en: 'Dashboard for rural producers: producer management, farm statistics (count and total area) and charts by state, crop and land use. Built to study charts and json-server for a job interview, before the AI era.',
      pt: 'Dashboard para produtores rurais: gestão de produtores, estatísticas de fazendas (quantidade e área total) e gráficos por estado, cultura e uso de solo. Feito para estudar gráficos e json-server para uma entrevista de emprego, antes da era da IA.',
    },
    year: 2023,
    tags: ['Next.js', 'Firebase', 'Charts'],
    links: [{ label: { en: 'Live app', pt: 'App ao vivo' }, url: 'https://producer-dashboard.web.app/' }],
  },
  {
    name: 'Sun Game',
    slug: 'sun-game',
    description: {
      en: 'Educational sun game: catch sun-related items (sun, sunscreen, umbrella) and avoid the flame while the game speeds up with every catch. Built for a college health presentation, long before the AI era.',
      pt: 'Jogo educativo sobre o sol: pegue itens relacionados ao sol (sol, protetor solar, guarda-sol) e desvie da chama - o jogo acelera a cada acerto. Feito para uma apresentação de saúde na faculdade, bem antes da era da IA.',
    },
    year: 2019,
    tags: ['JavaScript', 'HTML & CSS', 'Game'],
    links: [{ label: { en: 'Live app', pt: 'App ao vivo' }, url: 'https://sun-game.web.app/' }],
  },
];
