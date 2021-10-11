'use strict'

//Pruebas con Var
/*Var define una variable de manera global.*/
var num = 40; 
console.log(num); // Valor 40
if(true){
    var num = 50;
    console.log(num); //Valor 50
}

console.log(num);

//Prueba con Let
/*Con let se limita el alcance de una variable, de acuerdo al bloque en el que se encuentre*/
var texto = "Curso JS";
console.log(texto); // Valor

if(true){
    let texto = "Curso JS x2";
    console.log(texto); //Valor x2
}

console.log(texto);

