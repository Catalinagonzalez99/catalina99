/*recibir un nombre y color favorito para saludarlo en consola*/
const leer = require("prompt-sync")();

console.log("ingresar nombre");
let nombreIngresado = leer();
console.log("ingresar color");
let colorIngresado = leer();
console.log("hello",nombreIngresado, "tu color favorito es:", colorIngresado);