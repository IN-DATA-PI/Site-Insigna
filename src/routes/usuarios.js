var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
});

router.post("/cadastrarDep", function (req, res) {
    usuarioController.cadastrarDep(req, res);
});

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/autenticarDep", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrarOp", function (req, res) {
    usuarioController.cadastrarOp(req, res);
});

router.post("/cadastrarIv", function (req, res) {
    usuarioController.cadastrarIv(req, res);
});

router.put("/editarUsuario/:id", function (req, res) {
    usuarioController.editarUsuario(req, res);
});

router.delete("/deletarUsuario/:id", function (req, res) {
    usuarioController.deletarUsuario(req, res);
});

router.get("/listarUsuarios", function (req, res) {
    usuarioController.listarTodos(req, res);
});

router.get("/listarTodas", function (req, res) {
    usuarioController.listarTodas(req, res);
});

router.put("/aceitarOp/:codOperacao", function (req, res) {
    usuarioController.aceitarOp(req, res);
});

router.put("/recusarOp/:codOperacao", function (req, res) {
    usuarioController.aceitarOp(req, res);
});

module.exports = router;