nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;


function cadastrarIv() {
    var nomeIvVar = "iv_" + ipt_nomeIv.value;
    var matriculaIvVar = ipt_matriculaIv.value;
    var emailIvVar = ipt_emailIv.value;
    var senhaIvVar = ipt_senhaIv.value;
    var confirmarSenhaIvVar = ipt_confirmarSenhaIv.value;

    if (
        nomeIvVar == "" ||
        matriculaIvVar == "" ||
        emailIvVar == "" ||
        senhaIvVar == "" ||
        confirmarSenhaIvVar == ""
    ) {
        alert("Mensagem de erro para todos os campos em branco");
        return false;
    }
    // Enviando o valor da nova input
    fetch("../usuarios/cadastrarIv", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeIvServer: nomeIvVar,
            matriculaIvServer: matriculaIvVar,
            emailIvServer: emailIvVar,
            senhaIvServer: senhaIvVar,
            confirmarSenhaIvServer: confirmarSenhaIvVar,
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert("Cadastrado com sucesso!");
                setTimeout(() => {
                    window.location = "login.html";
                }, "1000");
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}