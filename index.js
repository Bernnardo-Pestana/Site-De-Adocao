const express = require('express');

const app = express();


app.set('view engine','ejs'); 
app.use(express.static('public'));


app.get("/",(req,res)=>
{
    res.render("index.ejs");
})

app.get("/cadastro_usuario",(req,res)=>
{
    res.render("cadastro_usuario.ejs");
    
})






app.listen(8888,function()
{
    console.log("funcionando");
});