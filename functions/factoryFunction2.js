function criarProduto(nomeProduto, precoProduto){
    return{
        nome:nomeProduto,
        preco:precoProduto,
        desconto:0.1
    }
}

console.log(criarProduto("Notebook", 5400));
