const form = document.getElementById('form-tabuada');
const inputNumero = document.getElementById('numero');
const card = document.getElementById('card-resultado');
const tituloCard = document.getElementById('titulo-card');
const listaResultado = document.getElementById('lista-resultado');
const msgErro = document.getElementById('msg-erro');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const valor = Number(inputNumero.value);

  if (!valor && valor !== 0) {
    msgErro.textContent = 'Digite um número válido.';
    card.classList.add('hidden');
    return;
  }

  msgErro.textContent = '';
  gerarTabuada(valor);
});

function gerarTabuada(numero) {
  listaResultado.innerHTML = '';
  tituloCard.textContent = `Tabuada do ${numero}`;

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement('li');

    const left = document.createElement('span');
    left.textContent = `${numero} × ${i}`;

    const op = document.createElement('span');
    op.classList.add('op');
    op.textContent = '=';

    const result = document.createElement('span');
    result.textContent = numero * i;

    li.appendChild(left);
    li.appendChild(op);
    li.appendChild(result);
    listaResultado.appendChild(li);
  }

  card.classList.remove('hidden');
}
