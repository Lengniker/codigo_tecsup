let objTienda = {
    nombre: "Capricho",
    categoria: "Postres",
    descripcion: "Tienda de postres Arequipeños",
    sucursales: [{
        nombre: "Capricho Mercaderes",
        telefono: "944254652"
    }, {
        nombre: "Capricho Lambramani",
        telefono: "944254611"
    }, {
        nombre: "Capricho EEUU",
        telefono: "944254012"
    }]
}
console.log(`---- CAPRICHOS ----`);
console.log(`Nombre: ${objTienda.nombre}`);
console.log(`Categoria: ${objTienda.categoria}`);
console.log(`Descripcion: ${objTienda.categoria}`);

console.log(`---- SUCURSALES ----`);
for (let i = 0; i < objTienda.sucursales.length; i++) {
    console.log(` **** `);
    console.log(`Sucursal: ${i + 1}`);
    console.log(`Nombre: ${objTienda.sucursales[i].nombre}`);
    console.log(`Telefono: ${objTienda.sucursales[i].telefono}`);
}