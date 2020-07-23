// Un string tambien es un array

let frase = "anita lava la tina";
for (let i = 0; i < frase.length; i++) {
  console.log(`${i} => ${frase[i]}`);
}

console.log(`-----------`);

/**
 * Funcion que retorna la cantidad de palabras que tiene una cadena de texto
 * @param {string} cadena
 */

const contadorDePalabras = (cadena) => {
  let contadorPalabras = 0;
  let cadenaArreglada = cadena.trim();
  for (let i = 0; i < cadenaArreglada.length; i++) {
    if (cadenaArreglada[i] === " ") {
      contadorPalabras++;
    }
  }
  return contadorPalabras + 1;
};

let resultado = contadorDePalabras("las chicas del can");
console.log(`Palabras: ${resultado}`);

/**
 * Funcion que recibe una cadena de texto, le quita los espacios
 * en blanco tanto a los extremos como espacios internet, y retorna una
 * nueva cadena sin los espacios
 * Ejm: Puno capital folklorica del mundo
 * retorna Punocapitalfolkloricadelmundo
 * @param {} cadena
 */

const quitarEspacios = (cadena) => {
    let cadenaNueva = "";
    for (let i = 0; i < cadena.length; i++) {
        if(cadena[i] !== " "){
            cadenaNueva = cadenaNueva + cadena[i];
        }   
    }
    return cadenaNueva;
};
let respuesta = quitarEspacios("anita lava la tina");
console.log(respuesta);

/**
 * Funcion que retorna TRUE o FALSE en caso que una cadena sea un palindrono
 * Ejm: anita lava la tina
 * Ejm: oso
 * @param {*} cadena
 */
const esPalindrono = (cadena) => {
    let cadenaUnida = cadena.trim();
    cadenaUnida = cadenaUnida.toLowerCase();
    cadenaUnida = quitarEspacios(cadenaUnida);
};
console.log(esPalindrono("voy a Pasar cualquier cadena"));
