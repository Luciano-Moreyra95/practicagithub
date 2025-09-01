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
