function desenhaQuadrado(x, y, tamanho, cor) {

    pincel.fillStyle = cor;
    pincel.fillRect(x, y, tamanho, tamanho)
    pincel.fill();
}

function desenhaCirculo(x, y, raio, cor) {

    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, raio, 0, 2 * 3.14);
    pincel.fill();

}

function desenhaPaletaDeCores() {

    desenhaQuadrado(xVermelho, yQuadrados, tamanhoQuadrados, 'red');
    desenhaQuadrado(xVerde, yQuadrados, tamanhoQuadrados, 'green');
    desenhaQuadrado(xAzul, yQuadrados, tamanhoQuadrados, 'blue');

}

function lidaComMovimentoDoMouse(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if(desenha && podeDesenharNaArea(x, y)) {

        desenhaCirculo(x, y, 5, corAtual);
    }
}

function habilitaDesenhar() {

    desenha = true;
}

function desabilitaDesenhar() {

    desenha = false;
}
function podeDesenharNaArea(x, y) {

    if(x >= 0 && x < 3*tamanhoQuadrados && y >= 0 && y < tamanhoQuadrados) {

       return false;

   } else {

       return true;
   }
}
function mudaCor(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;

    if((x > xVermelho - tamanhoQuadrados)
    && ( x < xVermelho + tamanhoQuadrados)
    && (y > yQuadrados - tamanhoQuadrados) 
    && ( y < yQuadrados + tamanhoQuadrados)) {

       corAtual = "red";
    }
    else if((x > xVerde - tamanhoQuadrados)
    && ( x < xVerde + tamanhoQuadrados)
    && (y > yQuadrados - tamanhoQuadrados) 
    && ( y < yQuadrados + tamanhoQuadrados)) {

       corAtual = "green";
    }
    else if((x > xAzul - tamanhoQuadrados)
    && ( x < xAzul + tamanhoQuadrados)
    && (y > yQuadrados - tamanhoQuadrados) 
    && ( y < yQuadrados + tamanhoQuadrados)) {

       corAtual = "blue";
    }
}

var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'lightgray';
pincel.fillRect(0, 0, 600, 400);

var desenha = false;
var corAtual = 'blue';
var xVermelho = 0;
var xVerde  = 50;
var xAzul = 100;
var yQuadrados = 0;
var tamanhoQuadrados = 50;

desenhaPaletaDeCores();
tela.onclick = mudaCor;

tela.onmousemove = lidaComMovimentoDoMouse;

tela.onmousedown = habilitaDesenhar;

tela.onmouseup = desabilitaDesenhar;
