const express = require('express');
const connection = require("./banco_dados/database");
const Usuario = require("./banco_dados/Usuarios");

const app = express();


app.set('view engine','ejs'); 
app.use(express.static('public'));


connection
    .authenticate()
    .then(()=>{
        console.log("conexao feita com banco de dados")
    })
    .catch((msgERRO)=>
    {
        console.log("Erro na conexao");
    })


app.get("/",(req,res)=>
{
    res.render("index.ejs");
})

app.get("/cadastro_usuario",(req,res)=>
{
    res.render("cadastro_usuario.ejs");
    
})

app.get("/login",(req,res)=>
{
    res.render("login.ejs");
    
})

app.get("/cadastro_adocao",(req,res)=>
{
    res.render("cadastro_adocao.ejs");
    
})

app.post("/salvar_usuario",(req, res) => {
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    PerguntaModel.create(
        {
            titulo: titulo,
            descricao:descricao
        }
    ).then(()=>{
        res.redirect("/");
    });
});

app.listen(8888,function()
{
    console.log("funcionando");
});