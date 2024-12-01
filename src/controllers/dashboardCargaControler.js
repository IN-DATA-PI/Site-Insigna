var dashboardCargaModel = require("../models/dashboardCargaModel");

function roubosMesCarga(req, res) {
    dashboardCargaModel.roubosMesCarga()
      .then(function (resultadoRoubosMesCargaNum) {
        res.json({
            roubosMesCargaNum: resultadoRoubosMesCargaNum[0].roubosMesCargaNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo mes carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosAnoCarga(req, res) {
    dashboardCargaModel.roubosAnoCarga()
      .then(function (resultadoRoubosAnoCargaNum) {
        res.json({
            roubosAnoCargaNum: resultadoRoubosAnoCargaNum[0].roubosAnoCargaNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function regiao(req, res) {
    dashboardCargaModel.regiao()
      .then(function (resultadoRegiao) {
        res.json({
            regiao: resultadoRegiao[0].zona
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function grafico(req, res) {
    dashboardCargaModel.grafico()
      .then(function (resultadoGrafico) {
        res.json(resultadoGrafico);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosMesCargaCentro(req, res) {
    dashboardCargaModel.roubosMesCargaCentro()
      .then(function (resultadoRoubosMesCargaNum) {
        res.json({
            roubosMesCargaNum: resultadoRoubosMesCargaNum[0].roubosMesCargaNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo mes carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosAnoCargaCentro(req, res) {
    dashboardCargaModel.roubosAnoCargaCentro()
      .then(function (resultadoRoubosAnoCargaNum) {
        res.json({
            roubosAnoCargaNum: resultadoRoubosAnoCargaNum[0].roubosAnoCargaNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function graficoCentro(req, res) {
    dashboardCargaModel.graficoCentro()
      .then(function (resultadoGrafico) {
        res.json(resultadoGrafico);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosMesCargaLeste(req, res) {
    dashboardCargaModel.roubosMesCargaLeste()
      .then(function (resultadoRoubosMesCargaNum) {
        res.json({
            roubosMesCargaNum: resultadoRoubosMesCargaNum[0].roubosMesCargaNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo mes carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosAnoCargaLeste(req, res) {
    dashboardCargaModel.roubosAnoCargaLeste()
      .then(function (resultadoRoubosAnoCargaNum) {
        res.json({
            roubosAnoCargaNum: resultadoRoubosAnoCargaNum[0].roubosAnoCargaNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function graficoLeste(req, res) {
    dashboardCargaModel.graficoLeste()
      .then(function (resultadoGrafico) {
        res.json(resultadoGrafico);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosMesCargaNorte(req, res) {
    dashboardCargaModel.roubosMesCargaNorte()
      .then(function (resultadoRoubosMesCargaNum) {
        res.json({
            roubosMesCargaNum: resultadoRoubosMesCargaNum[0].roubosMesCargaNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo mes carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosAnoCargaNorte(req, res) {
    dashboardCargaModel.roubosAnoCargaNorte()
      .then(function (resultadoRoubosAnoCargaNum) {
        res.json({
            roubosAnoCargaNum: resultadoRoubosAnoCargaNum[0].roubosAnoCargaNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function graficoNorte(req, res) {
    dashboardCargaModel.graficoNorte()
      .then(function (resultadoGrafico) {
        res.json(resultadoGrafico);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosMesCargaOeste(req, res) {
  dashboardCargaModel.roubosMesCargaOeste()
    .then(function (resultadoRoubosMesCargaNum) {
      res.json({
          roubosMesCargaNum: resultadoRoubosMesCargaNum[0].roubosMesCargaNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo mes carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoCargaOeste(req, res) {
  dashboardCargaModel.roubosAnoCargaOeste()
    .then(function (resultadoRoubosAnoCargaNum) {
      res.json({
          roubosAnoCargaNum: resultadoRoubosAnoCargaNum[0].roubosAnoCargaNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoOeste(req, res) {
  dashboardCargaModel.graficoOeste()
    .then(function (resultadoGrafico) {
      res.json(resultadoGrafico);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
} 

function roubosMesCargaSul(req, res) {
  dashboardCargaModel.roubosMesCargaSul()
    .then(function (resultadoRoubosMesCargaNum) {
      res.json({
          roubosMesCargaNum: resultadoRoubosMesCargaNum[0].roubosMesCargaNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo mes carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoCargaSul(req, res) {
  dashboardCargaModel.roubosAnoCargaSul()
    .then(function (resultadoRoubosAnoCargaNum) {
      res.json({
          roubosAnoCargaNum: resultadoRoubosAnoCargaNum[0].roubosAnoCargaNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoSul(req, res) {
  dashboardCargaModel.graficoSul()
    .then(function (resultadoGrafico) {
      res.json(resultadoGrafico);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}  

  module.exports = {
    roubosMesCarga,
    roubosAnoCarga,
    regiao,
    grafico,
    roubosMesCargaCentro,
    roubosAnoCargaCentro,
    graficoCentro,
    roubosMesCargaLeste,
    roubosAnoCargaLeste,
    graficoLeste,
    roubosMesCargaNorte,
    roubosAnoCargaNorte,
    graficoNorte,
    roubosMesCargaOeste,
    roubosAnoCargaOeste,
    graficoOeste,
    roubosMesCargaSul,
    roubosAnoCargaSul,
    graficoSul
}