function pulaLinha() {

    document.write("<br><hr><br>");
    
}

function mostra(frase) {

    document.write("<big>" + frase + "</big>");
    pulaLinha();

}

var limite = parseInt(prompt("Entre com a data limite: "));
var anoCopa = 1930;


while(anoCopa <= limite) {

    mostra("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;

}

/*while(anoCopa <= 2021) {

    alert("Teve copa em " + anoCopa);
    anoCopa = anoCopa + 4;

}*/

alert("FIM");
