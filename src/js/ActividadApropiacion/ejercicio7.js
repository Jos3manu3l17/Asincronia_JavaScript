// 7. Uso de Async/Await 
// Ejercicio: 
// Crear una función async que espere una promesa de 2 segundos y luego muestre el resultado. 
// Meta: comprender cómo await pausa la ejecución sin bloquear el hilo. 

export function esperarDosSegundos () {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve ("La promesa termino")
        }, 2000);
    });
}

export async function ejecutar() {
    console.log("Esperar");
    
    const resultado = await esperarDosSegundos();

    console.log(resultado);
    
    console.log("Fin");
};
