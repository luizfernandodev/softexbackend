//1. uma função tradicional com a palavra reservada “Function” e sem nenhum parâmetro;

function saudacoes(){
    console.log('Seja Bem-vindo(a)!')
}
saudacoes()


//2. uma função tradicional com parâmetros e um retorno de valor;

function valores(num1,num2){
    let res = num1 + num2
    return res
}
console.log(valores(10,5))

//3. uma arrow function com parâmetros e que retorne um valor.

let valoresArrow = (num1,num2) => num1 + num2
console.log(valoresArrow(10,5))