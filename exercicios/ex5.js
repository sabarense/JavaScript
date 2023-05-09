function mostraDinheiroFormatado(valor){
    valorEmReais = `R$ ${valor.toFixed(2).toString().replace(".", ",")}`
    console.log(valorEmReais)
}

mostraDinheiroFormatado(0.1+0.2);