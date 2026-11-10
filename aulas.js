/*
 * Catálogo do portal.
 *
 * Para publicar uma nova aula:
 * 1. Coloque o arquivo HTML dentro da pasta slides/.
 * 2. Troque o status da aula anterior de "current" para "published".
 * 3. Adicione a nova aula antes do cartão "Próxima aula".
 * 4. Defina status: "current" para destacar a aula mais recente.
 * 5. Atualize updatedAt e currentId.
 */
window.PORTAL_CONFIG = {
  title: "Mundo Digital",
  discipline: "Informática Básica",
  course: "Curso Subsequente de Música",
  institution: "IFPB — Campus João Pessoa",
  professor: "Prof. Raimundo Carvalho",
  updatedAt: "10 de novembro de 2026",
  currentId: "scratch-aula-1"
};

window.AULAS = [
  {
    id: "historia-informatica",
    number: 1,
    date: "12 ago. 2026",
    title: "História da Informática, Hardware e Software",
    description: "Uma viagem pela evolução dos computadores, seus componentes e a relação da tecnologia com a produção musical.",
    topics: ["História", "Hardware", "Software", "Música"],
    slideCount: 23,
    icon: "⌛",
    status: "published",
    href: "slides/Historia_da_Informatica_Hardware_e_Software.html"
  },
  {
    id: "sistemas-operacionais",
    number: 2,
    date: "19 ago. 2026",
    title: "Sistemas Operacionais: Windows e Linux",
    description: "Conceitos essenciais, área de trabalho, janelas, arquivos, pastas, atalhos e comparação entre Windows e Linux.",
    topics: ["Windows", "Linux", "Arquivos", "Atalhos"],
    slideCount: 22,
    icon: "▣",
    status: "published",
    href: "slides/Sistemas_Operacionais_Windows_Linux.html"
  },
  {
    id: "google-docs",
    number: 3,
    date: "25 ago. 2026",
    title: "Google Docs: Recursos e Funcionalidades",
    description: "Criação, formatação, imagens, compartilhamento, comentários, sugestões, histórico, chips inteligentes e colaboração.",
    topics: ["Google Docs", "Nuvem", "Colaboração", "Prática"],
    slideCount: 41,
    icon: "▤",
    status: "published",
    href: "slides/Google_Docs_Aula_Interativa.html"
  },
  {
    id: "word-365",
    number: 4,
    date: "31 ago. 2026",
    title: "Microsoft Word 365: Recursos Essenciais",
    description: "Criação, edição, formatação, estilos, imagens, tabelas, referências, revisão, colaboração, acessibilidade e exportação para PDF.",
    topics: ["Microsoft Word", "Formatação", "Colaboração", "Prática"],
    slideCount: 54,
    icon: "W",
    status: "published",
    href: "slides/Word_Office_365_Aula_Interativa.html"
  },
  {
    id: "excel-365",
    number: 5,
    date: "21 set. 2026",
    title: "Microsoft Excel 365: Fundamentos e Análise",
    description: "Interface, fórmulas, operadores, funções essenciais, pesquisas, gráficos, tabela dinâmica e prática aplicada à Música.",
    topics: ["Microsoft Excel", "Fórmulas", "Gráficos", "Tabela dinâmica"],
    slideCount: 61,
    icon: "X",
    status: "published",
    href: "slides/Excel_Microsoft_365_Aula_Interativa.html"
  },
  {
    id: "powerpoint-365",
    number: 6,
    date: "9 nov. 2026",
    title: "Microsoft PowerPoint 365: Criação e Apresentação",
    description: "Interface, layouts, temas, imagens, dados, multimídia, transições, animações, apresentação, colaboração e acessibilidade.",
    topics: ["Microsoft PowerPoint", "Design", "Multimídia", "Apresentação"],
    slideCount: 59,
    icon: "P",
    status: "published",
    href: "slides/PowerPoint_Microsoft_365_Aula_Interativa.html"
  },
  {
    id: "scratch-aula-1",
    number: 7,
    date: "10 nov. 2026",
    title: "Bloco III: Computação Criativa e Scratch",
    description: "Programação, algoritmos, computação criativa, interface do Scratch e primeiro projeto musical com movimento, fala e som.",
    topics: ["Programação", "Scratch", "Computação criativa", "Projeto musical"],
    slideCount: 45,
    icon: "S",
    status: "current",
    href: "slides/Bloco_III_Aula_1_Computacao_Criativa_Scratch.html",
    materials: [
      {
        label: "Guia do professor",
        href: "materiais/bloco-3-aula-1/Guia_do_Professor_Aula_1_Computacao_Criativa_Scratch.docx"
      },
      {
        label: "Atividade guiada",
        href: "materiais/bloco-3-aula-1/Atividade_Aula_1_Meu_Primeiro_Instrumento_Animado.docx"
      },
      {
        label: "Projeto Scratch",
        href: "materiais/bloco-3-aula-1/Meu_Primeiro_Instrumento_Animado.sb3"
      }
    ]
  },
  {
    id: "proxima-aula",
    number: 8,
    date: "Próxima semana",
    title: "Próxima aula",
    description: "O novo material aparecerá aqui assim que estiver pronto, mantendo todo o conteúdo do período em um só lugar.",
    topics: ["Em preparação"],
    slideCount: null,
    icon: "＋",
    status: "upcoming",
    href: null
  }
];
