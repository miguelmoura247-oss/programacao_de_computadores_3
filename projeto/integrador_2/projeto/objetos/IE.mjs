import PJ from "../pessoas/PJ.mjs";

class IEclss {
    #numero;
    #estado;
    #dataRegistro;
    #pj;

    constructor(numero, estado, dataRegistro) {
        this.#numero = numero;
        this.#estado = estado;
        this.#dataRegistro = dataRegistro;
    }

    setNumero(numero) {
        if (
            typeof numero === "string" &&
            numero.trim() !== ""
        ) {
            this.#numero = numero.trim();
            return true;
        }

        return false;
    }

    getNumero() {
        return this.#numero;
    }

    setEstado(estado) {
        if (
            typeof estado === "string" &&
            estado.trim() !== ""
        ) {
            this.#estado = estado.trim();
            return true;
        }

        return false;
    }

    getEstado() {
        return this.#estado;
    }

    setDataRegistro(dataRegistro) {
        if (
            dataRegistro instanceof Date &&
            !Number.isNaN(dataRegistro.getTime())
        ) {
            this.#dataRegistro = dataRegistro;
            return true;
        }

        return false;
    }

    getDataRegistro() {
        return this.#dataRegistro;
    }

    setPJ(pj) {

        if (pj instanceof PJ) {
            this.#pj = pj;
            return true;
        }

        return false;
    }

    getPJ() {
        return this.#pj;
    }
}

function IEfunc(numero, estado, dataRegistro) {

    let pj;

    return {

        setNumero(novoNumero) {

            if (
                typeof novoNumero === "string" &&
                novoNumero.trim() !== ""
            ) {
                numero = novoNumero.trim();
                return true;
            }

            return false;
        },

        getNumero() {
            return numero;
        },


        setEstado(novoEstado) {

            if (
                typeof novoEstado === "string" &&
                novoEstado.trim() !== ""
            ) {
                estado = novoEstado.trim();
                return true;
            }

            return false;
        },

        getEstado() {
            return estado;
        },


        setDataRegistro(novaData) {

            if (
                novaData instanceof Date &&
                !Number.isNaN(novaData.getTime())
            ) {
                dataRegistro = novaData;
                return true;
            }

            return false;
        },

        getDataRegistro() {
            return dataRegistro;
        },


        setPJ(novoPJ) {

            if (novoPJ instanceof PJ) {
                pj = novoPJ;
                return true;
            }

            return false;
        },

        getPJ() {
            return pj;
        }
    };
}

const IEjson = {

    numero: null,
    estado: null,
    dataRegistro: null,
    pj: null,


    setNumero(numero) {

        if (
            typeof numero === "string" &&
            numero.trim() !== ""
        ) {
            this.numero = numero.trim();
            return true;
        }

        return false;
    },


    getNumero() {
        return this.numero;
    },


    setEstado(estado) {

        if (
            typeof estado === "string" &&
            estado.trim() !== ""
        ) {
            this.estado = estado.trim();
            return true;
        }

        return false;
    },


    getEstado() {
        return this.estado;
    },


    setDataRegistro(dataRegistro) {

        if (
            dataRegistro instanceof Date &&
            !Number.isNaN(dataRegistro.getTime())
        ) {
            this.dataRegistro = dataRegistro;
            return true;
        }

        return false;
    },


    getDataRegistro() {
        return this.dataRegistro;
    },


    setPJ(pj) {

        if (pj instanceof PJ) {
            this.pj = pj;
            return true;
        }

        return false;
    },


    getPJ() {
        return this.pj;
    }
};


export default IEclss;

export {
    IEfunc,
    IEjson
};