const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

//Cabeça
pincel.fillStyle = "green";
pincel.fillRect(125, 50, 350, 300);

//Olhos
pincel.fillStyle = "black";
pincel.fillRect(175, 110, 90, 90);
pincel.fillRect(335, 110, 90, 90);

//Nariz
pincel.fillRect(265, 200, 70, 100);

//Boca
pincel.fillRect(225, 240, 40, 110);
pincel.fillRect(335, 240, 40, 110);
