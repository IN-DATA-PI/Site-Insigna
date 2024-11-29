var express = require("express");
var router = express.Router();

var departamentosController = require("../controllers/departamentosController");

router.post("/cadastrarDep", function (req, res) {
    departamentosController.cadastrarDep(req, res);
});

router.post("/autenticarDep", function (req, res) {
    departamentosController.autenticar(req, res);
});

module.exports = router;