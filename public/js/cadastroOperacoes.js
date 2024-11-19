nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;


function cadastrarOp() {
    var nomeOpVar = ipt_nomeOp.value;
    var qtdPoliciaisVar = Number(ipt_qtdPoliciais.value);
    var localVar = ipt_local.value;
    var dataOpVar = ipt_dataOp.value;
    var descVar = ipt_desc.value;

    if (
        nomeOpVar == "" ||
        qtdPoliciaisVar == "" ||
        localVar == "" ||
        dataOpVar == "" ||
        descVar == ""
    ) {
        alert("Mensagem de erro para todos os campos em branco");
        return false;
    }
    // Enviando o valor da nova input
    fetch("../usuarios/cadastrarOp", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeOpServer: nomeOpVar,
            qtdPoliciaisServer: qtdPoliciaisVar,
            localServer: localVar,
            descServer: descVar,
            dataOpServer: dataOpVar,
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