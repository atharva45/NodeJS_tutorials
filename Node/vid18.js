const express= require('express');
const app=express();

app.get('',(req,res)=>{

    console.log("data sent by the browser ",req.query);
    //node .\express\vid18.js
    res.send('hello, this is home express')
});

app.get('/about',(req,res)=>{
    res.send('hello, this is about express')
});

app.listen(5000);
