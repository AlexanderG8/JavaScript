'use strict'

//Switch
var edad = 18;
var imprime = "";

switch(edad){
    case 18:
        imprime = "Ya eres mayor de edad";
        break;
    case 25 :
        imprime = "Ya eres joven";
        break;
    case 40 :
        imprime = "Ya eres un adulto";
        break;
    case 70 :
        imprime = "Ya eres un anciano";
        break;
    default :
        imprime = "Tu edad es neutra";
        break;
}

console.log(imprime);
