// FUNCION EN FUNCION
// Se pueden crear funciones dentro de otras funciones

const areaCirculo = (radio) => {
    // Las constantes se declaran en mayuscula
    const PI = 3.1416;

    // function cuadrado (numero){
    const cuadrado = (numero) => {
        return numero * numero;
    };
    return PI * cuadrado(radio);
};
let rpta = areaCirculo(13);
console.log(rpta);