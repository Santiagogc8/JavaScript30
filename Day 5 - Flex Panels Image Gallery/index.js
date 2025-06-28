const panels = document.querySelectorAll('.panel'); // Obtenemos todos los elementos de clase panel

function open(){ // Creamos una funcion que 
    this.classList.toggle('open'); // A los elementos obtenidos por el event listener, les agregara una clase open, y si ya la tiene, se la eliminara
}

function active(e){ // Luego, validamos otra funcion que recibe un evento
    if(e.propertyName.includes('flex')){ // Del evento extraemos el propertyName, y si este incluye name:
        this.classList.toggle('open-active'); // Agregamos la clase open-active, y si ya la tiene, la borramos
    }
}

panels.forEach(panel => panel.addEventListener('click', open)); // Por cada panel, agregamos un eventListener que valida el click y ejecuta open
panels.forEach(panel => panel.addEventListener('transitionend', active)); // Por cada panel, agregamos un event listener que valida cuando terminan las transiciones que tienen flex