var express = require("express");
var router = express.Router();

var dashboardControler = require("../controllers/dashboardControler");

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

router.get("/roubosMesOutrosCentro", function (req, res) {
    dashboardControler.roubosMesOutrosCentro(req, res);
});

router.get("/roubosAnoOutrosCentro", function (req, res) {
    dashboardControler.roubosAnoOutrosCentro(req, res);
});

router.get("/graficoOutrosCentro", function (req, res) {
    dashboardControler.graficoOutrosCentro(req, res);
});

router.get("/roubosMesOutrosLeste", function (req, res) {
    dashboardControler.roubosMesOutrosLeste(req, res);
});

router.get("/roubosAnoOutrosLeste", function (req, res) {
    dashboardControler.roubosAnoOutrosLeste(req, res);
});

router.get("/graficoOutrosLeste", function (req, res) {
    dashboardControler.graficoOutrosLeste(req, res);
});

router.get("/roubosMesOutrosNorte", function (req, res) {
    dashboardControler.roubosMesOutrosNorte(req, res);
});

router.get("/roubosAnoOutrosNorte", function (req, res) {
    dashboardControler.roubosAnoOutrosNorte(req, res);
});

router.get("/graficoOutrosNorte", function (req, res) {
    dashboardControler.graficoOutrosNorte(req, res);
});

router.get("/roubosMesOutrosOeste", function (req, res) {
    dashboardControler.roubosMesOutrosOeste(req, res);
});

router.get("/roubosAnoOutrosOeste", function (req, res) {
    dashboardControler.roubosAnoOutrosOeste(req, res);
});

router.get("/graficoOutrosOeste", function (req, res) {
    dashboardControler.graficoOutrosSul(req, res);
});

router.get("/roubosMesOutrosSul", function (req, res) {
    dashboardControler.roubosMesOutrosSul(req, res);
});

router.get("/roubosAnoOutrosSul", function (req, res) {
    dashboardControler.roubosAnoOutrosSul(req, res);
});

router.get("/graficoOutrosSul", function (req, res) {
    dashboardControler.graficoOutrosSul(req, res);
});

router.get("/recomendacoesIa", function (req, res) {
    dashboardControler.recomendacoesIa(req, res);
});

module.exports = router;