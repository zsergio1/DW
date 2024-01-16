const ball = document.getElementById("ball"); // Obtener el elemento de la bola del css
const container = document.getElementById("container"); // Obtener el elemento del contenedor del css
let direction = 1; // Inicializar la dirección de movimiento de la bola (1 para derecha, -1 para izquierda)
let animationId; // Variable para almacenar el ID de la animación
let speed = 4; // Establecer una velocidad constante de movimiento de la bola
let paused = false; // Inicializar la variable de pausa de la animación como falso

function animateBall() {
    if (!paused) { // Verificar si la animación no está pausada
        const currentLeft = parseFloat(ball.style.left) || 0; // Obtener la posición actual de la bola desde el estilo CSS o establecerla en 0 si no está definida
        const containerWidth = container.clientWidth; // Obtener el ancho del contenedor
        const ballWidth = ball.clientWidth; // Obtener el ancho de la bola

        // Verificar si la bola alcanza los límites del contenedor en la dirección actual y cambiar la dirección si es necesario
        if (currentLeft + direction * speed + ballWidth > containerWidth || currentLeft + direction * speed < 0) {
            direction *= -1; // Invertir la dirección de movimiento
        }

        const newLeft = currentLeft + direction * speed; // Calcular la nueva posición izquierda de la bola
        ball.style.left = newLeft + "px"; // Actualizar la posición izquierda de la bola en el estilo CSS

        animationId = requestAnimationFrame(animateBall); // Solicitar la siguiente animación de fotograma para crear una animación continua
    }
}

function pauseAnimation() {
    paused = true; // Pausar la animación estableciendo la variable de pausa en verdadero
}

function resumeAnimation() {
    if (!paused) {
        return; // No reanudar si la animación ya está en progreso
    }
    paused = false; // Reanudar la animación estableciendo la variable de pausa en falso
    animateBall(); // Iniciar la animación nuevamente
}

function changeDirection() {
    direction *= -1; // Cambiar la dirección de movimiento de la bola (inversión)
}

function restartAnimation() {
    cancelAnimationFrame(animationId); // Cancelar la animación actual para detenerla
    ball.style.left = "0"; // Restablecer la posición izquierda de la bola
    direction = 1; // Restablecer la dirección de movimiento a la derecha
    animateBall(); // Iniciar la animación nuevamente
}

animateBall(); // Iniciar la animación de la bola cuando se carga la página
