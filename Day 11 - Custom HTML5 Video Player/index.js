// Obtenemos los elementos necesarios
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress'); 
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

function togglePlay(){ // Creamos una funcion que cambiara entre pausado y despausado
    if(video.paused){ // Si el video tiene el metodo, paused
        video.play(); // Cambia a play
    } else{ 
        video.pause(); // Caso contrario, lo pone en pausa
    }
}

function updateButton(){ // Tambien se crea una funcion para cambiar el icono del boton de pausa o despausa
    toggle.textContent = this.paused ? '►' : '❚❚'; // Se utiliza un operador ternario que valida si esta pausado y cambia el contenido del texto. En caso de que sea true, muestra ►. En caso falso, muestra ❚❚
}

function skip(){ // Tambien se crea una funcion para hacer skip en el video
    video.currentTime += parseFloat(this.dataset.skip); // Que accede al currentTime del video e iguala el tiempo a el data-skip definido en el HTML. Ese valor lo convierte en un numero real
}

function rangeUpdate(){ // Ahora se crea una funcion para cambiar el volumen o la velocidad de reproduccion
    video[this.name] = this.value; // Esta funcion hace que el nombre del rango seleccionado, sea igual a su valor. Es decir, si se selecciono el name="volume", su value cambia a this.value dependiendo de lo escogido por el usuario
}

function changeProgress(){ // Luego creamos una funcion para cambiar la barra de progreso
    const percent = (video.currentTime / video.duration) * 100; // Que divide el tiempo que tiene en el momento el video por la duracion total y eso lo multiplica por 100
    progressBar.style.flexBasis = `${percent}%`; // Y el valor de percent se lo pasamos al estilo del flex-basis
}

function scrub(e){ // Creamos una funcion que cambiara el tiempo del video y recibe un parametro
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration; // La funcion divide el offsetX del evento (la posicion del eje X donde se clicko) entre el offsetWidth de la barra de progreso (su total) y por ultimo lo multiplica por la duracion total del video
    video.currentTime = scrubTime; // Luego, el currentTime del video se actualiza al resultado de la operacion matematica
}

// Event listeners para pausar y dar play asi como para cambiar el icono
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', changeProgress); // El video escucha el evento de timeupdate y ejecuta la funcion progress para que se acutalice la progressBar

// Event listener para pausar o despausar el video desde el boton
toggle.addEventListener('click', togglePlay);

// Este crea un for each que tiene un boton y por cada boton, ejecuta skip cuando se hace click en el
skipButtons.forEach(button => button.addEventListener('click', skip));

// Tambien se crean forEach para que por cada rango, ejecute rangeUpdate cuando cambie y cuando se mueva el mouse
ranges.forEach(range => range.addEventListener('change', rangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', rangeUpdate));

// Creamos un event listener que escucha click y ejecuta scrub
progress.addEventListener('click', scrub);

let mousedown = false; // Luego creamos una variable que inicializamos en false

progress.addEventListener('click', scrub);
progress.addEventListener('mousedown', () => mousedown = true); // Escucha el evento de mousedown y mientras sea este el evento, lo cambia a true
progress.addEventListener('mouseup', () => mousedown = false); // En caso de que el click ahora se levante, lo vuelve a poner en false
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)); // Luego creamos una funcion que recibe un evento y si mousedown es verdadero recibe scrub y su evento para poder cambiar el valor del video