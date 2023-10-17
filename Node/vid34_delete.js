const dbConnect=require('./vid31_dbconn');

const deleteData=async()=>{
    // console.log("vnf")
    let data=await dbConnect();
    let result=await data.deleteOne({name:"1300"})
    //deleteMany({name:"1300"})
    if(result.acknowledged)    
    {
        console.log("deleted");
    }
    //if there is no such value in the data base then there is no error shown but
    // delete count is 0 in terminal
}

deleteData();