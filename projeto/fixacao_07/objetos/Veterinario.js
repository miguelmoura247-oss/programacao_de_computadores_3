
import Animal from "./Animal.js";
export default class Veterinario {
    #nome;
    #crmv;
    #animais;

    constructor(nome, crmv) {
        this.#nome = nome;
        this.#crmv = crmv;
        this.#animais = [];
    }

    getNome() {
        return this.#nome;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getCrmv() {
        return this.#crmv;
    }

    setCrmv(crmv) {
        this.#crmv = crmv;
    }

    getAnimais() {
        return this.#animais;
    }

    setAnimais(animais) {
        this.#animais = animais;
    }

    addAnimal(animal) {
        if (!(animal instanceof Animal)) {
            throw new Error("O objeto deve ser um Animal.");
        }

        if (!this.#animais.includes(animal)) {
            this.#animais.push(animal);

            if (!animal.getVeterinarios().includes(this)) {
                animal.addVeterinario(this);
            }
        }
    }
}
