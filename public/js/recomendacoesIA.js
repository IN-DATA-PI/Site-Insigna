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