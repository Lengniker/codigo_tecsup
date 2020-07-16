// WHILE

let numero = 0;

console.log(`Valor inicial: ${numero}`);
while (numero < 8) {
    // cuando la condicion es verdadera
    console.log(`Iteracion (` + numero + `) = ${numero}`);
    numero = numero +1;
    // numero ++;
}
console.log(`Valor final: ${numero}`);

console.log(`-----------------`);

// tabla de multiplicar
let base = +prompt(`Ingrese numero`);
let contador = 0;

while (contador <= 12) {
    console.log(`${base} x ${contador} = ${base * contador}`);
    contador = contador + 1;
    // El contador no se modifica, solo se utiliza
}