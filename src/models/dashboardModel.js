var database = require("../database/config")

function roubosMesCarga() {
    var instrucaoSql = `
        select sum(agosto) as roubosMesCargaNum from dados where ano = 2024 and natureza = "ROUBO DE CARGA";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosAnoCarga() {
    var instrucaoSql = `
        select sum(total) as roubosAnoCargaNum from dados where ano = 2024 and natureza = "ROUBO DE CARGA";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function regiao() {
    var instrucaoSql = `
        select sum(total) as regiao from dados where ano = 2024 and natureza = "";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function grafico() {
    var instrucaoSql = `SELECT 
    mes,
    SUM(CASE WHEN ano = 2023 THEN total END) AS roubos_2023,
    SUM(CASE WHEN ano = 2024 THEN total END) AS roubos_2024
FROM (
    SELECT 
        'Janeiro' AS mes, janeiro AS total, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Fevereiro', fevereiro, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Março', marco, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Abril', abril, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Maio', maio, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Junho', junho, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Julho', julho, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Agosto', agosto, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Setembro', setembro, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Outubro', outubro, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Novembro', novembro, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
    UNION ALL
    SELECT 
        'Dezembro', dezembro, ano
    FROM dados WHERE natureza = 'ROUBO DE CARGA'
) meses
GROUP BY mes
ORDER BY FIELD(mes, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

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

function roubosMesOutros() {
    var instrucaoSql = `
        select sum(agosto) as roubosMesOutrosNum from dados where ano = 2024 and natureza = "ROUBO - OUTROS";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosAnoOutros() {
    var instrucaoSql = `
        select sum(total) as roubosAnoOutrosNum from dados where ano = 2024 and natureza = "ROUBO - OUTROS";
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    roubosMesCarga,
    roubosAnoCarga,
    regiao,
    grafico,
    roubosMesVeiculo,
    roubosAnoVeiculo,
    roubosMesOutros,
    roubosAnoOutros
};