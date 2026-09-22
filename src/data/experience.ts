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
        en: 'Took over a project full of bugs and rebuilt almost all of it, with new components, a faster and smoother experience, a better UI and a restructured codebase, fixing slowness and misaligned components on top of the reported bugs. More users completed the flow without errors.',
        pt: 'Assumi um projeto cheio de bugs e refiz quase tudo: componentes novos, experiência mais rápida e fluida, interface melhor e código reestruturado, corrigindo lentidão e componentes desalinhados além dos bugs reportados. Mais usuários passaram a concluir o fluxo sem erros.',
      },
      {
        label: {
          en: 'Angular 12 → 16 migration and single-spa (20+ microfrontends)',
          pt: 'Migração de Angular 12 para 16 e single-spa (20+ microfrontends)',
        },
        en: "Migrated the portal's applications from a deprecated in-house library to single-spa: from one Angular project hosting all the others to a shell that mounts each microfrontend by route, independent in framework and version.",
        pt: 'Migrei as aplicações do portal de uma biblioteca interna descontinuada para o single-spa: de um projeto Angular que hospedava todos os outros para um shell que monta cada microfrontend pela rota, independente em framework e versão.',
      },
      {
        label: {
          en: 'Quality (Sonar, ESLint, Prettier, unit tests)',
          pt: 'Qualidade (Sonar, ESLint, Prettier, testes unitários)',
        },
        en: 'Worked under strict ESLint and Sonar rules, including accessibility, with editor extensions while coding, and brought the components I created or refactored to 90%+ unit test coverage. Followed Sonar reports to fix the errors and bugs they flagged.',
        pt: 'Trabalhei com regras rígidas de ESLint e Sonar, incluindo acessibilidade, e extensões do editor durante o desenvolvimento, e levei os componentes que criei ou refatorei a mais de 90% de cobertura de testes unitários. Acompanhei os relatórios do Sonar para corrigir os erros e bugs apontados.',
      },
      {
        label: {
          en: 'Outage reporting and tracking (Angular)',
          pt: 'Relato e acompanhamento de falta de energia (Angular)',
        },
        en: 'Started a new project on a legacy base, redone with a new design, better UI/UX and new features: customers, logged in or not, report an outage at home and follow it on a map (confirmed, crew on the way, progress to resolution). Brought the neighborhood outage map, previously a third-party service, in-house.',
        pt: 'Iniciei um projeto novo sobre uma base legada, refeito com novo design, melhor UI/UX e novidades: clientes, logados ou não, avisam que estão sem energia em casa e acompanham em um mapa (confirmada, equipe a caminho, andamento da resolução). Internalizei o mapa de faltas de energia do bairro, antes um serviço de terceiros.',
      },
      {
        label: {
          en: 'Energy and gas usage (Angular, NgCharts, SVG)',
          pt: 'Consumo de energia e gás (Angular, NgCharts, SVG)',
        },
        en: 'Implemented in-house charts, with hand-built SVG and NgCharts, for customers to follow their energy and gas bills and compare them with previous ones, replacing a third-party service.',
        pt: 'Implementei gráficos próprios, com SVG feito à mão e NgCharts, para o cliente acompanhar suas contas de energia e gás e compará-las com as anteriores, no lugar de um serviço de terceiros.',
      },
      {
        label: {
          en: 'Social programs form (Angular)',
          pt: 'Formulário de programas sociais (Angular)',
        },
        en: 'Built from scratch a step-by-step form where customers enter their data and get the list of social programs they qualify for (such as low income), with the eligibility rules served by the backend.',
        pt: 'Criei do zero um formulário em etapas em que o cliente informa seus dados e recebe a lista de programas sociais para os quais é elegível (como baixa renda), com as regras de elegibilidade fornecidas pelo backend.',
      },
      {
        label: { en: 'Mentoring and documentation', pt: 'Mentoria e documentação' },
        en: 'Mentored two junior developers, one after the other, on the move in / move out project. Documented the migration step by step (extensions, libraries, file templates) and guided other developers.',
        pt: 'Orientei dois desenvolvedores juniores, um depois do outro, no projeto de move in / move out. Documentei a migração passo a passo (extensões, bibliotecas, modelos de arquivo) e orientei outros desenvolvedores.',
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
      en: 'Responsible for the technology of a personalized products business, from the Shopify storefront to the internal systems behind production and fulfillment.',
      pt: 'Responsável pela tecnologia de um negócio de produtos personalizados, da loja Shopify aos sistemas internos de produção e expedição.',
    },
    highlights: [
      {
        label: {
          en: 'Sidra (React, Node.js, PostgreSQL, Prisma)',
          pt: 'Sidra (React, Node.js, PostgreSQL, Prisma)',
        },
        en: 'Built a multi-tenant SaaS that centralizes and automates order fulfillment for e-commerce: label printing, picking control and item identification, previously done separately in each e-commerce platform. One click prints everything, turning hours of work into under 5 minutes. It averages 200+ orders a day across multiple companies, with proven peaks of 800+ in a single day.',
        pt: 'Criei um SaaS multi-tenant que centraliza e automatiza a expedição de pedidos de e-commerce: impressão de etiquetas, controle de separação e identificação dos itens, antes feitas separadamente em cada plataforma. Um clique imprime tudo, transformando horas de trabalho em menos de 5 minutos. O sistema processa em média mais de 200 pedidos por dia em várias empresas, com picos comprovados de mais de 800 em um único dia.',
      },
      {
        label: {
          en: 'Artwork pipeline (Canva, 3D preview, print)',
          pt: 'Fluxo de artes (Canva, preview 3D, impressão)',
        },
        en: 'Automated the artwork flow: art imported from Canva is saved in the formats each step needs (JPG for the 3D preview, PNG for printing, SVG when the customer can swap an image), managed in the admin, shown during picking and turned into a print-ready PDF that follows the exact quantities and sequence of the pick list.',
        pt: 'Automatizei o fluxo de artes: a arte importada do Canva é salva nos formatos que cada etapa precisa (JPG para o preview 3D, PNG para impressão, SVG quando o cliente pode trocar uma imagem), gerenciada no admin, exibida durante a separação e transformada em um PDF de impressão que segue a quantidade e a ordem exatas da lista de separação.',
      },
      {
        label: {
          en: 'Modular migration instead of a rewrite',
          pt: 'Migração modular no lugar de uma reescrita',
        },
        en: 'Started a full ERP rewrite and switched to a modular migration: a full rewrite would deliver nothing until the MVP and leave every problem for the cutover, while modules (picking, products, inventory, logistics) move over gradually and are tested in production step by step, without disrupting operations. The existing Brasa Admin keeps running production meanwhile; inventory and product sync to marketplaces are next.',
        pt: 'Comecei a reescrever o ERP do zero e mudei para uma migração modular: uma reescrita completa não entregaria nada até o MVP e deixaria todos os problemas para a virada, enquanto os módulos (separação, produtos, estoque, logística) migram aos poucos e são testados em produção passo a passo, sem atrapalhar a operação. Enquanto isso, o Brasa Admin atual segue rodando a produção; estoque e envio de produtos aos marketplaces são os próximos.',
      },
      {
        label: {
          en: 'Order processing (webhooks, queue, PostgreSQL RLS)',
          pt: 'Processamento de pedidos (webhooks, fila, RLS no PostgreSQL)',
        },
        en: "Built order processing around a queue: per-minute cron with retries and locking against duplicate processing, tuned with real production data against Olist's rate limit. Isolated each company's data with row-level security, and diagnosed and documented incidents such as database timeouts under webhook bursts.",
        pt: 'Construí o processamento de pedidos em torno de uma fila: cron a cada minuto com novas tentativas e trava contra duplicidade, ajustado com dados reais de produção para respeitar o limite da Olist. Isolei os dados de cada empresa com row-level security, e diagnostiquei e documentei incidentes como timeouts do banco em rajadas de webhook.',
      },
      {
        label: {
          en: 'Observability (custom Sentry client)',
          pt: 'Observabilidade (cliente Sentry próprio)',
        },
        en: 'Built a minimal Sentry client for the Vercel functions, speaking the envelope API directly instead of the ~9 MB SDK that inflated every function and deploy. It filters a whitelist of expected errors, deduplicates reports, redacts PII and attaches per-request context and fingerprints, so each failure lands as a single contextualized issue. Automated processes also leave an operational trail in structured JSON logs.',
        pt: 'Criei um cliente Sentry mínimo para as functions da Vercel, falando a API de envelope diretamente em vez do SDK de ~9 MB que inflava cada função e o deploy. Ele filtra uma whitelist de erros esperados, deduplica reports, mascara PII e anexa contexto por requisição e fingerprints, de modo que cada falha chega como uma issue única e contextualizada. Os processos automáticos também deixam rastro operacional em logs JSON estruturados.',
      },
      {
        label: {
          en: 'Integrations (Olist, Shopify, Shopee, TikTok Shop)',
          pt: 'Integrações (Olist, Shopify, Shopee, TikTok Shop)',
        },
        en: 'Built the connections between the internal systems and each platform through APIs and webhooks.',
        pt: 'Construí as conexões entre os sistemas internos e cada plataforma por meio de APIs e webhooks.',
      },
      {
        label: {
          en: 'Storefront and 3D (Shopify, Liquid, Three.js)',
          pt: 'Loja e 3D (Shopify, Liquid, Three.js)',
        },
        en: "Built from scratch the 3D product viewer with real-time preview of the personalization, the store's differentiator since day one (customers see the product in 3D before buying), and a Chrome extension the internal team uses to preview how their artwork looks on the mug in real time.",
        pt: 'Criei do zero o visualizador 3D de produtos com preview em tempo real da personalização, o diferencial da loja desde o começo (o cliente vê o produto em 3D antes de comprar), e uma extensão do Chrome que o time interno usa para ver em tempo real como a arte fica na caneca.',
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
    role: { en: 'Junior Software Engineer', pt: 'Engenheiro de Software Júnior' },
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
