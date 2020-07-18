// FUNCIONES

// 1. No retornan valor ni reciben parametros
// declarando una funcion

function imprimirFecha() {
    // como crear una variable que guarda la fecha del ordenador
    let fecha = new Date();
    console.log(fecha);
}

// 2. Retornan valor y no reciben parametros

function retornarFecha() {
    let fecha = new Date();
    return fecha;
}

// 3. Reciben parametros y retornan valor
// a y b son parametros de entrada
/**
 * Funcion que recibe 2 numeros y calcula el binomio cuadrado perfecto
 * de ambos
 * @param {number} a primer numero 
 * @param {number} b segundo numero
 * @return {number} El resultado del binimio
 */
function retornarBinomio(a, b) {
    let rpta = (a*a) + (2*a*b) + (b*b);
    return rpta;
}

// 4. No retornan valor y que reciben parametros
function imprimirPares(numeros){
    // recorriendo el array
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log(numeros[i]);
        }
    }
}

// Invocando a la Funcion 1
imprimirFecha();

// Invocando a la Funcion 2
// retornarFecha();
let nuevaFecha = retornarFecha();
console.log(nuevaFecha);

// Invocando a la funcion 3
let resultadoBinomio = retornarBinomio(8, 5);
console.log(resultadoBinomio);

// Invocando a la Funcion 4
let array = [4, ,20, 1, 0, 5, 63, 98]
imprimirPares(array);

// poner el cursos encima de los parentesis
// se nota lo que colocamos en /** */
retornarBinomio();