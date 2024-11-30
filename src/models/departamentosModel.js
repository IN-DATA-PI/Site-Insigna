var database = require("../database/config")

function cadastrarDep(nome, cep, logradouro, numero, bairro, cidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, cep, logradouro, numero, bairro, cidade);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO DepartamentoPolicia (nome, cep, logradouro, numero, bairro, cidade) VALUES ('${nome}', '${cep}', '${logradouro}', '${numero}', '${bairro}', '${cidade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarDep(nome, cep, logradouro, numero, bairro, cidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarTodos():", nome, cep, logradouro, numero, bairro, cidade);
    var instrucaoSql = `
        SELECT idDepartamentoPolicia, nome, cep, logradouro, numero, bairro, cidade FROM DepartamentoPolicia;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function editarDep(nomeAtualizado, cepAtualizado, logradouroAtualizado, numeroAtualizada, bairroAtualizado, cidadeAtualizado, idDepartamentoPolicia) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", nomeAtualizado, cepAtualizado, logradouroAtualizado, numeroAtualizada, bairroAtualizado, cidadeAtualizado, idDepartamentoPolicia);

    // Array para armazenar as alterações a serem feitas
    let campos = [];

    // Verificar cada parâmetro e adicionar à query somente se for válido
    if (nomeAtualizado) {
        campos.push(`nome = '${nomeAtualizado}'`);
    }
    if (cepAtualizado) {
        campos.push(`cep = '${cepAtualizado}'`);
    }
    if (logradouroAtualizado) {
        campos.push(`logradouro = '${logradouroAtualizado}'`);
    }
    if (numeroAtualizada) {
        campos.push(`numero = '${numeroAtualizada}'`);
    }
    if (bairroAtualizado) {
        campos.push(`bairro = '${bairroAtualizado}'`);
    }
    if (cidadeAtualizado) {
        campos.push(`cidade = '${cidadeAtualizado}'`);
    }

    // Caso não haja campos a serem atualizados
    if (campos.length === 0) {
        console.log("Nenhum dado para atualizar.");
        return Promise.reject("Nenhum campo válido foi enviado para atualização.");
    }

    const instrucaoSql = `
        UPDATE DepartamentoPolicia 
        SET ${campos.join(", ")} 
        WHERE idDepartamentoPolicia = ${idDepartamentoPolicia};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarDep(id) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", id);
    var instrucaoSql = `
        DELETE FROM DepartamentoPolicia WHERE idDepartamentoPolicia = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarDep,
    listarDep,
    editarDep,
    deletarDep
}