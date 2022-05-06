const mongoose = require('mongoose');

// Definir os schemas + modelos
const CarroSchema = { 
  nome: String ,
  montadora: String,
  ano: Number,
  kilometragem: Number,
  preco: Number
};

module.exports = mongoose.model('Carro', CarroSchema);