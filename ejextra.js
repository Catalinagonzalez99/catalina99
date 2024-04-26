/* crear un juego para adivinar el numero secreto definido dentro del programa donde el usuario tendra tres intentos*/
const leer = require("prompt-sync")();
const NUMERO_SECRETO = "6";
let numeroIngresado = "def numero ingresado";
console.log("intenta adivinar el numero secreto del programa");
numeroIngresado = leer();
const MAX_ITERACION = 3;
for (let i =0;i< MAX_ITERACION;i++);
if (NUMERO_SECRETO == numeroIngresado){
    console.log("ganaste mil pesos")
}
else (numeroIngresado<0);{
    console.log("perdiste")
}