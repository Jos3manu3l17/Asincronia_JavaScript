const usuario = {
    nombre: "Carlos",
    correo: "carlos@gmail.com",
    documento: "123456"
};

const tiempos = {
    correo: 2000,
    documento: 4000,
    disponibilidad: 3000
};


function validarCorreo(correo, tiempo) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (correo.includes("@")) {
                resolve("Correo válido");
            } else {
                reject("Correo inválido");
            }

        }, tiempo);

    });
}


function validarDocumento(documento, tiempo) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            if (documento.length >= 6) {
                resolve("Documento válido");
            } else {
                reject("Documento inválido");
            }

        }, tiempo);

    });
}


function validarDisponibilidad(nombre, tiempo) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const disponible = Math.random() > 0.2;

            if (disponible) {
                resolve("Usuario disponible");
            } else {
                reject("Usuario no disponible");
            }

        }, tiempo);

    });
}


async function validarFormulario() {

    const inicio = Date.now();

    const validaciones = [
        validarCorreo(usuario.correo, tiempos.correo),
        validarDocumento(usuario.documento, tiempos.documento),
        validarDisponibilidad(usuario.nombre, tiempos.disponibilidad)
    ];


    const resultados = await Promise.allSettled(validaciones);


    console.log("\n===== RESULTADOS INDIVIDUALES =====");

    resultados.forEach((resultado, indice) => {

        if (resultado.status === "fulfilled") {

            console.log(
                `Validación ${indice + 1}: ${resultado.value}`
            );

        } else {

            console.log(
                `Validación ${indice + 1}: ${resultado.reason}`
            );

        }

    });


    const estados = {
        correo: resultados[0].status,
        documento: resultados[1].status,
        disponibilidad: resultados[2].status
    };


    console.log("\n===== ESTADOS =====");
    console.log(estados);


    const todasCorrectas = resultados.every(
        resultado => resultado.status === "fulfilled"
    );


    console.log("\n===== RESULTADO FINAL =====");

    if (todasCorrectas) {

        console.log("Formulario validado");

    } else {

        console.log("Validación fallida");

    }


    const fin = Date.now();

    const tiempoTotal = (fin - inicio) / 1000;

    console.log(`Tiempo total: ${tiempoTotal} segundos`);
}


validarFormulario();