/**
 * Funcion que retorna el numero de casos de personas infectadas en total
 * en el mundo
 */

const getTotalDeCasosEnElMundo = () => {

}

console.log(`----- Ejercicio 2 -----`);

/**
 * Funcion que retorna un objeto completo del cifras de un pais
 * dado su nombre, en caso no encuentre el pais return NULL
 * @param {string} pais
 */

 const getPorcentajeDeRecuperadosByNamePais = (pais) => {

 }

 console.log(`----- Ejercicio 3 -----`);

 /**
  * Funcion que retorna el % de casos de personas recuperadas frente
  * al total de casos de un pais
  * 
  * Para ello se debe proporcionar el nombre del pais.
  * Para buscar un pais, se debe hacer uso de la funcion del
  * ejercicio 2 (Obligatorio)
  * @param {string} pais
  */

  const getPorcentajeDeRecuperadosByNamePais = (pais) => {
    let arregloResultado = [];
    for (let i = 0; i < covid.length; i++) {
        let porcentaje = (covid[i].cases * 100) / covid[i].totalTests;        
        let objTemporalPais = {
            pais: covid[i].country,
            pruebasRealizadas: covid[i].totalTests,
            pruebasPositivas: covid[i].cases,
            porcentajePruebas: porcentaje
        }
        arregloResultado.push(objTemporalPais);
    }
    return arregloResultado;
  }

//   colocar 2 decimales x.toFixed(2)