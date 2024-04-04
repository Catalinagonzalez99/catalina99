/*recibir dos numeros y mostrar la suma en consola*/
const leer = require("prompt-sync")();

console.log("ingresar numero A");
let numeroIngresadoA = Number(leer());
console.log("ingresar numero B");
let numeroIngresadoB = Number(leer());
console.log("suma",numeroIngresadoA+numeroIngresadoB);