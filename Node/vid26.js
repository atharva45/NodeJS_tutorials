const express=require ('express');
const reqfilter=require('./vid26_ext')
const app=express();

const route=express.Router();

// app.use(reqfilter)
route.use(reqfilter)// this line to be used only for multple pages at ones
app.get('/',(req,resp)=>{
    resp.send("welcome to home page")
})
// single route
app.get('/users',reqfilter,(req,resp)=>{
    resp.send("welcome to users")
})

app.get('/about',(req,resp)=>{
    resp.send("loremhhbjhbj h bhhb ")
})
//multiple pages route instead of mentioning at each line do this

route.get('/hello',(req,resp)=>{
    resp.send("welcome to hello s")
})

route.get('/bye',(req,resp)=>{
    resp.send("byeehb ")
})

app.use('/',route);

app.listen(5000)