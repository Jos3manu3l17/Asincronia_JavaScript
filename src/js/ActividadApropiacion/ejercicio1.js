// 1. Explorando la asincronía básica 

// Escribe un código que imprima “Inicio”, luego una operación con setTimeout que tarde 
// 2 segundos  y finalmente “Fin”. Meta: que reconozcan el orden real de ejecución. 

console.log("Inicio");

setTimeout (() => {
    console.log("Operacion que tarda 2 segundos");
}, 2000);

console.log("Fin");

