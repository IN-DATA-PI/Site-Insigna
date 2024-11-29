var database = require("../database/config")

function cadastrarOp(nomeOp, qtdPoliciais, local, dataOp, desc, statusOp, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarOp():", nomeOp, qtdPoliciais, local, dataOp, desc);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO operacoes (nomeOp, qtdPoliciais, localOp, dataOp, descricaoOp, statusOp, fkUsuario) VALUES ('${nomeOp}', ${qtdPoliciais}, '${local}', '${dataOp}', '${desc}', '${statusOp}', '${id}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarTodas() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
    SELECT 
        op.codigoOp AS codOperacao,
        op.nomeOp,
        op.qtdPoliciais,
        op.localOp,
        DATE_FORMAT(op.dataOp, '%d/%m/%Y') AS dataFormatada,
        op.descricaoOp,
        op.statusOp,
        op.fkUsuario,
        u.id AS idUsuario,
        u.nome,
        u.email,
        u.senha
    FROM operacoes op
    INNER JOIN usuario u
        ON op.fkUsuario = u.id;

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function aceitarOp(codOperacao) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

    var instrucaoSql = `UPDATE operacoes SET statusOp = 'ACEITA' WHERE codigoOp = ${codOperacao}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function recusarOp(codOperacao) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");

    var instrucaoSql = `UPDATE operacoes SET statusOp = 'RECUSADA' WHERE codigoOp = ${codOperacao}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarOp(nomeOp, qtdPoliciaisAtualizado, localAtualizado, dataAtualizado, descricaoAtualizado, codOperacao) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");


    // Array para armazenar as alterações a serem feitas
    let campos = [];

    // Verificar cada parâmetro e adicionar à query somente se for válido
    if (nomeOp) {
        campos.push(`nomeOp = '${nomeOp}'`);
    }
    if (qtdPoliciaisAtualizado) {
        campos.push(`qtdPoliciais = '${qtdPoliciaisAtualizado}'`);
    }
    if (localAtualizado) {
        campos.push(`localOp = '${localAtualizado}'`);
    }
    if (dataAtualizado) {
        campos.push(`dataOp = '${dataAtualizado}'`);
    }
    if (descricaoAtualizado) {
        campos.push(`descricaoOp = '${descricaoAtualizado}'`);
    }

    // Caso não haja campos a serem atualizados
    if (campos.length === 0) {
        console.log("Nenhum dado para atualizar.");
        return Promise.reject("Nenhum campo válido foi enviado para atualização.");
    }

    // Montar a instrução SQL dinamicamente
    const instrucaoSql = `
        UPDATE operacoes 
        SET ${campos.join(", ")} 
        WHERE codigoOp = ${codOperacao};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletarOp(codOperacao) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", codOperacao);
    var instrucaoSql = `
        DELETE FROM operacoes WHERE codigoOp = ${codOperacao};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarOp,
    listarTodas,
    aceitarOp,
    recusarOp,
    editarOp,
    deletarOp
}