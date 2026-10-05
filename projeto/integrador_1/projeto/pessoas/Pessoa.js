const util = require("../biblioteca/util");

class Pessoa {
    #nome;
    #email;

    setNome(nome) {
        if (
            typeof nome === "string" &&
            nome.trim() !== ""
        ) {
            this.#nome = nome.trim();
            return true;
        }

        return false;
    }

    getNome() {
        return this.#nome;
    }

    setEmail(email) {
        if (util.validarEmail(email)) {
            this.#email = email.trim();
            return true;
        }

        return false;
    }

    getEmail() {
        return this.#email;
    }
}

module.exports = Pessoa;