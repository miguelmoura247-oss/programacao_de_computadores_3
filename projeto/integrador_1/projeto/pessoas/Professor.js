const Pessoa = require("./Pessoa");

class Professor extends Pessoa {
    #disciplina;

    setDisciplina(disciplina) {
        if (
            typeof disciplina === "string" &&
            disciplina.trim() !== ""
        ) {
            this.#disciplina = disciplina.trim();
            return true;
        }

        return false;
    }

    getDisciplina() {
        return this.#disciplina;
    }

    setEmail(email) {
        if (
            typeof email === "string" &&
            email.trim().endsWith(".edu.br")
        ) {
            return super.setEmail(email);
        }

        return false;
    }
}

module.exports = Professor;