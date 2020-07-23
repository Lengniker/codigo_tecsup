console.log(`---- MAP ----`);

// Map es mas flexible que filter, ya que puede transformar los elementos y mas.
/**
 * Devuelve un arreglo de la misma cantidad de elementos del arreglo original
 * con las transformaciones que el usuario le haga a cada e,emento.
 * A diferencia del "filter", la funcion "map" no puede retornar menos elementos.
 */

let nombres = ["joaquin", "Maria", "Thamara", "Alison", "Jorge"];

// let nombresMayusculas = nombres.map((name) => {
//   // return name.toUpperCase();
//   return {
//     original: name,
//     minuscula: name.toLowerCase(),
//     mayuscula: name.toUpperCase(),
//   };
// });

// console.log(nombresMayusculas);

let nombresMayusculas = nombres.map((name, i) => {
  if (i % 2 === 0) {
    return {
      original: name,
      minuscula: name.toLowerCase(),
      mayuscula: name.toUpperCase(),
    };
  }
});

console.log(nombresMayusculas);

// ------------------------
// array.splice(posicion_inicia, elementos_a_eliminar, elementos_a_insertar)
console.log("///////////SPLICE//////////");
let productos = [
  "TV Samsung",
  "Tablet Android",
  "Laptop Razer",
  "Smartphone Xiaomi",
];
// A partir de la posición 1, eliminar 1 elemento
productos.splice(1, 1);
console.log(productos);
// A partir de la posición 0, eliminar 1 elemento e insertar el elemento "PC gamer"
productos.splice(0, 1, "PC gamer");
console.log(productos);
// A partir de la posición 2, no eliminar elementos e insertar 2 nuevos elementos
productos.splice(2, 0, "Mouse HyperX", "Audífonos Razer");
console.log(productos);

// --------- indexOf -------
console.log("/////indexOf////");
let posicionMouse = productos.indexOf("Mouse HyperX");
console.log("Posición del mouse:");
console.log(posicionMouse);

// -------- pop -----------
// Sirve para extraer el último de un arreglo
// la función además, retorna dicho elemento
console.log("//////////////pop////////////");
let elementoEliminado = productos.pop();
console.log(`Eliminaste: ${elementoEliminado}`);
console.log(productos);