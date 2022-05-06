const express = require('express');
const router = express.Router();
const Carro = require('../model/carro');

// GET / => retornar todos os registros
router.get('/', async (req, res) => {
  res.json(await Carro.find());
});

// GET /:id => retornar todos UM registro com o id informado
router.get('/:id', async (req, res) => {
  res.json(await Carro.findById(req.params.id));
});

// POST / => adicionar um novo registro
router.post('/', async (req, res) => {
  res.json(await new Carro(req.body).save());
});

// PUT /:id => alterar UM registro com o id informado
router.put('/:id', async (req, res) => {
  res.json(await Carro.findByIdAndUpdate(req.params.id, req.body));
});

// DELETE /:id => remover UM registro com o id informado
router.delete('/:id', async (req, res) => {
  res.json(await Carro.findByIdAndRemove(req.params.id));
});

module.exports = router;