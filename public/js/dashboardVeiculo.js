nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;

let linksMenu = document.querySelectorAll(".btn-dl");

if (sessionStorage.NOME_USUARIO.includes("iv_")) {

    linksMenu.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); 
            alert("Ação desabilitada para este usuário");
            link.style.cursor = "not-allowed"; 
            link.title = "Ação desabilitada para este usuário"; 
        });

        link.style.opacity = "0.6"; 
    });
}

var roubosMesVeiculoNum
function roubosMesVeiculo() {
    fetch(`/dashboardRouter/roubosMesVeiculo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO roubosMesVeiculo()!")
  
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          console.log(roubosMesVeiculoNum = json.roubosMesVeiculoNum)
  
          roubosMesVeiculoNum = json.roubosMesVeiculoNum;
          dadosKPI1.innerHTML = roubosMesVeiculoNum
  
        });
      } else {
        console.log("Houve um erro ao tentar realizar a requisição!");
      }
    });
  
}

var roubosAnoVeiculoNum
function roubosAnoVeiculo() {
    fetch(`/dashboardRouter/roubosAnoVeiculo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO roubosAnoVeiculo()!")
  
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          console.log(roubosAnoVeiculoNum = json.roubosAnoVeiculoNum)
  
          roubosAnoVeiculoNum = json.roubosAnoVeiculoNum;
          dadosKPI2.innerHTML = roubosAnoVeiculoNum
  
        });
      } else {
        console.log("Houve um erro ao tentar realizar a requisição!");
      }
    });
  
}

var regiaoVeiculo
function regiaoVeiculo() {
    fetch(`/dashboardRouter/regiaoVeiculo`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO regiaoVeiculo()!")
  
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          console.log(regiaoVeiculo = json.regiaoVeiculo)
  
          regiaoVeiculo = json.regiaoVeiculo;
          dadosKPI3.innerHTML = regiaoVeiculo
  
        });
      } else {
        console.log("Houve um erro ao tentar realizar a requisição!");
      }
    });
  
}

var roubos2023 = []
var roubos2024 = []

function graficoVeiculo() {
  fetch(`/dashboardRouter/graficoVeiculo`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO graficoVeiculo()!");
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


const dados = {

geral: {
dado_mes: 850,
dado_ano: 10200,
dado_perigo: "Leste"
},

centro: {
dado_mes: 200,
dado_ano: 2400,
dado_perigo: "Centro"
},

norte: {
dado_mes: 130,
dado_ano: 1560,
dado_perigo: "Centro"
},

leste: {
dado_mes: 250,
dado_ano: 3000,
dado_perigo: "Leste"
},

sul: {
dado_mes: 150,
dado_ano: 1800,
dado_perigo: "Leste"
},

oeste: {
dado_mes: 120,
dado_ano: 1440,
dado_perigo: "Centro"
}
}



const roubosMes = document.getElementById('dadosKPI1');
const roubosAno = document.getElementById('dadosKPI2');
const regiaoPerigo = document.getElementById('dadosKPI3');
const regiaoSelecionada = document.getElementById('regiao');
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

regiaoSelecionada.addEventListener('change', (e) => {
    const regiaoSelecionada = e.target.value;
    criarGrafico(regiaoSelecionada);
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


criarGrafico('geral')