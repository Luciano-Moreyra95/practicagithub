const nombres = ["Nacho", "Isaac", "Seba", "Juan"];

const nombres2 = ["mauro", "pedro"]

const edades = [2, 5, 6 ,8 ,22, 57, 92, 6, 8, 1, 120]

console.log(nombres)

for (let index = 0; index < nombres.length; index++) {
    let element = nombres[index];
    console.log(element)
    
}

nombres.push("geronimo");

nombres.unshift("parce");

console.log(nombres);

nombres.pop();

console.log(nombres);

const descartado = nombres.pop()

console.log(descartado);

nombres.shift();

console.log(nombres);

const nombreSupremo = nombres.concat(nombres2);


for (let index = 0; index < nombreSupremo.length; index++) {
    let element = nombreSupremo[index];
    console.log(element)
    
}

console.log(nombreSupremo)

nombres.splice(0, 1, "valentina")

console.log(nombres)

nombres.sort();

console.log(nombres);

edades.sort();

console.log(edades);

let index = nombres.indexOf("Seba");

console.log(index);

nombres.splice(index, 1);

console.log(nombres);

const auto = {
    puertas: 3,
    ruedas: 4,
    color: "rojo",
    modelo: "gol"
}

console.log(auto);

console.log(auto.modelo);

const autos = [
    {
        marca: "Volkswagen",
        modelo: "Gol",
        año: 2015,
        puertas: 3,
        color: "rojo",
        transmision: "manual",
        combustible: "nafta",
        kilometraje: 85000,
        precioUSD: 7500
    },
    {
        marca: "Toyota",
        modelo: "Corolla",
        año: 2021,
        puertas: 5,
        color: "blanco",
        transmision: "automática",
        combustible: "híbrido",
        kilometraje: 15000,
        precioUSD: 23000
    },
    {
        marca: "Ford",
        modelo: "Mustang",
        año: 2019,
        puertas: 3,
        color: "azul",
        transmision: "manual",
        combustible: "nafta",
        kilometraje: 32000,
        precioUSD: 35000
    },
    {
        marca: "Honda",
        modelo: "Civic",
        año: 2020,
        puertas: 5,
        color: "gris",
        transmision: "automática",
        combustible: "nafta",
        kilometraje: 27000,
        precioUSD: 21000
    },
    {
        marca: "Porsche",
        modelo: "911 Carrera",
        año: 2022,
        puertas: 2,
        color: "negro",
        transmision: "automática",
        combustible: "nafta premium",
        kilometraje: 8000,
        precioUSD: 120000
    }
]

console.log(autos[4].puertas);

