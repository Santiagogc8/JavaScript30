const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'; // definimos la api en una variable

const cities = []; // Creamos un array vacio que recibira las ciudades

fetch(endpoint) // Y hacemos un fetch de la api
    .then(response => response.json()) // Que maneja el estado correcto convirtiendo la response en un json
    .then(data => cities.push(...data)) // Y por ultimo, pusheamos al array el data con el operador de propagacion para que lo propague correctamente

function find (word, cities){ // Se crea una funcion que recibe una palabra y el arreglo cities
    return cities.filter(place => { // Esta funcion retorna un filter que recibe un lugar 
        const regex = new RegExp(word, 'gi'); // Luego se crea una expresion regular que recibe una palabra y tiene unos modificadores. G, que busca todas las coincidencias (global), i, que ignora mayusculas y minusculas 
        return place.city.match(regex) || place.state.match(regex); // Devuelve el true o del estado en caso de que sea verdadero, y en caso de que sea verdadero, mantiene el objeto. en caso falso, devuelve null y descarta el elemento
    })
}

function numberWithCommas(x) {
    /* Se crea una funcion que recibe un parametro y lo convierte en un string
        1. busca un patrón en el texto y lo reemplaza con coma
        2. Usa una funcion regular que a traves de / muestra el inicio y el final de la expresion. Es aplicada global
        3. \B: Busca una posición que no sea un límite de palabra.
        4. (?= ... ) Busca hacia adelante en el texto para ver si se cumple una condición, pero sin "consumir" los caracteres
        5. (\d{3}) Busca exactamente un grupo de tres dígitos seguidos
        6. + Indica que el patrón anterior (el grupo de tres dígitos) puede repetirse una o más veces
        7. (?!\d) Esto es un "negative lookahead". Se asegura de que justo después de los grupos de tres dígitos no haya otro dígito.
    */
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function display(){ // Creamos una funcion para mostrar los resultados
    const match = find(this.value, cities); // Creamos una constante que hace una llamada de la funcion find que recibe el valor que tiene el elemento del dom que disparo el evento
    const res = match.map(place => { // Creamos una funcion map que recibe un lugar y retorna un list item con la ciudad, el estado y la poblacion de este lugar por cada elemento
        const regex = new RegExp(this.value, 'gi'); // Volvemos a crear una expresion reglar que valida el valor del elemento del dom
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`); // Reemplazamos el city de place con el valor recibido y le agregamos una clase hl para que se vea resaltado
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`); // Reemplazamos el state de place con el valor recibido y le agregamos una clase hl para que se vea resaltado
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join(''); // Al return lo convertimos en una cadena para que pueda mostrarse como string
    suggestions.innerHTML = res; // E insertamos el return del map en suggestions
}

const searchInput = document.querySelector('.search'); // Obtenemos el input con la clase search
const suggestions = document.querySelector('.suggestions'); // Obtenemos la ul con la clase suggestions

searchInput.addEventListener('change', display); // Escucha el evento de cambio para ejecutar display
searchInput.addEventListener('keyup', display); // Escucha el evento de levantar una tecla para ejecutar display