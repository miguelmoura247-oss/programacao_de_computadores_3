function validarEmail(email){
    if(typeof email !== "string"){
        return false;
    }

    return email.includes("@") && (email.endsWith(".com")|| email.endsWith(".edu.br"));

}

function validarMatricula(matricula){
    if (typeof matricula !== "string"){
        return false;
    }
    return /^[A-Za-z0-9]{4,}$/.test(matricula);
}


function validarCPF(cpf){
    if(typeof cpf !== "string"){
        return false;
    }
    const numeros = cpf.replace(/\D/g,"");

    if(numeros.length !== 11){
        return false;
    }

    if(/^(\d)\1{10}$/.test(numeros)){
        return false;
    }

    let soma = 0;

    for(let i = 0; i < 9;i++){
        soma +=Number(numeros[i]) * (10-i);
    }

    let resto = (soma * 10)% 11;

    if (resto !== Number(numeros[9])){
        return false;
    }

    soma = 0;

    for(let i = 0; i < 10;i++){
        soma += Number(numeros[i]) * (11 -i);
    }

    resto = (soma * 10)% 11;

    if(resto === 10){
        resto = 0;
    }
    return resto === Number(numero[10]);
}
module.exports = {
    validarEmail,
    validarMatricula,
    validarCPF
};