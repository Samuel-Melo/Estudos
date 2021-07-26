function pulaLinha() {

    document.write("<br><hr><br>");

}

function mostra(frase) {

    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

function calcImc(altura, peso) {

    var imc = peso / (altura * altura);
    return imc;

    /* OU

    return peso / (altura * altura);
    
    */

}

var imcPedro = calcImc(1.71, 73);
var imcBruna = calcImc(1.72, 68);

mostra(imcPedro);
mostra(imcBruna);

var totalImc = imcPedro + imcBruna;

document.write("A soma dos imc's é " + totalImc);
