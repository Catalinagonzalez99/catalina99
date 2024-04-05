/* pueda sumar o restar dos numeros dependiendo del usuario*/
const leer = require("prompt-sync")();

console.log("ingresar numero F");
let numeroIngresadoF = Number(leer());
console.log("ingresar numero G");
let numeroIngresadoG = Number(leer());
console.log("resta",numeroIngresadoF-numeroIngresadoG);
