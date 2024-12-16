// o metodo reduce tem varias funcionalidades, a ultilida nesse contesto é a de somar valores dentro de um array

function calcularSomaLivrosDisponiveis(livros){
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}