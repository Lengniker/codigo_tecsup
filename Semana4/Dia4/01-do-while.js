// DO WHILE
// El codigo se ejecuta por lo menos una vez antes de analizarse
// la condicion para iterar nuevamente

// Hacer un programa en el que se ingresen N notas para calcular
// el promedio de todas ellas.
// El usuario ingresa las notas 1 a 1, hasta que ingresa el
// numero -1, el cual es el indicador del fin del ingrso.

let semaforo = true;
let notas = [];
let suma = 0;
// let promedio = 0;

do {
    let nota = +prompt(`Ingrese una nueva nota`);
    if (nota === -1) {
        semaforo = false;
    } else{
    notas.push(nota);
    suma += nota;
    // promedio = suma / notas.length;
    }
} while (semaforo === true);

console.log(notas);
console.log(`Promedio de notas es ${suma / notas.length}`);