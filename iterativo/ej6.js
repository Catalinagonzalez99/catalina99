/*un juego donde hay 10 intentos para intentar adivinar el numero secreto del programa, si el usuario adivina entonces el programa termina caso contrario al quedarse sin intentos el programa avisa la derrota del usuario */
const leer = require("prompt-sync")();
const NUMERO_SECRETO = "4";
let numeroIngresado = "def numero ingresado"

console.log ("intenta adivinar el numero secreto del programa");
numeroIngresado = leer();
const MAX_ITERACION = 10
     for(let i =0;i<MAX_ITERACION;i++);
if (NUMERO_SECRETO == numeroIngresado){
 console.log  (" ganaste una coca")
 }
else (numeroIngresado < 0 ); {
    console.log("perdiste")
     }
       
