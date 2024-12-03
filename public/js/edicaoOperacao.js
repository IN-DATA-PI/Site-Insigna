nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.USUARIO_NOME; 

let linksIv = document.querySelectorAll(".btn-iv");

if (sessionStorage.NOME_USUARIO.includes("dl_")) {

    linksIv.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            alert("Ação desabilitada para este usuário");
            link.style.cursor = "not-allowed"; 
            link.title = "Ação desabilitada para este usuário"; 
        });

        link.style.opacity = "0.6"; 
    });
}

let linksDl = document.querySelectorAll(".btn-dl");

if (sessionStorage.NOME_USUARIO.includes("iv_")) {

    linksDl.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            alert("Ação desabilitada para este usuário");
            link.style.cursor = "not-allowed"; 
            link.title = "Ação desabilitada para este usuário"; 
        });

        link.style.opacity = "0.6"; 
    });
}

function editarOp() {

    let nomeOp = ipt_nomeOpAtualizado.value;
    let qtdPoliciais = Number(ipt_qtdPoliciaisAtualizado.value);
    let local = ipt_localAtualizado.value;
    let descricao = ipt_descricaoAtualizado.value;
    let data = ipt_dataAtualizado.value;

    console.log(JSON.stringify({
        nomeOp: ipt_nomeOpAtualizado.value,
        qtdPoliciais: ipt_qtdPoliciaisAtualizado.value,
        local: ipt_localAtualizado.value,
        descricao: ipt_descricaoAtualizado.value,
        data: ipt_dataAtualizado.value,
    }));

    fetch(`/operacoes/editarOp/${sessionStorage.getItem("COD_OPERACAO")}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeOp: nomeOp,
            qtdPoliciais: qtdPoliciais,
            local: local,
            descricao: descricao,
            data: data
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then((json) => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.COD_OPERACAO = json.codigoOp;
                sessionStorage.NOME_OPERACAO = json.nomeOp;

            window.alert("Operação atualizada com sucesso pelo usuário de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            window.location = "/dash/operacoes.html"
        });
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}