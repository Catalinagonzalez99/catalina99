/*reciba un numero y nos indique si es positivo o negativo*/
const leer = require("prompt-sync")();

console.log("ingresar numero");
let numeroIngresado = Number(leer());
if (numeroIngresado>0){
    console.log("el número es positivo")
} else {
    console.log("el número es negativo")
}

