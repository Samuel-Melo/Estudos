var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');
pincel.fillStyle = 'grey';
pincel.fillRect(0, 0, 600, 400);

var cores = ["blue", "red", "green"];
var cor;
var c = 0;

function desenhaCirculo(evento) {

    var x = evento.pageX - tela.offsetLeft;
    var y = evento.pageY - tela.offsetTop;
    pincel.fillStyle = cor;
    pincel.beginPath();
    pincel.arc(x, y, 10, 0, 2 * 3.14);
    pincel.fill();
    console.log(x + ',' + y);
    return false;
}

tela.oncontextmenu = desenhaCirculo;

function mudaCor() {
    while(true) {
        if(c == cores.length) {
            c = 0;
        }
        cor = cores[c]
        console.log(cor)
        c++
        break;
    }
}

tela.onclick = mudaCor;
