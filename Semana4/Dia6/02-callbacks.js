// CALL BACK

// const buscarPorDni = (x) => {
//     // console.log(x);
//     x();
// }

// const mostrarResultado = () => {
//     console.log("Mostrando Resultados");
// }

// buscarPorDni(mostrarResultado);

// ***** EJEMPLO 2 *****

// const buscarPorDni = (dni) => {
//     // Conecto a la BD
//     // hago la consulta del DNI
//     // RETORNO INFORMACION DE LA PERSONA

//     // return "Lengniker Caytano";
    
//     let nombreEncontrado = "----";
//         setTimeout(function () {
//         console.log("Se ejecuta luego de 2000 ms");
//         // let nombreEncontrado = "Lengniker Caytano A.";
//         nombreEncontrado = "Lengniker Caytano A.";
//         console.log(nombreEncontrado);
//         // return nombreEncontrado;
//     }, 2000)
//     return nombreEncontrado;
// }

// // console.log(buscarPorDni("44108242"));
// // buscarPorDni("44108242");

// let encontrado = buscarPorDni("44108242");
// console.log(encontrado);

// ***** EJEMPLO 3 *********


// ***** EJEMPLO 4 ******

const buscarPorDni = (dni, callback) => {
    // Conecto a la BD
    // hago la consulta del DNI
    // RETORNO INFORMACION DE LA PERSONA
    
    let nombreEncontrado = "----";
        setTimeout(function () {
        console.log("Se ejecuta luego de 2000 ms");
        nombreEncontrado = "Lengniker Caytano A.";
        callback(nombreEncontrado);
    }, 2000)
}

buscarPorDni("44108242", (nombre) => {console.log(nombre);});