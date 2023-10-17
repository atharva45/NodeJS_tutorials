const express= require('express');
const app=express();

const path=require('path');

app.get('',(req,res)=>{
    res.send(`
    input ur ans
    <input type="text" placeholder="input here">
    <a href="/about"><button>click to about</button></a>

    name is ${req.query.name};
    `);
});
 
app.get('/about',(req,res)=>{
    res.send({
         name:'anil',
         email:'anil@gmail'

    })
});

app.listen(5000);
