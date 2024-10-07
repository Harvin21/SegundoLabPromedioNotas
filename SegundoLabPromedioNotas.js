//Array de notas
const notas = [7, 8.5, 7.5, 10, 9];
const nombre = "Harvin"; //Nombre del estudiante

//Función que calcula el promedio
function calcularPromedio(notas) {
    let suma = 0;
    
    //Sumar las notas
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    
    //Calcular el promedio
    let promedio = suma / notas.length;
    
    return promedio;
}

//Llamar a la función y almacenar el resultado
let promedioFinal = calcularPromedio(notas);

//Mostrar el resultado
console.log("El promedio de las notas de " + nombre + " es: " + promedioFinal.toFixed(2));