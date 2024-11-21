
nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;

var roubosMesOutrosNum
function roubosMesOutros() {
    fetch(`/dashboardRouter/roubosMesOutros`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO roubosMesOutros()!")
  
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          console.log(roubosMesOutrosNum = json.roubosMesOutrosNum)
  
          roubosMesOutrosNum = json.roubosMesOutrosNum;
          dadosKPI1.innerHTML = roubosMesOutrosNum
  
        });
      } else {
        console.log("Houve um erro ao tentar realizar a requisição!");
      }
    });
  
}

var roubosAnoOutrosNum
function roubosAnoOutros() {
    fetch(`/dashboardRouter/roubosAnoOutros`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (resposta) {
      console.log("ESTOU NO THEN DO roubosAnoOutros()!")
  
      if (resposta.ok) {
        console.log(resposta);
        resposta.json().then((json) => {
          console.log(roubosAnoOutrosNum = json.roubosAnoOutrosNum)
  
          roubosAnoOutrosNum = json.roubosAnoOutrosNum;
          dadosKPI2.innerHTML = roubosAnoOutrosNum
  
        });
      } else {
        console.log("Houve um erro ao tentar realizar a requisição!");
      }
    });
  
}

const dados = {

    geral: {
        dado_mes: 1947,
        dado_ano: 10458,
        dado_perigo: "Centro",
        2023: [11768, 10931, 12471, 10540, 10940, 10341, 10334, 10706, 10006, 11056, 10619, 10787],
        2024: [10157, 9850, 10265, 9690, 9455, 9057, 9491, 8787, 8893, 9104]    
    },

    centro: {
        dado_mes: 521,
        dado_ano: 3254,
        dado_perigo: "Centro",
        2023: [3015, 2700, 2450, 2690, 2412, 2357, 2390, 2435, 2218, 2459, 2689, 2918],
        2024: [2991, 3001, 3102, 2912, 2632, 2513, 2560, 2601, 2390, 2693],   
    },

    norte: {
        dado_mes: 289,
        dado_ano: 2015,
        dado_perigo: "Centro",
        2023: [2205, 2009, 2103, 2210, 2224, 2109, 2012, 2107, 2201, 2307, 2393, 2290],
        2024: [2102, 1802, 1921, 1940, 1905, 1879, 1981, 1998, 2119, 2389]   
    },

    leste: {
        dado_mes: 429,
        dado_ano: 2478,
        dado_perigo: "Centro",
        2023: [1907, 2509, 2409, 2219, 2182, 2014, 1923, 1864, 1872, 1941, 1991, 2012],
        2024: [2090, 2412, 2501, 2606, 2412, 2319, 2210, 2102, 2292, 2301]   
    },

    sul: {
        dado_mes: 348,
        dado_ano: 1511,
        dado_perigo: "Centro",
        2023: [3001, 2934, 2812, 2710, 2690, 2512, 2500, 2491, 2190, 2389, 2512, 2893],
        2024: [2891, 2623, 2781, 2721, 2700, 2610, 2709, 2712, 2793, 2812]   
    },

    oeste: {
        dado_mes: 360,
        dado_ano: 1200,
        dado_perigo: "Centro",
        2023: [2994, 3001, 2971, 2940, 2910, 2812, 2721, 2691, 2517, 2692, 2812, 2987],
        2024: [2912, 2812, 2865, 2990, 2855, 2717, 2791, 2687, 2893, 2804]   
    }
}

const roubosMes = document.getElementById('dadosKPI1');
const roubosAno = document.getElementById('dadosKPI2');
const regiaoPerigo = document.getElementById('dadosKPI3');
const regiaoSelecionada = document.getElementById('regiao');
const ctx = document.getElementById('myChart').getContext('2d');

let grafico;

function atualizarDash(regiao) {
    const regiaoDados = dados[regiao];

    roubosMes.textContent = regiaoDados.dado_mes;
    roubosAno.textContent = regiaoDados.dado_ano;
    regiaoPerigo.textContent = regiaoDados.dado_perigo;
    dados.textContent = regiaoDados.data;

    if (grafico) {
        grafico.destroy();
    }
    
    grafico = new Chart(ctx, {
        type: 'bar', 
        data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Roubos em 2023',
                data: dados.geral[2023],
                backgroundColor: 'rgba(128, 128, 128, 0.5)', 
                borderColor: 'rgba(128, 128, 128, 1)', 
                borderWidth: 1
            },
            {
                label: 'Roubos em 2024', 
                data: dados.geral[2024],
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true 
            }
        },
        responsive: true, 
        plugins: {
            legend: {
                position: 'top' 
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
    atualizarDash(regiaoSelecionada);
    grafico.data.datasets[0].data = dados[regiaoSelecionada][2023];
    grafico.data.datasets[1].data = dados[regiaoSelecionada][2024];
    grafico.update();
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


atualizarDash('geral')