/* reciba una palabra y verifique si adivino la que esta en el programa*/
const leer = require("prompt-sync")();
const PALABRA_SECRETA = "house";
let palabraIngresada = "dif palabra ingresada"; 
console.log ("intenta adivinar palabra ingresada del programa");
palabraIngresada = leer();
if (PALABRA_SECRETA == palabraIngresada){
    console.log("ganaste un dolar")
    
} else{
   console.log ("perdiste un dolar")
}

    

    