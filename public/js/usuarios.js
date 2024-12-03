nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;

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

const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

function listarTodos() {
    tabela.innerHTML = '';

    fetch(`/usuarios/listarUsuarios`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        resposta.json().then(json => {
            json.forEach(usuario => {
                if (!usuario.isDeletedUser) {
                    const row = tabela.insertRow();
                    row.innerHTML = `
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.distritoPolicial}</td>
                    <td>${usuario.email || 'E-mail não definido'}</td>
                    <td>${usuario.senha || 'Não definida'}</td>
                    <td><a onclick="editarUsuario('${usuario.id}', '${usuario.nome}', '${usuario.distritoPolicial}', '${usuario.email}', '${usuario.senha}')"><i class="fa-solid fa-pen icon"></i></a></td>
                    <td><a onclick="deletarUsuario('${usuario.id}')"><i class="fa-solid fa-trash-can icon"></i></a></td>
                `;
                }
            });
        })
    }).catch(function (error) {
        console.log("error: ", error);
    });
}

function editarUsuario(id) {
    sessionStorage.ID_USUARIO = id;
    console.log("cliquei em editar - " + id);
    window.alert("Você será redirecionado à página de edição do aviso de id número: " + id);
    window.location = "/dash/edicaoUsuario.html"
}

function deletarUsuario(id) {
    console.log("Criar função de apagar usuário escolhido - ID" + id);
    fetch(`/usuarios/deletarUsuario/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Usuário deletado com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            window.location = "/dash/usuarios.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar deletar o usuário ! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

listarTodos();