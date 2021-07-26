function pulaLinha() {

    document.write("<br><hr><br>");

}

function mostra(frase) {

    document.write("<big>" + frase + "</big>");
    pulaLinha();
}

function calcImc(altura, peso) {

    return peso / (altura * altura);

}

var nome = prompt("Informe seu nome: ")
var altura = prompt(nome + ", informe sua altura: ");
var peso = prompt(nome + ", informe seu peso: ");

var imc = calcImc(altura, peso);

mostra(nome + ", o seu IMC é: " + imc);

if(imc < 18.5) {
    
    mostra("Você está abaixo do recomendado.")
}
else if(imc > 35) {

    mostra("Você está acima do recomendado.")
}
else if(imc >= 18.5 && imc <= 35) {

    mostra("Seu IMC está excelente!")
}

