// PROPIEDADES
// length => Retorna la cantidad de elementos del arreglo
// push(677) => Agrega el numero 677 al final del arreglo

let numeros = [15,16,1.5,9,-9,16];
let vacio = [];
let nombres = ["Lengniker", "Pedrito", "Sandrita", "Daniela"];
let combinado = [12, "hola", true];

console.log(numeros);
// imprimir un elemento del array dada la posicion
console.log(`Posicion 4 = ${numeros[4]}`);
// cambiando el valor de la posicion [0] "15 > 720"
numeros[0] = 720;
console.log(numeros);

// CANTIDAD DE ELEMENTOS DEL ARRAY
console.log(`Cantidad de Elementos del Arreglo`);
console.log(numeros.length);

let totalElementos = numeros.length;
// imprimir el ultimo elemento de un arreglo
console.log(numeros[5]);
console.log(numeros[totalElementos - 1]);

let ultimoNumero = numeros[numeros.length - 1];
console.log(ultimoNumero);

// AGREGAR ELEMENTOS A UN ARREGLO
numeros.push(212);
console.log(numeros);

console.log(nombres);
