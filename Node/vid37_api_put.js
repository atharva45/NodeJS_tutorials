// 4 types of api 
// get = to get data
// post = to input
// put = to update
//  delete

const express=require('express');
const dbConnect=require('./vid31_dbconn');

const app=express();
app.use(express.json())

// app.get('/',async (req,resp)=>{
//     let data=await dbConnect();
//     data= await data.find().toArray()
//     console.log(data);

//     resp.send({data})
    
// })

// app.post('/',async (req,resp)=>{
//     let data=await dbConnect();
//     let result=await data.insertOne(req.body);
//     // console.log(req.body)
//     resp.send(result );
// }) 

app.put('/',async (req, resp)=>{
    let data=await dbConnect();
    let result=data.updateOne(
        {name:"galaxy"},//{req.body.name} //from link req.params.name
        {$set:req.body}
        )
    data= await data.find().toArray();
    resp.send(data);
})
app.listen(5000);