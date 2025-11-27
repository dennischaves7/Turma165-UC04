import promptSync from "prompt-sync";
const prompt = promptSync();

const horasTrabalhadas = Number(prompt('Digite as horas trabalhadas'));
const numeroDeHoras = Number(prompt('Digite o numero de horas'));
const resultado = horasTrabalhadas * numeroDeHoras;
console.log(`seu salário é igual a ${resultado}`);