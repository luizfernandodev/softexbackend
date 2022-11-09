class Veiculo{
    constructor(modelo, marca, cor, numeroRodas){
        this.modelo = modelo;
        this.modelo = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    clone(obj){
        obj.__proto__;
    }

    represent(){
        console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`); 
    }
}

class Carro extends Veiculo{
    constructor(modelo, marca, cor, numeroRodas){
        super(modelo, marca, cor, numeroRodas)
        this.numeroPortas = this.numeroPortas

        let cloneCarro = {
            modelo: this.modelo,
            marca: this.marca,
            cor: this.cor,
            numeroRodas: this.numeroRodas,
            numeroPortas: this.numeroPortas
        }
        Veiculo.prototype.clone = function(obj){
            obj.prototype = cloneCarro
        }

        Veiculo.prototype.represent = function(){
            console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}`)
        }
    }
}

class Onibus extends Veiculo{
    constructor(modelo, marca, cor, numeroRodas){
        super(modelo, marca, cor, numeroRodas)
        this.numeroPortas = this.numeroPortas

        let cloneBike = {
            modelo: this.modelo,
            marca: this.marca,
            cor: this.cor,
            numeroRodas: this.numeroRodas,
            numeroPortas: this.numeroPortas
        }
        Veiculo.prototype.clone = function(obj){
            obj.prototype = cloneOnibus
        }

        Veiculo.prototype.represent = function(){
            console.log(`Modelo: ${this.modelo}, Marca: ${this.marca}, Cor: ${this.cor}, Rodas: ${this.numeroRodas}, ${this.numeroPortas}`)
        }
    }
}

let fiat = new Carro('Uno','Fiat','Branco', 4, 2)
fiat.represent()
fiat.clone(fiat)

let chevrolet = new Carro('Onix','Chevrolet','Prata', 4, 4)
chevrolet.represent()
chevrolet.clone(chevrolet)

let audi = new Carro('A3','Audi','Preto', 4, 4)
audi.represent()
audi.clone(audi)


let Mercedes = new Carro('O-400RSD','Mercedes','Branco', 4, 1)
Mercedes.represent()
Mercedes.clone(Mercedes)

let iveco = new Carro('380.12','Iveco','Prata', 4, 2)
iveco.represent()
iveco.clone(iveco)

let nissan = new Carro('Civilian','Nissan','Preto', 4, 1)
nissan.represent()
nissan.clone(nissan)

const veiculos = []

veiculos.push(fiat)
veiculos.push(chevrolet)
veiculos.push(audi)

veiculos.push(Mercedes)
veiculos.push(iveco)
veiculos.push(nissan)









