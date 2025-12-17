// function soma(a, b) {
//     return a + b;  // Retorna o resultado
// }

// let resultado = soma(2, 3);

// console.log(resultado)


// const raiz = (x) => (x**(1/2))

function div(a,b) {
     if (b == 0) {
        return "erro, zero n";
    }else{
        return a/b;
    }
}

console.log(div(1))

const parImpar = (x) => {
    return parImpar % 2==0 ? 'par' : 'impar'
} 