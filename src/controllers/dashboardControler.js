var dashboardModel = require("../models/dashboardModel");

function roubosMesOutros(req, res) {
    dashboardModel.roubosMesOutros()
      .then(function (resultadoroubosMesOutrosNum) {
        res.json({
            roubosMesOutrosNum: resultadoroubosMesOutrosNum[0].roubosMesOutrosNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function roubosAnoOutros(req, res) {
    dashboardModel.roubosAnoOutros()
      .then(function (resultadoRoubosAnoOutrosNum) {
        res.json({
            roubosAnoOutrosNum: resultadoRoubosAnoOutrosNum[0].roubosAnoOutrosNum
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function regiaoOutros(req, res) {
  dashboardModel.regiaoOutros()
    .then(function (resultadoRegiaoOuregiaoOutros) {
      res.json({
          regiaoOutros: resultadoRegiaoOuregiaoOutros[0].zona
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoOutros(req, res) {
  dashboardModel.graficoOutros()
    .then(function (resultadoGraficoOutros) {
      res.json(resultadoGraficoOutros);
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosMesOutrosCentro(req, res) {
  dashboardModel.roubosMesOutrosCentro()
    .then(function (resultadoroubosMesOutrosNum) {
      res.json({
          roubosMesOutrosNum: resultadoroubosMesOutrosNum[0].roubosMesOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoOutrosCentro(req, res) {
  dashboardModel.roubosAnoOutrosCentro()
    .then(function (resultadoRoubosAnoOutrosNum) {
      res.json({
          roubosAnoOutrosNum: resultadoRoubosAnoOutrosNum[0].roubosAnoOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoOutrosCentro(req, res) {
dashboardModel.graficoOutrosCentro()
  .then(function (resultadoGraficoOutros) {
    res.json(resultadoGraficoOutros);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function roubosMesOutrosLeste(req, res) {
  dashboardModel.roubosMesOutrosLeste()
    .then(function (resultadoroubosMesOutrosNum) {
      res.json({
          roubosMesOutrosNum: resultadoroubosMesOutrosNum[0].roubosMesOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoOutrosLeste(req, res) {
  dashboardModel.roubosAnoOutrosLeste()
    .then(function (resultadoRoubosAnoOutrosNum) {
      res.json({
          roubosAnoOutrosNum: resultadoRoubosAnoOutrosNum[0].roubosAnoOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoOutrosLeste(req, res) {
dashboardModel.graficoOutrosLeste()
  .then(function (resultadoGraficoOutros) {
    res.json(resultadoGraficoOutros);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function roubosMesOutrosNorte(req, res) {
  dashboardModel.roubosMesOutrosNorte()
    .then(function (resultadoroubosMesOutrosNum) {
      res.json({
          roubosMesOutrosNum: resultadoroubosMesOutrosNum[0].roubosMesOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoOutrosNorte(req, res) {
  dashboardModel.roubosAnoOutrosNorte()
    .then(function (resultadoRoubosAnoOutrosNum) {
      res.json({
          roubosAnoOutrosNum: resultadoRoubosAnoOutrosNum[0].roubosAnoOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoOutrosNorte(req, res) {
dashboardModel.graficoOutrosNorte()
  .then(function (resultadoGraficoOutros) {
    res.json(resultadoGraficoOutros);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function roubosMesOutrosOeste(req, res) {
  dashboardModel.roubosMesOutrosOeste()
    .then(function (resultadoroubosMesOutrosNum) {
      res.json({
          roubosMesOutrosNum: resultadoroubosMesOutrosNum[0].roubosMesOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoOutrosOeste(req, res) {
  dashboardModel.roubosAnoOutrosOeste()
    .then(function (resultadoRoubosAnoOutrosNum) {
      res.json({
          roubosAnoOutrosNum: resultadoRoubosAnoOutrosNum[0].roubosAnoOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoOutrosOeste(req, res) {
dashboardModel.graficoOutrosOeste()
  .then(function (resultadoGraficoOutros) {
    res.json(resultadoGraficoOutros);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function roubosMesOutrosSul(req, res) {
  dashboardModel.roubosMesOutrosSul()
    .then(function (resultadoroubosMesOutrosNum) {
      res.json({
          roubosMesOutrosNum: resultadoroubosMesOutrosNum[0].roubosMesOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function roubosAnoOutrosSul(req, res) {
  dashboardModel.roubosAnoOutrosSul()
    .then(function (resultadoRoubosAnoOutrosNum) {
      res.json({
          roubosAnoOutrosNum: resultadoRoubosAnoOutrosNum[0].roubosAnoOutrosNum
      });
    })
    .catch(function (erro) {
      console.error(erro);
      console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
    });
}

function graficoOutrosSul(req, res) {
dashboardModel.graficoOutrosSul()
  .then(function (resultadoGraficoOutros) {
    res.json(resultadoGraficoOutros);
  })
  .catch(function (erro) {
    console.error(erro);
    console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

function recomendacoesIa(req, res) {
  dashboardModel.recomendacoesIa().then(function (resultado) {
      if (resultado.length > 0) {
          res.status(200).json(resultado);
      } else {
          res.status(204).send("Nenhum resultado encontrado!")
      }
  }).catch(function (erro) {
      console.log(erro);
      console.log("Houve um erro ao buscar as recomendações.", erro.sqlMessage);
      res.status(500).json(erro.sqlMessage);
  });
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
    recomendacoesIa,
}