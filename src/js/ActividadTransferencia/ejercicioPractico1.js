// Gestión de una cola de atención
const Usuarios = [
    { nombre: "Juan", tiempoEspera: 5 },
    { nombre: "Bob", tiempoEspera: 3 },
    { nombre: "Maria", tiempoEspera: 7 },
    { nombre: "Ana", tiempoEspera: 2 }
];


function esperar (tiempo) {
    return new Promise ((resolve) => {
        setTimeout (resolve, tiempo * 1000);
});
};

async function procesarCola () {
    
    const inicioProceso = new Date();
    for (const usuario of Usuarios) {

        const inicio = new Date();

        console.log(`Atendiendo a ${usuario.nombre}...`);

        await esperar(usuario.tiempoEspera);
        const fin = new Date();

        const tiempoTranscurrido = (fin - inicio) / 1000;

        console.log(`Tiempo de espera para ${usuario.nombre}: ${tiempoTranscurrido} segundos`);
        
    }

    const finProceso = new Date();

    const tiempoTotal = (finProceso - inicioProceso) / 1000;
    
    console.log(`Tiempo total del proceso: ${tiempoTotal} segundos`);
}

procesarCola();