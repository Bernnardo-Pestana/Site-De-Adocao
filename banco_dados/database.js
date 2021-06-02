const Sequelize = require('sequelize');

const connection = new Sequelize({
  connectionString: process.env.DATABASE_URL,
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
  
});

  module.exports = connection; //exporta a conexao do servidor