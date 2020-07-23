lconsole.log(data);

/**
 * Retorna un OBJETO PELICULA en caso encuentre la pelicula que el usuario
 * busca segun el nombre.
 * Caso contrario se retorna NULL
 * @param {string} nombre 
 */

const getPeliculasByName = (nombre) => {

    for (let i = 0; i < data.peliculas.length; i++) {
        if (data.peliculas[i].title === nombre) {
            // return => retorna un valor de la funcion pero ademas
            // finaliza el for automaticamente.
            return data.peliculas[i];
        }            
    }
    return null;
};
let peliculaEncontrada = getPeliculasByName("The Outpost");
console.log(peliculaEncontrada);
console.log(getPeliculasByName("The Outpost"));
console.log(getPeliculasByName("Castillo Ambulante"));

// USANDO UN BREAK

// const getPeliculasByName = (nombre) => {
//     let posicionEncontrada = -1;

//     for (let i = 0; i < data.peliculas.length; i++) {
//         if (data.peliculas[i].title === nombre) {
//             // return => retorna un valor de la funcion pero ademas
//             // finaliza el for automaticamente.
//             posicionEncontrada = i;
//             break;
//         }            
//     }
//     return data.peliculas[posicionEncontrada];
// };
// console.log(getPeliculasByName("The Outpost"));

console.log(`------ Ejercicio 2 ------`);

/**
 * Funcion que retorna una lista de Peliculas que tienen menos
 * de 200 votos (en la propiedad vote_count)
 * En caso de no tener peliculas con menos de 200 votos
 * retornar un arreglo vacio
 */

const getMenosVotadas = (cantidad) => {

    let cantidadPelicula = [];
    for (let i = 0; i < data.peliculas.length; i++) {
        if (data.peliculas[i].vote_count < 200) {
            
        }
        
    }
    // return cantidad[];
}
// const getMenosVotadas = () =>{
//     let ArrayPeliculas =[];
//     for (let i = 0; i < data.peliculas.length; i++) {
//         if (data.peliculas[i].vote_count<200) {
//             ArrayPeliculas.push(data.peliculas[i].title);
            
//         }
        
//     }
//     return ArrayPeliculas;
// }
// let lasMenosVotadas=getMenosVotadas();
// console.log(lasMenosVotadas);

console.log(`-------- Ejercicio 3 -------`);

/**
 * Funcion que retorna el Numero (cantidad) de peliculas cuyos lenguajes originales 
 * NO SEAN EN INGLES
 * hint: ver el campo original_language
 */

 const getPeliculasExtranjera = (Variables) => {body};

//  const getNoIngles = () =>{
//     let contador =0;
//     for (let i = 0; i < data.peliculas.length; i++) {
//         if (data.peliculas[i].original_language != "en") {
//             contador++
            
//         }
        
//     }
//     return contador;
// }
// let ceroIngles=getNoIngles();
// console.log(ceroIngles);