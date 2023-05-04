let a = 2;
let b = 1;

a > b && a != 0 // ambas condições devem ser verdadeiras para que o resultado retorne verdadeiro. retorna verdadeiro.

a > b || a != 0 // uma condição deve ser verdadeira para que o resultado retorne verdadeiro. retorna verdadeiro.

!(a > b) // neste caso, nega que a variável a (2) é maior que a variável b (1).retornaria falso, já que 2 é maior que 1.

console.log(a > b && a != 0);
console.log(a > b || a != 0);
console.log(!(a > b));
