// 6. Manejo de errores con Promesas 
// Ejercicio: 
// Crear una promesa que simule un proceso que puede fallar 50% de las veces usando resolve 
// y  reject. Meta: entender .catch() y la importancia del manejo de errores. 


 export function procesoProbabilidad () {
    return new Promise ((resolve, reject) => {

        console.log("Procesando...");

        setTimeout (() => {
            const probabilidad = Math.random();

            if (probabilidad < 0.5) {
                resolve ("El proceso termino correctamente")
            } else {
                reject ("EL proceso fallo")
            }
        }, 2000);
    });
}

