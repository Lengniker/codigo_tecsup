// SWITCH

console.log(`Elegir Opciones:
1. Login
2. Ver Facturas
3. Ver Reportes`);

let rpta = +prompt("Ingresar Opcion:");

switch (rpta) {
  case 1:
    console.log(`Usted eligio iniciar sesion`);
    break;
    // break es una sentencia que sirve para romper la ejecucion
    // del codigo restante en la estructura
  case 2:
    console.log(`Usted desea ver las Facturas`);
    break;
  case 3:
    console.log(`Ustes desea ver Reportes`);
    break;
  default:
      console.log(`Por favor ingrese una opcion valida`);
    break;
}
console.log(`Fin del programa`);
