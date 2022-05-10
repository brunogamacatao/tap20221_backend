// Se tem o arquivo .env => carregar os valores do arquivo para variáveis de ambiente
// Se não tem o arquivo .env => vai usar as variáveis de ambiente do sistema
require('dotenv').config(); 
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const BootstrapService = require('./service/bootstrap_service');

// Abrindo a conexão com o banco de dados
mongoose.connect(process.env.DATABASE_URL).then(() => {
  BootstrapService.boot();
});

// Cria o servidor web
const app = express();

// Configurar o servidor web
app.use(cors());
app.use(bodyParser.json()); // 1. aceitar dados no formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // 2. aceitar dados no format url encoded

// Registrar os controllers
app.use('/login', require('./controller/login_controller'));
app.use('/usuarios', require('./controller/usuario_controller'));
app.use('/produtos', require('./controller/produto_controller'));
app.use('/carros', require('./controller/carro_controller'));

app.listen(parseInt(process.env.SERVER_PORT), () => {
  console.log(`O servidor está no ar em http://localhost:${process.env.SERVER_PORT}`);
});
