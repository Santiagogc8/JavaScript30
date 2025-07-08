const pressed = []; // Establecemos un array vacio para guardar el codigo
const secretCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter']; // Establecemos el codigo secreto 
const paragraph = document.querySelector('.hint');

window.addEventListener('keyup', (e) => { // Creamos una funcion que escucha cuando se presiona y levanta una tecla y capturamos el evento
    console.log(e.key);
    pressed.push(e.key); // El key del evento (el valor de la tecla), lo agregamos al array para que este lo contenga
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); // Luego, se "corta" el arreglo pressed para que solo "lea" los ultimos 11 elementos del array. de la manera. empieza desde la longitud final del arreglo (sea cual sea la longitud) a eso le resta 1 para que si sea la final. Luego corta la longitud del array con la longitud del secret code (11)

    if(pressed.join('') === secretCode.join('')){ // Ahora creamos un if que convierte los dos arrays en strings con el metodo join que no ingresa nada dentro de cada espacio y los compara. Si son estrictamente iguales, ejecuta:
        cornify_add(); // El script de cornify_add
        paragraph.innerHTML = "Make it again!!"; // Y cambia el texto de pista para el usuario
        pressed.length = 0; // Luego, limpia el arreglo dejandolo vacio de nuevo
    }
});