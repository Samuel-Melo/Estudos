function sorteia() {
    return Math.round(Math.random() * 10);
}
function sorteiaNumeros(quantidade) {

    var numeros = [];

    var contador = 1;

    while(contador <= quantidade) {

        var numeroAleatorio = sorteia();
        
        if (numeroAleatorio !== 0) {

            var msmNumero = false;

            for(var posicao = 0; posicao < numeros.length; posicao++) {
                
                if(numeros[posicao] ==  numeroAleatorio) {
                    msmNumero = true;
                    break;
                }
            }
            if(msmNumero == false) {
                numeros.push(numeroAleatorio);
                contador++;
            }
        }
    }
    return numeros;
}

var achei = false;

var numeros = sorteiaNumeros(5);

console.log(numeros);

var input = document.querySelector("input");
input.focus();

function verificar() {

    for(var contador = 0; contador < numeros.length; contador++) {

        if(input.value == numeros[contador]) {

            alert("Você ACERTOU!");
            achei = true;
            break
        }
    }
    if (achei == false) {

        alert("Você ERROU!");
    }
    input.value = "";
    input.focus();
}

var button = document.querySelector("button");
button.onclick = verificar;
