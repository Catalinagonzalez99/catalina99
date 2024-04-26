/* crear un juego para adivinar el numero secreto generado aleatoriamente en un rango del cero al doble de la cantidad de intentos que desea tener el usuario, considerar que la cantidad minima de intentos es 3 por ende el rango minimo del numero secreto es de 0 a 6 */
const leer = require("prompt-sync")();
const NUMERO_SECRETO = "2";
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
  