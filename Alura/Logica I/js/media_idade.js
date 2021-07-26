function pulaLinha() {

    document.write("<br>");
    
}
function mostra(frase) {

    document.write(frase);
    pulaLinha();

}

var totalPessoas = parseInt(prompt("Quantidade de pessoas: "));
var totalIdades;

for(var contador = 1;contador <= totalPessoas; contador++) {
    var idade = parseInt(prompt("Informe a idade da "+ contador + "° pessoa: "));
    totalIdades+=idade;
}

var media = totalIdades/totalPessoas;

mostra("A média das idades informadas é " + media);
