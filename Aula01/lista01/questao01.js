import promptSync from "prompt-sync";
const prompt = promptSync();

const n1 = Number(prompt('Digite um número'));
const n2 = Number(prompt('Digite um número'));
const resultado = n1 + n2;
console.log(`a soma entre os números é igual a ${resultado}`);