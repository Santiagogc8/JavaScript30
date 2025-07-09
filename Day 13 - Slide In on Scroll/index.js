function debounce(func, wait = 20, immediate = true) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
}

// Se crea la constante que obtiene todas las imagenes con la clase slide-in
const sliderImages = document.querySelectorAll('.slide-in');

// Luego se crea una funcion que
function checkSlide(){
    sliderImages.forEach(sliderImage =>{ // Hace un forEach a las imagenes que establece una imagen y por cada una de ellas 
        // Parte de arriba de la imagen
        const slideInAt = (window.scrollY + window.innerHeight - sliderImage.height / 2); // Crea una constante que valida el scroll vertical de la ventana y lo suma por la altura que tiene la ventana y le resta la  la altura renderizada de la imagen y lo divide por 2
        // Parte de abajo de la imagen
        const imageBottom = sliderImage.offsetTop + sliderImage.height; // Luego, se valida la parte de arriba de la imagen mas la altura de la imagen
        const isHalfShown = slideInAt > sliderImage.offsetTop; // Luego se valida si el calculo que se hizo para el scroll es mayor a la distancia entre el borde de arriba de la imagen con la ventana
        const notScrolledPast = window.scrollY < imageBottom; // Y por ultimo se busca si el scroll vertical es menor al calculo de la parte de arriba de la imagen mas la altura de la imagen
        if (isHalfShown && notScrolledPast){ // Ahora, si isHalfShown y notScrolledPast son verdaderos, entonces 
            sliderImage.classList.add('active'); // Agrega la clase active a las imagenes para que puedan ser mostradas
        } else{
            sliderImage.classList.remove('active'); // Caso contrario, elimina la clase
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide)); // Y escucha el evento de scroll de la ventana y ejecuta debounce(un script para que no haya tanto consumo de recursos) y dentro de este ejecuta checkSlide