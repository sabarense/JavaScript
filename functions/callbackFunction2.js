const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

// sem callback
let notasBaixas1 = [];
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas1.push(notas[i]);
    }
}

console.log("Notas sem callback " + [notasBaixas1]);

// com callback
notasBaixas2 = notas.filter(function (nota){
    return nota < 7;
});

console.log("Notas com callback " + [notasBaixas2]);

const notasBaixas3 = notas.filter(nota => nota < 7);

console.log("Notas com callback e arrow function " + [notasBaixas3]);
