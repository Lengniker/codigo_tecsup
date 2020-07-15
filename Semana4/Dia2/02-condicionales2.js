// EJEMPLO

let edad = +prompt(`Ingrese su edad`);
let indiceMasaCorporal = 0;

if (edad > 17) {
  let peso = +prompt(`¿Cuanto pesa (kg.?`);
  let altura = +prompt(`¿Cuanto mide (m.)?`);
  indiceMasaCorporal = peso / (altura * altura);
  debugger;
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