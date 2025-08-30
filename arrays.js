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