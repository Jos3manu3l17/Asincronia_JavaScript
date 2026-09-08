const usuario = {
    id: "USR001"
};

const tiempos = {
    A: 3000,
    B: 2000,
    C: 4000,
    D: 2000
};

// Indica qué servicios queremos hacer fallar
const fallos = {
    A: false,
    B: false,
    C: false,
    D: false
};

const resultados = {};
const ordenFinalizacion = [];


function servicioA(usuario) {

    const inicio = Date.now();

    console.log("Iniciando Servicio A...");

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const tiempo = (Date.now() - inicio) / 1000;

            if (fallos.A) {

                ordenFinalizacion.push("A ");

                reject({
                    servicio: "A",
                    error: "No se pudo consultar la disponibilidad",
                    tiempo: tiempo
                });

            } else {

                ordenFinalizacion.push("A ");

                resolve({
                    servicio: "A",
                    resultado: "Recurso disponible",
                    tiempo: tiempo
                });
            }

        }, tiempos.A);
    });
}


function servicioB(usuario) {

    const inicio = Date.now();

    console.log("Iniciando Servicio B...");

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const tiempo = (Date.now() - inicio) / 1000;

            if (fallos.B) {

                ordenFinalizacion.push("B ");

                reject({
                    servicio: "B",
                    error: "No se pudo obtener la información del usuario",
                    tiempo: tiempo
                });

            } else {

                ordenFinalizacion.push("B ");

                resolve({
                    servicio: "B",
                    nombre: "Carlos Pérez",
                    correo: "carlos@gmail.com",
                    tiempo: tiempo
                });
            }

        }, tiempos.B);
    });
}


function servicioC(usuario) {

    const inicio = Date.now();

    console.log("Iniciando Servicio C...");

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const tiempo = (Date.now() - inicio) / 1000;

            if (fallos.C) {

                ordenFinalizacion.push("C");

                reject({
                    servicio: "C",
                    error: "No se pudo consultar el historial",
                    tiempo: tiempo
                });

            } else {

                ordenFinalizacion.push("C ");

                resolve({
                    servicio: "C",
                    acciones: [
                        "Compra realizada",
                        "Inicio de sesión",
                        "Consulta de producto"
                    ],
                    tiempo: tiempo
                });
            }

        }, tiempos.C);
    });
}


function servicioD(datosUsuario, historial) {

    const inicio = Date.now();

    console.log("Iniciando Servicio D...");

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const tiempo = (Date.now() - inicio) / 1000;

            if (fallos.D) {

                ordenFinalizacion.push("D ");

                reject({
                    servicio: "D",
                    error: "No se pudieron generar recomendaciones",
                    tiempo: tiempo
                });

            } else {

                ordenFinalizacion.push("D ");

                resolve({
                    servicio: "D",
                    recomendaciones: [
                        "Laptop",
                        "Audífonos",
                        "Mouse"
                    ],
                    tiempo: tiempo
                });
            }

        }, tiempos.D);
    });
}


async function integrarUsuario() {

    const inicioGeneral = Date.now();

    console.log("\n================================");
    console.log("      INTEGRACIÓN DE USUARIO");
    console.log("================================");

    console.log(`Usuario: ${usuario.id}`);


    // A, B y C comienzan en paralelo
    const promesaA = servicioA(usuario);
    const promesaB = servicioB(usuario);
    const promesaC = servicioC(usuario);


    // Esperamos individualmente cada resultado
    const resultadosABC = await Promise.allSettled([
        promesaA,
        promesaB,
        promesaC
    ]);


    console.log("\n===== RESULTADOS A, B Y C =====");


    resultadosABC.forEach((resultado) => {

        if (resultado.status === "fulfilled") {

            resultados[resultado.value.servicio] = resultado.value;

            console.log(
                `Servicio ${resultado.value.servicio}:`,
                resultado.value
            );

        } else {

            resultados[resultado.reason.servicio] = resultado.reason;

            console.log(
                `Servicio ${resultado.reason.servicio}:`,
                resultado.reason.error
            );
        }
    });


    // Verificamos si B y C fueron exitosos
    const servicioBExitoso =
        resultadosABC[1].status === "fulfilled";

    const servicioCExitoso =
        resultadosABC[2].status === "fulfilled";


    // D depende de B y C
    if (servicioBExitoso && servicioCExitoso) {

        try {

            const resultadoD = await servicioD(
                resultados.B,
                resultados.C
            );

            resultados.D = resultadoD;

            console.log("\n===== RESULTADO SERVICIO D =====");

            console.log("Servicio D:", resultadoD);

        } catch (error) {

            resultados.D = error;

            console.log(
                "Servicio D:",
                error.error
            );
        }

    } else {

        console.log(
            "\nServicio D no se ejecutó porque B o C fallaron."
        );

        resultados.D = {
            servicio: "D",
            estado: "No ejecutado",
            error: "Faltan datos de B o C"
        };
    }


    const finGeneral = Date.now();

    const tiempoTotal =
        (finGeneral - inicioGeneral) / 1000;


    console.log("\n================================");
    console.log("       INFORME FINAL");
    console.log("================================");


    console.log("\nResultados:");

    console.log(resultados);


    console.log("\nTiempo total:");

    console.log(`${tiempoTotal} segundos`);


    console.log("\nOrden real de finalización:");

    ordenFinalizacion.forEach((servicio, indice) => {

        console.log(
            `${indice + 1}. Servicio ${servicio}`
        );

    });


    const errores = Object.values(resultados)
        .filter(resultado => resultado.error);


    console.log("\n===== ESTADO GENERAL =====");


    if (errores.length === 0) {

        console.log("Integración exitosa");

    } else {

        console.log("Error general en la integración");

    }
}


integrarUsuario();