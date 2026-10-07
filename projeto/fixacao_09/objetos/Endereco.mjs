export default class Endereco {
    #cep;
    #logradouro;
    #bairro;
    #localidade;
    #uf;
    #complemento;
    #ddd;
    #ibge;
    #gia;

    async setCep(cep) {
        try {
            if (typeof cep !== "string") {
                throw new Error("CEP inválido.");
            }

            const cepLimpo = cep.replace(/\D/g, "");

            if (cepLimpo.length !== 8) {
                throw new Error("CEP deve possuir 8 dígitos.");
            }

            const resposta = await fetch(
                `https://viacep.com.br/ws/${cepLimpo}/json/`
            );

            if (!resposta.ok) {
                throw new Error("Erro ao consultar a API ViaCEP.");
            }

            const dados = await resposta.json();

            if (dados.erro) {
                throw new Error("CEP não encontrado.");
            }

            this.#cep = dados.cep;
            this.#logradouro = dados.logradouro;
            this.#bairro = dados.bairro;
            this.#localidade = dados.localidade;
            this.#uf = dados.uf;
            this.#complemento = dados.complemento;
            this.#ddd = dados.ddd;
            this.#ibge = dados.ibge;
            this.#gia = dados.gia;

            return true;
        } catch (erro) {
            console.log("Erro:", erro.message);
            return false;
        }
    }

    getCep() {
        return this.#cep;
    }

    getLogradouro() {
        return this.#logradouro;
    }

    getBairro() {
        return this.#bairro;
    }

    getLocalidade() {
        return this.#localidade;
    }

    getUf() {
        return this.#uf;
    }

    getComplemento() {
        return this.#complemento;
    }

    getDdd() {
        return this.#ddd;
    }

    getIbge() {
        return this.#ibge;
    }

    getGia() {
        return this.#gia;
    }
}