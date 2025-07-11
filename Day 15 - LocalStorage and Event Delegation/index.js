// Obtenemos los elementos del documento
const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

// Creamos un array que guardara nuestros elementos
const items = JSON.parse(localStorage.getItem('items')) || []; // Convertimos el string de localStorage a objeto que obtiene de items y como fallback, da un array vacio

function addItem(e){ // Creamos una funcion que recibe un evento 
    e.preventDefault(); // Evitamos que la pagina se recargue
    const text = (this.querySelector('[name=item]')).value; // Obtenemos el valor del elemento del form con el name "item" y lo guardamos en una variable
    const item = {
        text: text,
        done: false,
    };

    items.push(item); // Ponemos el objeto con el item dentro del array
    populateList(items, itemsList); // Hacemos un callback de la funcion populateList y le pasamos el array con los items y la lista extraida del dom
    localStorage.setItem('items', JSON.stringify(items)); // Creamos los items para el localStorage y le damos por nombre items para recibirlo con getItems. Luego, lo convertimos el array en un string para que no haya problemas en la recarga de la pagina
    this.reset(); // Y reseteamos el form
}

function populateList(plates = [], platesList){ // Creamos una nueva funcion que creara nuestros textos dentro del elemento, con un array vacio para que en caso de que no se le pase nada dentro, no se rompa el js. Tambien con una lista que luego usaremos para agregar los elementos al dom
    platesList.innerHTML = plates.map((plate, i) =>{ // A la lista, le hacemos un innerHTML que hace un map por cada plato y por cada indice del elemento y retorna
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''}/>
                <label for="item${i}">${plate.text}</label>
            </li>
        ` // Retorna un elemento de lista con un label y el texto del plato dentro
    }).join(''); // Y entre cada elemento, pone un string vacio
}

function done (e){
    if(!e.target.matches('input')) return; // Si no recibimos el valor que coincida con input, termina la funcion
    const element = e.target; // Obtiene el target en una variable
    const index = element.dataset.index; // Guarda el index del elemento con el dataset index "data-index=${i}" 
    items[index].done = !items[index].done; // Y convertimos el done del indice del item en su contrario. Es decir si es true = false o si es false = true
    localStorage.setItem('items', JSON.stringify(items)); // Volvemos a pasar items al localStorage para que se guarde el checked 
    populateList(items, itemsList); // Y hacemos el callback para que la funcion populateList este actualizada
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', done);

populateList(items, itemsList); // Le pasamos a la funcion populateList el array de items y la lista de items