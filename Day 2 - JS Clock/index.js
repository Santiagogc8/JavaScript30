const secHand = document.querySelector('.sec-hand'); // Se obtiene la manecilla de los segundos
const minHand = document.querySelector('.min-hand'); // Se obtiene la manecilla de los minutos
const hourHand = document.querySelector('.hour-hand'); // Se obtiene la manecilla de las horas
const hour = document.querySelector('.hour'); // Se obtiene el p con la hora

function setDate(){ // Se crea una variable para setear el date
    const now = new Date(); // Creamos una nueva date con el objeto Date()
    const seconds = now.getSeconds(); // Obtenemos los segundos con el metodo getSeconds del objeto date
    const secondsDeg = ((seconds / 60) * 360) + 90; // Dividimos los segundos en 60 (1 minuto) y lo multiplicamos por 360 (cada deg del circulo) y le sumamos 90 (grados en .hand transform: rotate(90deg); CSS)

    if (seconds === 0) { // Si los segundos son igual a 0, entonces:
        secHand.style.transition = 'none'; // Desactiva temporalmente la transición
    } else { // En caso de que no sea 0,
        secHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)'; // Restaura la transición
    }

    secHand.style.transform = `rotate(${secondsDeg}deg)` // Movemos la manecilla de los segundos el numero dividido en secondsDeg = ((seconds / 60) * 360);

    const mins = now.getMinutes(); // Obtenemos los minutos a traves del metodo getMinutes
    const minsDeg = ((mins / 60) * 360) + 90; // Creamos los grados que va a tener nuestra manecilla
    minHand.style.transform = `rotate(${minsDeg}deg)` // Movemos la manecilla 

    const hours = now.getHours();
    const hourDeg = ((hours / 12) * 360) + 90; // Dividimos las horas esta vez entre 24 (ya que son el total de horas) y multiplicamos igual por 360 sumando los 90
    hourHand.style.transform = `rotate(${hourDeg}deg)` // Movemos la manecilla

    hour.innerHTML = `${hours}: ${mins}: ${seconds}` // Se cambia la hora en el p para que se vea de manera dinamica

}

setInterval(setDate, 1000);