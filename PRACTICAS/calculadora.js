class Calculadora{
    constructor(pi){
        this.pi = pi
        this.e = 2.71
    }
}

const Calculadora1 = new Calculadora(3.14);
const Calculadora2 = new Calculadora(3.1416);

console.log(Calculadora1.pi);
console.log(Calculadora2.pi);