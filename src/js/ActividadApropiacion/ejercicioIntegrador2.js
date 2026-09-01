// Proceso con callback

const ordenes = [
    { id: 1, cliente: "Ana", monto: 120000 },
    { id: 2, cliente: "Luis", monto: 80000 },
    { id: 3, cliente: "María", monto: 150000 }
];

// function verificar(orden, callback) {
//     setTimeout(() => {
//         console.log("Verificación completada");
//         callback();
//     }, 1500);
// }

// function procesar(orden, callback) {
//     setTimeout(() => {
//         console.log("Procesamiento completado");
//         callback();
//     }, 2000);
// }

// function registrar(orden, callback) {
//     setTimeout(() => {
//         console.log("Registro completado");
//         callback();
//     }, 1000);
// }

// function notificar(orden, callback) {
//     setTimeout(() => {
//         console.log("Notificación enviada");
//         callback();
//     }, 500);
// }

// verificar(ordenes[0], () => {

//     procesar(ordenes[0], () => {

//         registrar(ordenes[0], () => {

//             notificar(ordenes[0], () => {

//                 console.log("Orden terminada");

//             });

//         });

//     });

// });



// Proceso con promesas

// function verificar(orden) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Verificación completada");
//             resolve();
//         }, 1500);
//     });
// }

// function procesar(orden) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Procesamiento completado");
//             resolve();
//         }, 2000);
//     });
// }

// function registrar(orden) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Registro completado");
//             resolve();
//         }, 1000);
//     });
// }

// function notificar(orden) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Notificación enviada");
//             resolve();
//         }, 500);
//     });
// }

// verificar(ordenes[0])
//     .then(() => procesar(ordenes[0]))
//     .then(() => registrar(ordenes[0]))
//     .then(() => notificar(ordenes[0]))
//     .then(() => {
//         console.log("Orden terminada");
//     });

// proceso con asincAwait

function verificar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Verificación completada");
            resolve();
        }, 1500);
    });
}

function procesar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Procesamiento completado");
            resolve();
        }, 2000);
    });
}

function registrar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Registro completado");
            resolve();
        }, 1000);
    });
}

function notificar(orden) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Notificación enviada");
            resolve();
        }, 500);
    });
}



async function procesarOrden(orden) {

    console.log("Procesando orden:", orden.id);

    await verificar(orden);

    await procesar(orden);

    await registrar(orden);

    await notificar(orden);

    console.log("Orden", orden.id, "completada");
}

procesarOrden(ordenes[0]);
