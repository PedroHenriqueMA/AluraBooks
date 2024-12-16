const sectionLivros = document.querySelector('#livros')
const elementoValorTotalDeLivrosDisponiveis = document.querySelector('#valor_total_livros_disponiveis')
let livros = [];
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();

async function  getBuscarLivrosDaAPI(){
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros)
    
    exibirOsLivrosNaTela(livros);
}

function exibirOsLivrosNaTela(listaLivros){
    elementoValorTotalDeLivrosDisponiveis.innerHTML= '';
    sectionLivros.innerHTML = '';
    listaLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens': 'livro__imagens indisponivel'
        sectionLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">
                ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        `
    });
}