var color = document.querySelector('input');
var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

pincel.fillStyle = "grey";
pincel.fillRect(0, 0, 600, 400);

var desenha = false;

tela.onmousemove = function desenhaCirculo(evento) {

    if(desenha) {
        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = color.value;
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();
    }
    console.log(x + ',' + y);
}

tela.onmousedown = function habilitaDesenhar() {

    desenha = true;
}

tela.onmouseup = function desabilitaDesenhar() {

    desenha = false;
}
