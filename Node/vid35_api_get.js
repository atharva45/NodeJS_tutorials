// 4 types of api 
// get = to get data
// post = to input
// put = to update
//  delete

const express=require('express');
const dbConnect=require('./vid31_dbconn');

const app=express();

app.get('/',async (req,resp)=>{
    let data=await dbConnect();
    data= await data.find().toArray()
    console.log(data);

    resp.send({data})
    
})

app.listen(5000);