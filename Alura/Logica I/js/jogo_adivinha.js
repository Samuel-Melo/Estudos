function pulaLinha() {

    document.write("<br><hr><br>");
    
}

function mostra(frase) {

    document.write("<big>" + frase + "</big>");
    pulaLinha();

}

var numeroPensado = Math.round(Math.random() * 10);

var tentativas = 1;

//console.log(numeroPensado);

while(tentativas <= 3) {
    var chute = parseInt(prompt("Acerte o número: "))

    if(chute == numeroPensado) {

        mostra("Você acertou!");
        break;

    }
    else {

        mostra("Você errou!");

    }
    tentativas++
}
mostra("FIM");
