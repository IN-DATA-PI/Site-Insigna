var express = require("express");
var router = express.Router();

var dashboardControler = require("../controllers/dashboardControler");

router.get("/roubosMesCarga", function (req, res) {
    dashboardControler.roubosMesCarga(req, res);
});

router.get("/roubosAnoCarga", function (req, res) {
    dashboardControler.roubosAnoCarga(req, res);
});

router.get("/regiao", function (req, res) {
    dashboardControler.regiao(req, res);
});

router.get("/grafico", function (req, res) {
    dashboardControler.grafico(req, res);
});

router.get("/roubosMesVeiculo", function (req, res) {
    dashboardControler.roubosMesVeiculo(req, res);
});

router.get("/roubosAnoVeiculo", function (req, res) {
    dashboardControler.roubosAnoVeiculo(req, res);
});

router.get("/regiaoVeiculo", function (req, res) {
    dashboardControler.regiaoVeiculo(req, res);
});

router.get("/graficoVeiculo", function (req, res) {
    dashboardControler.graficoVeiculo(req, res);
});

router.get("/roubosMesOutros", function (req, res) {
    dashboardControler.roubosMesOutros(req, res);
});

router.get("/roubosAnoOutros", function (req, res) {
    dashboardControler.roubosAnoOutros(req, res);
});

router.get("/regiaoOutros", function (req, res) {
    dashboardControler.regiaoOutros(req, res);
});

router.get("/graficoOutros", function (req, res) {
    dashboardControler.graficoOutros(req, res);
});

router.get("/recomendacoesIa", function (req, res) {
    dashboardControler.recomendacoesIa(req, res);
});


module.exports = router;