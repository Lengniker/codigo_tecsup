// Dado un arreglo de numeros
// hallar la cantidad de numeros positivos
// hallar la cantidad de numeros negativos
// hallar la cantidad de numeros iguales a 0

let numeros = [0,25,-10,-25,15,30,-35,0,0,26,-12,8];

let numeros_positivos = 0;
let numeros_negativos = 0;
let numeros_ceros = 0;

let contador = 0;
while (contador < numeros.length) {
    console.log(numeros[contador]);
    if (numeros[contador] > 0) {
        // numeros positivo
        numeros_positivos ++;
    } else if (numeros[contador] < 0) {
        // numeros negativos
        numeros_negativos ++;
    } else {
        // numeros valor 0
        numeros_ceros ++;      
    }
    contador = contador + 1;

    // aumenta de 1 en 1
    // contador ++;

    // contador +=5, el contador aumentara de 5 en 5 "El signo se puede cambiar por * / + - "
    // contador +=1;
}        
console.log(`Positivos ${numeros_positivos}`);
console.log(`Negativos ${numeros_negativos}`);
console.log(`Ceros ${numeros_ceros}`);
console.log(`Ceros ${numeros.length - (numeros_positivos + numeros_negativos)}`);