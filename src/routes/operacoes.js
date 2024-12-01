var express = require("express");
var router = express.Router();

var operacoesController = require("../controllers/operacoesController");

router.post("/cadastrarOp", function (req, res) {
    operacoesController.cadastrarOp(req, res);
});

router.get("/listarTodas", function (req, res) {
    operacoesController.listarTodas(req, res);
});

router.put("/aceitarOp/:codOperacao", function (req, res) {
    operacoesController.aceitarOp(req, res);
});

router.put("/recusarOp/:codOperacao", function (req, res) {
    operacoesController.recusarOp(req, res);
});

router.put("/editarOp/:codOperacao", function (req, res) {
    operacoesController.editarOp(req, res);
});

router.delete("/deletarOp/:codOperacao", function (req, res) {
    operacoesController.deletarOp(req, res);
});

router.get("/listarPorStatus/:status", function (req, res) {
    operacoesController.listarPorStatus(req, res);
});


module.exports = router;