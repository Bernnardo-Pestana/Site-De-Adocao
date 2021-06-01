const Sequelize = require('sequelize');

<<<<<<< HEAD
const connection = new Sequelize('site_adocao','root','Txai1990', //nome do banco de dados, usuario e senha
=======
const connection = new Sequelize('usuarios','root','Txai1990', //nome do banco de dados, usuario e senha
>>>>>>> fa8ac051c1aa72e8113dfe05257f24d6fbc8ae26
  {
    host: 'localhost', //servidor
    dialect: 'mysql'//tipo de banco de dado
  });

  module.exports = connection; //exporta a conexao do servidor