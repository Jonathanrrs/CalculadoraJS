var operandoA;
var operandoB
var operacion;

function init () {
    var resultado = document.querySelector('#resultado');
    var reset = document.querySelector('#reset');
    var suma = document.querySelector('#suma');
    var multiplicacion= document.querySelector('#multiplicacion');
    var division = document.querySelector('#division');
    var igual = document.querySelector('#igual');
    var residuo = document.querySelector('#residuo');
    var uno = document.querySelector('#uno');
    var dos= document.querySelector('#dos');
    var tres = document.querySelector('#tres');
    var cuatro = document.querySelector('#cuatro');
    var cinco = document.querySelector('#cinco');
    var seis = document.querySelector('#seis');
    var siete = document.querySelector('#siete');
    var ocho = document.querySelector('#ocho');
    var nueve = document.querySelector('#nueve');
    var cero = document.querySelector('#cero');

    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + '1';
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + '2';
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + '3';
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + '4';
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + '5';
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + '6';
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + '7';
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + '8';
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + '9';
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + '0';
    }

    reset.onclick = function(e) {
        resetear();
    }
    suma.onclick = function(e) {
        operandoA = resultado.textContent;
        operacion = '+';
        limpiar();
    }
    resta.onclick = function(e) {
        operandoA = resultado.textContent;
        operacion = '-';
        limpiar();
    }
    multiplicacion.onclick = function(e) {
        operandoA = resultado.textContent;
        operacion = '*';
        limpiar();
    }
    division.onclick = function(e) {
        operandoA = resultado.textContent;
        operacion = '/';
        limpiar();
    }
    residuo.onclick = function(e) {
        operandoA = resultado.textContent;
        operacion = '%';
        limpiar();
    }
    igual.onclick = function(e) {
        operandoB = resultado.textContent;
        resolver();
    }
}

function limpiar() {
    resultado.textContent = '';
}
function resetear() {
    resultado.textContent = '';
    operandoA = 0;
    operandoB = 0;
    operacion = '';
}

function resolver() {
    var res = 0;
    switch(operacion) {
        case '+':
        res = parseFloat(operandoA) + parseFloat(operandoB);
        break;
        case '-':
        res = parseFloat(operandoA) - parseFloat(operandoB);
        break;
        case '*':
        res = parseFloat(operandoA) * parseFloat(operandoB);
        break;
        case '/':
        res = parseFloat(operandoA) / parseFloat(operandoB);
        break;
        case '%':
        res = parseFloat(operandoA) % parseFloat(operandoB);
    }
    resetear();
    resultado.textContent = res;
}