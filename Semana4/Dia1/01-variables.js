console.log("Probando");

// Variables
// -- Las variables se declaran o se crean una sola vez en el documento, luego solo las usamos.

// Creando una variable

// Variables que varian
// Variables Numericas / number
let x = 69;
let numero = 60;

// Variables de Texto / string / cadena
let nombre = "Lengniker";
let suma = 0;

// Variables booleanas (Solo jugarda 2 respuestas true/false)
let soltero = true;

// Variables que no varian (Constantes)
const pi = 3.1416;
const igv = 0.18;

// Operaciones
suma = x + numero;

// Imprimiendo informacion en la Consola
console.log("La suma total es: ")
console.log(suma);
console.log("Es Soltero?")
console.log(soltero);

// Ejemplos
let precio = 1500;
// let total = precio + (precio * igv);
let total = precio * (1 + igv);

console.log("Total a pagar:");
console.log(total);

console.log(`Total a Pagar ${total}`);

// Ejemplo 2
// +
// -
// *
// /
// %   modulo ó residuo de una operación de división entera

let residuo = 20 % 7;
console.log(residuo);

let par1 = 40 % 2;
let par2 = 900 % 2;
let par3 = 500 % 2;

console.log(`${par1} + ${par2} + ${par3}`);

console.log(`Suma ${par3 + residuo}`);

// Ejemplo 3
let alfanumerico = 35 + "35";
console.log(`alfanumerico => ${alfanumerico}`);