function pulaLinha() {

    document.write("<br>");
    
}
function mostra(frase) {

    document.write(frase);
    pulaLinha();

}
function tabuada(x, y) {
    mostra(x + " X " + contador + " = " + x * y);
}

var numero = parseInt(prompt("Informe um número para saber sua tabuada: "));

mostra("TABUADA DO NÚMERO " + numero);
pulaLinha();

for(var contador = 1;contador <= 10; contador++) {
    tabuada(numero, contador);
}
