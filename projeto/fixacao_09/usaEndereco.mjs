import Endereco from "./objetos/Endereco.mjs";

const endereco = new Endereco();

async function consultarEndereco() {
    const sucesso = await endereco.setCep("72015565");

    if (sucesso) {
        console.log("Endereço");

        console.log("CEP:", endereco.getCep());
        console.log("Logradouro:", endereco.getLogradouro());
        console.log("Bairro:", endereco.getBairro());
        console.log("Cidade:", endereco.getLocalidade());
        console.log("UF:", endereco.getUf());
        console.log("Complemento:", endereco.getComplemento() || "Não informado");
        console.log("DDD:", endereco.getDdd() || "Não informado");
        console.log("IBGE:", endereco.getIbge() || "Não informado");
        console.log("GIA:", endereco.getGia() || "Não informado");
    }
}

consultarEndereco();