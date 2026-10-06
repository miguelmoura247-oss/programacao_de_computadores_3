import PJ from "./pessoas/PJ.mjs";

import IEclss, {
    IEfunc,
    IEjson
} from "./objetos/IE.mjs";

const pj1 = new PJ();

pj1.setNome("Empresa Alpha");
pj1.setEmail("contato@alpha.com.br");
pj1.setCNPJ("12.345.678/0001-90");
pj1.setRazaoSocial("Alpha Tecnologia Ltda.");

const pj2 = new PJ();

pj2.setNome("Empresa Beta");
pj2.setEmail("contato@beta.com.br");
pj2.setCNPJ("98.765.432/0001-10");
pj2.setRazaoSocial("Beta Comércio e Serviços Ltda.");

const dataRegistro = new Date();

const ieClasse = new IEclss(
    "110.042.490.114",
    "SP",
    dataRegistro
);

const ieFuncao = IEfunc(
    "123.456.789.012",
    "RJ",
    dataRegistro
);

IEjson.setNumero("456.789.123.456");

IEjson.setEstado("MG");

IEjson.setDataRegistro(dataRegistro);

console.log(" ASSOCIAÇÃO DAS PJs/");

console.log(
    "IEclss + PJ1:",
    ieClasse.setPJ(pj1)
);

console.log(
    "IEfunc + PJ2:",
    ieFuncao.setPJ(pj2)
);

console.log(
    "IEjson + PJ1:",
    IEjson.setPJ(pj1)
);

console.log("\nPJs RECUPERADAS ");

console.log(
    "IEclss:",
    ieClasse.getPJ().getRazaoSocial()
);

console.log(
    "IEfunc:",
    ieFuncao.getPJ().getRazaoSocial()
);

console.log(
    "IEjson:",
    IEjson.getPJ().getRazaoSocial()
);

const objetoInvalido = {
    nome: "Empresa Inválida"
};

console.log("\nTESTE COM OBJETO INVÁLIDO ");

console.log(
    "IEclss:",
    ieClasse.setPJ(objetoInvalido)
);

console.log(
    "IEfunc:",
    ieFuncao.setPJ(objetoInvalido)
);

console.log(
    "IEjson:",
    IEjson.setPJ(objetoInvalido)
);

console.log("\n TESTE COM PJ VÁLIDA ");

console.log(
    "IEclss:",
    ieClasse.setPJ(pj1)
);

console.log(
    "IEfunc:",
    ieFuncao.setPJ(pj2)
);

console.log(
    "IEjson:",
    IEjson.setPJ(pj1)
);

console.log("\n IEclss");

console.log("Número:", ieClasse.getNumero());

console.log("Estado:", ieClasse.getEstado());

console.log(
    "Data de registro:",
    ieClasse.getDataRegistro().toLocaleString("pt-BR")
);

console.log(
    "Pessoa Jurídica:",
    ieClasse.getPJ().getRazaoSocial()
);

console.log("\n IEfunc ");

console.log("Número:", ieFuncao.getNumero());

console.log("Estado:", ieFuncao.getEstado());

console.log(
    "Data de registro:",
    ieFuncao.getDataRegistro().toLocaleString("pt-BR")
);

console.log(
    "Pessoa Jurídica:",
    ieFuncao.getPJ().getRazaoSocial()
);

console.log("\nIEjson ");

console.log("Número:", IEjson.getNumero());

console.log("Estado:", IEjson.getEstado());

console.log(
    "Data de registro:",
    IEjson.getDataRegistro().toLocaleString("pt-BR")
);

console.log(
    "Pessoa Jurídica:",
    IEjson.getPJ().getRazaoSocial()
);