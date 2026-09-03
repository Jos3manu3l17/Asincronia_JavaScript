// 5. Transformando Callbacks en Promesas 
// Ejercicio: 
// Convertir el ejercicio anterior en una estructura basada en Promesas con .then(). Meta: 
// visualizar cómo mejora la legibilidad.

 export function tomandoDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const datos = "Datos obtenidos";

            console.log(datos);

            resolve(datos);
        }, 1000);
    });
}

export function procesandoDatos(datos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const resultado = datos + " y procesados";

            console.log(resultado);

            resolve(resultado);
        }, 2000);
    });
}

export function mostrandoResultado(resultado) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Resultado final:", resultado);

            resolve();
        }, 1000);
    });
}


