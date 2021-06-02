const Sequelize = require("sequelize");
const client = require("./database");


const Usuario = client.define('usuarios',
{
    Nome:{
        type : Sequelize.STRING,
        allowNULL: false
    },
    Sobrenome:{
        type : Sequelize.STRING,
        allowNULL: false
    },
    Email: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    CPF: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Cidade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Rua: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Numero: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    CEP: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Idade: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Sexo: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Senha: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});


Usuario.sync({force:false}).then(()=>
{console.log("Tabela Criada")});

module.exports = Usuario;