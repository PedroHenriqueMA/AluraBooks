// O metodo sort faz uma ordenação de valores dentro do array alterando sua ordem
//obs: o metodo ordena de forma alfanumérica caso não haja uma especificação nos parametros

const btnOrdenar = document.querySelector('#btnOrdenarPorPreco');
btnOrdenar.addEventListener('click', ordenarLivrosPorPreço);

function ordenarLivrosPorPreço(){
    let livrosOrdenados = livros.sort( (a, b) => a.preco - b.preco);
    exibirOsLivrosNaTela(livrosOrdenados);
}