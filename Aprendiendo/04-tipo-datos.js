'use strict'

//Operadores
var num1 = 7;
var num2 = 12;
var oper = num1 + num2;
var oper = num1 - num2;
var oper = num1 * num2;
var oper = num1 / num2;
var oper = num1 % num2;

alert("El resultado de la operación es: " + oper);

//Tipos de Datos
var num_entero = 44;
var cadena_texto = "Hey que tal ?";
var booleano = false;

console.log(num_entero, cadena_texto, booleano);

//Convirtiendo datos a entero
var num_falso = "33";
console.log(Number(num_falso)+7);
console.log(parseInt(num_falso)+7);

//Convirtiendo datos a decimal
var num_falso = "33.4";
console.log(parseFloat(num_falso)+7);

//Convirtiendo datos a String
var num_falso = "33.4";
console.log(String(num_entero)+7);


//Como saber el tipo de dato de una variable
console.log(typeof num_entero);
console.log(typeof cadena_texto);
console.log(typeof booleano);