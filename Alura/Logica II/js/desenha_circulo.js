var tela = document.querySelector('canvas');

var pincel = tela.getContext('2d');

pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2*3.14);
    pincel.fill();

}

/*for(var x = 0;x < 600;x + 50) {
    
}


desenhaCirculo(300, 200, 30, "red");
desenhaCirculo(360, 200, 30, "black");
desenhaCirculo(300, 140, 30, "yellow");
desenhaCirculo(240, 200, 30, "orange");
desenhaCirculo(300, 260, 30, "blue");
*/


function desenhaFlor(x, y) {

    desenhaCirculo(x, y+20, 10, 'blue');
    desenhaCirculo(x, y, 10, 'red');
    desenhaCirculo(x, y-20, 10, 'yellow');
    desenhaCirculo(x-20, y, 10, 'orange');
    desenhaCirculo(x+20, y, 10, 'black');
}

desenhaFlor(300, 200);
