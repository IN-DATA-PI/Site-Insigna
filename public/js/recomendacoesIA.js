

nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;


function pergunta1() {
    
    const elemento = document.getElementById("resposta");
    elemento.style.display = "flex";

    fetch(`/dashboardRouter/recomendacoesIa`, {
        method: 'GET',
        headers: {
            "Contenty-Type": 'application/json'
        }
        })
            .then(function (resposta) {
                console.log(resposta)
                resposta.json().then(function (data) {
                    console.log(data)

                    mensagem.innerHTML = data[0].recomendacoes
                })
    });
}

function pergunta2() {
    const elemento = document.getElementById("resposta");
    elemento.style.display = "flex";

    fetch(`/dashboardRouter/recomendacoesIa`, {
        method: 'GET',
        headers: {
            "Contenty-Type": 'application/json'
        }
        })
            .then(function (resposta) {
                console.log(resposta)
                resposta.json().then(function (data) {
                    console.log(data)

                    mensagem.innerHTML = data[1].recomendacoes
                })
    });
}

function pergunta3() {
    const elemento = document.getElementById("resposta");
    elemento.style.display = "flex";
    
    fetch(`/dashboardRouter/recomendacoesIa`, {
        method: 'GET',
        headers: {
            "Contenty-Type": 'application/json'
        }
        })
            .then(function (resposta) {
                console.log(resposta)
                resposta.json().then(function (data) {
                    console.log(data)

                    mensagem.innerHTML = data[2].recomendacoes
                })
    });
}