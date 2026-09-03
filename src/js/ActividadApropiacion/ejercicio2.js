// 2. Identificando código bloqueante 
// Ejercicio: 
// Crea un ciclo muy grande (por ejemplo, uno que cuente hasta millones) y observa cómo afecta la  
// ejecución del programa. Meta: evidenciar cómo una tarea pesada bloquea el hilo principal. 

export function cicloGigante() {

console.log("Inicio del ciclo gigante");

for (let i = 0; i < 300000; i++) {
    console.log("Estamos en el ciclo: ", i);
}
// en este caso quedo totalmente bloqueado ya que tengo que esperar a que el ciclo termine
console.log("Fin del ciclo gigante");

}
