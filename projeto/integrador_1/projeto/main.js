const util = require("./biblioteca/util");

const Pessoa = require("./pessoas/Pessoa");
const Aluno = require("./pessoas/Aluno");
const Professor = require("./pessoas/Professor");


function mostrarDados(objeto) {
    
    console.log("Nome:", objeto.getNome());
    console.log("E-mail:", objeto.getEmail());

    if (objeto instanceof Aluno) {
        console.log("Matrícula:", objeto.getMatricula());
    }

    if (objeto instanceof Professor) {
        console.log("Disciplina:", objeto.getDisciplina());
    }

}



const pessoa1 = new Pessoa();

pessoa1.setNome("Carlos Silva");
pessoa1.setEmail("carlos@gmail.com");


const pessoa2 = new Pessoa();

pessoa2.setNome("Ana Souza");
pessoa2.setEmail("ana@gmail.com");




const aluno1 = new Aluno();

aluno1.setNome("João Santos");
aluno1.setEmail("joao@gmail.com");
aluno1.setMatricula("20260001");


const aluno2 = new Aluno();

aluno2.setNome("Maria Oliveira");
aluno2.setEmail("maria@gmail.com");
aluno2.setMatricula("20260002");




const professor1 = new Professor();

professor1.setNome("Pedro Almeida");
professor1.setEmail("pedro@faculdade.edu.br");
professor1.setDisciplina("Programação Orientada a Objetos");


const professor2 = new Professor();

professor2.setNome("Juliana Costa");
professor2.setEmail("juliana@faculdade.edu.br");
professor2.setDisciplina("JavaScript");




console.log("== TESTE DE E-MAIL ==");

console.log(
    "E-mail válido:",
    util.validarEmail("teste@gmail.com")
);

console.log(
    "E-mail inválido:",
    util.validarEmail("teste@empresa")
);

console.log(
    "E-mail acadêmico:",
    util.validarEmail("professor@faculdade.edu.br")
);




console.log("\n========== TESTE DE MATRÍCULA ==========");

console.log(
    "Matrícula válida:",
    util.validarMatricula("20260001")
);

console.log(
    "Matrícula inválida:",
    util.validarMatricula("12")
);




console.log("\n== TESTE DE CPF ==");

console.log(
    "CPF válido:",
    util.validarCPF("529.982.247-25")
);

console.log(
    "CPF inválido:",
    util.validarCPF("111.111.111-11")
);




console.log("\n== TESTE DE PROFESSOR ==");

console.log(
    "Professor com e-mail .edu.br:",
    professor1.setEmail("professor@faculdade.edu.br")
);

console.log(
    "Professor com e-mail comum:",
    professor1.setEmail("professor@gmail.com")
);




console.log("\n== PESSOAS ==");

mostrarDados(pessoa1);
mostrarDados(pessoa2);




console.log("\n== ALUNOS ==");

mostrarDados(aluno1);
mostrarDados(aluno2);


console.log("\n== PROFESSORES ==");

mostrarDados(professor1);
mostrarDados(professor2);




console.log("\n");
console.log("           RELATÓRIO FINAL");

console.log("\n- PESSOAS -");

mostrarDados(pessoa1);
mostrarDados(pessoa2);


console.log("\n-ALUNOS -");

mostrarDados(aluno1);
mostrarDados(aluno2);


console.log("\n- PROFESSORES -");

mostrarDados(professor1);
mostrarDados(professor2);
