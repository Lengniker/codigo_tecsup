// Ejemplo 1 del libro pag. 25

// DECLARACION DE VARIBLES
let nota1 = 13;
let nota2 = 15;
let nota3 = 20;
let nota4 = 10;

let suma = 0;
let promedio = 0;

// OPERACIONES PARA RESOLVER EL PROBLEMA
suma = nota1 + nota2 + nota3 + nota4;
promedio = suma / 4;

// MOSTRANDO EL PROMEDIO
console.log(`El promedio es: ${promedio}`);
// console.log(promedio);

// Ejemplo 2 2.7
// horas normales, horas extra, pago por hora normal
// horas extra es el doble

let horas_trabajadas = 48;
let horas_extra = 10;
let pago_hora = 30;

let pago_normal = 0;
let pago_extra = 0;
let total = 0;

pago_normal = horas_trabajadas * pago_hora;
pago_extra = (horas_extra * pago_hora) * 2;
total = pago_normal + pago_extra;

console.log(`El Sueldo total es: ${total}`);