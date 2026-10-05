const Pessoa = require("./Pessoa");
const util = require("../biblioteca/util");

class Aluno extends Pessoa {
    #matricula;

    setMatricula(matricula) {
        if (util.validarMatricula(matricula)) {
            this.#matricula = matricula.trim();
            return true;
        }

        return false;
    }

    getMatricula() {
        return this.#matricula;
    }
}

module.exports = Aluno;