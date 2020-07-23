// JSON

let objePeru = {
    "Gentilicio": "Peruano",
    "ZonaHoraria": "GMT -05:00",
    "Departamentos": [
        {
            "Nombre": "Puno",
            "Gentilicio": "Puneño"
        },
        {
            "Nombre": "Arequipa",
            "Gentilicio": "Arequipeño"
        },
        {
            "Nombre": "Lima",
            "Gentilicio": "Limeño"
        },
        {
            "Nombre": "Tarapoto",
            "Gentilicio": "Tarapotino"
        }
    ],
}

console.log(`Total Departamentos: ${objePeru.Departamentos.length}`);
console.log(`Total Departamentos: ${objePeru["Departamentos"].length}`);

// API's
// practica de objetos