// 4 types of api 
// get = to get data
// post = to input
// put = to update
//  delete
const mongodb=require('mongodb');
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

// app.put('/',async (req, resp)=>{
//     let data=await dbConnect();
//     let result=data.updateOne(
//         {name:"galaxy"},//{req.body.name} //from link req.params.name
//         {$set:req.body}
//         )
//     data= await data.find().toArray();
//     resp.send(data);
// })

app.delete("/:id",async(req,resp)=>{
    console.log(req.params.id)
    // resp.send("hello" 
    const data= await dbConnect();
    const result=await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})
app.listen(5000);

//resp.send("welcome to hello s")