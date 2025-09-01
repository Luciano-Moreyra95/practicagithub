// let numeros = [1, 2, 3, 4, 5] //por cada coma, le decimos a JS que hay un dato diferente
// console.log(numeros);

// console.log(numeros[2]);

// let palabras = ["Auto", "palabra", "consola", "hola"];

// console.log(palabras);

// console.log(palabras[2]);

// let booleanos = [true, false, true, false];

// console.log(booleanos);

// console.log(booleanos[1]);

// let matriz = [

//     [1,2,3],
//     [4,5,6],
//     [7,8,9]

// ]

// console.log(matriz);

// console.log(matriz[0][1]);

// ordenar arrays - metodo sort y metodo 
// metodo .Sort
// let numeros = [50, 120, 5, 92, 34];

// numeros.sort();
// console.log(numeros);
// al mostrar en consola del navegador estan mal ordenados, eso es porque al metodo sort si no se le asigna ninguna instruccion va a tomar cada uno de los elementos de nuestro array como si fueran strings y va a tomar el primer digito con el que empieza nuestros elementos y los ordena solo con ese primer numero ... [50, 120, 5, 92, 34], de ese array, quedaria asi[120,34,5,50,92].

//para evitar esto, hacemos lo siguiente
// let numeros = [50, 120, 5, 92, 34];

// numeros.sort((a,b)=> a - b); // con esta funcion flecha lo ordenaremos de forma creciente (para lo contrario, cambiamos el orden de las letras a y b en la funcion flecha quedando así numeros.sort((a,b)=> b - a)
// console.log(numeros);

// let palabras = ["auto", "zorro", "programacion", "Banana"];

// palabras.sort();
// console.log(palabras);
//para solucionar este mal orden que por defecto quedaría en [ "Banana", "auto", "programacion", "zorro" ] (por la mayuscula de Banana), utilizaremos la funcion localLeCompare


// let palabras = ["auto", "zorro", "programacion", "Banana"];

// palabras.sort((a,b)=> a.localeCompare(b));
// console.log(palabras);
//el local compare hace que no se tenga en cuenta la discrepancia entre mayusculas y minusculas

//metodo reverse - ya el nommbre lo dice todo

// numeros.reverse();
// console.log(numeros);

let arrayObjetos = [];

arrayObjetos.push({
    id:1, nombre: "producto 1"
});

arrayObjetos.push({
    id:2, nombre: "producto 2"
});

arrayObjetos.push({
    id:3, nombre: "producto 3"
});

console.log(arrayObjetos);

for(let objeto of arrayObjetos){
    console.log(objeto.nombre);
}
//en este caso el bucle for of se va a componer de una variable que se llama objeto, la cual va a trabajar dentro de nuestro arrayObjetos. Este objeto va a ser referencia a cada uno de los objetos incorporados dentro de nuestro array, lo que le vamos a estar pidiendo por consola es que ingrese a traves del bucle y nos devuelva en este caso la propiedad nombre. Ahora si nosotros guardamos y refrescamos vamos a ver que lo que va a hacer este bucle es ingresar a cada uno de los objetos y guardamos el nombre de cada uno de los productos. De esta manera estructuramos datos de una manera mucho mas compleja y dinamica