'use strict'

var num1 = parseInt(prompt('Numero 1: ', 0));
var num2 = parseInt(prompt('Numero 2: ', 0));

if (num1 > num2) {
    alert ("El numero " + num1 + " es mayor a " + num2);
}else if (num1 < num2) {
    alert ("El numero " + num1 + " es menor a " + num2);
}else if (num1 = num2) {
    alert ("El numero " + num1 + " es igual a " + num2);
}else {
    alert ("No se encontro los valores");
}