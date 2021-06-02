const Sequelize = require("sequelize");
const client = require("./database");



const Anuncios = client.define('anuncio',
{
    Raca : 
        {
            type : Sequelize.STRING,
            allowNULL: false
        },
    Caracteristicas:{
            type : Sequelize.TEXT,
            allowNULL: false
        },
    Tipo:{
        type : Sequelize.STRING,
        allowNULL: false
        },
    Idade:{
        type : Sequelize.STRING,
        allowNULL: false
        }
     
});

Anuncios.sync({force:false}).then(()=>
{console.log("Tabela Criada")});

module.exports = Anuncios;