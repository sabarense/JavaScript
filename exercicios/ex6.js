function jurosSimples(capitalInicial, taxaJuros, tempoAplicacao){
    
    montante = capitalInicial * taxaJuros * tempoAplicacao;
    return console.log("Montante = " + montante);
}
jurosSimples(1000,10/100,5);

function jurosCompostos(capitalInicial, taxaJuros, tempoAplicacao){
    
    montante = capitalInicial * Math.pow((1 - taxaJuros),tempoAplicacao) ;
    return console.log("Montante = " + montante);
}
jurosCompostos(1000,10/100,5);