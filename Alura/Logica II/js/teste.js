const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 600, 400);

pincel.fillStyle = "green";
pincel.fillRect(0, 0, 200, 400);

pincel.fillStyle = "yellow";
pincel.fillRect(200, 0, 200, 400);

pincel.fillStyle = "red";
pincel.fillRect(400, 0, 200, 400);
