var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

var desenha = false;

pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

tela.onmousemove = function desenhaCirculo(evento) {

    if(desenha){

        var x = evento.pageX - tela.offsetLeft;
        var y = evento.pageY - tela.offsetTop;
        pincel.fillStyle = 'blue';
        pincel.beginPath();
        pincel.arc(x, y, 10, 0, 2 * 3.14);
        pincel.fill();

    }

    console.log(x + ',' + y);
    return false;
}

tela.onmousedown = function habilitaDesenhar() {

    desenha = true;

}
tela.onmouseup = function desabilitaDesenhar() {

    desenha = false;
}

 