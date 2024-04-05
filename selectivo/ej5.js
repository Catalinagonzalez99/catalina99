/* recibir un nombre y saludarlo o despedirlo segun el usuario*/
const leer = require("prompt-sync")();
let nombreIngresado = "def palabra ingresada" 
console.log("ingrese su nombre");
nombreIngresado = leer();
console.log(nombreIngresado,"hola");
let opcionSeleccionar = leer("llegas o te vas" ); 
if (nombreIngresado == "llegas")
    console.log("saludar");
else 
    console.log ("decir adios")   




