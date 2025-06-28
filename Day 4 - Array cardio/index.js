const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = [
        'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
        'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
        'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
        'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
        'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    // Para poder filtrar a los inventors, debemos acceder al array con los objetos. Para eso, creamos un filter que valida una funcion

    // La funcion recibe un i (inventor) y valida si el año del inventor es mayor o igual a 1500 y menor o igual a 1500. En caso verdadero, devuelve true
    const fifteens = inventors.filter( (i) => (i.year >= 1500 && i.year <= 1600))  

    console.table(fifteens);

    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    // Debemos devolver un array con los nombres y apellidos del array de objetos. Para hacerlo, podemos usar map, que creara un nuevo elemento tomando de cada inventor

    // A traves de map, recibimos un i (inventor) y devolvemos el primer nombre (first) y el apellido (last) con un espacio entre ellos
    const fullNames = inventors.map(i => i.first + ' ' + i.last);
    console.log(fullNames);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // Para organizar los elementos del arreglo por nacimiento desde el mas grande hasta el mas joven, deberiamos de usar sort

    // Creamos entonces un sort que recibe una funcion con dos parametros para validar si el inventor 1 es mayor o menor al inventor 2. Utilizamos un operador ternario que permite validar y devolver un 1 en caso de que el inventor 1 sea mayor y -1 en caso de que sea menor. De esta manera se organiza el arreglo con los años correspondientes y lo enviamos en una tabla
    const ordered = inventors.sort( (a, b) => a.year > b.year ? 1 : -1);
    console.table(ordered)

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?
    
    // Para validar cuantos años pudieron vivir juntos los inventores, podemos usar el metodo reduce que permite devolver un solo valor

    // Utilizamos reduce que permite validar el total y el inventor. Retornamos el total + la resta del año de fallecimiento y el año de nacimiento
    const totalYears = inventors.reduce((total, i) => {
        return total + (i.passed - i.year)
    }, 0); // Por ultimo agregamos un 0 como valor inicial de total

    console.log(totalYears)

    // 5. Sort the inventors by years lived
    
    // Ahora, para ordernar los elementos por años vividos, podemos usar el metodo sort. Creamos una funcion que recibe 2 parametros. Esta tiene 2 variables que validan el año de fallecimiento menos el año de nacimiento tanto de a como de b. En caso de que a sea mayor que b, entonces retorna -1 (final) y en caso contrario, 1(primero)

    const oldest = inventors.sort((a, b) => {
        const last = a.passed - a.year;
        const next = b.passed - b.year;
        
        return last > next ? -1 : 1;
    });

    console.table(oldest)

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // Aqui debemos ejecutar este codigo en las devTools del link proporcionado. Lo realizado es obtener del documento los mw-category, que es donde se encuentran los links. 
    // Luego, se crea una nueva variable que toma todos los anchor y los convierte en un arreglo.
    // Luego, se hace un map que toma que por cada link nos de el contenido del texto
    // Y por ultimo se valida lo que incluya "de"

        // const category = document.querySelector('.mw-category');
        // const links = Array.from(category.querySelectorAll('a'));
        // const names = links
        //               .map(link => link.textContent);
        //               .filter(street => street.includes('de'))

    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // Para organizar el arreglo people, debemos usar sort:
    // Primero, hacemos un sort que recibe una funcion que permite hacer del arreglo, un split desde la , y un espacio, ya que todos tienen una coma y un espacio
    const sorted = people.sort((last, next) =>{
        const aLast = last.split(', '); // Se hace el split del ultimo
        const bLast = next.split(', '); // Se hace el split del siguiente
        return aLast > bLast ? 1 : -1; // Se retorna 1 en caso de que aLast sea mayor a bLast por el valor alfabetico, en caso contrario, solo se retorna -1
    } );

    console.log(sorted);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    // Debemos usar reduce para sumar las instancias de cada uno de los elementos 
    // Para esto creamos una funcion que recibe un objeto y un item e inicializamos el reduce con un objeto vacio (0)
    const reduced = data.reduce((object, item) => {
        if (!object[item]){ // Verifica si el item actual ya existe dentro de object
            object[item] = 0; // Si no existe, significa que cumplio la condicion y lo inicia en 0
        }
        object[item]++; // En caso contrario, suma 1 al objeto por cada item
        return object; // Y retorna el objeto
    }, {})

    console.log(reduced);