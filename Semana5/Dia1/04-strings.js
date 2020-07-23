let frase = "AGUA QUE NO HAS DE BEBER, jala la cadena y dejala correr";

// PROPIEDADES
let cantidadLetras = frase.length;
console.log(`Cantidad de Caracteres: ${cantidadLetras}`);

/**
 * string.toLowerCase()
 * Retorna una cadena de texto, convertida a minusculas
 */
let minusculas = frase.toLowerCase();
console.log(minusculas);

/**
 * string.toUpperCase();
 * Retorna una cadena de texto, convertida a mayusculas
 */
 let mayusculas = frase.toUpperCase();
 console.log(mayusculas);

 /**
  * string.substr(posicion_inicial, cantidad_de_caracteres_desde_posicion_inicial)
  * Retorna una subcadena dada una posicion inicial y una cantidad de caracteres
  * apartir de dicha posicion inicial
  */
 let subcadena = frase.substr(2, 10);
 console.log(subcadena);

 /**
  * string.substring(posicion_inicial, posicion_final)
  * Retorna una subcadea dada una posicion inicial y una posicion final
  * ATENCION: La ultima posicion no es considerada dentro de la subcadena
  * de respuesta.
  */
 let substring = frase.substring(2, 10)
 console.log(substring);

 /**
  * string.includes("subcadena_buscada")
  * Retorna TRUE si la "subcadena_buscada" existe en el string
  * Retorna FALSE si no existe
  */
  let existeBEBER = frase.includes("BEBER");
  console.log(`¿BEBER esta incluida?: ${existeBEBER}`);

  /**
   * string-indexOf("subcadena")
   * Retorna la posicion inicial de la "subcadena" buscada
   * Si "subcadena" no existe, se retorna -1
   */
   let posicionPalabraCadena = frase.indexOf("cadena");
   console.log(posicionPalabraCadena);

   let posicionPalabraCadenas = frase.indexOf("cadenas");
   console.log(posicionPalabraCadenas);

   /**
    * string.trim()
    * Retorna una cadena sin los espacion en blanco a los extremos de dicha cadena
    * Si la cadena tiene espacios intermedios, no los borra
    */
   let fraseConEspacios = "    ups!    ";
   console.log(fraseConEspacios);
   console.log(fraseConEspacios.trim());