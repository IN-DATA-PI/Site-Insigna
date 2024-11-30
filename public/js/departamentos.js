nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;

const tabela = document.getElementById('tabela').getElementsByTagName('tbody')[0];

function listarDep() {
    tabela.innerHTML = '';

    fetch(`/departamentos/listarDep`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {
        console.log("resposta: ", resposta);
        resposta.json().then(json => {
            json.forEach(departamento => {
                if (!departamento.isDeletedUser) {
                    const row = tabela.insertRow();
                    row.innerHTML = `
                    <td>${departamento.idDepartamentoPolicia}</td>
                    <td>${departamento.nome}</td>
                    <td>${departamento.cep}</td>
                    <td>${departamento.logradouro}</td>
                    <td>${departamento.numero}</td>
                    <td>${departamento.bairro}</td>
                    <td>${departamento.cidade}</td>
                    <td><a onclick="editarDep('${departamento.idDepartamentoPolicia}', '${departamento.nome}', '${departamento.cep}', '${departamento.logradouro}', '${departamento.numero}', '${departamento.bairro}', '${departamento.cidade}')"><i class="fa-solid fa-pen icon"></i></a></td>
                    <td><a onclick="deletarDep('${departamento.idDepartamentoPolicia}')"><i class="fa-solid fa-trash-can icon"></i></a></td>
                `;
                }
            });
        })
    }).catch(function (error) {
        console.log("error: ", error);
    });
}

function editarDep(idDepartamentoPolicia) {
    sessionStorage.ID_DEP = idDepartamentoPolicia;
    console.log("cliquei em editar - " + idDepartamentoPolicia);
    window.alert("Você será redirecionado à página de edição do departamento de id número: " + idDepartamentoPolicia);
    window.location = "/dash/edicaoDepartamento.html"
}

function deletarDep(idDepartamentoPolicia) {
    console.log("Criar função de apagar departamento escolhido - ID" + idDepartamentoPolicia);
    fetch(`/departamentos/deletarDep/${idDepartamentoPolicia}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Departamento deletado com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            window.location = "/dash/departamentos.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar deletar o departamento ! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}

listarDep();