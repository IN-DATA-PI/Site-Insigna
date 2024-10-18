document.addEventListener('DOMContentLoaded', function() {

nome_usuario.innerHTML = "Bem vindo(a) " + sessionStorage.NOME_USUARIO;

const dados = {

    geral: {
        dado_mes: 15,
        dado_ano: 180,
        dado_perigo: "Centro"
    },

    centro: {
        dado_mes: 5,
        dado_ano: 60,
        dado_perigo: "Centro"
    },

    norte: {
        dado_mes: 1,
        dado_ano: 12,
        dado_perigo: "Centro"
    },

    leste: {
        dado_mes: 2,
        dado_ano: 24,
        dado_perigo: "Centro"
    },

    sul: {
        dado_mes: 3,
        dado_ano: 36,
        dado_perigo: "Centro"
    },

    oeste: {
        dado_mes: 4,
        dado_ano: 48,
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
        type: 'bar', // Define o tipo de gráfico como "bar" (barras)
        data: {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
            {
                label: 'Roubos em 2023', // Primeiro conjunto de dados
                data: [30, 50, 70, 40, 60, 80, 90, 75, 75, 80, 85, 90, 100],
                backgroundColor: 'rgba(128, 128, 128, 0.5)', // Cor das barras
                borderColor: 'rgba(128, 128, 128, 1)', // Cor da borda
                borderWidth: 1
            },
            {
                label: 'Roubos em 2024', // Segundo conjunto de dados
                data: [40, 60, 50, 80, 70, 90, 95, 80, 85, 75, 80, 80],
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
    atualizarDash(regiaoSelecionada);
})

atualizarDash('geral')
});