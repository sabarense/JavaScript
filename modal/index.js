function ola() {
    alert("Olá mundo!");
    let nome = prompt('Qual é o seu nome?');
    alert(`Olá ${nome}.`);
    let confirma = confirm('Confirma a operação?');
        if(confirma){
            alert('Confirmado!');
        }else{
            alert('Cancelado.');
        }
  }