const paquetes = [
    { id: "P001", tiempo: 5 },
    { id: "P002", tiempo: 2 },
    { id: "P003", tiempo: 4 },
    { id: "P004", tiempo: 1 }
];

const ordenFinalizacion = [];

function entregarPaquete(paquete) {

    return new Promise((resolve, reject) => {

        console.log(`Iniciando entrega ${paquete.id}...`);

        setTimeout(() => {

            const fallo = Math.random() < 0.2;

            if (fallo) {

                reject(`Error al entregar el paquete ${paquete.id}`);

            } else {

                ordenFinalizacion.push(paquete.id);

                resolve(`Paquete ${paquete.id} entregado correctamente`);
            }

        }, paquete.tiempo * 1000);

    });
}

async function procesarEntregas() {

    const entregas = paquetes.map(
        paquete => entregarPaquete(paquete)
    );

    const resultados = await Promise.allSettled(entregas);

    console.log("\n===== RESULTADOS =====");

    resultados.forEach((resultado, indice) => {

        const paquete = paquetes[indice];

        if (resultado.status === "fulfilled") {

            console.log(`${paquete.id}: ${resultado.value}`);

        } else {

            console.log(`${paquete.id}: ${resultado.reason}`);

        }
    });

    const exitosas = resultados.filter(
        resultado => resultado.status === "fulfilled"
    ).length;

    const fallidas = resultados.filter(
        resultado => resultado.status === "rejected"
    ).length;

    console.log("\n===== INFORME FINAL =====");

    console.log(`Total de paquetes: ${paquetes.length}`);
    console.log(`Entregas exitosas: ${exitosas}`);
    console.log(`Entregas fallidas: ${fallidas}`);

    console.log("\nOrden de finalización:");

    ordenFinalizacion.forEach((id, indice) => {
        console.log(`${indice + 1}. ${id}`);
    });
}

procesarEntregas();