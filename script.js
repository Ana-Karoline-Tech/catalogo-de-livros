    // 1. Selecionar elementos
    const toggleBtn = document.getElementById("toggleDarkMode");
    const body = document.body;

    // 2. Verificar preferência salva no localStorage
    const isDarkMode = localStorage.getItem("darkMode") === "true";

    // 3. Aplicar o tema salvo ao carregar a página
    if (isDarkMode) {
        body.classList.add("dark-mode");
        toggleBtn.textContent = "Light Mode";
    }

    // 4. Alternar tema ao clicar no botão
    toggleBtn.addEventListener("click", () => {
    // Alterna a classe no body
    body.classList.toggle("dark-mode");
    
    // Atualiza o texto do botão
    const isNowDark = body.classList.contains("dark-mode");
    toggleBtn.textContent = isNowDark ? "Light Mode" : "Dark Mode";
    
    // Salva a preferência no localStorage
    localStorage.setItem("darkMode", isNowDark);
});


let livros = [
  { titulo: "Bíblia Sagrada", autor: "Deus" },
    { titulo: "Cristianismo Puro e Simples", autor: "C.S. Lewis" },
    { titulo: "Uma Vida com Propósitos", autor: "Rick Warren" },
    { titulo: "O Conhecimento de Deus", autor: "J.I. Packer" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "O Custo do Discipulado", autor: "Dietrich Bonhoeffer" },
    { titulo: "A Revolução dos Bichos", autor: "George Orwell" },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
    { titulo: "Em Busca de Deus", autor: "John Piper" },
    
];

function mostrarLivros() {
    let div = document.getElementById("catalogo");
    div.innerHTML = `
        <h3>Meus livros favoritos:</h3>
        <ul>
        ${livros.map(livro => `<li><strong class="titulo">${livro.titulo}</strong> - ${livro.autor}</li>`).join("")}
        </ul>
    `;
    }

    mostrarLivros();

    let tituloInput = document.getElementById("tituloInput");
    let autorInput = document.getElementById("autorInput");
    let botaoAdicionar = document.getElementById("adicionarLivro");


    botaoAdicionar.addEventListener("click", function () {
        let novoTitulo = tituloInput.value;
        let novoAutor = autorInput.value;

        // Cria um novo objeto de livro
        let novoLivro = {
            titulo: novoTitulo,
            autor: novoAutor
        };

        // Adiciona ao array de livros
        livros.push(novoLivro);

        // Atualiza a exibição dos livros
        mostrarLivros();

        // Limpa os campos de input
        tituloInput.value = "";
        autorInput.value = "";
        });

        // Botão "Limpar Catálogo"
        let botaoLimpar = document.getElementById("limparCatalogo");
        botaoLimpar.addEventListener("click", function () {
        livros = []; // esvazia o array
        mostrarLivros(); // atualiza a tela
        });

        // Botão "Remover Último Livro"
        let botaoRemoverUltimo = document.getElementById("removerUltimoLivro");
        botaoRemoverUltimo.addEventListener("click", function () {
        livros.pop(); // remove o último item do array
        mostrarLivros(); // atualiza a tela
        });




    let botao = document.getElementById("alternarCatalogo");
    let catalogo = document.getElementById("catalogo");

    // Começa visível
    let visivel = true;

    botao.addEventListener("click", function () {
    if (visivel) {
        catalogo.style.display = "none";
        botao.textContent = "Mostrar Catálogo";
        visivel = false;
    } else {
        catalogo.style.display = "block";
        botao.textContent = "Esconder Catálogo";
        visivel = true;
    }
    });
