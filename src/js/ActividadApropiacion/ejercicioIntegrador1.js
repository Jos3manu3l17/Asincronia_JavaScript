// proceso con callbackL ------

// function buscarUsuario (callback) {
//     setTimeout (() => {
//         console.log("Usuario encontrado");
//         callback();
//     }, 1000);
// }

// function consultarPermisos(callback) {
//     setTimeout(() => {
//         console.log("Permisos consultados");
//         callback();
//     }, 2000);
// }

// function generarReporte(callback) {
//     setTimeout(() => {
//         console.log("Reporte generado");
//         callback();
//     }, 1000);
// }

// buscarUsuario (() => {
//     consultarPermisos (() => {
//         generarReporte (() => {
//             console.log("Proceso terminado");
            
//         });
//     });
// });

// Proceso con promesas --------

// function buscarUsuario() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Usuario encontrado");
//             resolve();
//         }, 1000);
//     });
// }

// function consultarPermisos() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Permisos consultados");
//             resolve();
//         }, 2000);
//     });
// }

// function generarReporte() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Reporte generado");
//             resolve();
//         }, 1000);
//     });
// }

// buscarUsuario()
//     .then(() => consultarPermisos())
//     .then(() => generarReporte())
//     .then(() => {
//         console.log("Proceso terminado");
//     });


//Proceso con asinc/await

function buscarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Usuario encontrado");
        }, 1000);
    });
}

function consultarPermisos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Permisos consultados");
        }, 2000);
    });
}

function generarReporte() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Reporte generado");
        }, 1000);
    });
}


async function proceso() {

    console.log("Iniciando proceso...");

    const usuario = await buscarUsuario();
    console.log(usuario);

    const permisos = await consultarPermisos();
    console.log(permisos);

    const reporte = await generarReporte();
    console.log(reporte);

    console.log("Proceso terminado");
}


proceso();
