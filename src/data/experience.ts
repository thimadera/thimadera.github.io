import type { ExperienceEntry } from '../types';

/**
 * Hybrid timeline: employer entries with nested allocations, plus previous
 * experiences and education. Dates/text follow the LinkedIn profile so
 * recruiters see consistent information across sources.
 *
 * Writing style (keep consistent across entries):
 * - Every bullet has a bold label "Concept (stack)".
 * - The body starts with a past-tense action verb; result comes last.
 * - One idea per bullet, up to three short sentences.
 * - Avoid pronouns unless they carry meaning; no leadership claims.
 * - Numbers: "20+" in labels, "mais de 20" in Portuguese prose.
 * - Role titles are translated in PT ("Engenheiro de Software ...").
 */
export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: { en: 'NTT DATA Europe & Latam', pt: 'NTT DATA Europe & Latam' },
    // No role of its own: the roles live in the nested engagements below.
    role: { en: '', pt: '' },
    start: { month: 6, year: 2021 },
    location: { en: 'Brazil (remote, global teams)', pt: 'Brasil (remoto, times globais)' },
    summary: {
      en: 'Technology consultancy: engineers are allocated to client projects, so the roles below are client engagements.',
      pt: 'Consultoria de tecnologia: as pessoas são alocadas em projetos de clientes, e os cargos abaixo são essas alocações.',
    },
    current: true,
    highlights: [],
  },
  {
    company: { en: 'Avangrid (USA)', pt: 'Avangrid (EUA)' },
    role: { en: 'Senior Software Engineer', pt: 'Engenheiro de Software Sênior' },
    start: { month: 8, year: 2023 },
    location: { en: 'USA (remote)', pt: 'EUA (remoto)' },
    nested: true,
    current: true,
    badge: { en: 'Client engagement', pt: 'Alocação' },
    summary: {
      en: 'Owned frontend delivery on the customer portal of a US energy company, made of 20+ Angular microfrontends - usually the only frontend developer on each project, today in a team of three.',
      pt: 'Responsável pelo frontend do portal do cliente de uma empresa de energia dos EUA, formado por mais de 20 microfrontends em Angular - normalmente o único desenvolvedor frontend em cada projeto, hoje em um time de três.',
    },
    highlights: [
      {
        label: {
          en: 'Move in / move out rebuild (Angular)',
          pt: 'Reconstrução do fluxo de move in / move out (Angular)',
        },
        en: 'Took over a project full of bugs and rebuilt almost all of it, with new components and a restructured codebase, fixing the reported bugs plus the slowness and misaligned components customers kept hitting. Steps that used to stall mid-flow stopped blocking customers: completion went up and support tickets dropped, measured by the product team in the data.',
        pt: 'Assumi um projeto cheio de bugs e refiz quase tudo: componentes novos, código reestruturado, os bugs reportados e a lentidão e os componentes desalinhados que os clientes enfrentavam. Etapas que travavam deixaram de bloquear o cliente: a conclusão subiu e os chamados de suporte caíram, medido pelo time de produto nos dados.',
      },
      {
        label: {
          en: 'Angular 12 → 16 migration and single-spa (20+ microfrontends)',
          pt: 'Angular 12 → 16 e single-spa (20+ microfrontends)',
        },
        en: "Migrated the portal's applications from a deprecated in-house library to single-spa: a shell now mounts each microfrontend by route, independent in framework and version.",
        pt: 'Migrei as aplicações do portal de uma biblioteca interna descontinuada para o single-spa: um shell passou a montar cada microfrontend pela rota, independente em framework e versão.',
      },
      {
        label: {
          en: 'Quality (Sonar, ESLint, Prettier, unit tests)',
          pt: 'Qualidade (Sonar, ESLint, Prettier, testes unitários)',
        },
        en: 'Worked under strict ESLint and Sonar rules, including accessibility, bringing the components I created or refactored to 90%+ unit test coverage.',
        pt: 'Trabalhei com regras rígidas de ESLint e Sonar, incluindo acessibilidade, levando os componentes que criei ou refatorei a mais de 90% de cobertura de testes unitários.',
      },
      {
        label: {
          en: 'Outage reporting and tracking (Angular)',
          pt: 'Relato de falta de energia (Angular)',
        },
        en: 'Started a project on a legacy base and redid it: customers, logged in or not, report a home outage and follow it on a map (confirmed, crew on the way, progress to resolution). Brought the neighborhood outage map, previously a third-party service, in-house.',
        pt: 'Iniciei um projeto sobre uma base legada e o refiz: clientes, logados ou não, avisam que estão sem energia e acompanham em um mapa (confirmada, equipe a caminho, resolução). Internalizei o mapa de faltas do bairro, antes um serviço de terceiros.',
      },
      {
        label: {
          en: 'Energy and gas usage (Angular, NgCharts, SVG)',
          pt: 'Consumo de energia e gás (Angular, NgCharts, SVG)',
        },
        en: 'Built in-house charts (hand-built SVG and NgCharts) for customers to track energy and gas bills and compare with previous ones, replacing a third-party service.',
        pt: 'Criei gráficos próprios (SVG feito à mão e NgCharts) para o cliente acompanhar e comparar contas de energia e gás, no lugar de um serviço de terceiros.',
      },
      {
        label: {
          en: 'Social programs form (Angular)',
          pt: 'Formulário de programas sociais (Angular)',
        },
        en: 'Built from scratch a step-by-step form where customers enter their data and get the list of social programs they qualify for (such as low income), with eligibility rules served by the backend.',
        pt: 'Criei do zero um formulário em etapas em que o cliente informa seus dados e recebe a lista de programas sociais para os quais é elegível (como baixa renda), com as regras de elegibilidade vindas do backend.',
      },
      {
        label: { en: 'Mentoring and documentation', pt: 'Mentoria e documentação' },
        en: 'Mentored two junior developers on the move in / move out project. Documented the migration step by step (extensions, libraries, file templates) for other developers.',
        pt: 'Orientei dois desenvolvedores juniores no move in / move out. Documentei a migração passo a passo (extensões, bibliotecas, modelos de arquivo) para outros desenvolvedores.',
      },
    ],
  },
  {
    company: { en: 'Cubo Itaú', pt: 'Cubo Itaú' },
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    start: { month: 7, year: 2021 },
    end: { month: 7, year: 2023 },
    location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    nested: true,
    badge: { en: 'Client engagement', pt: 'Alocação' },
    summary: {
      en: 'Worked on a B2B platform where large companies and startups, partners of Cubo, discover and contact each other, hosted on AWS.',
      pt: 'Atuação em uma plataforma B2B onde grandes empresas e startups, parceiras do Cubo, se conhecem e se contatam, hospedada na AWS.',
    },
    highlights: [
      {
        label: {
          en: 'Screens and components (Angular, React, Next.js)',
          pt: 'Telas e componentes (Angular, React, Next.js)',
        },
        en: 'Built new screens and components and refactored existing ones on data-heavy interfaces (forms, filters and tables). Built the components of the new design system created by the design team and applied them in the new React project.',
        pt: 'Criei telas e componentes novos e refatorei os existentes em interfaces com muitos dados (formulários, filtros e tabelas). Criei os componentes do novo design system, elaborado pelo time de design, e os implementei no novo projeto em React.',
      },
      {
        label: {
          en: 'Angular 8 → React migration (Next.js, Styled Components)',
          pt: 'Migração de Angular 8 para React (Next.js, Styled Components)',
        },
        en: 'Worked on the migration requested to improve performance and UX and standardize services, following Next.js conventions.',
        pt: 'Atuei na migração pedida para melhorar desempenho e UX e padronizar os serviços, seguindo as convenções do Next.js.',
      },
      {
        label: { en: 'Kanban-style board (Angular)', pt: 'Board estilo kanban (Angular)' },
        en: 'Refactored the largest and most complete screen, a Jira-like board with cards that move between columns and reorder, splitting it into components to improve performance and fix bugs.',
        pt: 'Refatorei a maior e mais completa tela, um board no estilo Jira com cards que se movem entre colunas e se reordenam, dividindo-a em componentes para melhorar o desempenho e corrigir bugs.',
      },
      {
        label: { en: 'Mentoring', pt: 'Mentoria' },
        en: 'Mentored a junior developer moving into programming from another career, teaching and assigning tasks.',
        pt: 'Orientei uma desenvolvedora júnior vinda de outra carreira, ensinando e distribuindo tarefas.',
      },
    ],
  },
  {
    company: { en: 'Brasa - Presentes & Personalizados', pt: 'Brasa - Presentes & Personalizados' },
    role: {
      en: 'Senior Software Engineer (Part-time)',
      pt: 'Engenheiro de Software Sênior (meio período)',
    },
    start: { month: 5, year: 2024 },
    location: { en: 'Sorocaba, SP, Brazil', pt: 'Sorocaba, SP, Brasil' },
    current: true,
    summary: {
      en: 'Own the technology of a personalized products business, from the Shopify storefront to production and fulfillment systems.',
      pt: 'Responsável pela tecnologia de um negócio de produtos personalizados, da loja Shopify aos sistemas internos de produção.',
    },
    highlights: [
      {
        label: {
          en: 'Sidra (React, Node.js, PostgreSQL, Prisma)',
          pt: 'Sidra (React, Node.js, PostgreSQL, Prisma)',
        },
        en: 'Built a multi-tenant SaaS that centralizes e-commerce fulfillment - label printing, picking control, item identification - previously manual on each platform. One click prints everything: hours of work become under 5 minutes. Averages 200+ orders a day, proven peaks of 800+.',
        pt: 'Criei um SaaS multi-tenant que centraliza a expedição de e-commerce - impressão de etiquetas, controle de separação, identificação de itens - antes manual em cada plataforma. Um clique imprime tudo: horas viram menos de 5 minutos. Média de 200+ pedidos por dia, picos comprovados de 800+.',
      },
      {
        label: {
          en: 'Artwork pipeline (Canva, 3D preview, print)',
          pt: 'Fluxo de artes (Canva, preview 3D, impressão)',
        },
        en: 'Automated the artwork flow: Canva art is saved in the format each step needs (JPG for the 3D preview, PNG for printing, SVG for swappable images), managed in the admin, shown during picking and exported as a print-ready PDF in pick-list order.',
        pt: 'Automatizei o fluxo de artes: a arte do Canva sai no formato de cada etapa (JPG para o preview 3D, PNG para impressão, SVG para imagens trocáveis), gerenciada no admin, exibida na separação e virando PDF de impressão na ordem da lista.',
      },
      {
        label: {
          en: 'Modular migration instead of a rewrite',
          pt: 'Migração modular no lugar de uma reescrita',
        },
        en: 'Started a full ERP rewrite, then switched to a modular migration: a rewrite ships nothing until the MVP and piles problems onto the cutover, while modules (picking, products, inventory, logistics) migrate gradually and get tested in production. The current Brasa Admin keeps running.',
        pt: 'Comecei a reescrever o ERP e mudei para uma migração modular: a reescrita não entrega nada até o MVP e empurra os problemas para a virada, enquanto módulos (separação, produtos, estoque, logística) migram aos poucos e são testados em produção. O Brasa Admin segue rodando.',
      },
      {
        label: {
          en: 'Order processing (queue, PostgreSQL RLS)',
          pt: 'Processamento de pedidos (fila, RLS no PostgreSQL)',
        },
        en: "Built order processing on a queue: per-minute cron with retries and locking against duplicates, tuned on production data within Olist's rate limit. Isolated each company's data with row-level security; documented incidents like database timeouts under webhook bursts.",
        pt: 'Construí o processamento de pedidos sobre uma fila: cron por minuto com retentativas e trava contra duplicidade, ajustado com dados reais no limite da Olist. Isolei os dados por empresa com row-level security; documentei incidentes como timeouts em rajadas de webhook.',
      },
      {
        label: {
          en: 'Observability (custom Sentry client)',
          pt: 'Observabilidade (cliente Sentry próprio)',
        },
        en: 'Built a minimal Sentry client for Vercel functions, speaking the envelope API instead of the ~9 MB SDK. Filters expected errors, deduplicates, redacts PII and attaches per-request context - each failure lands as one contextualized issue.',
        pt: 'Criei um cliente Sentry mínimo para as functions da Vercel, falando a API de envelope em vez do SDK de ~9 MB. Filtra erros esperados, deduplica reports, mascara PII e anexa contexto por requisição - cada falha chega como uma issue contextualizada.',
      },
      {
        label: {
          en: 'Integrations (Olist, Shopify, Shopee, TikTok Shop)',
          pt: 'Integrações (Olist, Shopify, Shopee, TikTok Shop)',
        },
        en: 'Connected each platform to internal systems via OAuth apps, APIs and webhooks.',
        pt: 'Conectei cada plataforma aos sistemas internos por apps OAuth, APIs e webhooks.',
      },
      {
        label: {
          en: 'Storefront and 3D (Shopify, Liquid, Three.js)',
          pt: 'Loja e 3D (Shopify, Liquid, Three.js)',
        },
        en: "Built the 3D product viewer with real-time personalization preview - the store's differentiator since day one - and a Chrome extension the team uses to preview art on the mug.",
        pt: 'Criei o visualizador 3D com preview da personalização em tempo real - diferencial da loja desde o começo - e uma extensão do Chrome para o time ver a arte na caneca.',
      },
    ],
  },
  {
    company: { en: 'Promotora Presença', pt: 'Promotora Presença' },
    // No role of its own: the roles live in the nested engagements below.
    role: { en: '', pt: '' },
    start: { month: 3, year: 2019 },
    end: { month: 7, year: 2021 },
    location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    highlights: [],
  },
  {
    company: { en: 'Promotora Presença', pt: 'Promotora Presença' },
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    start: { month: 9, year: 2019 },
    end: { month: 7, year: 2021 },
    nested: true,
    roleAsTitle: true,
    summary: {
      en: 'Worked on the tooling of the sales operation: a mobile sales app for a new consigned-loan product, its recruiting flow and the commission system. The app shipped its MVP in about 8 months and grew to 40+ daily users.',
      pt: 'Atuação nas ferramentas da operação de vendas: um app mobile para vender um novo produto de crédito consignado, seu fluxo de recrutamento e o sistema de comissões. O MVP do app saiu em cerca de 8 meses e chegou a mais de 40 usuários por dia.',
    },
    highlights: [
      {
        label: {
          en: 'Mobile sales app (Angular, Ionic, PWA, Google Play WebView)',
          pt: 'App mobile de vendas (Angular, Ionic, PWA, WebView na Google Play)',
        },
        en: 'Built the app for a new consigned-loan product so sellers anywhere in Brazil could work from home on their own phones, without the full desktop-plus-company-phone setup. As the sole frontend developer, alongside one backend and one telephony developer, delivered the MVP in about 8 months; it later served 40+ daily users.',
        pt: 'Criei o app para um novo produto de crédito consignado, para que vendedores de qualquer lugar do Brasil trabalhassem de casa com o próprio celular, sem depender do computador e do telefone da empresa. Como único desenvolvedor frontend, ao lado de um desenvolvedor backend e um de telefonia, entreguei o MVP em cerca de 8 meses; depois ele atendeu mais de 40 usuários por dia.',
      },
      {
        label: {
          en: 'In-call flow and loan simulation',
          pt: 'Fluxo da ligação e simulação de empréstimo',
        },
        en: "Built the flow used during each call: it pulls the customer's data and the products to offer, runs simulations from suggestions or seller-entered amounts and installments (rules from an API, configured per bank and product) and records the outcome (rejected, wrong number, product sold), routing the sale to the right team for documents.",
        pt: 'Criei o fluxo usado durante cada ligação: ele traz os dados do cliente e os produtos a oferecer, faz simulações a partir de sugestões ou de valor e parcelas informados pelo vendedor (regras vindas de uma API, configuradas por banco e produto) e registra o resultado (rejeitado, número errado, produto vendido), encaminhando a venda ao setor certo para os documentos.',
      },
      {
        label: { en: 'Continuous evolution', pt: 'Evolução contínua' },
        en: 'Observed sellers at their desks to find bottlenecks and built what superiors kept requesting: performance charts, commission forecast, ranking and a knowledge area with courses and videos.',
        pt: 'Observei os vendedores em suas mesas para encontrar gargalos e construí o que a gestão pedia: gráficos de acompanhamento, previsão de comissão, ranking e uma área de conhecimento com cursos e vídeos.',
      },
      {
        label: {
          en: 'Recruiting pre-selection (Blip, Airtable, Calendly)',
          pt: 'Pré-seleção de candidatos (Blip, Airtable, Calendly)',
        },
        en: 'Built the recruiting screening, launched with the app as a chat flow (WhatsApp and Messenger, on Blip) that disqualified candidates and sent answers to HR in Airtable, and later moved it inside the app with a better UX and Calendly booking for the HR interview.',
        pt: 'Criei a triagem de recrutamento, lançada junto com o app como um fluxo de chat (WhatsApp e Messenger, na Blip) que desclassificava candidatos e enviava as respostas ao RH no Airtable, e depois a levei para dentro do app, com UX melhor e agendamento da conversa com o RH pelo Calendly.',
      },
      {
        label: { en: 'Commission system (Node.js, Angular)', pt: 'Sistema de comissões (Node.js, Angular)' },
        en: 'Built the commission system for finance: weekly or monthly payouts calculated per seller, with product-specific commissions, goals and bonuses, replacing a fully manual process with a single button and no human errors.',
        pt: 'Desenvolvi o sistema de comissões do financeiro: pagamento semanal ou mensal calculado por vendedor, com comissões específicas por produto, metas e bônus, no lugar de um processo totalmente manual, agora com um clique e sem erros humanos.',
      },
    ],
  },
  {
    company: { en: 'Promotora Presença', pt: 'Promotora Presença' },
    role: { en: 'Software Engineer', pt: 'Engenheiro de Software' },
    start: { month: 3, year: 2019 },
    end: { month: 9, year: 2019 },
    nested: true,
    roleAsTitle: true,
    summary: {
      en: "Worked on the company's WhatsApp customer service chatbot, from conversation flows to the APIs connecting it to internal data - lifting self-service resolution from about 20% to about 80%.",
      pt: 'Atuação no chatbot de atendimento da empresa no WhatsApp, dos fluxos de conversa às APIs que o conectavam aos dados internos - elevando a resolução sem atendente de cerca de 20% para cerca de 80%.',
    },
    highlights: [
      {
        label: { en: 'Chatbot APIs (C#, SQL Server)', pt: 'APIs do chatbot (C#, SQL Server)' },
        en: 'Learned and built the APIs connecting the chatbot to the customer database: after identifying a customer by CPF, the bot showed real data on their product, raising the share of questions resolved without an agent from about 20% to about 80%.',
        pt: 'Aprendi e criei as APIs que conectavam o chatbot ao banco de clientes: depois de identificar o cliente pelo CPF, o bot mostrava dados reais do produto, elevando de cerca de 20% para cerca de 80% a parcela de dúvidas resolvidas sem atendente.',
      },
      {
        label: { en: 'Agent handoff', pt: 'Repasse ao atendente' },
        en: "Passed each conversation to agents with the customer, product, and question already filled in, replacing a manual step that took 10 minutes or more, counting the customer's wait.",
        pt: 'Repassei cada conversa ao atendente com cliente, produto e dúvida já preenchidos, no lugar de uma etapa manual que levava 10 minutos ou mais, contando a espera do cliente.',
      },
      {
        label: { en: 'Chatbot flows (Blip, JavaScript)', pt: 'Fluxos do chatbot (Blip, JavaScript)' },
        en: 'Built and extended the WhatsApp chatbot flows, with JavaScript running inside Blip (intent-based and manually trained, before LLMs), answering common product questions for 10–20 customers a day at the start, a volume that kept growing.',
        pt: 'Criei e evoluí os fluxos do chatbot no WhatsApp, com JavaScript rodando dentro da Blip (baseado em intenção e treinado manualmente, antes dos LLMs), respondendo dúvidas comuns sobre o produto de 10 a 20 clientes por dia no início, volume que só cresceu.',
      },
      {
        label: { en: 'Customer identification', pt: 'Identificação do cliente' },
        en: 'Built from scratch: CPF normalization for any input format and name confirmation ("Are you XXX?"), with a blocklist for improper names.',
        pt: 'Construí do zero a normalização do CPF em qualquer formato e confirmação do nome ("Você é XXX?"), com lista de bloqueio para nomes impróprios.',
      },
      {
        label: { en: 'Usage metrics (Airtable)', pt: 'Métricas de uso (Airtable)' },
        en: 'Sent key chatbot data (customer name, last step reached) to Airtable through an API, giving management real-time metrics on how many customers reached the bot and where they dropped off, and used them to fix wrong CPFs and unclear questions through better CPF cleaning and intent recognition.',
        pt: 'Enviei dados-chave do chatbot (nome do cliente, última etapa alcançada) ao Airtable por API, dando à gestão métricas em tempo real de quantos clientes chegavam ao bot e onde desistiam, e usei isso para corrigir CPFs errados e perguntas mal formuladas, com melhor limpeza de CPF e reconhecimento de intenção.',
      },
    ],
  },
  {
    company: {
      en: 'UNASP/SP - Adventist University Center of São Paulo',
      pt: 'UNASP/SP - Centro Universitário Adventista de São Paulo',
    },
    role: { en: 'Administrative Assistant', pt: 'Assistente Administrativo' },
    start: { month: 2, year: 2017 },
    end: { month: 12, year: 2018 },
    location: { en: 'São Paulo, Brazil', pt: 'São Paulo, Brasil' },
    summary: {
      en: 'Supported course operations, lectures, and academic events at a university, from registration to certificates.',
      pt: 'Apoio à operação de cursos, palestras e eventos acadêmicos em uma universidade, da inscrição aos certificados.',
    },
    highlights: [
      {
        label: {
          en: 'Certificate automation (Excel VBA, Word, Outlook)',
          pt: 'Automação de certificados (Excel VBA, Word, Outlook)',
        },
        en: 'Built an automation, on my own initiative, that turned a spreadsheet of names and emails into PDF certificates from a Word template and sent them through Outlook. Cut each round (courses of 50 to 200 participants, about every 3 months) from 2–3 days of manual copy-and-paste to about 10 minutes, with no delivery errors.',
        pt: 'Criei, por iniciativa própria, uma automação que transformava uma planilha de nomes e e-mails em certificados em PDF, a partir de um modelo em Word, e os enviava pelo Outlook. Reduzi cada rodada (cursos de 50 a 200 participantes, a cada cerca de 3 meses) de 2 a 3 dias de copiar e colar manual para cerca de 10 minutos, sem erros de envio.',
      },
      {
        label: { en: 'Personalized emails', pt: 'E-mails personalizados' },
        en: "Extended the same base to send emails with each participant's and course's name, and taught colleagues in the same and other departments to use it.",
        pt: 'Estendi a mesma base para enviar e-mails com o nome de cada participante e do curso, e ensinei colegas do mesmo setor e de outros a usá-la.',
      },
      {
        label: { en: 'QR code attendance', pt: 'Presença por QR code' },
        en: 'Proposed a platform the team adopted, replacing paper sign-in and manual check-in/check-out cross-checks and feeding the spreadsheet used to issue certificates.',
        pt: 'Propus uma plataforma adotada pela equipe, no lugar da lista em papel e da conferência manual de entrada e saída, alimentando a planilha usada para emitir os certificados.',
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
