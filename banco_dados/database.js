const Sequelize = require('sequelize');

const connection = new Sequelize({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  },
  dialect: 'postgres'
});

  module.exports = connection; //exporta a conexao do servidor