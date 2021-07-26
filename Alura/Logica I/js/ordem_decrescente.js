function pulaLinha() {

    document.write("<br>");
    
}
function mostra(frase) {

    document.write(frase);
    pulaLinha();

}
var contador = 20;

mostra("Números de 20 a 0!");

while(contador >= 0) {
    
    mostra(contador);
    contador--;
}
mostra("FIM");
