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

var roubosMesCargaNum
function roubosMesCargaOeste() {
    fetch(`/dashboardCargaRouter/roubosMesCargaOeste`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO roubosMesCargaOeste()!")
  
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          console.log(roubosMesCargaNum = json.roubosMesCargaNum)
  
          roubosMesCargaNum = json.roubosMesCargaNum;
          dadosKPI1.innerHTML = roubosMesCargaNum
  
        });
      } else {
        console.log("Houve um erro ao tentar realizar a requisição!");
      }
    });
  
}

var roubosAnoCargaNum
function roubosAnoCargaOeste() {
    fetch(`/dashboardCargaRouter/roubosAnoCargaOeste`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO roubosAnoCargaOeste()!")
  
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          console.log(roubosAnoCargaNum = json.roubosAnoCargaNum)
  
          roubosAnoCargaNum = json.roubosAnoCargaNum;
          dadosKPI2.innerHTML = roubosAnoCargaNum
  
        });
      } else {
        console.log("Houve um erro ao tentar realizar a requisição!");
      }
    });
  
}

var regiao
function regiao() {
    fetch(`/dashboardCargaRouter/regiao`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO regiao()!")
  
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          console.log(regiao = json.regiao)
  
          regiao = json.regiao;
          dadosKPI3.innerHTML = regiao
  
        });
      } else {
        console.log("Houve um erro ao tentar realizar a requisição!");
      }
    });
  
}

var roubos2023 = []
var roubos2024 = []

function graficoOeste() {
  fetch(`/dashboardCargaRouter/graficoOeste`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO graficoOeste()!");
      if (resposta.ok) {
          resposta.json().then((json) => {
              roubos2023 = json.map((item) => item.roubos_2023);
              roubos2024 = json.map((item) => item.roubos_2024);

              // Criar o gráfico após os dados serem carregados
              criarGrafico();
          });
      } else {
          console.log("Houve um erro ao tentar realizar a requisição!");
      }
  });
}

const roubosMes = document.getElementById('dadosKPI1');
const roubosAno = document.getElementById('dadosKPI2');
const regiaoPerigo = document.getElementById('dadosKPI3');
const ctx = document.getElementById('myChart').getContext('2d');

let grafico1;

function criarGrafico() {

    if (grafico1) {
        grafico1.destroy();
    }
    
    grafico1 = new Chart(ctx, {
        type: 'bar', // Define o tipo de gráfico como "bar" (barras)
        data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Roubos em 2023', // Primeiro conjunto de dados
                data: roubos2023,
                backgroundColor: 'rgba(128, 128, 128, 0.5)', // Cor das barras
                borderColor: 'rgba(128, 128, 128, 1)', // Cor da borda
                borderWidth: 1
            },
            {
                label: 'Roubos em 2024', // Segundo conjunto de dados
                data: roubos2024,
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor das barras
                borderColor: 'rgba(0, 0, 0, 1)', // Cor da borda
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true // Faz o eixo Y começar em zero
            }
        },
        responsive: true, // Faz o gráfico ser responsivo
        plugins: {
            legend: {
                position: 'top' // Define a posição da legenda (topo)
            },
            title: {
                display: true,
                text: 'Comparação de roubos por mês anos de 2023 e 2024'
            }
        }
    }
});
}

regiaoSelecionado.addEventListener('change', (e) => {
    const regiaoSelecionado = e.target.value;
    criarGrafico(regiaoSelecionado);
})

const rouboSelecionado = document.getElementById('tipo_roubo')

rouboSelecionado.addEventListener('change', (e) => {
    const rouboSelecionado = e.target.value;
    
    if (rouboSelecionado == 'outros') {
        window.location.href = 'dashboardOutros.html';
    } else if (rouboSelecionado == 'veiculo') {
        window.location.href = 'dashboardVeiculo.html';
    } else if (rouboSelecionado == 'banco') {
        window.location.href = 'dashboardBanco.html';
    } else if (rouboSelecionado == 'carga') {
        window.location.href = 'dashboardCarga.html';
    }
});

const regiaoSelecionado = document.getElementById('regiao');

function trocarRegiao() {
    const regiao = document.getElementById("regiao").value;
  
    const paginas = {
      geral: "dashboardCarga.html",
      centro: "dashboardCargaCentro.html",
      norte: "dashboardCargaNorte.html",
      leste: "dashboardCargaLeste.html",
      sul: "dashboardCargaSul.html",
      oeste: "dashboardCargaOeste.html"
  };
  
    if (paginas[regiao]) {
        window.location.href = paginas[regiao];
    }
  }

criarGrafico('geral')