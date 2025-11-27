import promptSync from "prompt-sync";
const prompt = promptSync();

const n1 = Number(prompt('Digite um número'));
const resultado = n1 * 2;
console.log(`o dobro do seu número é igual a ${resultado}`);