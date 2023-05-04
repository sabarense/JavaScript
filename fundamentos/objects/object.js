//Um objeto é descrito por meio de suas propriedades. Por exemplo, um objeto pode ser usado para descrever uma pessoa por meio das seguintes propriedades: nome, gênero, idade, estado civil e CPF.

let pessoa = { nome: 'Yan',  idade: 19,  casado: false} // criação de objeto literal

console.log(pessoa);
console.log(pessoa.idade); // acessando determinado valor do objeto.
pessoa.numeroDeFilhos = 0; // acréscimo de valor no objeto.
console.log(pessoa);

let musica = {}  // criação de objeto vazio, com a adição de chave e seus respectivos valores.
musica.nome = "Sweet Home Alabama",
musica.artista = "Lynyrd Skynyrd",
musica.segundos =  300;
console.log(musica);
 
function criaPessoa(n, i, c, f){ // utilização de função para criação do objeto, adição de chave e seus respectivos valores.
    let p = {};
    p.nome = n;
    p.idade = i;
    p.casado = c;
    p.numeroDeFilhos = f;
    return p;
}

let pessoa1 = criaPessoa("Yan", 19, false, 0);
console.log(pessoa1);