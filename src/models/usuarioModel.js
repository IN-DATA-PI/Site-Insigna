var database = require("../database/config")

function autenticar(nome, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", nome, senha)
    var instrucaoSql = `
        SELECT id, nome, distritoPolicial, email, matricula, senha from usuario WHERE nome = '${nome}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, distritoPolicial, email, matricula, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, distritoPolicial, email, matricula, senha) VALUES ('${nome}', '${distritoPolicial}', '${email}', '${matricula}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

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

function listarTodos(nome, distritoPolicial, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarTodos():", nome, distritoPolicial, email, senha);
    var instrucaoSql = `
        SELECT id, nome, distritoPolicial, email, senha FROM usuario;
    `
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarIv(nomeIv, matriculaIv, emailIv, senhaIv) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrarOp():", nomeIv, matriculaIv, emailIv, senhaIv);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        insert into usuario(nome, matricula, email, senha) values ("${nomeIv}", "${matriculaIv}", "${emailIv}", "${senhaIv}");
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarUsuario(nomeAtualizado, emailAtualizado, departamentoAtualizado, senhaAtualizada, usuario) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function editar(): ", usuario);

    // Array para armazenar as alterações a serem feitas
    let campos = [];

    // Verificar cada parâmetro e adicionar à query somente se for válido
    if (nomeAtualizado) {
        campos.push(`nome = '${nomeAtualizado}'`);
    }
    if (emailAtualizado) {
        campos.push(`email = '${emailAtualizado}'`);
    }
    if (departamentoAtualizado) {
        campos.push(`distritoPolicial = '${departamentoAtualizado}'`);
    }
    if (senhaAtualizada) {
        campos.push(`senha = '${senhaAtualizada}'`);
    }

    // Caso não haja campos a serem atualizados
    if (campos.length === 0) {
        console.log("Nenhum dado para atualizar.");
        return Promise.reject("Nenhum campo válido foi enviado para atualização.");
    }

    // Montar a instrução SQL dinamicamente
    const instrucaoSql = `
        UPDATE usuario 
        SET ${campos.join(", ")} 
        WHERE id = ${usuario};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    // Executar a query no banco de dados
    return database.executar(instrucaoSql);
}


function deletarUsuario(id) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", id);
    var instrucaoSql = `
        DELETE FROM usuario WHERE id = ${id};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    autenticar,
    cadastrar,
    cadastrarDep,
    listarTodos,
    cadastrarIv,
    editarUsuario,
    deletarUsuario
};