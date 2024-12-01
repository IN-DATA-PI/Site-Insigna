var dashboardVeiculoModel = require("../models/dashboardVeiculoModel");

function roubosMesVeiculo(req, res) {
    dashboardVeiculoModel.roubosMesVeiculo()
      .then(function (resultadoroubosMesVeiculoNum) {
        res.json({
            roubosMesVeiculoNum: resultadoroubosMesVeiculoNum[0].roubosMesVeiculoNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosAnoVeiculo(req, res) {
    dashboardVeiculoModel.roubosAnoVeiculo()
      .then(function (resultadoRoubosAnoVeiculoNum) {
        res.json({
            roubosAnoVeiculoNum: resultadoRoubosAnoVeiculoNum[0].roubosAnoVeiculoNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function regiaoVeiculo(req, res) {
  dashboardVeiculoModel.regiaoVeiculo()
    .then(function (resultadoRegiaoVeiculo) {
      res.json({
          regiaoVeiculo: resultadoRegiaoVeiculo[0].zona
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoVeiculo(req, res) {
  dashboardVeiculoModel.graficoVeiculo()
    .then(function (resultadoGraficoVeiculo) {
      res.json(resultadoGraficoVeiculo);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosMesVeiculoCentro(req, res) {
  dashboardVeiculoModel.roubosMesVeiculoCentro()
    .then(function (resultadoroubosMesVeiculoNum) {
      res.json({
          roubosMesVeiculoNum: resultadoroubosMesVeiculoNum[0].roubosMesVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoVeiculoCentro(req, res) {
  dashboardVeiculoModel.roubosAnoVeiculoCentro()
    .then(function (resultadoRoubosAnoVeiculoNum) {
      res.json({
          roubosAnoVeiculoNum: resultadoRoubosAnoVeiculoNum[0].roubosAnoVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoVeiculoCentro(req, res) {
dashboardVeiculoModel.graficoVeiculoCentro()
  .then(function (resultadoGraficoVeiculo) {
    res.json(resultadoGraficoVeiculo);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function roubosMesVeiculoLeste(req, res) {
  dashboardVeiculoModel.roubosMesVeiculoLeste()
    .then(function (resultadoroubosMesVeiculoNum) {
      res.json({
          roubosMesVeiculoNum: resultadoroubosMesVeiculoNum[0].roubosMesVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoVeiculoLeste(req, res) {
  dashboardVeiculoModel.roubosAnoVeiculoLeste()
    .then(function (resultadoRoubosAnoVeiculoNum) {
      res.json({
          roubosAnoVeiculoNum: resultadoRoubosAnoVeiculoNum[0].roubosAnoVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoVeiculoLeste(req, res) {
dashboardVeiculoModel.graficoVeiculoLeste()
  .then(function (resultadoGraficoVeiculo) {
    res.json(resultadoGraficoVeiculo);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function roubosMesVeiculoNorte(req, res) {
  dashboardVeiculoModel.roubosMesVeiculoNorte()
    .then(function (resultadoroubosMesVeiculoNum) {
      res.json({
          roubosMesVeiculoNum: resultadoroubosMesVeiculoNum[0].roubosMesVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoVeiculoNorte(req, res) {
  dashboardVeiculoModel.roubosAnoVeiculoNorte()
    .then(function (resultadoRoubosAnoVeiculoNum) {
      res.json({
          roubosAnoVeiculoNum: resultadoRoubosAnoVeiculoNum[0].roubosAnoVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoVeiculoNorte(req, res) {
dashboardVeiculoModel.graficoVeiculoNorte()
  .then(function (resultadoGraficoVeiculo) {
    res.json(resultadoGraficoVeiculo);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function roubosMesVeiculoOeste(req, res) {
  dashboardVeiculoModel.roubosMesVeiculoOeste()
    .then(function (resultadoroubosMesVeiculoNum) {
      res.json({
          roubosMesVeiculoNum: resultadoroubosMesVeiculoNum[0].roubosMesVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoVeiculoOeste(req, res) {
  dashboardVeiculoModel.roubosAnoVeiculoOeste()
    .then(function (resultadoRoubosAnoVeiculoNum) {
      res.json({
          roubosAnoVeiculoNum: resultadoRoubosAnoVeiculoNum[0].roubosAnoVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoVeiculoOeste(req, res) {
dashboardVeiculoModel.graficoVeiculoOeste()
  .then(function (resultadoGraficoVeiculo) {
    res.json(resultadoGraficoVeiculo);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function roubosMesVeiculoSul(req, res) {
  dashboardVeiculoModel.roubosMesVeiculoSul()
    .then(function (resultadoroubosMesVeiculoNum) {
      res.json({
          roubosMesVeiculoNum: resultadoroubosMesVeiculoNum[0].roubosMesVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoVeiculoSul(req, res) {
  dashboardVeiculoModel.roubosAnoVeiculoSul()
    .then(function (resultadoRoubosAnoVeiculoNum) {
      res.json({
          roubosAnoVeiculoNum: resultadoRoubosAnoVeiculoNum[0].roubosAnoVeiculoNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoVeiculoSul(req, res) {
dashboardVeiculoModel.graficoVeiculoSul()
  .then(function (resultadoGraficoVeiculo) {
    res.json(resultadoGraficoVeiculo);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
    roubosMesVeiculo,
    roubosAnoVeiculo,
    regiaoVeiculo,
    graficoVeiculo,
    roubosMesVeiculoCentro,
    roubosAnoVeiculoCentro,
    graficoVeiculoCentro,
    roubosMesVeiculoLeste,
    roubosAnoVeiculoLeste,
    graficoVeiculoLeste,
    roubosMesVeiculoNorte,
    roubosAnoVeiculoNorte,
    graficoVeiculoNorte,
    roubosMesVeiculoOeste,
    roubosAnoVeiculoOeste,
    graficoVeiculoOeste,
    roubosMesVeiculoSul,
    roubosAnoVeiculoSul,
    graficoVeiculoSul,
}