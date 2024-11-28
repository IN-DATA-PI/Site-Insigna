
nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;

var roubosMesCargaNum
function roubosMesCarga() {
    fetch(`/dashboardRouter/roubosMesCarga`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO roubosMesCarga()!")
  
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
function roubosAnoCarga() {
    fetch(`/dashboardRouter/roubosAnoCarga`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO roubosAnoCarga()!")
  
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
    fetch(`/dashboardRouter/regiao`, {
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

function grafico() {
  fetch(`/dashboardRouter/grafico`, {
      method: "GET",
      headers: {
          "Content-Type": "application/json"
      }
  }).then(function (resposta) {
      console.log("ESTOU NO THEN DO grafico()!");
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
    
    
    
},

centro: {
    dado_mes: 60,
    dado_ano: 720,
    dado_perigo: "Centro"
},

norte: {
    dado_mes: 45,
    dado_ano: 540,
    dado_perigo: "Leste"
},

leste: {
    dado_mes: 160,
    dado_ano: 1920,
    dado_perigo: "Leste"
},

sul: {
    dado_mes: 55,
    dado_ano: 660,
    dado_perigo: "Leste"
},

oeste: {
    dado_mes: 30,
    dado_ano: 360,
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