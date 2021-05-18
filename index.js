const express = require('express');

const app;

app = express();


app.listen(8888,(req,res)=>
{
   res.render("index.ejs");
   
    console.log("funcionando");
});
