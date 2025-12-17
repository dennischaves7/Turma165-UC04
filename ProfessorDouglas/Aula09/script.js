const anoNascimento = Number(document.getElementById('ano').value)
const anoAtual = 2025

const resultado = document.getElementById('resultado')

function calcularIdade() {
   
  
    if (!anoNascimento || anoNascimento > anoAtual) {
      resultado.textContent = 'Digite um ano de nascimento válido.'
      return
    }
  
    const idade = anoAtual - anoNascimento
    resultado.textContent = `Você tem ${idade} anos.`
  }
  
  document
    .getElementById('button')
    .addEventListener('click', calcularIdade)
  