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

function editarUsuario() {

    let nome = ipt_nomeAtualizado.value;
    let distritoPolicial = ipt_departamentoAtualizado.value;
    let email = ipt_emailAtualizado.value;
    let senha = ipt_senhaAtualizado.value;

    console.log(JSON.stringify({
        nome: ipt_nomeAtualizado.value,
        distritoPolicial: ipt_departamentoAtualizado.value,
        email: ipt_emailAtualizado.value,
        senha: ipt_senhaAtualizado.value,
    }));

    fetch(`/usuarios/editarUsuario/${sessionStorage.getItem("ID_USUARIO")}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            distritoPolicial: distritoPolicial,
            email: email,
            senha: senha,
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Usuário atualizado com sucesso pelo usuário de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            window.location = "/dash/usuarios.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}