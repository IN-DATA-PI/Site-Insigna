var database = require("../database/config")

function recomendacoesIa() {

    var instrucaoSql = `select recomendacoes from ia`;

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

function regiaoOutros() {
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
        AND natureza = 'ROUBO - OUTROS'
        
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
        AND natureza = 'ROUBO - OUTROS'
        
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
        AND natureza = 'ROUBO - OUTROS'
        
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
        AND natureza = 'ROUBO - OUTROS'
        
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
        AND natureza = 'ROUBO - OUTROS'
)

SELECT zona, total
FROM roubos_zona
ORDER BY total DESC
LIMIT 1;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoOutros() {
    var instrucaoSql = `SELECT 
    mes,
    SUM(CASE WHEN ano = 2023 THEN total END) AS roubos_2023,
    SUM(CASE WHEN ano = 2024 THEN total END) AS roubos_2024
FROM (
    SELECT 
        'Janeiro' AS mes, janeiro AS total, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Fevereiro', fevereiro, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Março', marco, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Abril', abril, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Maio', maio, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Junho', junho, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Julho', julho, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Agosto', agosto, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Setembro', setembro, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Outubro', outubro, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Novembro', novembro, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
    UNION ALL
    SELECT 
        'Dezembro', dezembro, ano
    FROM dados WHERE natureza = 'ROUBO - OUTROS'
) meses
GROUP BY mes
ORDER BY FIELD(mes, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosMesOutrosCentro() {
    var instrucaoSql = `
        SELECT 
    SUM(agosto) AS roubosMesOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Sé%' 
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
        OR dp LIKE '%Pari%'
    );
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosAnoOutrosCentro() {
    var instrucaoSql = `
        SELECT 
    SUM(total) AS roubosAnoOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Sé%' 
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
        OR dp LIKE '%Pari%'
    );

    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoOutrosCentro() {
    var instrucaoSql = `SELECT 
    mes,
    SUM(CASE WHEN ano = 2023 THEN total END) AS roubos_2023,
    SUM(CASE WHEN ano = 2024 THEN total END) AS roubos_2024
FROM (
    SELECT 
        'Janeiro' AS mes, janeiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Fevereiro', fevereiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Março', marco AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Abril', abril AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Maio', maio AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Junho', junho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Julho', julho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Agosto', agosto AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Setembro', setembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Outubro', outubro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Novembro', novembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
    UNION ALL
    SELECT 
        'Dezembro', dezembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Sé%' 
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
) meses
GROUP BY mes
ORDER BY FIELD(mes, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');

`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosMesOutrosLeste() {
    var instrucaoSql = `SELECT 
    SUM(agosto) AS roubosMesOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Tatuapé%' 
        OR dp LIKE '%Vila Carrão%' 
        OR dp LIKE '%Vila Formosa%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Cidade Líder%' 
        OR dp LIKE '%José Bonifácio%' 
        OR dp LIKE '%Parque do Carmo%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Lajeado%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Ponte Rasa%' 
        OR dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Itaim Paulista%' 
        OR dp LIKE '%Vila Jacuí%' 
        OR dp LIKE '%Cangaíba%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%Vila Matilde%'
    );
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosAnoOutrosLeste() {
    var instrucaoSql = `SELECT 
    SUM(total) AS roubosAnoOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Tatuapé%' 
        OR dp LIKE '%Vila Carrão%' 
        OR dp LIKE '%Vila Formosa%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Cidade Líder%' 
        OR dp LIKE '%José Bonifácio%' 
        OR dp LIKE '%Parque do Carmo%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Lajeado%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Ponte Rasa%' 
        OR dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Itaim Paulista%' 
        OR dp LIKE '%Vila Jacuí%' 
        OR dp LIKE '%Cangaíba%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%Vila Matilde%'
    );
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoOutrosLeste() {
    var instrucaoSql = `SELECT 
    mes,
    SUM(CASE WHEN ano = 2023 THEN total END) AS roubos_2023,
    SUM(CASE WHEN ano = 2024 THEN total END) AS roubos_2024
FROM (
    SELECT 
        'Janeiro' AS mes, janeiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Fevereiro', fevereiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Março', marco AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Abril', abril AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Maio', maio AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Junho', junho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Julho', julho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Agosto', agosto AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Setembro', setembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Outubro', outubro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Novembro', novembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
    UNION ALL
    SELECT 
        'Dezembro', dezembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Limoeiro%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Formosa%')
) AS t
GROUP BY mes
ORDER BY FIELD(mes, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosMesOutrosNorte() {
    var instrucaoSql = `SELECT 
    SUM(agosto) AS roubosMesOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Tatuapé%' 
        OR dp LIKE '%Vila Carrão%' 
        OR dp LIKE '%Vila Formosa%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Cidade Líder%' 
        OR dp LIKE '%José Bonifácio%' 
        OR dp LIKE '%Parque do Carmo%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Lajeado%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Ponte Rasa%' 
        OR dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Itaim Paulista%' 
        OR dp LIKE '%Vila Jacuí%' 
        OR dp LIKE '%Cangaíba%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%Vila Matilde%'
    );

`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosAnoOutrosNorte() {
    var instrucaoSql = `SELECT 
    SUM(total) AS roubosAnoOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Tatuapé%' 
        OR dp LIKE '%Vila Carrão%' 
        OR dp LIKE '%Vila Formosa%' 
        OR dp LIKE '%Aricanduva%' 
        OR dp LIKE '%São Mateus%' 
        OR dp LIKE '%Sapopemba%' 
        OR dp LIKE '%Itaquera%' 
        OR dp LIKE '%Cidade Líder%' 
        OR dp LIKE '%José Bonifácio%' 
        OR dp LIKE '%Parque do Carmo%' 
        OR dp LIKE '%Guaianases%' 
        OR dp LIKE '%Lajeado%' 
        OR dp LIKE '%Ermelino Matarazzo%' 
        OR dp LIKE '%Vila Curuçá%' 
        OR dp LIKE '%Ponte Rasa%' 
        OR dp LIKE '%São Miguel Paulista%' 
        OR dp LIKE '%Jardim Helena%' 
        OR dp LIKE '%Itaim Paulista%' 
        OR dp LIKE '%Vila Jacuí%' 
        OR dp LIKE '%Cangaíba%' 
        OR dp LIKE '%Penha%' 
        OR dp LIKE '%Vila Matilde%'
    );
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoOutrosNorte() {
    var instrucaoSql = `SELECT 
    mes,
    SUM(CASE WHEN ano = 2023 THEN total END) AS roubos_2023,
    SUM(CASE WHEN ano = 2024 THEN total END) AS roubos_2024
FROM (
    SELECT 
        'Janeiro' AS mes, janeiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Fevereiro', fevereiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Março', marco AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Abril', abril AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Maio', maio AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Junho', junho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Julho', julho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Agosto', agosto AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Setembro', setembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Outubro', outubro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Novembro', novembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
    UNION ALL
    SELECT 
        'Dezembro', dezembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Brasília%' 
        OR dp LIKE '%Santana%' 
        OR dp LIKE '%Freguesia do Ó%' 
        OR dp LIKE '%Casa Verde%' 
        OR dp LIKE '%Tucuruvi%' 
        OR dp LIKE '%Mandaqui%' 
        OR dp LIKE '%Jaçanã%' 
        OR dp LIKE '%Vila Nova Cachoeirinha%' 
        OR dp LIKE '%Carandiru%' 
        OR dp LIKE '%Pirituba%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Cachoeirinha%' 
        OR dp LIKE '%Sacomã%')
) AS t
GROUP BY mes
ORDER BY FIELD(mes, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosMesOutrosOeste() {
    var instrucaoSql = `SELECT 
    SUM(agosto) AS roubosMesOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Sé%' 
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
        OR dp LIKE '%Pari%'
    );
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosAnoOutrosOeste() {
    var instrucaoSql = `SELECT 
    SUM(total) AS roubosAnoOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Sé%' 
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
        OR dp LIKE '%Pari%'
    );
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoOutrosOeste() {
    var instrucaoSql = `SELECT 
    mes,
    SUM(CASE WHEN ano = 2023 THEN total END) AS roubos_2023,
    SUM(CASE WHEN ano = 2024 THEN total END) AS roubos_2024
FROM (
    SELECT 
        'Janeiro' AS mes, janeiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Fevereiro', fevereiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Março', marco AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Abril', abril AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Maio', maio AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Junho', junho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Julho', julho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Agosto', agosto AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Setembro', setembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Outubro', outubro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Novembro', novembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
    UNION ALL
    SELECT 
        'Dezembro', dezembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Leopoldina%' 
        OR dp LIKE '%Perdizes%' 
        OR dp LIKE '%Butantã%' 
        OR dp LIKE '%Pinheiros%' 
        OR dp LIKE '%Vila Sônia%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Morumbi%' 
        OR dp LIKE '%Jardim Bonfiglioli%' 
        OR dp LIKE '%Vila Indiana%' 
        OR dp LIKE '%Lapa%' 
        OR dp LIKE '%Jardim das Bandeiras%' 
        OR dp LIKE '%Vila Dom Pedro I%' 
        OR dp LIKE '%Vila Progresso%' 
        OR dp LIKE '%Jardim Arpoador%' 
        OR dp LIKE '%Vila Romana%' 
        OR dp LIKE '%Vila Madalena%' 
        OR dp LIKE '%Vila Guilherme%' 
        OR dp LIKE '%Vila Barra Funda%' 
        OR dp LIKE '%Jardim Sumaré%')
) AS t
GROUP BY mes
ORDER BY FIELD(mes, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosMesOutrosSul() {
    var instrucaoSql = `SELECT 
    SUM(agosto) AS roubosMesOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%'
    );
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function roubosAnoOutrosSul() {
    var instrucaoSql = `SELECT 
    SUM(total) AS roubosAnoOutrosNum 
FROM 
    dados 
WHERE 
    ano = 2024 
    AND natureza = 'ROUBO - OUTROS' 
    AND (
        dp LIKE '%Sé%' 
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
        OR dp LIKE '%Pari%'
    );
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function graficoOutrosSul() {
    var instrucaoSql = `SELECT 
    mes,
    SUM(CASE WHEN ano = 2023 THEN total END) AS roubos_2023,
    SUM(CASE WHEN ano = 2024 THEN total END) AS roubos_2024
FROM (
    SELECT 
        'Janeiro' AS mes, janeiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Fevereiro', fevereiro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Março', marco AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Abril', abril AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Maio', maio AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Junho', junho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Julho', julho AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Agosto', agosto AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Setembro', setembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Outubro', outubro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Novembro', novembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
    UNION ALL
    SELECT 
        'Dezembro', dezembro AS total, ano
    FROM dados 
    WHERE natureza = 'ROUBO - OUTROS' 
      AND (dp LIKE '%Jardim América%' 
        OR dp LIKE '%Campo Belo%' 
        OR dp LIKE '%Chácara Flora%' 
        OR dp LIKE '%Itaim Bibi%' 
        OR dp LIKE '%Vila Progredior%' 
        OR dp LIKE '%Vila Sonia%' 
        OR dp LIKE '%Vila São Francisco%' 
        OR dp LIKE '%Jardim Paulistano%' 
        OR dp LIKE '%Jardim Paulista%' 
        OR dp LIKE '%Moema%' 
        OR dp LIKE '%Vila Olímpia%' 
        OR dp LIKE '%Brooklin%' 
        OR dp LIKE '%Saúde%' 
        OR dp LIKE '%Vila Clementino%' 
        OR dp LIKE '%Cidade Dutra%' 
        OR dp LIKE '%Santo Amaro%' 
        OR dp LIKE '%Jardim Colombo%' 
        OR dp LIKE '%Jardim da Saúde%' 
        OR dp LIKE '%Capela do Socorro%' 
        OR dp LIKE '%Vila Caraguatá%' 
        OR dp LIKE '%Vila Fioretti%' 
        OR dp LIKE '%Jardim Pirituba%')
) AS t
GROUP BY mes
ORDER BY FIELD(mes, 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
        roubosMesOutros,
        roubosAnoOutros,
        regiaoOutros,
        graficoOutros,
        roubosMesOutrosCentro,
        roubosAnoOutrosCentro,
        graficoOutrosCentro,
        roubosMesOutrosLeste,
        roubosAnoOutrosLeste,
        graficoOutrosLeste,
        roubosMesOutrosNorte,
        roubosAnoOutrosNorte,
        graficoOutrosNorte,
        roubosMesOutrosOeste,
        roubosAnoOutrosOeste,
        graficoOutrosOeste,
        roubosMesOutrosSul,
        roubosAnoOutrosSul,
        graficoOutrosSul,
        recomendacoesIa
}