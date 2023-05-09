function verificaTriangulo(ladoA, ladoB, ladoC){

    if(ladoA == ladoB && ladoA == ladoC){
        console.log("Equilatero!");
    }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC ){
        console.log("Isósceles!");
    }else{
        console.log("Escaleno")
    }
}

verificaTriangulo(2,2,1)