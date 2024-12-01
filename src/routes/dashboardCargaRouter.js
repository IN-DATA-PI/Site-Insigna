var express = require("express");
var router = express.Router();

var dashboardCargaControler = require("../controllers/dashboardCargaControler");

router.get("/roubosMesCarga", function (req, res) {
    dashboardCargaControler.roubosMesCarga(req, res);
});

router.get("/roubosAnoCarga", function (req, res) {
    dashboardCargaControler.roubosAnoCarga(req, res);
});

router.get("/regiao", function (req, res) {
    dashboardCargaControler.regiao(req, res);
});

router.get("/grafico", function (req, res) {
    dashboardCargaControler.grafico(req, res);
});

router.get("/roubosMesCargaCentro", function (req, res) {
    dashboardCargaControler.roubosMesCargaCentro(req, res);
});

router.get("/roubosAnoCargaCentro", function (req, res) {
    dashboardCargaControler.roubosAnoCargaCentro(req, res);
});

router.get("/graficoCentro", function (req, res) {
    dashboardCargaControler.graficoCentro(req, res);
});

router.get("/roubosMesCargaLeste", function (req, res) {
    dashboardCargaControler.roubosMesCargaLeste(req, res);
});

router.get("/roubosAnoCargaLeste", function (req, res) {
    dashboardCargaControler.roubosAnoCargaLeste(req, res);
});

router.get("/graficoLeste", function (req, res) {
    dashboardCargaControler.graficoLeste(req, res);
});

router.get("/roubosMesCargaNorte", function (req, res) {
    dashboardCargaControler.roubosMesCargaNorte(req, res);
});

router.get("/roubosAnoCargaNorte", function (req, res) {
    dashboardCargaControler.roubosAnoCargaNorte(req, res);
});

router.get("/graficoNorte", function (req, res) {
    dashboardCargaControler.graficoNorte(req, res);
});

router.get("/roubosMesCargaOeste", function (req, res) {
    dashboardCargaControler.roubosMesCargaOeste(req, res);
});

router.get("/roubosAnoCargaOeste", function (req, res) {
    dashboardCargaControler.roubosAnoCargaOeste(req, res);
});

router.get("/graficoOeste", function (req, res) {
    dashboardCargaControler.graficoOeste(req, res);
});

router.get("/roubosMesCargaSul", function (req, res) {
    dashboardCargaControler.roubosMesCargaSul(req, res);
});

router.get("/roubosAnoCargaSul", function (req, res) {
    dashboardCargaControler.roubosAnoCargaSul(req, res);
});

router.get("/graficoSul", function (req, res) {
    dashboardCargaControler.graficoSul(req, res);
});

module.exports = router;