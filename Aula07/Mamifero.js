import { Animal } from "./Animal.js"

export class Mamifero extends Animal{
    #tipoPelo
    #habitat

    constructor(nome, idade, tipoPelo, habitat){
        super(nome, idade);
        this.#tipoPelo = tipoPelo;
        this.#habitat = habitat;
    
        }
        get getTipoPelo(){
            return this.#tipoPelo;
        }
    
        set setTipoPelo(tipoPelo){
            this.#tipoPelo = tipoPelo;
        }
    
        get getHabitat(){
            return this.#habitat;
        }
    
        set setHabitat(habitat){
            this.#habitat = habitat;
    }

    emitirSom(){
        console.log('o mamífero ruge ou grunhe');
    }
    getInfo(){
        return `Nome: ${this.getNome}, Idade: ${this.getIdade}, Tipo do pelo: ${this.getTipoPelo}, Habitat: ${this.getHabitat}`
    }
}