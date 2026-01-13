import { Ave } from "./Ave";

export class Papaguaio extends Ave{
    #palavras = [];

    constructor(nome, idade, tipoBico, capacidadeVoo, palavra){
        super(nome, idade, tipoBico, capacidadeVoo)

        this.#palavras.push(palavra)
    }

    emitirSom(){
        console.log('O papagaio imita sons e pode falar palavras!');
    }

    aprenderPalavra(palavra){
        let aprender = palavra.trim();

        this.#palavras.push(aprender)
  
    }
}