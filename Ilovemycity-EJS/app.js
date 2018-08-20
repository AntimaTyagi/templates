var exp=require('express');
var app=exp();
app.set("view engine",'ejs');
app.get('/',function(req,res)
{
    res.render('home',{
        headline:'we belive this city have good quality to say any thing'
    });
});
var port= process.env.PORT || 4000;
var server=app.listen(port,function(req,res)
{
    console.log("4444");
})