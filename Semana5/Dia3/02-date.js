// Date() clase cuyos objetos trabajan con fechas

let hoy = new Date();
console.log(hoy);

/**
 * getFullYear() retorna el año de una variable de tipo fecha
 */
let anioActual = hoy.getFullYear();
console.log("Año Actual: " + anioActual);
console.log(anioActual);

/**
 * getMonth() retorna una variable de tipo fecha
 * Ojo: Enero empieza con el valor 0, diciembre 11
 */
let mesActual = hoy.getMonth();
console.log("Mes Actual: " + mesActual);
console.log(mesActual);

/**
 * getDate() retorna el dia del calendario de una variable DATE
 */
let diaCalendarioActual = hoy.getDate();
console.log("Dia del Calendario Actual: "+ diaCalendarioActual);
console.log(diaCalendarioActual);

/**
 * libreria "moment.js" para las fechas
 */
let stringFecha = `${diaCalendarioActual}-${mesActual + 1}-${anioActual}`;
console.log("Fecha en String: "+ stringFecha);
console.log(stringFecha);

/**
 * getDay() retorna el dia de la semana
 * OJO: Domingo empieza en 0
 */

let diaSemana = hoy.getDay();
console.log("Dia de ka semana: " + diaSemana);
console.log(diaSemana);

/**
 * getHours() retorna al hora
 */
let horaActual = hoy.getHours();
console.log("Hora Actual: "+ horaActual);
console.log(horaActual);

/**
 * getMinutes() retorna los minutos
 */
let minutoActual = hoy.getMinutes();
console.log("Minuto Actual: "+ minutoActual);
console.log(minutoActual);

/**
 * getSeconds() retorna los segundos
 */
let segundoActual = hoy.getSeconds();
console.log("Segundo Actual: "+ segundoActual);
console.log(segundoActual);
/**
 * getMilliseconds() retorna los milisegundos
 */
let milisegundoActual = hoy.getMilliseconds();
console.log("Milisegundo Actual: "+ milisegundoActual);
console.log(milisegundoActual);

/**
 * Iniciar una variable de tipo Fecha
 * Ubicado en Navidad por ejemplo
 * nre Date(anio?, mes?, dia?, horas?, minutos?, segundos?);
 */

let navidad2020 = new Date(2020, 11, 25);
console.log(navidad2020);

/**
 * La diferencia de las fechas en millisegundos
 */
let navidadMenosHoy = navidad2020 - hoy;
console.log(navidadMenosHoy);

let semanasParaNavidad = ((((navidadMenosHoy/1000)/60)/60)/24)/7;
console.log(`Semanas para Navidad: ${semanasParaNavidad}`);
