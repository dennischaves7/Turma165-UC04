// // import promptSync from "prompt-sync";
// // const prompt = promptSync();

// // const peso = Number(prompt('Digite seu peso'));
// // const altura = Number(prompt('Digite sua altura'));

// // function calcularIMC(peso, altura) {
// //       if (imc < 18.5) {
// //           saudePeso = "Abaixo do peso";
// //       } else if (imc < 25) {
// //           saudePeso = "Peso normal";
// //       } else if (imc < 30) {
// //           saudePeso = "Sobrepeso";
// //       } else {
// //           saudePeso = "Obesidade";
// //       }
// // }

// // const imc = calcularIMC(10, 0.80);
// // console.log(`O IMC é: ${imc.toFixed(1)}`);

// let sim = [110,121,22,110,23].filter(i => i < 100);

// console.log(sim)

document.getElementById('formSoma').addEventListener('submit', function (event) {
    event.preventDefault();

    const num1 = Number(document.getElementById('number1').value);
    const num2 = Number(document.getElementById('number2').value);

    function somar(a, b) {
        return a + b;
    }

    const resultadoSoma = somar(num1, num2);

    document.getElementById('resultadoSoma').innerText = `A soma é ${resultadoSoma}`
})