export const profile = {
  name: "Geraldo Luiz",
  role: "Analista & Desenvolvedor Full Stack",
  location: "Juiz de Fora, MG",
  resumeUrl:
    "https://drive.google.com/file/d/1BldDgw9eLvYZolB7cOOzxhM5kTCzPAM2/view?usp=drive_link",
  email: "geraldoluis1913@hotmail.com",
  whatsapp: "https://wa.me/5532988075035",
  socials: [
    { name: "GitHub", url: "https://github.com/Geeh17", icon: "github" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/geraldo-luiz-da-silva-7a1818a7/",
      icon: "linkedin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/gldasilva17/",
      icon: "instagram",
    },
    { name: "WhatsApp", url: "https://wa.me/5532988075035", icon: "whatsapp" },
    {
      name: "E-mail",
      url: "mailto:geraldoluis1913@hotmail.com",
      icon: "mail",
    },
  ],
};

export const about = {
  paragraphs: [
    "Atualmente, atuo como analista de desenvolvimento de sistemas com mais de 5 anos de atuação na área de tecnologia, com foco em C#, .NET Core e SQL Server, desenvolvendo soluções robustas, escaláveis e alinhadas a boas práticas de engenharia de software.",
    "Tenho forte interesse por inovação e pela transformação de ideias em soluções eficientes, aplicando princípios de arquitetura, padrões modernos de desenvolvimento e foco contínuo em qualidade, performance e manutenibilidade dos sistemas.",
    "Acredito que, além do conhecimento técnico, persistência, disciplina e comprometimento são fatores determinantes para a construção de resultados consistentes e sustentáveis ao longo da carreira.",
  ],
  education: [
    "Pós-Graduação em Engenharia de Software – Faculdade Metropolitana (jan/2026 – dez/2026)",
    "MBA em Desenvolvimento Full Stack – Unyleya (mai/2025 – out/2025)",
    "Pós-Graduação em Desenvolvimento de Sistemas com C# – Unyleya",
    "Tecnólogo em Análise e Desenvolvimento de Sistemas – Instituto Vianna Júnior (2021 – 2024)",
    "Técnico em Programação de Computadores – Faculdade Microlins (2014 – 2016)",
    "Técnico em Redes de Computadores – Faculdade Microlins (2014 – 2015)",
  ],
  certifications: [
    "Backend com .NET – Randstad",
    "Clean Architecture Essencial: ASP.NET Core com C# – Udemy",
    "Banco de Dados: Oracle PL/SQL – IFRS",
    "Administrador de Banco de Dados – IFRS",
  ],
  skills: {
    backend: [
      "C# e .NET Core",
      "Node.js com Prisma",
      "Integrações RESTful e autenticação JWT",
      "Padrões de Projeto (GoF): Criacionais e Estruturais com .NET e C#",
      "Aplicação de princípios SOLID e arquitetura limpa",
    ],
    database: [
      "SQL Server 2019 e MongoDB",
      "Modelagem de dados e otimização de consultas complexas",
      "Melhoria de desempenho e performance em rotinas SQL",
      "Criação e manutenção de procedures e relatórios (SSRS)",
    ],
    frontend: [
      "React e React Native",
      "HTML5/CSS3",
      "Criação de interfaces modernas e responsivas",
    ],
  },
};

export type ExperienceRole = {
  title: string;
  period: string;
  bullets: string[];
};

export type ExperienceCompany = {
  company: string;
  location: string;
  roles: ExperienceRole[];
};

export const experience: ExperienceCompany[] = [
  {
    company: "Delage",
    location: "Juiz de Fora, MG",
    roles: [
      {
        title: "Analista de Desenvolvimento de Sistemas",
        period: "março de 2025 – Presente · 1 ano 4 meses",
        bullets: [
          "Criação, manutenção e otimização de procedures em SQL Server, reduzindo o tempo de execução de rotinas críticas.",
          "Análise de consultas para integração entre WMS e sistemas externos (Knapp, Wintor), garantindo consistência e integridade dos dados.",
          "Correção de bugs e refatoração de código em C#, .NET, VB.Net, XML e XSLT.",
          "Desenvolvimento e manutenção de relatórios com SSRS (SQL Server Reporting Services).",
          "Utilização de Git para controle de versão das alterações realizadas.",
        ],
      },
      {
        title: "Analista de Sistemas Jr.",
        period: "agosto de 2022 – março de 2025 · 2 anos 9 meses",
        bullets: [
          "Manutenção e criação de procedures com SQL Server.",
          "Acompanhava a correção de sistemas com XSLT, XML, C#, VB6 e VB.Net para aprender a regra de negócio.",
          "Criação e manutenção de relatórios com Report Services.",
        ],
      },
      {
        title: "Estagiário de Analista de Sistemas",
        period: "junho de 2021 – julho de 2022 · 1 ano 2 meses",
        bullets: [
          "Acompanhava a correção de sistemas com XSLT, XML, C#, VB6 e VB.Net para aprender a regra de negócio, além de realizar consultas simples no banco de dados.",
        ],
      },
    ],
  },
  {
    company: "Grupo Bahamas S/A",
    location: "Juiz de Fora, MG",
    roles: [
      {
        title: "Operador de Terminal",
        period: "julho de 2016 – junho de 2021 · 5 anos",
        bullets: [
          "Entrada e controle de dados em sistemas operacionais, garantindo precisão e integridade das informações.",
          "Monitoramento de hardware e execução de comandos para processamento de dados.",
          "Manutenção preventiva de terminais e suporte técnico básico.",
        ],
      },
    ],
  },
];

