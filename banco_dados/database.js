const Sequelize = require('sequelize');

const connection = new Sequelize('usuarios','root','Txai1990', //nome do banco de dados, usuario e senha
  {
    host: 'localhost', //servidor
    dialect: 'mysql'//tipo de banco de dado
  });

  module.exports = connection; //exporta a conexao do servidor