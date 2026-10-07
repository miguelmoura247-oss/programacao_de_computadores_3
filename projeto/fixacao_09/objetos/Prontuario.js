import Animal from "./Animal.js";
export default class Prontuario {
    #numero;
    #observacoes;
    #animal;

    constructor(numero, observacoes) {
        this.#numero = numero;
        this.#observacoes = observacoes;
        this.#animal = null;
    }

    getNumero() {
        return this.#numero;
    }

    setNumero(numero) {
        this.#numero = numero;
    }

    getObservacoes() {
        return this.#observacoes;
    }

    setObservacoes(observacoes) {
        this.#observacoes = observacoes;
    }

    getAnimal() {
        return this.#animal;
    }

    setAnimal(animal) {
        if (!(animal instanceof Animal)) {
            throw new Error("O objeto deve ser um Animal.");
        }

        this.#animal = animal;

        if (animal.getProntuario() !== this) {
            animal.setProntuario(this);
        }
    }
}

