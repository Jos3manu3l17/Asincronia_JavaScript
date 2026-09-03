// 4. Encadenamiento de Callbacks (Callback Hell controlado) 
// Ejercicio: 
// Crear tres procesos consecutivos (por ejemplo: tomar datos → procesar datos → mostrar  resultado), 
// cada uno con un setTimeout, y enlazarlos mediante callbacks. 
// Meta: mostrar la complejidad que aparece cuando las tareas dependen unas de otras. 


export function tomarDatos(callback) {
    setTimeout(() => {
        const datos = "Datos obtenidos";

        console.log(datos);

        callback(datos);
    }, 1000);
}

export function procesarDatos(datos, callback) {
    setTimeout(() => {
        const resultado = datos + " y procesados";

        console.log(resultado);

        callback(resultado);
    }, 2000);
}

export function mostrarResultado(resultado, callback) {
    setTimeout(() => {
        console.log("Resultado final:", resultado);

        callback();
    }, 1000);
}
