const inputs = document.querySelectorAll('.controls input'); // Obtenemos todos los input de la clase controls

function update () { // Creamos la funcion para actualizar
    const sizing = this.dataset.sizing || ''; // Creamos una variable que obtiene el atributo data-sizing y como fallback le ponemos nada
    document.documentElement.style.setProperty(`--${this.name}`, this.value + sizing) // Seleccionamos el documento, luego al elemento style en linea del documento, luego establecemos una nueva propiedad donde obtenemos la propiedad que se esta modificando en el root (base, color o blur), luego se agrega el valor mas el sizing (px) y en caso de que no tenga un data-sizing, no se le agrega nada (para el color por ejemplo)
}

inputs.forEach(i => i.addEventListener('change', update)) // Creamos un evento que escucha el cambio y ejecuta la funcion

inputs.forEach(i => i.addEventListener('mousemove', update)) // Creamos un evento que escucha el movimiento del mouse y ejecuta la funcion