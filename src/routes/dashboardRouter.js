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


module.exports = router;