// Hacer un programa que indique ingresar al usuario
// las 3 primeras letras de un dia de la semana
// y que el programa complete el dia de la semana (lo imprima)

let ingreso = prompt(`ingrese las 3 primeras letras del dia de la semana (min)(MAYUS)`);

if (ingreso === "lun" || ingreso === "LUN") {
    console.log(`El dia es Lunes`);
}else{
    if (ingreso === "mar" || ingreso === "MAR") {
        console.log(`El dia es Martes`);
    }else{
        if (ingreso === "mie" || ingreso === "MIE") {
            console.log(`El dia es Miercoles`);
        }else{
            if (ingreso === "jue" || ingreso === "JUE") {
                console.log(`El dia es Jueves`);
            }else{
                if (ingreso === "vie" || ingreso === "VIE") {
                    console.log(`El dia es Viernes`);
                }
                else{
                    if (ingreso === "sab" || ingreso === "SAB") {
                        console.log(`El dia es Sabado`);
                    }else{
                        if (ingreso === "domingo" || ingreso === "DOM") {
                            console.log(`El dia es Domingo`);
                        }
                    }
                }
            }
        }
    }
}