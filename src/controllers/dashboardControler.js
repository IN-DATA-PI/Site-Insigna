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

module.exports = {
    roubosMesOutros,
    roubosAnoOutros,
    regiaoOutros,
    graficoOutros
}