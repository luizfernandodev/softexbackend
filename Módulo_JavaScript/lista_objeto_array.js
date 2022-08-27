let carro = {
    modelo: "Camaro",
    cor: "Amarelo",
    automatico: true,
    numeroPortas: 2
}

let animais = ["Gato", "Cachorro","Hamster", "Papagaio"];

function listaObj(obj) {
    console.log("Propriedades do Objeto:");
    for (let i in obj) {
        console.log(i);
    }
}

listaObj(carro);

function listaArray(vetor) {
    console.log("\nElementos do Array:");
    for (let i of vetor) {
        console.log(i);
    }
}

listaArray(animais);