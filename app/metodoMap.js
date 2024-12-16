// O metodo map faz um mapeamento de todos os elementos do array criando um novo array, alterado de acordo com os parametros dados

function aplicarDesconto(listaLivros){
    const desconto = 0.3;
    return livrosComDesconto = listaLivros.map( livro =>{
        return { ...livro, preco: livro.preco - (livro.preco * desconto)}
    })
}