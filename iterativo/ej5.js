/* similar al punto 3 agregando la posibilidad de sumar o restar segun lo decida el usuario */
const leer = require("prompt-sync")();
console.log("ingresar numero "); 
let numeroIngresado = Number(leer());
const RESPUESTA_TOTAL = ("resultado") ;
console.log("ingresar numero A"); 
 numeroIngresadoA = Number(leer());
 console.log("ingresar numero B"); 
 numeroIngresadoB = Number(leer());
 console.log("ingresar numero C"); 
 numeroIngresadoC = Number(leer());
 let suma = 0;
 console.log("suma de numeros ingresados",RESPUESTA_TOTAL, numeroIngresadoA+numeroIngresadoB );


for (let i= 1;  i <= 3;i++){
    suma += i
}