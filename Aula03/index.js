import ContaBancaria from "./ContaBancaria.js";
const prompt = require('prompt-sync')();

function iniciarAplicacao(){
    console.clear();
    console.log('Bem-vindo ao Banco JS! \n')

    const titular = prompt('Informe o nome do titular da conta: ');
    const agencia = parseInt(prompt('Informe o numero da agencia: '));
    const numeroConta = parseInt(prompt('Informe o numero da conta: '));
    const saldoInicial = parseInt(prompt('Informe o saldo inicial que deseja: '));
    const conta = new ContaBancaria(agencia, numeroConta, titular, saldoInicial);

    let opcao;
    let valor = 0;

    do {
        mostrarMenu();
        opcao = parseInt(prompt('Opção: '));

        switch (opcao) {
            case 1:
                console.log(`Saldo atual: ${conta.getSaldo}`);
                break;
            case 2:
                valor = parseFloat(prompt('Informe o valor a depositar: '));
                console.log(conta.depositar(valor));
                break;
            case 3:
                 valor = parseFloat(prompt('Informe o valor a sacar: '));
                console.log(conta.sacar(valor));
                break;
            default:
                console.log('Opção inválida');
                break;
        }
    } while (opcao != 0);

}

function mostrarMenu(){
    console.log('\nEscolha uma opção: ')
    console.log('1 - Ver Saldo')
    console.log('2 - Depositar')
    console.log('3 - Sacar ')
    console.log('0 - Sair ')
}
