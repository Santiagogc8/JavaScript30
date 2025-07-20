// Seleccionamos el elemento HTML con la clase 'hero'. Este será nuestro contenedor principal.
const hero = document.querySelector('.hero');
// Seleccionamos el elemento <h1> que está dentro de 'hero'. A este le aplicaremos la sombra.
const text = hero.querySelector('h1');
// Definimos la distancia máxima en píxeles que la sombra se moverá.
const walk = 100; //px

// Función que se ejecuta cada vez que el mouse se mueve sobre el 'hero'.
// 'e' es el objeto de evento, que contiene información sobre el mouse.
function shadow (e){
    // Obtenemos el ancho total del 'hero'.
    const width = hero.offsetWidth;
    // Obtenemos la altura total del 'hero'.
    const height = hero.offsetHeight;

    // Obtenemos las coordenadas X e Y del mouse relativas al elemento actual.
    let x = e.offsetX;
    let y = e.offsetY;

    // Si el elemento sobre el que estamos ('e.target') no es el 'hero' ('this'),
    // significa que estamos sobre un hijo (ej. el h1).
    // Corregimos las coordenadas para que sean relativas al 'hero' padre.
    if (this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // Calculamos el desplazamiento horizontal de la sombra:
    // 1. (x / width): Proporción de la posición X del mouse dentro del 'hero' (0 a 1).
    // 2. * walk: Escalamos esa proporción a nuestra distancia máxima de 'walk'.
    // 3. - (walk / 2): Centramos el movimiento para que la sombra vaya tanto a la izquierda como a la derecha del texto.
    const xWalk = Math.round( x / width * walk ) - (walk / 2);
    const yWalk = Math.round( y / height * walk ) - (walk / 2);

    // Aplicamos la sombra al estilo del texto del <h1>.
    // Usamos template literals para insertar los valores calculados.
    // Creamos dos sombras: una en (xWalk, yWalk) y otra opuesta en (-xWalk, -yWalk) para el efecto dual.
    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 2px lime,
    ${xWalk * -1}px ${yWalk * -1}px 2px cyan` // Segunda sombra: posición opuesta, desenfoque y color.
}

// Añadimos un "escuchador de eventos" al 'hero'.
// Cuando el mouse se mueva ('mousemove') sobre el 'hero', se ejecutará la función 'shadow'.
hero.addEventListener('mousemove', shadow);