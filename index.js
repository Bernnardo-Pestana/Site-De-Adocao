const app;


app.listen(8888,(req,res)=>
{
   res.render("index.ejs");
   
    console.log("funcionando");
});
