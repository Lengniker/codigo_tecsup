/**
 * La clase MATH
 * Es una clase Estatica que nos provee de funciones matematicas
 * Ejem: Math.sqrt(numero)
 */

let raizDe25 = Math.sqrt(25);
console.log(raizDe25);

/**
 * Math.floor(numero_decimal);
 * Redondea un numero al proximo entero inferior
 * Ejm: Math.floor(5.99999999) = 5
 */
console.log(Math.floor(12.999999));

/**
 * Math.ceil(numero_decimal);
 * Redondea un numero al proximo entero superior
 * Ejm: Math.ceil(0.2);
 */
console.log(Math.ceil(0.2));


/**
 * Math.round(numero_decimal);
 * Redondea un numero respetando las formas normales de redondeo
 * Ejm: Math.round(3.2) = 3
 * Ejm: Math.round(3.6) = 4
 */
console.log(Math.round(2.5));

/**
 * Math.random();
 * Genera un numero aleatorio entre 0 y 1
 */
let aleatorio = Math.random();
console.log(aleatorio);

/**
 * Math.random() * (max-min) + min
 * Genera un numero aleatorio entre 'min' y 'max'
 */
let aleatorio15_100 = Math.random() * (100 - 15) + 15;
console.log(aleatorio15_100);

/**
 * numero.toFixed(cantidad_de_decimales);
 */
console.log(aleatorio15_100.toFixed(2));