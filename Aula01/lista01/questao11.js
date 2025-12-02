import promptSync from "prompt-sync";
const prompt = promptSync();


const produto01 = Number(prompt("digite o preço do seu produto:"))
const frete01 = Number(prompt("digite o preço do frete:"))

const produto02 = Number(prompt("digite o preço do seu produto:"))
const frete02 = Number(prompt("digite o preço do frete:"))

const produto03 = Number(prompt("digite o preço do seu produto:"))
const frete03 = Number(prompt("digite o preço do frete:"))


console.log(
    "seu valor total gasto foi: " +
    (frete01 + frete02 + frete03 + produto01 + produto02 + produto03)
  );