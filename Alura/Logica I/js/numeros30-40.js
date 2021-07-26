function pulaLinha() {

    document.write("<br>");
    
}
function mostra(frase) {

    document.write(frase);
    pulaLinha();

}
var contador = 1;

mostra("Todos os números entre 30 a 40, exceto 33 e 37!");

while(contador <= 40) {
    if(contador != 33 && contador != 37) {
        mostra(contador);
    }
    contador++;
}
mostra("FIM");
