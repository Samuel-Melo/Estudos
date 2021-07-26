function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var idade = parseInt(prompt("Qual é sua idade?"));

if(idade>=18) {

    var temCarteira = prompt("Tem carteira? Responda S ou N");

    while(temCarteira != "S" & temCarteira != "N") {
        
        temCarteira = prompt("Digito Inválido! \nTem carteira? RESPONDA COM \"S\" OU \"N\"");
    }
    if(temCarteira == "S") {

        mostra("Você Pode Dirigir!")
    }
    else if(temCarteira == "N") {

        mostra("Você Não Pode Dirigir, Somente Se Tirar A Habilitação!")
    }
}
else {

    mostra("Você Não Pode Dirigir!")
}

