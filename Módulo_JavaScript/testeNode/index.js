function inicio(){
    console.log('Iniciando calculadora...')
}
inicio()

function calc(num1,num2,op){

    let numero1 = num1
    let numero2 = num2 
    let operador = op
    
     if (op == '+'){
        let resultado = num1 + num2
        return resultado
    }else if (op == '-'){
        let resultado = num1 - num2
        return resultado
    }else if (op == '*'){
        let resultado = num1 * num2
        return resultado
    }else if(op == '/'){
        let div = num1 / num2
        return div
        }if (num2 != 0){
            return(`O resultado é: ${num1 / num2} , O resto da divisao é: ${num1 % num2}`)
        }else 
            return('Divisão por zero')
        
}
console.log(calc(15,5,'*'))

// Requiring module
const express = require('express');
 
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send('Um simples App calculadora Node '
        + 'rodando neste server')
    res.end()
})
 
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));


