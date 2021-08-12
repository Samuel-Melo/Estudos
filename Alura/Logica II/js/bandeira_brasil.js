var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');


pincel.fillStyle = "green";
pincel.fillRect(0, 0, 600, 400);


pincel.fillStyle = "yellow";
pincel.moveTo(600, 200);
pincel.lineTo(0, 200);
pincel.lineTo(300, 0);
pincel.fill();

pincel.moveTo(600, 200);
pincel.lineTo(0, 200);
pincel.lineTo(300, 400);
pincel.fill();


pincel.fillStyle = "blue";
pincel.beginPath();
pincel.arc(300, 200, 100, 0, 2*3.14);
pincel.fill();
