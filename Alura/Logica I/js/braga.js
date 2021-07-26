/*Braga é estudante de química que tem interesse 
por programação. Ele entende que a programação 
pode ajudá-lo em suas pesquisas e, assim como qualquer 
estudante, resolveu fazer alguns testes.

O estudante criou um programa que pergunta a 
quantidade de carbono de duas substâncias. 
Para a segunda substância, ele fará um ajuste 
somando o número 2 com o valor lido. 
Depois de feito o ajuste, o programa compara se a 
quantidade de carbono da primeira substância é 
igual ao do segundo e avisa ao usuário se forem iguais.*/

function pulaLinha() {
    document.write("<br>");
}

function mostra(frase) {
    document.write(frase);
    pulaLinha();
}

var quantidadeCarbono1 = parseInt(prompt("Quantidade de carbono substância 1"));
var quantidadeCarbono2 = parseInt(prompt("Quantidade de carbono substância 2"));

quantidadeCarbono2 = quantidadeCarbono2 + 2;

if(quantidadeCarbono1 == quantidadeCarbono2 ) {

    mostra("Acho que são substâncias parecidas");
} else {

    mostra("São substâncias bem diferentes");
}
