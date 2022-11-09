class Sanduiche {
    getPrice(){} 
    
    getName(){
        return "Sanduiche simples"
    }
}

class FrangoAssado {
    constructor(sanduiche){
        this.sanduiche = sanduiche;              
    }

    getPrice(){
        return 4.50
    } 
    
    getName(){
        return "Sanduiche  de Frango assado"
    }
}

class PepperoniDecorator extends Sanduiche {
    constructor(sanduiche){
        super();
        this.sanduiche = sanduiche;
    }
    getPrice(){
        return this.sanduiche.getPrice() + 0.99      
    }
}

class QueijoMussarela extends Sanduiche{
    constructor(sanduiche){
        super();
        this.sanduiche = sanduiche;
    }
    getPrice(){
        return this.sanduiche.getPrice() + 2.00
    }
}

let sanduiche = new FrangoAssado()
let pepperoni = new PepperoniDecorator(sanduiche)
let queijo = new QueijoMussarela(sanduiche)

console.log(queijo.sanduiche)
console.log(queijo.getPrice())
console.log(pepperoni.sanduiche)
console.log(pepperoni.getPrice())