
import Animal from "./Animal.js"

export default class Cliente {
    #nome;
    #telefone;
    #animais;

    constructor(nome,telefone){
        this.#nome = nome;
        this.#telefone = telefone;
        this.#animais = [];
    }

    getNome(){
        return this.#nome;
    }

    setNome(nome){
        this.#nome = nome;
    }

    getTelefone() { 
        return this.#telefone;
    }
    
    setTelefone(telefone){
        this.#telefone = telefone;
    }

    getAnimais(){
        return this.#animais;
    }

    setAnimais(animal){
        this.#animais = animais;
    }

    addAnimal(animal){
        if(!(animal instanceof Animal)){
            throw new Error("a entrada deve ser um animal");
        }

        if(!this.#animais.includes(animal)){
            this.#animais.push(animal);
            animal.setClientes(this);
        }
    }

}