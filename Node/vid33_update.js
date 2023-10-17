const dbConnect = require('./vid31_dbconn')

const updateData = async () => {
    let data = await dbConnect();
    let result = data.updateOne(
        { name: "1100" }, {
        $set: { name: "1100 max" }
    });
    // console.log(data);
    if(result.acknowledged)
    {
        console.log("updated");
    }
}
// if there are multiple entries with same name in database then 
// only the first matched is updated
updateData();