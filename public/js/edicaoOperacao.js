nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.USUARIO_NOME; 

function editarUsuario() {

    let nomeOp = ipt_nomeOpAtualizado.value;
    let logradouro = ipt_logradouroAtualizado.value;
    let cidade = ipt_cidadeAtualizado.value;
    let numero = Number(ipt_numeroAtualizado.value);
    let cep = ipt_cepAtualizado.value;
    let bairro = ipt_bairroAtualizado.value;


    console.log(JSON.stringify({
        nomeOp: ipt_nomeOpAtualizado.value,
        logradouro: ipt_logradouroAtualizado.value,
        cidade: ipt_cidadeAtualizado.value,
        numero: Number(ipt_numeroAtualizado.value),
        cep: ipt_cepAtualizado.value,
        bairro: ipt_bairroAtualizado.value,
    }));

    fetch(`/usuarios/editarUsuario/${sessionStorage.getItem("ID_USUARIO")}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nomeOp: nome,
            logradouro: logradouro,
            cidade: cidade,
            numero: numero,
            cep: cep,
            bairro: bairro
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Usuário atualizado com sucesso pelo usuário de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            window.location = "/dash/operacoes.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}