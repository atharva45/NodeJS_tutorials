const express= require('express');
const app=express();

const path=require('path');

const folderpath=path.join(__dirname,'trial');

console.log(folderpath);

app.set('view engine','ejs');
app.get('',(req,resp)=>{
    resp.sendFile(`${folderpath}/index.html`);
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${folderpath}/about.html`);
})
app.get('/profile',(req,resp)=>{
    const user={
        name:'anil',
        email:'anil@gmail',
        phone:'9999999'
    }
    resp.render('profile',{user}) ;
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${folderpath}/404page.html`);
})

// app.use(express.static(folderpath));

app.listen(5000);
