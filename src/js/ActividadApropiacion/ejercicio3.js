// 3. Manejo de asincronía con Callbacks 
// Ejercicio: 
// Crear una función llamada procesarPedido que simule un pedido de comida con un 
// setTimeout de  3 segundos y que reciba un callback para mostrar un mensaje final, 
// por ejemplo: “Pedido  entregado”. Meta: comprender la ejecución diferida. 

export function procesarPedido (callback) {

    console.log("Tu pedido ha sido agendado");
    
    setTimeout (() => {
        console.log("Pedido entregado correctamente");
        callback();
    }, 3000);
}
