const libros = [
    {titulo: "cien años de soledad", autor: "marquez"},
    {titulo: "1984", autor: "orwell"},
    {titulo: "rayuela", autor: "cortazar"},
]

function buscadorDeLibros(){
    let opcion = Number(prompt("Qué criterio quiere utilizar? \n 1- Nombre del libro \n 2- Autor del libro"))

    if(opcion == 1){
        buscarAPartirDelNombre()

    } else if(opcion == 2){
        buscarAPartirDeAutor()

    } else{
        alert("Esa opcion no existe pa")
    }
}

function buscarAPartirDelNombre(){
    const arraySoloTitulos = []

    for (let i = 0; i < libros.length; i++) {
        arraySoloTitulos.push(libros[i].titulo)
    }

    let tituloABuscar = prompt("Qué libro bsuca?")

    let index = arraySoloTitulos.indexOf(tituloABuscar)

    if(index == -1){
        alert("no encontramos el libro que busca")
    } else{
        alert(" El libro que usted esta buscando esta escrito por: " + libros[index].autor)
    }
}

function buscarAPartirDeAutor(){
    const arraySoloAutores = []

    for (let i = 0; i < libros.length; i++) {
        arraySoloAutores.push(libros[i].autor)
    }

    let autorABuscar = prompt("Qué autor busca?")

    let index = arraySoloAutores.indexOf(autorABuscar)

    if(index == -1){
        alert("no encontramos el autor que busca")
    } else{
        alert(" El autor que usted esta buscando, escribio este libro: " + libros[index].titulo)
    }
}


buscadorDeLibros()