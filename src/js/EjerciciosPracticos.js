// A. Crea un ejemplo sincrónico y otro asincrónico explicando en un 
// comentario qué  diferencia observas. 

// console.log("Inicio");

// for (let i = 0; i < 500000; i++) {
//     console.log("Estamos en el ciclo: ", i);
// }
// // No se puede realizar otra accion, ya que si o si tiene que 
// // terminar el ciclo para poder continuar
// console.log("Fin");


// // Ejemplo Asincrono

// console.log("1. Primero");

// setTimeout(() => {
//     console.log("3. Tercero, despues de 5 segundos");
// }, 5000);

// // Puedo continuar realizando otras acciones mientras se procesa el tercer

// console.log("2. Segundo");

// B. Simula una operación bloqueante y explica por qué 
// afecta al flujo del programa.

// console.log("1. Un servidor recibe la solicitud del Usuario para descargar un archivo PDF de 5 GB");

// // Operacion bloqueante: simula que el programa se congela hasta que lea todo el archivo 
// console.log("2. Iniciando la lectura de un archivo pesado de 5GB... (Esperando al disco)");

// console.log("Procesando archivo gigante en PDF");

// console.log("3. Archivo leido con exito");

// // Esta linea no se ejecutará hasta que el archivo termine de leerse
// console.log("4. El servidor esta libre para atender al siguiente usuario");

// C. Crea un callback que dependa del resultado de un setTimeout. 

// function ProcesarTarea(callback) {
//     setTimeout(() => {
//         console.log("Ejecutando tarea");
//         callback();
//     }, 5000);
// }

// ProcesarTarea (()=> {
//     console.log("Tarea completada");
// });

// D. Implementa una promesa que pueda fallar usando reject. 

// const validarUsuario = new Promise ((resolve, reject) => {
    
//     let usuarioActivo = false;

//     if (usuarioActivo) {
//     resolve ("Usuario activo");
//     } else {
//         reject ("Algo salio mal")
//     }
// });

// validarUsuario.then((resultado) => {
//     console.log(resultado);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });


//   E. Escribe una función async que utilice await para esperar una promesa y 
// explique  dónde ocurre la asincronía. 

function esperar () {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve ("Promesa cumplida");
        }, 5000);
    })
}

async function ejecutar () {
    console.log("Inicio");

    const resultado = await esperar();

    console.log(resultado);
    console.log("Final");
}

ejecutar();











