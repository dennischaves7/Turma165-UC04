export default class ContaBancaria {
    #saldo;
    #titular;
    #numero;
    #agencia;

    constructor(agencia, numeroConta, titular, saldoInicial) {
        this.#agencia = agencia;
        this.#numero = numeroConta;
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    get getAgencia() { return this.#agencia; }
    get getNumero() { return this.#numero; }
    get getTitular() { return this.#titular; }
    get getSaldo() { return this.#saldo; }

    set setAgencia(agencia) { this.#agencia = agencia; }
    set setNumero(numero) { this.#numero = numero; }
    set setTitular(titular) { this.#titular = titular; }
    set setSaldo(saldo) { this.#saldo = saldo }

    sacar(valor){
        if(valor > 0 && this.#saldo >= valor){
            this.#saldo -= valor;
        }else if(valor <= 0){
            console.log('dá não')
        }else{
            console.log('não tem')
        }
    }

    depositar(valor){
        if(valor > 0){
            this.#saldo += valor
        }else{
            return
        }
    }
}
