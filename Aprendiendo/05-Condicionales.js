'use strict'

//Condicional IF
/*El condicional nos permitira realizar comparaciones entre
2 valores y realizar diferentes tipos de funciones.
Ejemplo:
Si A es igual a B entonces haz algo
*/

var edad = 56;
var nombre = "Alexander";

//Si pasa esto
if(edad >= 18){
    //Ejecuta esto
    console.log(nombre + " tiene " + edad + ", entonces es mayor de edad");

//O si no, ejecuta esto
} else if(edad >= 50){
    console.log(nombre + " tiene " + edad + ", entonces pertenece a la 3ra edad");

}else{
    //Y si no, ejecuta esto
    console.log(nombre + " tiene "+ edad + ", entonces es menor de edad");
}

//Negación
var year = 2018;

if(year != 2021){
    console.log("El año no es 2021");
}

//AND
if(year >= 2000 && year <= 2021){
    console.log("Estamos en la era actual");
} else{
    console.log("Estamos en la era post moderna");
}

//OR
if(year == 2008 || year == 2018){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado")
}

