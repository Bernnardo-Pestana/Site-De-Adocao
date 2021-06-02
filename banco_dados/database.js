const Sequelize = require('sequelize');

const connection = new Sequelize({
  connectionString: process.env.DATABASE_URL,
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
  
});

//  module.exports = connection; //exporta a conexao do servidor


const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});

module.exports = client ;