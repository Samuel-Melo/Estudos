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
var contador = 1;

mostra("TABUADA DO NÚMERO " + numero);
pulaLinha();

while(contador <= 10) {
    tabuada(numero, contador);
    contador++;
}
