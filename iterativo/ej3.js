/*sume 3 números ingresados por consola donde por cada número ingresado debe mostrar el valor del resultado actual o sea en cada iteración*/
const leer = require("prompt-sync")();
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
    suma +=i 
}

