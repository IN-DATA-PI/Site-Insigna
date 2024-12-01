var database = require("../database/config")

function roubosMesVeiculo() {
    var instrucaoSql = `
        select sum(agosto) as roubosMesVeiculoNum from dados where ano = 2024 and natureza = "ROUBO DE VEICULO";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosAnoVeiculo() {
    var instrucaoSql = `
        select sum(total) as roubosAnoVeiculoNum from dados where ano = 2024 and natureza = "ROUBO DE VEICULO";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function regiaoVeiculo() {
    var instrucaoSql = `
        WITH roubos_zona AS (
    SELECT 'Centro' AS zona, SUM(total) AS total
    FROM dados
    WHERE 
        (dp LIKE '%Sé%' 
        OR dp LIKE '%República%' 
        OR dp LIKE '%Bela Vista%' 
        OR dp LIKE '%Liberdade%' 
        OR dp LIKE '%Santa Cecília%' 
        OR dp LIKE '%Jardins%' 
        OR dp LIKE '%Bom Retiro%' 
        OR dp LIKE '%Santa Efigênia%' 
        OR dp LIKE '%Consolação%' 
        OR dp LIKE '%Cambuci%' 
        OR dp LIKE '%Brás%' 
        OR dp LIKE '%Alameda Glete%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%CEAGESP%' 
        OR dp LIKE '%Jaguaré%' 
        OR dp LIKE '%Campos%' 
        OR dp LIKE '%Pari%')
        AND ano = 2024 
        AND natureza = 'ROUBO DE VEÍCULO'
        
    UNION ALL

    SELECT 'Zona Sul' AS zona, SUM(total) AS total
    FROM dados
    WHERE 
        (dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Ipiranga%' 
        OR dp LIKE '%Parelheiros%' 
        OR dp LIKE '%Sacomã%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Jabaquara%' 
        OR dp LIKE '%Vila Mariana%' 
        OR dp LIKE '%Campo Limpo%' 
        OR dp LIKE '%Cidade Ademar%' 
        OR dp LIKE '%Capão Redondo%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Parque São Rafael%' 
        OR dp LIKE '%Vila Joaniza%' 
        OR dp LIKE '%Parque Bristol%' 
        OR dp LIKE '%Jardim Mirna%' 
        OR dp LIKE '%Portal do Morumbi%' 
        OR dp LIKE '%Parque Santo Antonio%' 
        OR dp LIKE '%Heliópolis%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Americanópolis%' 
        OR dp LIKE '%Campo Grande%' 
        OR dp LIKE '%Sargento Manoel Barbosa da Silva%' 
        OR dp LIKE '%Jardim Miriam%' 
        OR dp LIKE '%Monções%' 
        OR dp LIKE '%Jardim Herculano%' 
        OR dp LIKE '%Socorro%' 
        OR dp LIKE '%Jardim das Imbuias%')
        AND ano = 2024 
        AND natureza = 'ROUBO DE VEÍCULO'
        
    UNION ALL

    SELECT 'Zona Leste' AS zona, SUM(total) AS total
    FROM dados
    WHERE 
        (dp LIKE '%Brás%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%Alto da Mooca%' 
        OR dp LIKE '%Chácara Seis de Outubro%' 
        OR dp LIKE '%Vila Americana%' 
        OR dp LIKE '%Ponte Rasa%' 
        OR dp LIKE '%Vila Diva%' 
        OR dp LIKE '%Tatuapé%' 
        OR dp LIKE '%Vila Carrão%' 
        OR dp LIKE '%Vila Rica%' 
        OR dp LIKE '%Parque São Lucas%' 
        OR dp LIKE '%Guaianazes%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Itaim Paulista%' 
        OR dp LIKE '%Parque São Jorge%' 
        OR dp LIKE '%Parque do Carmo%' 
        OR dp LIKE '%Cidade Tiradentes%' 
        OR dp LIKE '%Vila Alpina%' 
        OR dp LIKE '%Parque Da Mooca%' 
        OR dp LIKE '%Vila Formosa%' 
        OR dp LIKE '%Jardim Noêmia%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Jacuí%' 
        OR dp LIKE '%Cidade A. E. Carvalho%' 
        OR dp LIKE '%Artur Alvim%' 
        OR dp LIKE '%Jardim Aricanduva%' 
        OR dp LIKE '%Jardim Robru%' 
        OR dp LIKE '%Lageado%' 
        OR dp LIKE '%Teotônio Vilela%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Belém%' 
        OR dp LIKE '%Itaquera%'
        OR dp LIKE '%Vila Matilde%'
        OR dp LIKE '%São Miguel Paulista%'
        OR dp LIKE '%Vale Do Aricanduva%'
        OR dp LIKE '%Lajeado%'
        OR dp LIKE '%Vila Ema%'
        OR dp LIKE '%Cohab Itaquera%')
        AND ano = 2024 
        AND natureza = 'ROUBO DE VEÍCULO'
        
    UNION ALL

    SELECT 'Zona Norte' AS zona, SUM(total) AS total
    FROM dados
    WHERE 
        (dp LIKE '%Carandiru%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Vila Maria%' 
        OR dp LIKE '%Jardim França%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Vila Amália%' 
        OR dp LIKE '%Vila Gustavo%' 
        OR dp LIKE '%Vila Santa Maria%' 
        OR dp LIKE '%Vila Brasilândia%' 
        OR dp LIKE '%Perus%' 
        OR dp LIKE '%Vila Penteado%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Jaraguá%' 
        OR dp LIKE '%Vila Pereira Barreto%' 
        OR dp LIKE '%Parque Novo Mundo%'
        OR dp LIKE '%Água Fria%')
        AND ano = 2024 
        AND natureza = 'ROUBO DE VEÍCULO'
        
    UNION ALL

    SELECT 'Zona Oeste' AS zona, SUM(total) AS total
    FROM dados
    WHERE 
        (dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%CEAGESP%' 
        OR dp LIKE '%Lapa%')
        AND ano = 2024 
        AND natureza = 'ROUBO DE VEÍCULO'
)

SELECT zona, total
FROM roubos_zona
ORDER BY total DESC
LIMIT 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoVeiculo() {
    var instrucaoSql = `SELECT 
    mes,
    SUM(CASE WHEN ano = 2023 THEN total END) AS roubos_2023,
    SUM(CASE WHEN ano = 2024 THEN total END) AS roubos_2024
FROM (
    SELECT 
        'Janeiro' AS mes, janeiro AS total, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Fevereiro', fevereiro, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Março', marco, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Abril', abril, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Maio', maio, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Junho', junho, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Julho', julho, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Agosto', agosto, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Setembro', setembro, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Outubro', outubro, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Novembro', novembro, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
    UNION ALL
    SELECT 
        'Dezembro', dezembro, ano
    FROM dados WHERE natureza = 'ROUBO DE VEICULO'
) meses
GROUP BY mes
ORDER BY FIELD(mes, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    roubosMesVeiculo,
    roubosAnoVeiculo,
    regiaoVeiculo,
    graficoVeiculo
}