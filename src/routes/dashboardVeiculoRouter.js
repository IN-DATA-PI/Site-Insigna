var express = require("express");
var router = express.Router();

var dashboardVeiculoControler = require("../controllers/dashboardVeiculoControler");

router.get("/roubosMesVeiculo", function (req, res) {
    dashboardVeiculoControler.roubosMesVeiculo(req, res);
});

router.get("/roubosAnoVeiculo", function (req, res) {
    dashboardVeiculoControler.roubosAnoVeiculo(req, res);
});

router.get("/regiaoVeiculo", function (req, res) {
    dashboardVeiculoControler.regiaoVeiculo(req, res);
});

router.get("/graficoVeiculo", function (req, res) {
    dashboardVeiculoControler.graficoVeiculo(req, res);
});

module.exports = router;