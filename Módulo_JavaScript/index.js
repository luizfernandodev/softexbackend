let banco = {

    conta: 1111,
    saldo: 500,
    tipoDeConta: 'corrente',
    agencia: 2222,

    buscarSaldo: function() {
        return this.saldo;
    },
    
    deposito: function(valor) {
        return this.saldo + valor;
    },

    saque: function(valor) {

        return this.saldo - valor;
    }
}

console.log(Banco.buscarSaldo());

console.log(Banco.deposito(100));

console.log(Banco.saque(100));

console.log(Banco.conta);




