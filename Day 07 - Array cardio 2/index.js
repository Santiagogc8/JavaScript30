// ## Array Cardio Day 2

const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];

const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?
    // El metodo some permite revisar al menos 1 elemento del array que se esta buscando. De esta manera podemos ver si hay personas de 19 o mas edad. Para lograr esto entonces podemos crear una funcion dentro del metodo some que valida si la persona es mayor o de igual edad a 19

    // Creamos una arrow function que obtiene el año corriente a traves de getFullYear y le resta el person.year. Si esta resta es igual o mayor a 19 al menos una vez, retorna true
    const isNineteen = people.some(person => (new Date()).getFullYear() - person.year >= 19);

    console.log(isNineteen)

    // Array.prototype.every() // is everyone 19 or older?
    // El metodo every por otro lado, valida si TODOS cumplen con una condicion

    // Creamos una arrow function que obtiene el año corriente a traves de getFullYear y le resta el person.year. Si esta resta es igual o mayor a 19 en todas las ocasiones, retorna true
    const allAdult = people.every(person => (new Date()).getFullYear() - person.year >= 19);

    console.log(allAdult)

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    // En este caso find encuentra lo que estamos buscando. Lo que estamos buscando es el id 823423, por lo que podemos crear una arrow function que mediante find valide si .id es estrictamente igual al numero 823423, en caso afirmativo, envia true

    const looking = comments.find(look => look.id === 823423);

    console.log(looking)

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    // El metodo findIndex nos devuelve un numero con la posicion del elemento con el id que estamos buscando (823423). De esta manera, podemos crear un elemento que busca el index

    const lookIndex = comments.findIndex(look => look.id === 823423); // Retorna 1. Ahora debemos eliminarlo

    console.log(lookIndex);

    comments.splice(lookIndex, 1); // Eliminamos con el metodo splice que recibe 2 parametros. El indice del elemento que se busca (1 ya que eso retorna la funcion) y un numero de elementos a eliminar desde el indice (1 elemento en este caso. O sea, el mismo elemento)

    console.table(comments);