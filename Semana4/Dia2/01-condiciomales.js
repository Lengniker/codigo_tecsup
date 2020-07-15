// Estructuras condicionales

// debugger es una herramienta que nos permite revisar nuestro codigo paso a
// debugger;

// EJEMPLO 1
// let edad = 17;
// let edad = +prompt(`Ingrese su edad`);
// let peso = +prompt(`¿Cuanto pesa (kg.?`);

// if (edad > 17) {
//   if (peso >= 85) {
//     console.log(`No hay pase laboral #QuedateEnCasa`);
//     console.log(`Esta usted en riesgo por exceso de peso`);
//   }
//   console.log(`Si hay pase laboral`);
// } else {
//   console.log(`No hay pase laboral #QuedateEnCasa`);
//   console.log(`Usted es menor de edad`);
// }

// EJEMPLO 2 CREANDO BOOLEANOS
// let edad_2 = parseInt(prompt(`Ingrese su edad`));
// let rpta = edad_2 > 17;

// console.log(rpta);

// COMPARADORES
// > Mayor
// < Menor
// <= Menor igual
// >= Mayor igual
// !== diferente
// === igual

// Otra forma del 1er ejemplo
let edad = +prompt(`Ingrese su edad`);
let indiceMasaCorporal = 0;

if (edad > 17) {
  let peso = +prompt(`¿Cuanto pesa (kg.?`);
  let altura = +prompt(`¿Cuanto mide (m.)?`);
  indiceMasaCorporal = peso / (altura * altura);
  if (indiceMasaCorporal > 30) {
    console.log(`No hay pase laboral #QuedateEnCasa`);
    console.log(`Esta usted en riesgo por exceso de peso`);
  } else {
    console.log(`Si hay pase laboral`);
  }
  console.log(`Su indice de masa corporal (IMC) es ${indiceMasaCorporal}`);
} else {
  console.log(`No hay pase laboral #QuedateEnCasa`);
  console.log(`Usted es menor de edad`);
}
console.log(`Fin del Programa, hasta pronto!`);
