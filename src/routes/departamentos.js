var express = require("express");
var router = express.Router();

var departamentosController = require("../controllers/departamentosController");

router.post("/cadastrarDep", function (req, res) {
    departamentosController.cadastrarDep(req, res);
});

router.get("/listarDep", function (req, res) {
    departamentosController.listarDep(req, res);
});

router.put("/editarDep/:idDepartamentoPolicia", function (req, res) {
    departamentosController.editarDep(req, res);
})

router.delete("/deletarDep/:idDepartamentoPolicia", function (req, res) {
    departamentosController.deletarDep(req, res);
})

module.exports = router;