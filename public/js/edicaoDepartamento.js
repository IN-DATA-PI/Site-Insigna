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

function editarDep() {

    let nome = ipt_nomeAtualizado.value;
    let cep = Number(ipt_cepAtualizado.value);
    let logradouro = ipt_logradouroAtualizado.value;
    let numero = Number(ipt_numeroAtualizado.value);
    let bairro = ipt_bairroAtualizado.value;
    let cidade = ipt_cidadeAtualizado.value;

    console.log(JSON.stringify({
        nome: ipt_nomeAtualizado.value,
        cep: ipt_cepAtualizado.value,
        logradouro: ipt_logradouroAtualizado.value,
        numero: ipt_numeroAtualizado.value,
        bairro: ipt_bairroAtualizado.value,
        cidade: ipt_cidadeAtualizado.value,
    }));

    fetch(`/departamentos/editarDep/${sessionStorage.getItem("ID_DEP")}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            cep: cep,
            logradouro: logradouro,
            numero: numero,
            bairro: bairro,
            cidade: cidade
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then((json) => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.ID_DEP = json.idDepartamentoPolicia;

            window.alert("Departamento atualizado com sucesso pelo usuário de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            window.location = "/dash/departamentos.html"
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