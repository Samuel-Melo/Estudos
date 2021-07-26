function pulaLinha() {

    document.write("<br>");
    
}
function mostra(frase) {

    document.write(frase);
    pulaLinha();

}
var contador = 1;

mostra("Números Pares de 1 a 100:");

while(contador <= 100) {
    if(contador % 2 == 0) {
        mostra(contador);
    }
    contador++;
}
mostra("FIM");
