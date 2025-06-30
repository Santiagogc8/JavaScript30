const playAudio = (e) => { // Se crea la funcion para reproducir el audio

    let keyCode; // Se crea una variable para guardar los codigos de las teclas

    // Detecta si el evento es un 'keydown' (teclado) o un 'click' (ratón)
    if (e.type === 'keydown') {
        // Luego creamos una variable que obiente la etiqueta audio con el atributo creado data-key. Y, accediendo a los valores del evento, extraemos el keyCode que posteriormente se evaluara a traves del atributo creado "data-key". Por ejemplo, si se presiona a, data-key = 65

        keyCode = e.keyCode; // Se reemplaza keyCode con el keyCode del evento

    } else if (e.type === 'click') { // En caso de que sea click en vez de keydown:

        const clickedKeyElement = e.target.closest('.key'); // Busca el ancestro (padre, abuelo, etc.) más cercano del e.target que tenga la clase .key

        if (clickedKeyElement) { // Si clickedKeyElement es verdadero

            keyCode = clickedKeyElement.dataset.key; // entonces podemos acceder a sus atributos de datos, entonces clickedKeyElement.dataset.key daria el valor "65". Este valor es el que luego usamos como keyCode para encontrar el audio y la tecla visual correspondiente

        } else { // En caso negativo, termina la funcion
            return;
        }
    }

    if (!keyCode) return; // Si es diferente de keyCode(null), termina la funcion

    //Obtiene la etiqueta audio junto con su atributo propio data-key
    const getAudio = document.querySelector(`audio[data-key="${keyCode}"]`);

    // Obtiene el data-key del div con la clase .key
    const pressKey = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!getAudio) return; // Se termina la funcion si es contrario a playAudio, o sea, null

    getAudio.currentTime = 0; // Devuelve el audio a 0 para que se pueda reproducir cada vez que se oprima la tecla

    getAudio.play(); // En caso de que si valga (no sea null), reproduce el audio 

    // Solo agrega la clase 'playing' si la tecla visual existe
    if (pressKey) {
        pressKey.classList.add('playing'); // Agrega la clase playing que aplica los efectos
    }
}

window.addEventListener('keydown', playAudio); // Escucha el evento de presion de tecla
window.addEventListener('click', playAudio); // Escucha el evento de click


// Se toma todos los elementos con clase key
const keys = document.querySelectorAll('.key')


// Se crea una nueva funcion
function removeTransform(e){

    // Si propertyName del evento "transitionend", es diferente de transform, retorna la funcion
    if(e.propertyName !== 'transform') return;

    this.classList.remove('playing'); // luego, para el propio key, se remueve la clase playing
}

keys.forEach(key => key.addEventListener('transitionend', removeTransform)) // Y por cada elemento de keys, se escucha el evento "transitionend (termina una transicion)" y se aplica la funcion removeTransform