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

router.get("/roubosMesVeiculoCentro", function (req, res) {
    dashboardVeiculoControler.roubosMesVeiculoCentro(req, res);
});

router.get("/roubosAnoVeiculoCentro", function (req, res) {
    dashboardVeiculoControler.roubosAnoVeiculoCentro(req, res);
});

router.get("/graficoVeiculoCentro", function (req, res) {
    dashboardVeiculoControler.graficoVeiculoCentro(req, res);
});

router.get("/roubosMesVeiculoLeste", function (req, res) {
    dashboardVeiculoControler.roubosMesVeiculoLeste(req, res);
});

router.get("/roubosAnoVeiculoLeste", function (req, res) {
    dashboardVeiculoControler.roubosAnoVeiculoLeste(req, res);
});

router.get("/graficoVeiculoLeste", function (req, res) {
    dashboardVeiculoControler.graficoVeiculoLeste(req, res);
});

router.get("/roubosMesVeiculoNorte", function (req, res) {
    dashboardVeiculoControler.roubosMesVeiculoNorte(req, res);
});

router.get("/roubosAnoVeiculoNorte", function (req, res) {
    dashboardVeiculoControler.roubosAnoVeiculoNorte(req, res);
});

router.get("/graficoVeiculoNorte", function (req, res) {
    dashboardVeiculoControler.graficoVeiculoNorte(req, res);
});

router.get("/roubosMesVeiculoOeste", function (req, res) {
    dashboardVeiculoControler.roubosMesVeiculoOeste(req, res);
});

router.get("/roubosAnoVeiculoOeste", function (req, res) {
    dashboardVeiculoControler.roubosAnoVeiculoOeste(req, res);
});

router.get("/graficoVeiculoOeste", function (req, res) {
    dashboardVeiculoControler.graficoVeiculoOeste(req, res);
});

router.get("/roubosMesVeiculoSul", function (req, res) {
    dashboardVeiculoControler.roubosMesVeiculoSul(req, res);
});

router.get("/roubosAnoVeiculoSul", function (req, res) {
    dashboardVeiculoControler.roubosAnoVeiculoSul(req, res);
});

router.get("/graficoVeiculoSul", function (req, res) {
    dashboardVeiculoControler.graficoVeiculoSul(req, res);
});

module.exports = router;