export type TechItem = {
  name: string;
  description: string;
  iconify?: string;
  color?: string;
};

export const techPrimary: TechItem[] = [
  {
    name: "C#",
    description:
      "Linguagem de programação de alto nível que suporta múltiplos paradigmas.",
    iconify: "vscode-icons:file-type-csharp",
    color: "#178600",
  },
  {
    name: ".NET",
    description:
      "Plataforma de desenvolvimento para criação de aplicações web, desktop, APIs e serviços.",
    iconify: "logos:dotnet",
  },
  {
    name: "SQL",
    description:
      "Linguagem de consulta padrão para bancos de dados relacionais.",
    iconify: "vscode-icons:file-type-sql",
  },
  {
    name: "Node.js",
    description:
      "Software open-source e multiplataforma que executa JavaScript fora do navegador.",
    iconify: "logos:nodejs-icon",
  },
];

export const techSecondary: TechItem[] = [
  {
    name: "React",
    description:
      "Biblioteca para construção de interfaces reativas e componentizadas.",
    iconify: "logos:react",
  },
  {
    name: "TypeScript",
    description:
      "Superconjunto de JavaScript que adiciona tipagem estática opcional à linguagem.",
    iconify: "logos:typescript-icon",
  },
  {
    name: "Next.js",
    description:
      "Framework de desenvolvimento web criado pela Vercel que facilita a construção de aplicativos React.",
    iconify: "logos:nextjs-icon",
  },
  {
    name: "MongoDB",
    description:
      "Banco de dados orientado a documentos, cross-platform e disponível em código aberto.",
    iconify: "logos:mongodb-icon",
  },
  {
    name: "Jest",
    description:
      "Framework de testes em JavaScript focado em simplicidade, com suporte para mocks, snapshots e testes assíncronos.",
    iconify: "logos:jest",
  },
];

export type Project = {
  title: string;
  stack: string;
  description: string;
  image: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "Sistema de Controle Financeiro Automatizado",
    stack: "Node.js + Express | Next.js 14 + TypeScript | N8N",
    description: "Aplicação web para controle de receitas e despesas pessoais.",
    image: "controleF.png",
    github:
      "https://github.com/Geeh17/Sistema-de-Controle-Financeiro-Automatizado-com-n8n",
  },
  {
    title: "GestaoV - Sistema de Gerenciamento de Produtos e Usuários",
    stack:
      "React 18 + Tailwind CSS | ASP.NET Core Web API + Entity Framework Core + SQL Server + Swagger",
    description:
      "Gestão de produtos com cadastro, edição e controle de estoque.",
    image: "gestao.png",
    github: "https://github.com/Geeh17/GestaoV",
  },
  {
    title: "Controle OS - Advogados",
    stack: "Node.js | React | Tailwind CSS",
    description:
      "Sistema de controle de ordens de serviço para escritório de advocacia.",
    image: "advogados.png",
    github: "https://github.com/Geeh17/SistemaAdvogados",
  },
  {
    title: "API de Controle de Usuários e Ativos",
    stack: " Node Js | Prisma | Google OAuth | MySQL",
    description:
      "API REST para controle e acompanhamento de fundos imobiliários com autenticação JWT.",
    image: "api.png",
    github: "https://github.com/Geeh17/SistemadeControleFundosImobiliarios",
  },
  {
    title: "Sistema de Agendamento",
    stack: "C# + ASP.NET Core 8 | JavaScript (Vanilla) | SQL Server + EF Core",
    description:
      "Aplicação completa para gestão de agendamentos, compromissos e tarefas.",
    image: "agendamentos.png",
    github: "https://github.com/Geeh17/SistemaAgendamento",
  },
  {
    title: "Sistema Oficina — Painel de Gestão",
    stack:
      "Node.js + Express 5 + MongoDB | React 19 + TypeScript + Tailwind CSS 4",
    description:
      "Sistema completo de gestão para oficina de motos: clientes, motos, ordens de serviço, estoque de peças,financeiro/caixa, agenda de horários e controle de funcionários.",
    image: "Oficina.png",
    github: "https://github.com/Geeh17/SistemaOficina",
  },
];
