
nome_usuario.innerHTML = "Bem-vindo(a) " + sessionStorage.NOME_USUARIO;

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

let grafico;

function atualizarDash(regiao) {
    const regiaoDados = dados[regiao];

    roubosMes.textContent = regiaoDados.dado_mes;
    roubosAno.textContent = regiaoDados.dado_ano;
    regiaoPerigo.textContent = regiaoDados.dado_perigo;

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
                    data: [1213, 1144, 1495, 1259, 1201, 1146, 1136, 1131, 1174, 1315, 1349, 1420],
                    backgroundColor: 'rgba(128, 128, 128, 0.5)', 
                    borderColor: 'rgba(128, 128, 128, 1)', 
                    borderWidth: 1
                },
                {
                    label: 'Roubos em 2024', 
                    data: [940, 990, 1030, 1043, 1113, 1051, 1015, 967, 952, 1017],
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