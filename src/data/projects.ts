import type { Project } from '../types';

/**
 * Ordered by relevance for a senior frontend role: Sidra first (strongest
 * scale/architecture story), then the rest of the Brasa systems grouped
 * together, then other live products, then personal/study projects last.
 *
 * Screenshots live in `src/assets/projects/<slug>/`: the first file when
 * sorted alphabetically is the card cover, and every file in the folder is
 * shown in the project's gallery (see `projectImages.ts`). Keep filenames
 * zero-padded (`01.png`, `02.png`, ...) if a folder ever needs 10+ images,
 * since plain `10.png` sorts before `2.png`.
 */

export const PROJECTS: Project[] = [
  {
    name: 'Sidra',
    slug: 'sidra',
    description: {
      en: 'Shipping automation for e-commerce ERPs: invoiced orders sync automatically, shipping labels are generated as soon as the invoice is authorized and picking lists come ready to print. I started rewriting the ERP from scratch, then switched to a modular migration - lower risk than a full rewrite - and Sidra is that evolution today. Multi-tenant SaaS processing 200+ orders a day on average, automating steps that used to require manual work in Olist.',
      pt: 'Automação de expedição para ERPs de e-commerce: pedidos faturados sincronizam sozinhos, etiquetas são geradas assim que a nota é autorizada e separações saem prontas para impressão. Comecei reescrevendo o ERP do zero, mas troquei para uma migração modular - menos risco que uma reescrita completa - e o Sidra é essa evolução hoje. SaaS multi-tenant que processa em média 200+ pedidos por dia, automatizando etapas que antes dependiam de operações manuais no Olist.',
    },
    year: 2026,
    tags: ['Vite', 'React', 'TypeScript', 'Supabase', 'Prisma', 'Edge Functions'],
    links: [{ label: { en: 'Live app', pt: 'App ao vivo' }, url: 'https://sidra-three.vercel.app/' }],
  },
  {
    name: 'Leve Brasa',
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
    name: 'Brasa Admin',
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
    name: 'Brasa Portal',
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
    name: 'Brasa Canva Mockup',
    slug: 'brasa-canva-mockup',
    description: {
      en: 'Chrome extension (Manifest V3) that captures the Canva editor in real time and renders the artwork on a live 3D mug preview (Three.js + Google Model Viewer). Used internally by Brasa\'s production team - shares the same 3D engine and personalization library as the storefront.',
      pt: 'Extensão de Chrome (Manifest V3) que captura em tempo real o editor do Canva e renderiza a arte num preview 3D de caneca (Three.js + Google Model Viewer). Usada internamente pelo time de produção da Brasa - compartilha a mesma engine 3D e biblioteca de personalização da loja.',
    },
    year: 2025,
    tags: ['Chrome Extension', 'Three.js', 'TypeScript'],
    links: [],
    internal: true,
  },
  {
    name: 'Oessi',
    slug: 'oessi',
    description: {
      en: 'Management platform for beauty salons and multi-unit businesses - scheduling, clients, inventory and finances. Calculates the real profitability of each service, deducting payment fees, inputs and costs, with offline-first sync and WhatsApp reminders.',
      pt: 'Plataforma de gestão para salões de beleza e negócios com múltiplos profissionais e unidades - agenda, clientes, estoque e financeiro. Calcula a lucratividade real de cada atendimento, descontando taxas de pagamento, insumos e custos, com sincronização offline-first e lembretes via WhatsApp.',
    },
    year: 2026,
    tags: ['React', 'TypeScript', 'Firebase', 'Offline-first'],
    links: [{ label: { en: 'Live app', pt: 'App ao vivo' }, url: 'https://oessi.com.br/' }],
  },
  {
    name: 'Cafof.in',
    slug: 'cafof-in',
    description: {
      en: 'Everything for your home in one place: chores, plants, grocery list, recipes, fridge photos and house rules - realtime sync, invites and daily reminders. An app I use every day.',
      pt: 'Tudo para a casa em um só lugar: tarefas, plantas, lista de compras, receitas, fotos da geladeira e regras - sincronização em tempo real, convites e lembretes diários. Um app que uso no dia a dia.',
    },
    year: 2026,
    tags: ['Vite', 'React', 'TypeScript', 'Supabase', 'PWA'],
    links: [{ label: { en: 'Personal project', pt: 'Projeto pessoal' }, url: 'https://cafof.in/' }],
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
      en: 'Pass-and-play social deduction game for 3-15 players, with 1 or 2 impostors per round: everyone knows the secret word except the impostors - find out who is faking it, or blend in so nobody discovers you. Roles are revealed discreetly with a swipe gesture.',
      pt: 'Jogo de festa pass-and-play de dedução social para 3-15 jogadores, com 1 ou 2 impostores por partida: todos sabem a palavra secreta, menos os impostores - descubra quem está fingindo, ou se disfarce para que ninguém descubra que é você. Papéis são revelados discretamente por arraste.',
    },
    year: 2026,
    tags: ['React', 'TypeScript', 'PWA', 'Zustand'],
    links: [{ label: { en: 'Personal project', pt: 'Projeto pessoal' }, url: 'https://jogo-do-impostor.vercel.app/' }],
  },
  {
    name: 'StardewMods',
    slug: 'stardew-mods',
    description: {
      en: 'Two Stardew Valley mods built in C# with SMAPI: Real Clock, making time progression more dynamic, and Stack Everything Redux, expanding inventory item stacking. 75,000+ downloads on Nexus Mods.',
      pt: 'Dois mods para Stardew Valley em C# com SMAPI: Real Clock, que torna a passagem do tempo mais dinâmica, e Stack Everything Redux, que expande o empilhamento de itens no inventário. Mais de 75 mil downloads no Nexus Mods.',
    },
    year: 2021,
    tags: ['C#', 'SMAPI', 'Game Modding'],
    links: [{ label: { en: 'Nexus Mods', pt: 'Nexus Mods' }, url: 'https://www.nexusmods.com/profile/thimadera/mods' }],
  },
  {
    name: 'Repegê',
    slug: 'repege',
    description: {
      en: 'Tabletop RPG platform: create "tables" (sessions) with chat, character sheets, maps and a game master\'s mural. Has a full backend simulated locally - controllers, game-master roles, message sanitization - not yet wired to real multi-user sync. A personal project I keep coming back to since college - alpha version live, with test profiles.',
      pt: 'Plataforma de RPG de mesa: crie "mesas" (sessões) com chat, fichas de personagem, mapa e mural do narrador. Tem um backend completo simulado localmente - controllers, papéis de narrador, sanitização de mensagens - ainda sem sincronização real entre usuários. Projeto pessoal que retomo desde a faculdade - versão alpha no ar, com perfis de teste.',
    },
    year: 2026,
    tags: ['React', 'TypeScript', 'Vite'],
    links: [{ label: { en: 'Personal project (alpha)', pt: 'Projeto pessoal (alpha)' }, url: 'https://repege.vercel.app/' }],
  },
  {
    name: 'Cauli',
    slug: 'cauli',
    description: {
      en: 'Plant care app built in Flutter: plant registration with photos, smart watering schedules, environments, gamification (achievements, streaks) and household sharing between residents. Offline sync with Hive and AI-assisted plant identification. The base I evolved into Cafof.in, which added tasks, recipes, shopping lists and a catalog.',
      pt: 'App de cuidado de plantas em Flutter: cadastro de plantas com fotos, agendamento inteligente de rega, ambientes, gamificação (conquistas, streaks) e compartilhamento entre moradores da casa. Sincronização offline com Hive e identificação de plantas assistida por IA. Base que evoluí para o Cafof.in, que somou tarefas, receitas, lista de compras e catálogo.',
    },
    year: 2026,
    tags: ['Flutter', 'Dart', 'Firebase'],
    links: [],
  },
  {
    name: 'Producer Dashboard',
    slug: 'producer-dashboard',
    description: {
      en: 'Dashboard for rural producers: producer management, farm statistics (count and total area) and charts by state, crop and land use. Built to study charts and json-server for a job interview.',
      pt: 'Dashboard para produtores rurais: gestão de produtores, estatísticas de fazendas (quantidade e área total) e gráficos por estado, cultura e uso de solo. Feito para estudar gráficos e json-server para uma entrevista de emprego.',
    },
    year: 2023,
    tags: ['Next.js', 'Firebase', 'Charts'],
    links: [{ label: { en: 'Study project', pt: 'Projeto de estudo' }, url: 'https://producer-dashboard.web.app/' }],
  },
  {
    name: 'Sun Game',
    slug: 'sun-game',
    description: {
      en: 'Educational sun game: catch sun-related items (sun, sunscreen, umbrella) and avoid the flame while the game speeds up with every catch. Built for a college health presentation.',
      pt: 'Jogo educativo sobre o sol: pegue itens relacionados ao sol (sol, protetor solar, guarda-sol) e desvie da chama - o jogo acelera a cada acerto. Feito para uma apresentação de saúde na faculdade.',
    },
    year: 2019,
    tags: ['JavaScript', 'HTML & CSS', 'Game'],
    links: [{ label: { en: 'Study project', pt: 'Projeto de estudo' }, url: 'https://sun-game.web.app/' }],
  },
];
