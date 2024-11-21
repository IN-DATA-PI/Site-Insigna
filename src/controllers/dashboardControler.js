var dashboardModel = require("../models/dashboardModel");

function roubosMesCarga(req, res) {
    dashboardModel.roubosMesCarga()
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
    dashboardModel.roubosAnoCarga()
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
    dashboardModel.regiao()
      .then(function (resultadoRegiao) {
        res.json({
            regiao: resultadoRegiao[0].regiao
        });
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o roubo ano carga! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
}

function grafico(req, res) {
    dashboardModel.grafico()
      .then(function (resultadoGrafico) {
        res.json(resultadoGrafico);
      })
      .catch(function (erro) {
        console.error(erro);
        console.error("Houve um erro ao obter o ranking! Erro: ", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
      });
  }

function roubosMesVeiculo(req, res) {
    dashboardModel.roubosMesVeiculo()
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
    dashboardModel.roubosAnoVeiculo()
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

module.exports = {
    roubosMesCarga,
    roubosAnoCarga,
    regiao,
    grafico,
    roubosMesVeiculo,
    roubosAnoVeiculo,
    roubosMesOutros,
    roubosAnoOutros
}