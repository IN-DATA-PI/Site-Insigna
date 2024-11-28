nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_operacao;

function listarTodas() {

    fetch("/usuarios/listarTodas").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_op");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {
                console.log("Dados recebidos: ", JSON.stringify(resposta));

                var feed = document.getElementById("feed_op");
                feed.innerHTML = "";
                for (let i = 0; i < resposta.length; i++) {
                    var operacao = resposta[i];

                    var divOperacao = document.createElement("div");
                    var div1 = document.createElement("div")
                    var div2 = document.createElement("div")
                    var div3 = document.createElement("div")
                    var div4 = document.createElement("div")
                    var spanID = document.createElement("span");
                    var spanNome = document.createElement("span");
                    var spanUsuario = document.createElement("span");
                    var statusOp = operacao.statusOp;
                    var divStatus = document.createElement("div");
                    var spanQtdPolicia = document.createElement("span");
                    var spanlocalOp = document.createElement("span");
                    var spandataOp = document.createElement("span");
                    var divDescricao = document.createElement("div");
                    var divButtons = document.createElement("div");
                    var divButtons2 = document.createElement("div");
                    var editar = document.createElement("i");
                    var deletar = document.createElement("i");
                    var aceitar = document.createElement("i");
                    var recusar = document.createElement("i");

                    spanID.innerHTML = "Código: " + operacao.codOperacao;
                    spanNome.innerHTML = "Nome: " + operacao.nomeOp;
                    spanUsuario.innerHTML = "Cadastrada por: " + operacao.nome;
                    spanQtdPolicia.innerHTML = "Quantidade de Policiais: " + operacao.qtdPolicias;
                    spanlocalOp.innerHTML = "Local da Operação: " + operacao.localOp;
                    spandataOp.innerHTML = "Data: " + operacao.dataFormatada;
                    divDescricao.innerHTML = "Descrição: " + operacao.descricaoOp;

                    divOperacao.className = "operacao";
                    div1.className = "div1"
                    div2.className = "div2"
                    div3.className = "div3"
                    div4.className = "div4"
                    spanNome.id = "inputNumero" + operacao.idAviso;
                    spanNome.className = "span";
                    spanUsuario.className = "span";
                    divStatus.className = "divStatus pendente";
                    spanQtdPolicia.className = "span";
                    spanlocalOp.className = "span";
                    spandataOp.className = "span";
                    spanID.className = "span";
                    divDescricao.className = "descricao";

                    divButtons.className = "div-buttons"
                    divButtons2.className = "div-buttons"

                    editar.className = "fa-solid fa-pen icon";
                    editar.id = "btnEditar" + operacao.codOperacao;
                    editar.setAttribute("onclick", `editarOp(${operacao.codOperacao})`);
                    
                    deletar.className = "fa-solid fa-trash-can icon";
                    deletar.id = "btnDeletar" + operacao.codOperacao;
                    deletar.setAttribute("onclick", `deletarOp(${operacao.codOperacao})`);

                    aceitar.className = "fa-solid fa-square-check";
                    aceitar.id = "bntAceitar" + operacao.codOperacao;
                    aceitar.setAttribute("onclick", `aceitarOp(${operacao.codOperacao})`);

                    recusar.className = "fa-solid fa-square-xmark";
                    recusar.id = "bntRecusar" + operacao.codOperacao;
                    recusar.setAttribute("onclick", `recusarOp(${operacao.codOperacao})`);

                    
                    divStatus.classList.remove('aceita', 'recusada', 'pendente');

                    if (statusOp === 'ACEITA') {
                        divStatus.classList.add('aceita');
                        divButtons2.style.display = 'none'
                    } else if (statusOp === 'RECUSADA') {
                        divStatus.classList.add('recusada');
                        divButtons2.style.display = 'none'
                    } else {
                        divStatus.classList.add('pendente')
                    }
                    
                    div1.appendChild(spanID);
                    div1.appendChild(spanNome);
                    div1.appendChild(spanUsuario);
                    div1.appendChild(divStatus);
                    div2.appendChild(spanQtdPolicia);
                    div2.appendChild(spanlocalOp);
                    div2.appendChild(spandataOp);
                    div3.appendChild(divDescricao);
                    div4.appendChild(divButtons);
                    div4.appendChild(divButtons2);
                    divButtons.appendChild(editar);
                    divButtons.appendChild(deletar);
                    divButtons2.appendChild(aceitar);
                    divButtons2.appendChild(recusar);
                    feed.appendChild(divOperacao);
                    divOperacao.appendChild(div1)
                    divOperacao.appendChild(div2)
                    divOperacao.appendChild(div3)
                    divOperacao.appendChild(div4)
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function editarOp(codOperacao) {
    console.log("cliquei em editar - " + codOperacao);
    window.alert("Você será redirecionado à página de edição do aviso de id número: " + codOperacao);
    window.location = "/dash/edicaoOperacao.html"
}

function aceitarOp(codOperacao) {

    fetch(`/usuarios/aceitarOp/${codOperacao}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Operacão aceita com sucesso pelo usuário de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
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

function recusarOp(codOperacao) {

    fetch(`/usuarios/recusarOp/${codOperacao}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Operacão recusada com sucesso pelo usuário de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
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

listarTodas();