const checkboxes = document.querySelectorAll('input[type="checkbox"]'); // Se seleccionan todos los elementos input de tipo checkbox

let lastChecked; // Se crea una variable sin valor para usar mas adelante en la que es seleccionada por el usuario

function handleCheck(e){ // Se crea una funcion que escucha un evento
    let inBetween = false; // Se crea una variable que se inicializa en false
    if (e.shiftKey && this.checked){ // La condición valida si la checkbox actual en la iteración es igual a la que se acaba de hacer clic O a la última marcada
        checkboxes.forEach(checkbox => { // Por cada checkbox hace una funcion que
            if (checkbox === this || checkbox === lastChecked){ // Valida si la checkbox es igual a esa o si es igual a la ultima checkeada
                inBetween = !inBetween; // Si es asi, cambia el estado false de inBetween
            };
            
            if (inBetween){ // Si inBetween es verdadera
                checkbox.checked = true; // Cambia el estado de las checkbox a checked
            }
        })
    }
    lastChecked = this; // Y lastchecked se pasa a this en caso de que la funcion se dispare
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck)); // Se crea un foreach para las checkboxes que por cada checkbox escucha un evento de click y ejecuta la funcion handleclick