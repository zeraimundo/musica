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
  updatedAt: "25 de agosto de 2026",
  currentId: "google-docs"
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
    status: "current",
    href: "slides/Google_Docs_Aula_Interativa.html"
  },
  {
    id: "proxima-aula",
    number: 4,
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
