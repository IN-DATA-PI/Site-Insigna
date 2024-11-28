var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var nome = req.body.nomeServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(nome, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        res.status(200).json(resultadoAutenticar[0]);
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Usuário e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }   
}


function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var distritoPolicial = req.body.distritoPolicialServer;
    var email = req.body.emailServer;
    var matricula = req.body.matriculaServer;
    var senha = req.body.senhaServer;


    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (distritoPolicial == undefined) {
        res.status(400).send("Seu dp está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu e-mail está undefined!");
    } else if (matricula == undefined) {
        res.status(400).send("Sua matrícula está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Seu senha está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, distritoPolicial, email, matricula, senha)
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

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarDep(nome, cep, logradouro, numero, bairro, cidade)
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

function listarTodos(req, res) {
    usuarioModel.listarTodos()
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function(erro) {
                console.log(erro);
                console.log("\n Houve um erro ao listar os usuários! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage)
            }
        );
}

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
        usuarioModel.cadastrarOp(nomeOp, qtdPoliciais, local, dataOp, desc, statusOp, id)
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

function cadastrarIv(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nomeIv = req.body.nomeIvServer;
    var matriculaIv = req.body.matriculaIvServer;
    var emailIv = req.body.emailIvServer;
    var senhaIv = req.body.senhaIvServer;
    var desc = req.body.descServer;

    // Faça as validações dos valores
    if (nomeIv == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (matriculaIv == undefined) {
        res.status(400).send("A matricula está undefined!");
    } else if (emailIv == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senhaIv == undefined) {
        res.status(400).send("Sua senha está undefined!");
    }else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrarIv(nomeIv, matriculaIv, emailIv, senhaIv)
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

function editarUsuario(req, res) {
    var nomeAtualizado = req.body.nome;
    var emailAtualizado = req.body.email;
    var departamentoAtualizado = req.body.distritoPolicial;
    var senhaAtualizado = req.body.senha;
    var usuario = req.params.id;

    usuarioModel.editarUsuario(nomeAtualizado, emailAtualizado, departamentoAtualizado, senhaAtualizado, usuario)
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

function deletarUsuario(req, res) {
    var id = req.params.id;

    usuarioModel.deletarUsuario(id)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao deletar o usuário: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function listarTodas(req, res) {
    usuarioModel.listarTodas().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os avisos: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function aceitarOp(req, res) {
    const codOperacao = req.params.codOperacao; // ou req.params.codOperacao

    usuarioModel.aceitarOp(codOperacao)
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

    usuarioModel.recusarOp(codOperacao)
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

module.exports = {
    autenticar,
    cadastrar,
    cadastrarDep,
    listarTodos,
    cadastrarOp,
    cadastrarIv,
    editarUsuario,
    deletarUsuario,
    listarTodas,
    aceitarOp,
    recusarOp
}