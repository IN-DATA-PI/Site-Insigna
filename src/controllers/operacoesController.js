var operacoesModel = require("../models/operacoesModel");

function cadastrarOp(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeOp = req.body.nomeOpServer;
    var qtdPoliciais = req.body.qtdPoliciaisServer;
    var local = req.body.localServer;
    var dataOp = req.body.dataOpServer;
    var desc = req.body.descServer;
    var statusOp = req.body.statusOpServer;
    var id = req.body.idServer;

    // Faça as validações dos valores
    if (nomeOp == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (qtdPoliciais == undefined) {
        res.status(400).send("A qtd policiais está undefined!");
    } else if (local == undefined) {
        res.status(400).send("Seu local está undefined!");
    } else if (desc == undefined) {
        res.status(400).send("Sua desc está undefined!");
    } else if (dataOp == undefined) {
        res.status(400).send("Sua data está undefined!");
    } else if (statusOp == undefined) {
        res.status(400).send("Seu status está undefined!")
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        operacoesModel.cadastrarOp(nomeOp, qtdPoliciais, local, dataOp, desc, statusOp, id)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function listarTodas(req, res) {
    operacoesModel.listarTodas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as operações: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function aceitarOp(req, res) {
    const codOperacao = req.params.codOperacao; // ou req.params.codOperacao

    operacoesModel.aceitarOp(codOperacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function recusarOp(req, res) {
    const codOperacao = req.params.codOperacao; // ou req.params.codOperacao

    operacoesModel.recusarOp(codOperacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function editarOp(req, res) {
    var nomeOp = req.body.nomeOp;
    var qtdPoliciaisAtualizado = req.body.qtdPoliciais;
    var localAtualizado = req.body.local;
    var descricaoAtualizado = req.body.descricao;
    var dataAtualizado = req.params.data;
    var codOperacao = req.params.codOperacao;

    operacoesModel.editarOp(nomeOp, qtdPoliciaisAtualizado, localAtualizado, descricaoAtualizado, dataAtualizado, codOperacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function deletarOp(req, res) {
    var codOperacao = req.params.codOperacao;

    operacoesModel.deletarOp(codOperacao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar a operação: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = {
    cadastrarOp,
    listarTodas,
    aceitarOp,
    recusarOp,
    editarOp,
    deletarOp
}