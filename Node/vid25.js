const express=require ('express');
const app=express();

const reqfilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send('pls provide age');
    }
    else{
        next(); 
    }
}

app.use(reqfilter)
app.get('/',(req,resp)=>{
    resp.send("welcome to home page")
})

app.get('/users',(req,resp)=>{
    resp.send("welcome to users")
})
app.listen(5000)