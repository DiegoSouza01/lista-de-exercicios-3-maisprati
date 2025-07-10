# 📝 Lista de Exercícios 3 - Desenvolvimento Web Básico - +PraTi & Codifica Edu​

## 🧮 Lista

1. Crie um arquivo chamado index.html e monte nele a seguinte estrutura usando
sempre tags semânticas:
- Um ``<header>`` contendo um ``<h1> (título``) e um ``<p> (parágrafo)`` introdutório.
- Um ``<main>`` dividido em duas subseções:
- Seção “Missão” com ``<h2>`` e ``<p>``.
- Seção “Visão” com ``<h2>`` e ``<p>``.
- Um ``<footer>`` com um ``<p>`` de copyright.


2. Listas e Navegação - Em um arquivo listas.html:
- Crie uma lista não ordenada ``(<ul>)`` com cinco hobbies seus, cada um em um
``<li>``.
- Crie uma lista ordenada ``(<ol>)`` descrevendo, em passos, como preparar uma
receita simples, cada passo em um ``<li>``.
- Ao final, inclua um bloco de navegação ``(<nav>)`` com três links externos,
usando ``<a href="URL_DO_SITE">Nome do Site</a>``.

  
3. Formulário de Feedback - Em arquivo feedback.html, construa um formulário
que contenha:
- Nome
- E-mail
- Endereço Completo
- Tipo de feedback
- Campo para o Feedback
- Botão de Envio


4. CSS Básico e Box Model - Crie um arquivo styles.css e vincule-o em
index.html:
- Defina cores de fundo ``(background-color)`` e de texto ``(color)`` para ``<header>``,
``<main>`` e ``<footer>``.
- Para cada uma dessas seções, aplique margin, padding e border de forma a
evidenciar seus contornos.

  
5. Seletores e Propriedades - No mesmo styles.css, adicione:

- Um estilo para todas as tags ``<h2>`` que aumente a font-size e aplique text-
decoration: underline.

- Uma classe .destaque que deixe o texto em itálico ``(font-style: italic)`` e aplique
um leve background-color.

- Um ID #importante que adicione border-top mais espessa em um parágrafo
específico.


6. Exercício Grid e Flexbox - Monte uma galeria com oito imagens e legendas,
organizadas por Grid. Além disso, envolva toda a galeria em um contêiner que
utilize Flexbox para centralizar o conjunto na página e permitir que as figuras
quebrem de linha quando a largura for limitada. Ajuste o número de colunas do
Grid para telas menores por meio de media query.


7. Menu Hamburger - implemente um menu “hamburger” que:
- Apareça apenas em telas com largura ≤ 600 px.
- Oculte a navegação padrão e abra/feche o menu ao ser clicado.
