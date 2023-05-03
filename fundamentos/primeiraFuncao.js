// funcao sem retorno

function imprimirSoma(valorA,valorB){

    resultadoSoma = valorA + valorB;
    console.log(resultadoSoma);
}

imprimirSoma(2,3);

// funcao com retorno

function soma(valorA,valorB = 0){

    resultadoSoma = valorA + valorB;
    return resultadoSoma;
}

console.log(soma(2));
