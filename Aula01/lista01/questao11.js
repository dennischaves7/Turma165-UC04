import promptSync from "prompt-sync";
const prompt = promptSync();

const distancia = Number(prompt('Digite a distancia'));
const consumo = Number(prompt('Digite o cosumo do veículo'));
const valorGasolina = Number(prompt('Digite o valor da gasolina'));

const litrosGastos = distancia / consumo;
valorGasto = litrosGastos * valorGasolina

console.log(`o valor da gasolina é igual a ${resultado}`);