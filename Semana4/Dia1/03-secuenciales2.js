// Ejemplos

// Imprimir valores String
let valor = prompt(`Ingrese un valor`);
console.log(valor);

// Imprimir valores int
let numero1 = parseInt(prompt(`Ingrese numero`));
// Tambien se antepone el signo "+"
let numero2 = +prompt(`Ingrese numero`);
console.log(numero1);
console.log(numero2);

// Ejemplo
let suma = "35";
let sumaEntera = +suma;

console.log(sumaEntera);

// Ejercicio 2.7
let costoBoleto = 0;

let recorrer = +prompt("Ingrese los kilometros a recorrer");
let costoKilometro = +prompt("Ingrese el costo por Kilometro");

costoBoleto = recorrer * costoKilometro;
console.log(`Costo por boleto: ${costoBoleto} soles`);