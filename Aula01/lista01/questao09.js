import promptSync from "prompt-sync";
const prompt = promptSync();

const anoAtual = Number(prompt('Digite o ano atual'));
const anoNascimento = Number(prompt('Digite o seu ano de nascimento'));

const resultado = anoAtual = anoNascimento;
console.log(`sua idade é igual a ${resultado}`);