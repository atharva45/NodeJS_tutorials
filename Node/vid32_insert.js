const dbConnect = require('./vid31_dbconn');

//insert single cvalue
const insertsingle = async () => {
    const db = await dbConnect();
    const result = await db.insertOne({
        name: "1100", brand: "nokia", price: 30000
    })

    if (result.acknowledged) {
        console.log("data inserted");
    }

}

const insertmultiple = async () => {
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            { name: "1300", brand: "nokia", price: 40000 },
            { name: "1400", brand: "nokia", price: 50000 },
            { name: "1500", brand: "nokia", price: 60000 }
        ]
    )

    if (result.acknowledged) {
        console.log("data inserted");
    }

}
insertmultiple();