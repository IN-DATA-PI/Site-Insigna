nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;

let linksMenu = document.querySelectorAll(".btn-dl");

if (sessionStorage.NOME_USUARIO.includes("iv_")) {

    linksMenu.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            alert("Ação desabilitada para este usuário");
            link.style.cursor = "not-allowed"; 
            link.title = "Ação desabilitada para este usuário"; 
        });

        link.style.opacity = "0.6"; 
    });
}

function cadastrarOp() {
    var nomeOpVar = ipt_nomeOp.value;
    var qtdPoliciaisVar = Number(ipt_qtdPoliciais.value);
    var localVar = ipt_local.value;
    var dataOpVar = ipt_dataOp.value;
    var descVar = ipt_desc.value;
    var statusOpVar = "PENDENTE";
    let id = sessionStorage.ID_USUARIO;

    if (
        nomeOpVar == "" ||
        qtdPoliciaisVar == "" ||
        localVar == "" ||
        dataOpVar == "" ||
        descVar == "" ||
        statusOpVar == ""
    ) {
        alert("Mensagem de erro para todos os campos em branco");
        return false;
    }
    // Enviando o valor da nova input
    fetch("../operacoes/cadastrarOp", {
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
            statusOpServer: statusOpVar,
            idServer: id
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                alert("Cadastrado com sucesso!");
                setTimeout(() => {
                    window.location = "../dash/operacoes.html";
                }, "1000");
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });
}