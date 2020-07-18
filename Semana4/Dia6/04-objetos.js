// OBJETOS

// Un objeto es un elemento que abstrae caracteristicas o
// atributos en comun o que guardan relacion

let objPersona = {
    nombre: "Lengniker",
    apellido: "Caytano",
    edad: 30,
    peso: 70,
    casado: false
}

// Forma 1 de acceder a los atributos
console.log(objPersona.nombre);

// Forma 2 de acceder a lso atributos
console.log(objPersona["apellido"]);

// Forma 1 de modificar un atributo
objPersona.casado = true;
objPersona.peso = 65;

console.log(objPersona);

// Forma 1 de crear nuevos atributos a un objeto
objPersona.platosFavoritos = ["Ceviche", "Pastel de Papa", "Rocoto Relleno"];
console.log(objPersona);

// for (let i = 0; i < objPersona.platosFavoritos.length; i++) {
for (let i = 0; i < objPersona["platosFavoritos"].length; i++) {
    console.log(objPersona.platosFavoritos[i]);    
}

console.log(`********* EJEMPLO *********`);

// let productos = [{}, {}, {}, {}];
let productos = [{
    nombre: "TV Samsung 50",
    precio: 8000.00,
    codigo: "10101",
    coloresDisponibles: ["Azul", "Plomo", "Blanco", "Negro"]
}, {
    nombre: "TV Samsung 42",
    precio: 7000.00,
    codigo: "10102",
    coloresDisponibles: ["Azul", "Plomo"]
}, {
    nombre: "TV Samsung 39",
    precio: 6000.00,
    codigo: "10103",
    coloresDisponibles: ["Azul"]
}, {
    nombre: "TV Samsung 25",
    precio: 5000.00,
    codigo: "10104",
    coloresDisponibles: []
}
];

for (let i = 0; i < productos.length; i++) {
    console.log(`--- Producto ${i + 1} ---`);
    console.log(`Nombre: ${productos[i].nombre}`);
    console.log(`Nombre: ${productos[i].precio}`);
    console.log(`Nombre: ${productos[i].codigo}`);
    console.log(`Colores Disponibles`);
    for (let j = 0; j < productos[i].coloresDisponibles.length; j++) {
        console.log(`Color: ${productos[i].coloresDisponibles[j]}`);
    }

    // llamar a todos los productos en 1 linea
    // console.log(productos[i]);
}