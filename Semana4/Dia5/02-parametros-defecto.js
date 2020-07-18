// FUNCIONES CON PARAMETROS POR DEFECTO

// function trinomioCuadrado(a, b, c) {
//     let rpta = a*a*a + b*b*b + c*c*c;
//     return rpta;
// }

// let resultado = trinomioCuadrado(2,4,6);
// console.log(resultado);

function trinomioCuadrado(a, b, c) {
  if (typeof a === "number" && typeof b === "number" && typeof c === "number") {
    let rpta = a * a * a + b * b * b + c * c * c;
    return rpta;
  } else {
    console.error("Los datos proporcionados no son correctos");
    return 0;
  }
  // console.log(`a = ${a}`);
  // console.log(`b = ${b}`);
  // console.log(`c = ${c}`);

  // let rpta = a*a*a + b*b*b + c*c*c;
  // return rpta;
}

let resultado = trinomioCuadrado(2, 4);
console.log(resultado);

let resultado1 = trinomioCuadrado(2, 4, 6);
console.log(resultado1);

// ********* EJEMPLO 2 **********

/**
 * Funcion que recibe un arreglo de nombres y un nombre a buscar.
 * Si el algoritmo encuentra el nombre buscado dentro del arreglo,
 * retorna TRUE, en caso contrario retorna FALSE
 * @param {array} nombres
 * @param {string} busqueda
 * @return {boolean}
 */

// Arreglo vacio "nombres = []" - String vacio "busqueda = "" "
// function buscarNombre(nombres = [], busqueda = "") {
function buscarNombre(nombres, busqueda) {
  for (let i = 0; i < nombres.length; i++) {
    if (nombres[i] === busqueda) {
      // la sentencia return en uan funcion, no solo retorna
      // un valor sino que tambien hace que la funcion deje de
      // ejecutarse en esa sentencia, no importa si esta dentro
      // de un FOR, WHILE,IF, etc.
      return true;
    }
  }
  //   Si el ciclo FOR acaba, significa que nunca lo encontro
  return false;
}

let nombres = ["martin", "jaime", "anita", "paola", "daniel"];
let resultadoBusqueda = buscarNombre(nombres, "anita");
console.log(resultadoBusqueda);

// ******* EJEMPLO *******
function buscarNom(arregloNombres, busqueda, posicionInicial = 0) {
  for (let i = posicionInicial; i < arregloNombres.length; i++){

  }
}

let Nom = ["a","b","c","d","e","f","g","h","i","j","k","l","m"]
// opcion 1
// el algoritmo buscara el nombre desde la posicion proporcionada
buscarNom(Nom, "f", 8);

// opcion 2
// el algoritmo buscara el nombre desde la posicion 0
buscarNom(Nom, "f");

console.log(`**** FUNCION isNaN ****`); 

// Funcion isNaN
// Es una funcion que devulve TRUE si el valor que tiene dentro no es un numero
// Es una funcoin que devuelve FALSE si el valor que tiene dentro es un numero

console.log(isNaN(5));
console.log(isNaN("TEXTO"));