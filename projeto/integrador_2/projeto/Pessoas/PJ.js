import Pessoa from "./Pessoa.js";

class PJ extends Pessoa {
    #cnpj;
    #razaoSocial;

    setCNPJ(cnpj) {
        if (typeof cnpj !== "string") {
            return false;
        }

        const numeros = cnpj.replace(/\D/g, "");

        if (numeros.length === 14) {
            this.#cnpj = cnpj.trim();
            return true;
        }

        return false;
    }

    getCNPJ() {
        return this.#cnpj;
    }

    setRazaoSocial(razaoSocial) {
        if (
            typeof razaoSocial === "string" &&
            razaoSocial.trim() !== ""
        ) {
            this.#razaoSocial = razaoSocial.trim();
            return true;
        }

        return false;
    }

    getRazaoSocial() {
        return this.#razaoSocial;
    }
}

export default PJ;