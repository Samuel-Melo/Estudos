var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var contador = 0;
var raio = 19;

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * Math.PI);
    pincel.fill();
}

function limpaTela() {

    pincel.clearRect(0, 0, 600, 400);
}

function atualizaTela() {

    limpaTela();

    if (raio > 30) {
        contador = -1;
    }
    else if (raio < 20) {
        contador = 1;
    }
    
    raio += contador;
    
    desenhaCirculo(300, 200, raio, "blue");       
}

setInterval(atualizaTela, 20);
