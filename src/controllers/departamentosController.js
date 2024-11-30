var departamentosModel = require("../models/departamentosModel");

function cadastrarDep(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var logradouro = req.body. logradouroServer;
    var cidade = req.body.cidadeServer;
    var numero = req.body.numeroServer;
    var cep = req.body.cepServer;
    var bairro = req.body.bairroServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (logradouro == undefined) {
        res.status(400).send("Seu logradouro está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    }else if (bairro == undefined) {
        res.status(400).send("Seu bairro está undefined!");
    }
    else {

        departamentosModel.cadastrarDep(nome, cep, logradouro, numero, bairro, cidade)
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

function listarDep(req, res) {
    departamentosModel.listarDep()
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function(erro) {
                console.log(erro);
                console.log("\n Houve um erro ao listar os departamentos! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage)
            }
        );
}


function editarDep(req, res) {
    var nomeAtualizado = req.body.nome;
    var cepAtualizado = req.body.cep;
    var logradouroAtualizado = req.body.logradouro;
    var numeroAtualizado = req.body.numero;
    var bairroAtualizado = req.body.bairro;
    var cidadeAtualizado = req.body.cidade;
    var idDepartamentoPolicia = req.params.idDepartamentoPolicia;

    departamentosModel.editarDep(nomeAtualizado, cepAtualizado, logradouroAtualizado, numeroAtualizado, bairroAtualizado, cidadeAtualizado, idDepartamentoPolicia)
        .then(
            function (resultado) {
                res.json(resultado);
                console.log(nomeAtualizado, cepAtualizado, logradouroAtualizado, numeroAtualizado, bairroAtualizado, cidadeAtualizado, idDepartamentoPolicia)
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

function deletarDep(req, res) {
    var id = req.params.idDepartamentoPolicia;

    departamentosModel.deletarDep(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o departamento: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


module.exports = {
    cadastrarDep,
    listarDep,
    editarDep,
    deletarDep
}