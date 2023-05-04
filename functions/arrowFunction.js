// funcao normal
let dobro = function(a){
    return 2 * a;
}
console.log(dobro(2));

// funcao arrow
dobro = (a) => 2 * a // retorno implicito
console.log(dobro(2));

function Pessoa(){
    this.idade = 0;
    setInterval(() => {
        this.idade++;
        console.log(this.idade);

    }, 1000)
}

new Pessoa;