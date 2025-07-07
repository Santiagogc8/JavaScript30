const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth; // Hace que crezca el canvas el ancho de la ventana
canvas.height = window.innerHeight; // Hace que crezca el canvas el alto de la ventana

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false; // Se crea una variable para que sea true solo cuando el usuario mantenga el click
let lastX = 0; // Se crean unas variables para poder ajustar el lugar del pintado en el eje X
let lastY = 0; // Se crean unas variables para poder ajustar el lugar del pintado en el eje Y
let hue = 0; // Establecemos una variable para guardar el color inicial de hsl
let size = true;

function draw(e){
    if(!isDrawing) return; // Para la funcion cuando el usuario no tiene oprimido el boton del mouse
    ctx.beginPath(); // Inicia un trazo
    ctx.moveTo(lastX, lastY); // Inicia desde la variable lastX y lastY
    ctx.lineTo(e.offsetX, e.offsetY); // Hace la linea hasta donde el offset cambie en el evento
    ctx.stroke(); // Dibuja el trazo
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // Y le ponemos el color de hue con una saturacion de 100% y un brillo de 50
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Destructuramos en un array las posiciones de donde inicia y termina un trazo

    hue += 0.5; // E incrementa el valor para que vaya cambiando segun se va moviendo 

    if (hue >= 360){
        hue = 0;
    } // Controla que el hue no sea mayor a 360 y lo resetea a 0 en caso de que lo sea

    if (ctx.lineWidth >= 150 || ctx.lineWidth <= 10){ // Y creamos un if que, en caso de que line width sea igual o mayor a 100 O si es menor o igual a 1
        size = !size; // Alterna el valor de size
    }

    if(size){ // Si size es true, entonces incrementa el valor del lineWidth
        ctx.lineWidth+= 0.2;
    } else{ // Si size es false, entonces decrementa el valor del lineWidth
        ctx.lineWidth-= 0.2;
    }

    
}

canvas.addEventListener('mousedown', (e) => { // Creamos un eventListener que escucha el click mantenido
    isDrawing = true; // Y cambia el valor de la variable isDrawing a true para que pueda dibujar
    [lastX, lastY] = [e.offsetX, e.offsetY]; // Y destructuramos para que empiece siempre un nuevo trazo y no continue con el anterior
});

canvas.addEventListener('mousemove', draw); // Ejecuta la funcion draw cuando se mueve el mouse
canvas.addEventListener('mouseup', () => isDrawing = false); // Cambia el valor de isDrawing a false cuando el usuario deja de oprimir el click
canvas.addEventListener('mouseout', () => isDrawing = false); // Cambia el valor de isDrawing a false cuando el usuario quita el click de la ventana