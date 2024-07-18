// Función para adivinar el número
function adivinarNumero() {
    let min = 1;
    let max = 100;
    let adivinado = false;

    // Función para generar un número aleatorio entre min y max
    function generarNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Bucle para adivinar el número
    while (!adivinado) {
        let numeroAdivinar = generarNumeroAleatorio(min, max);
        let respuesta = prompt(`¿Es este tu número? ${numeroAdivinar}\n Escribe "si" si es correcto, o da click en cancelar para volver a intentar.`);

        if (respuesta === null) {
            // Si el usuario cancela, vuelve a preguntar
            continue;
        } else if (respuesta.toLowerCase() === 'si') {
            // Si el usuario confirma que es el número
            let confirmacion = confirm(`¡Adiviné tu número! El número es: ${numeroAdivinar}\n¿Quieres jugar de nuevo?`);
            if (confirmacion) {
                // Reiniciar el juego
                adivinado = true; // Termina el bucle
            } else {
                // Salir del juego
                break;
            }
        } else {
            // Si no es el número, vuelve a preguntar
            alert("Vamos a intentarlo de nuevo.");
        }
    }
}