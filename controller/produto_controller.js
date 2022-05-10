const express = require('express');
const router = express.Router();
const Produto = require('../model/produto');
const Seguranca = require('../service/seguranca_service');

// GET / => retornar todos os registros
router.get('/', async (req, res) => {
  res.json(await Produto.find());
});

// GET /:id => retornar todos UM registro com o id informado
router.get('/:id', async (req, res) => {
  res.json(await Produto.findById(req.params.id));
});

// POST / => adicionar um novo registro
router.post('/', Seguranca.isAutenticado, Seguranca.hasRole('administrador'), async (req, res) => {
  res.json(await new Produto(req.body).save());
});

// PUT /:id => alterar UM registro com o id informado
router.put('/:id', Seguranca.isAutenticado, Seguranca.hasRole('administrador'), async (req, res) => {
  res.json(await Produto.findByIdAndUpdate(req.params.id, req.body));
});

// DELETE /:id => remover UM registro com o id informado
router.delete('/:id', Seguranca.isAutenticado, Seguranca.hasRole('administrador'), async (req, res) => {
  res.json(await Produto.findByIdAndRemove(req.params.id));
});

module.exports = router;