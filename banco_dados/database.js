const Sequelize = require('sequelize');

const connection = new Sequelize({
  connectionString: process.env.DATABASE_URL,
  dialect: 'postgres',
  ssl: {
    rejectUnauthorized: false
  }
  
});



connection.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  connection.end();
});

  module.exports = connection; //exporta a conexao do servidor