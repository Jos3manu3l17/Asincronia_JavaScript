// console.log("Inicio");
// setTimeout(() => {
//     console.log("Primer mensaje después de 5 segundos");
// }, 5000);

// console.log("final");

// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0);

// console.log("3");

// function terminar() {
//     console.log("Proceso terminado");
// }

// setTimeout(terminar, 2000);

// const promesa = new Promise((resolve, reject) => {

//     const correcto = true;

//     if (correcto) {
//         resolve("Todo correcto");
//     } else {
//         reject("Algo salió mal");
//     }
// });

// promesa.then((resultado) => {
//     console.log(resultado);
// });


// function procesarUsuario (nombre, callback) {

//     console.log("Procesando usuario");
//     setTimeout(() => {
//     console.log("Usuario procesado");
//     callback(nombre);
//     }, 2000);
// }

// procesarUsuario ("Jose", (nombre) => {
//     console.log("Bienvenido ", nombre);
// })

function procesarUsuario(nombre) {

    return new Promise ((resolve, reject) => {

        setTimeout(() => {

            if (nombre) {
                resolve(`Usuario ${nombre} procesado`);
            } else {
                reject("No se ha proporcionado un nombre de usuario");
            }
            
        }), 2000;
    })
}

procesarUsuario("Jose") 
.then((resultado) => {
    console.log(resultado);
})

.catch ((error) => {
    console.log("Error ", error);
    
});