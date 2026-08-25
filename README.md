# Portal — Informática Básica | Música

Portal estático preparado para publicação no GitHub Pages.

## Estrutura

- index.html: página inicial do portal.
- aulas.js: catálogo de aulas exibido na página.
- slides/: apresentações HTML.
- assets/: imagens do portal.
- .nojekyll: garante que os arquivos sejam servidos diretamente pelo GitHub Pages.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub, por exemplo informatica-basica-musica.
2. Envie o conteúdo desta pasta para a raiz do repositório.
3. Abra Settings → Pages.
4. Em Build and deployment, escolha Deploy from a branch.
5. Selecione a branch main e a pasta / (root).
6. Clique em Save.

O portal funciona em um endereço de usuário ou dentro de um repositório de projeto porque todos os links são relativos.

## Adicionar uma nova aula

1. Copie a apresentação HTML para slides/.
2. Abra aulas.js.
3. Altere o status da aula anterior de current para published.
4. Insira a nova aula antes do cartão proxima-aula.
5. Use status: "current" na nova aula.
6. Atualize currentId e updatedAt em PORTAL_CONFIG.
7. Envie as alterações ao GitHub.

Exemplo de novo item:

    {
      id: "novo-assunto",
      number: 4,
      date: "1 set. 2026",
      title: "Título da nova aula",
      description: "Descrição resumida.",
      topics: ["Tema 1", "Tema 2"],
      slideCount: 25,
      icon: "▤",
      status: "current",
      href: "slides/Nome_do_Arquivo.html"
    }
