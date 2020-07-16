// Realizar la multiplicacion de 2 numeros
// sin usar el simbolo *

let numero = +prompt(`Ingrese numero`);
let multiplicador = +prompt(`Ingrese multiplicador`);
let contador = 1;
let suma = 0;

debugger;
while (contador <= numero) {
    suma = suma + multiplicador;
    contador = contador + 1;
}
console.log(suma);