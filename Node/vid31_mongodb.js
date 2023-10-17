const dbconnect=require('./vid31_dbconn')

// handling promise using promise (then)
// dbconnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
        
//     })
// })   
// console.log(dbconnect());

//async await
const main= async()=>{
    console.log("main funvbc");

    let data =await dbconnect();
    data=await data.find().toArray();
    console.log(data);
}

main();

