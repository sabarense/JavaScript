//Os vetores são mecanismos para o armazenamento e a manipulação de sequências de valores. As variáveis dos tipos básicos em JavaScript (números, strings, lógicos, etc.) armazenam apenas um valor de cada vez. Uma variável do tipo vetor pode armazenar vários valores sequenciais

let frutas = ["laranja", "maça", "banana"];

console.log(frutas.length);

for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);