// EJEMPLO

let edad = +prompt(`Ingrese su edad`);
let peso = +prompt(`¿Cuanto pesa (kg.?`);
let altura = +prompt(`¿Cuanto mide (m.)?`);
let indiceMasaCorporal = 0;

// COMPARADORES LOGICOS

// ! => negacion
// && => Y
// || => O

indiceMasaCorporal = peso / (altura * altura);

if (edad > 17 && indiceMasaCorporal <= 30) {
  console.log(`Si hay pase laboral`);
} else {
  console.log(`No hay pase laboral #QuedateEnCasa`);
  console.log(`Usted es menor de edad o el IMC excede el valor de 30`);
}
console.log(`Su indice de masa corporal (IMC) es ${indiceMasaCorporal}`);
console.log(`Fin del Programa, hasta pronto!`);