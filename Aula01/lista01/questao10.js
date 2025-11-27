import promptSync from "prompt-sync";
const prompt = promptSync();

const nome = Number(prompt('Digite seu nome'));
const cidade = Number(prompt('Digite sua cidade'));
console.log(`${nome} mora em ${cidade}`);