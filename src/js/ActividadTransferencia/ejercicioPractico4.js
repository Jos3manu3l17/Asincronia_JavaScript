const pedido = {
    id: "PED001",
    cantidad: 2
};

function esperar(tiempo) {
    return new Promise(resolve => {
        setTimeout(resolve, tiempo * 1000);
    });
}

async function procesarPedido() {

    console.log("Pedido iniciado:", pedido.id);

    // Recomendaciones empiezan en paralelo
    const recomendaciones = esperar(4).then(() => {
        console.log("Recomendaciones terminadas");
    });

    // 1. Validar stock
    console.log("Validando stock...");
    await esperar(3);
    console.log("Stock validado");

    // 2. Calcular costos
    console.log("Calculando costos...");
    await esperar(2);
    console.log("Costos calculados");

    // 3. Generar factura
    console.log("Generando factura...");
    await esperar(2);
    console.log("Factura generada");

    // Esperamos las recomendaciones
    await recomendaciones;

    console.log("Pedido terminado");
}

procesarPedido();