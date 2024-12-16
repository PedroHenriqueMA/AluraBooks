// O metodo filter filtra utilizando os parametros enviados, retornando um array filtrado

const botoes = document.querySelectorAll('.btn');
botoes.forEach(botao =>{
    botao.addEventListener('click', filtrarLivros);
})

function filtrarLivros(){
    const elementoBtn = document.querySelector(`#${this.id}`);
    const categoria = elementoBtn.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
    if (categoria == 'disponivel'){
        const valorTotal = calcularSomaLivrosDisponiveis(livrosFiltrados);
        exibirValorTotalDosLivrosDisponiveis(valorTotal);
    }
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveis(valorTotal){
    elementoValorTotalDeLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$<span id="valor">${valorTotal}</span></p>
    </div>
    `
}