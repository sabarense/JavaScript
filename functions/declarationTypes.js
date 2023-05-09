// function declaration
console.log("Resultado = " + soma(3,4));
function soma(x,y){
    return x + y;
}

// function expression
const sub = function(x,y){
    return x - y;
}
console.log("Resultado = " + sub(3,4));

//named function expression
const mult = function mult(x,y){
    return x * y;
}
console.log("Resultado = " + mult(3,4));