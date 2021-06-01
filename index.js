const express = require('express');
const connection = require("./banco_dados/database");
const Usuario = require("./banco_dados/Usuarios");
const Anuncios = require("./banco_dados/Anuncios");


var bodyparse = require('body-parser');

const app = express();


app.set('view engine','ejs'); 
app.use(express.static('public'));

//bodyparse
app.use(bodyparse.urlencoded({extended: true}));//permite com que envie os dados do formulario para  ser traduzido em javascript
app.use(bodyparse.json());//permite q leia dados do formulario via json.


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
    res.render("index2.ejs");
})

app.get("/cadastro_usuario",(req,res)=>
{
    res.render("cadastro_usuario.ejs");
    
})

app.get("/login",(req,res)=>
{
    res.render("login.ejs");
    
})

app.post("/resultado",(req,res)=>
{
    var tipo = req.body.tipo;
    
    Anuncios.findAll({where:{
        Tipo : tipo
    },order:[['id', 'DESC']]}).then(anuncios=>{

    res.render("resultado",{anuncios:anuncios})
  })
    
})

app.get("/busca",(req,res)=>
{
    res.render("busca.ejs");
    
})

app.get("/buscaavancada",(req,res)=>
{
    res.render("buscaavancada.ejs");
    
})

app.get("/cadastro_adocao",(req,res)=>
{
    res.render("cadastro_adocao.ejs");
    
})

app.post("/salvar_usuario",(req, res) => {
    var Nome = req.body.Nome;
    var Sobrenome = req.body.Sobrenome;
    var Email = req.body.Email;
    var Tel = req.body.Tel;
    var Cpf = req.body.Cpf;
    var Cidade = req.body.Cidade;
    var Rua = req.body.Rua;
    var Num = req.body.Num;
    var Cep = req.body.Cep;
    var Idade = req.body.Idade;
    var Sexo = req.body.Sexo;
    var Senha = req.body.Senha;

    Usuario.create(
        {
          Nome : Nome, 

          Sobrenome: Sobrenome,

          Email:Email,

          Telefone:Tel,

          CPF: Cpf,

          Cidade: Cidade,

          Rua:Rua,

          Numero: Num,

          CEP:Cep,

          Idade:Idade,

          Sexo:Sexo,
          
          Senha:Senha
        }
    ).then(()=>{
        res.redirect("/");
        console.log("Criado a conta");
    });
});

app.post("/salvar_adocao",(req,res)=>{
    var raca = req.body.raca;
    var tipo = req.body.tipo;
    var idade = req.body.idade;
    var caracteristicas = req.body.caracteristicas;

    Anuncios.create({
        Raca: raca,
        Caracteristicas:caracteristicas,
        Idade:idade,
        Tipo:tipo
    }).then(()=>{
        res.redirect("/");
        console.log("Criado o anuncio");
    });


});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
