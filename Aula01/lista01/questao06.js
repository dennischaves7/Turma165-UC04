import promptSync from "prompt-sync";
const prompt = promptSync();

const preco = Number(prompt('Digite um valor'));
const resultado = preco - (preco * 10/100);
console.log(`a desconto é igual a ${resultado}`);