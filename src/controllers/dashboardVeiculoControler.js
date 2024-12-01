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

module.exports = {
    roubosMesVeiculo,
    roubosAnoVeiculo,
    regiaoVeiculo,
    graficoVeiculo
}