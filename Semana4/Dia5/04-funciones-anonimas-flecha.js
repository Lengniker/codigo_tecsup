// FUNCIONES ANONIMAS

// Son funciones cuyo valor se guarda en una variable
// y no lleva nombre

/**
 * Recibe 2 numeros en a y b
 * @param {number} a primer numero
 * @param {number} b segundo numero
 * @rpta {number} es el resultado de la suma
 *  */
let sumar = function (a,b) {
    return a + b;
};

let rpta = sumar(7,8);
console.log(rpta);
// sumar();

// FUNCIONES DE FLECHA
// arrow function "=>"

// Son funciones anonimas tambien.
// function (a,b) === (a,b) =>
let sumarFlecha = (a,b) => {
    return a + b;
};
console.log(sumarFlecha(500, 20));