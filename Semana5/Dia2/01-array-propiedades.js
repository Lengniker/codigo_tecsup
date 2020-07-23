// array.forEach(() => {})
/**
 * El Callback se ejecuta tantas veces como elementos tenga
 * el arreglo
 * El callback recibe hasta 3 elementos
 * 
 * (elemento, iteracion?, copia_del_arreglo) => {}
 * ? significa que ese parametro es opcional
 * 
 * El "forEach" es como un void
 */

// peliculas.forEach((peli) => {
//     console.log(peli);
// })

let arreglo = ["Jorge", "Luis", "Karla", "Jane"];

/**
 * El primer parametro siempre sera el elemento
 * @param {*} nombre 
 * El segundo es la iteracion
 * @param {*} i 
 * El 3ro..... z
 */

// const iteracion = (nombre, i) => {
//     console.log(`${i} => ${nombre}`);
// };
// arreglo.forEach(iteracion);

arreglo.forEach((nombre) => {
    console.log(nombre);
})

console.log(`----- Recorriendo Peliculas -----`);
peliculas.forEach((objPelicula, i) => {
    console.log(`${i} : ${objPelicula.title}`);
    /**
     * Desventaja: No se pueden retornar elementos de
     * la funcion "forEach"
     */
    // return objPelicula;
})

console.log(`---- FILTER ----`);

/**
 * Funcon de los arreglos que recibe un callback en el cual se
 * pueden RETORNAR uno o mas elementos de acuerdo a ciertas condiciones.
 * Sirve como un filtro de elementos
 * Ejecuta el callback tantas veces como elementos tenga
 */

let numeros = [20,1,7,82,6,9,32,10,0,45];

/**
 * Recibe 1ro el elemento, iteracion, copia_del_arreglo
 */
let mayoresIgualesADiez = numeros.filter((elemento, i, arreglo) => {
    // CONDICION
    if (elemento >= 10) {
        return elemento;
    }
})

console.log(mayoresIgualesADiez);
// console TABLE
console.table(mayoresIgualesADiez);

// const filtro = (arreglo, numero) => {
//     let rpta = arreglo.filter((elemento) => {
//         if(elemento >= numero){
//             return elemento;
//         }
//     })
//     return rpta;
// }

console.log(`Ejemplo con FILTER`);

let peliculasExtranjeras = peliculas.filter((objPelicula) => {
    if (objPelicula.original_language !== "en") {
        return objPelicula;
    }
})

console.log(peliculasExtranjeras);