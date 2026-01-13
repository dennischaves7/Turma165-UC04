import { Animal } from './Animal.js';
import { Mamifero } from './Mamifero.js';
import { Ave } from './Ave.js';

let animal = new Animal('Komodo', 5);
let leao = new Mamifero('Leão', 8, 'peludo', 'savana');
let pinguim = new Ave('Pinguim', 3, 'bicudo', 'zero')

console.log(animal.getInfo());   
animal.emitirSom();

console.log(leao.getInfo());        
leao.emitirSom();

console.log(pinguim.getInfo());
pinguim.emitirSom();

leao.setNome = 'Alex';
pinguim.setNome = 'Pinguim do Madagascar';

console.log(leao.getInfo());
console.log(pinguim.getInfo());  