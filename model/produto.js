const mongoose = require('mongoose');

// Definir os schemas + modelos
const ProdutoSchema = { 
  nome: String ,
  preco: Number,
  descricao: String
};

module.exports = mongoose.model('Produto', ProdutoSchema);