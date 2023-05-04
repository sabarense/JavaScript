function tratarErro(erro){
    // throw nem Erro("...")
    // throw 10
    // throw true
    // throw "mensagem"
    throw{
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }    
}

function imprimirNome(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!");
    }catch(erro){
        tratarErro(erro);
    }
}

const obj = { nome: "Roberto" }; // irá dar erro pois o atributo foi definido como name, e não nome
imprimirNome(obj);