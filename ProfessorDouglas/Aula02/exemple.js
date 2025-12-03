// let num1 = Number(prompt('Digite um número'))

// let num2 = Number(prompt('Digite um número'))

// let media = (num1 + num2) / 2

// if (media > 10 ) {
//     return
// }else if(media >= 4 && num1 > 0 && num2 > 0){
//     alert('aprovado!')
// }else if(media >= 4 && num1 == 0 || num2 == 0){
//     alert('recuperação!')
// }else if (media < 3){
//     alert('reprovado!')
// }else{
//     alert('Digite um número válido!')
// }


let altura = 1.80;
let peso = 90;
let imc = peso / (altura * altura);
let saudePeso = "";

if (imc < 18.5) {
    saudePeso = "Abaixo do peso";
} else if (imc < 25) {
    saudePeso = "Peso normal";
} else if (imc < 30) {
    saudePeso = "Sobrepeso";
} else {
    saudePeso = "Obesidade";
}
console.log(`seu IMC é ${imc.toFixed(2)} - ${saudePeso}`);