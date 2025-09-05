// **Gestor de calificaciones
// . Clase alumno con array de notas
// .Método para calcular promedio
// . Guarda cada alumno con sus notas en localStorage

class Nota{
    constructor(materia, valor){
        this.materia = materia
        this.valor = valor
    }
}


class alumno{
    constructor(nombre, apellido, dni){
        this.nombre = nombre
        this.apellido = apellido
        this.dni = dni
        this.notas = []
        this.promedio = 0
    }

    agregarnotas(){
        let valorNota = Number(prompt("Cuánto se saco el nen@?"))
        let materia = prompt("en que materia?")

        let nota = new Nota(materia, valorNota)

        this.notas.push(nota)
        this.calculadoraDePromedio()
    }

    calculadoraDePromedio(){
        let sumatoria = 0
        for (let i = 0; i < this.notas.length; i++) {
            sumatoria += this.notas[i].valor
        }
        this.promedio = sumatoria/this.notas.length
    }
}

const Nacho = new alumno("Nacho", "Basilio", "37949885")

Nacho.agregarnotas()
Nacho.agregarnotas()
Nacho.agregarnotas()


localStorage.setItem("")




console.log(Nacho.promedio)