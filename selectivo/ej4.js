/* pueda multiplicar o dividir dos numeros dependiendo del usuario*/
const leer = require("prompt-sync")();

console.log("ingresar numero H");
let numeroIngresadoH = Number(leer());
console.log("ingresar numero I");
let numeroIngresadoI = Number(leer());
console.log("multiplicacion",numeroIngresadoH*numeroIngresadoI);