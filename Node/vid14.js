const fs=require('fs');
const path=require('path')
const dirPath=path.join(__dirname,'crud');
// fs.writeFileSync('apple.txt');
const filepath=`${dirPath}/mango.txt`;
// console.log(" path => ", path);
console.log(" dirpath => ", dirPath);
console.log(" filepath => ", filepath);
// create
// fs.writeFileSync(filepath,"this is a crud operation");

// read
// fs.readFile(filepath,'utf8', (err,item)=>{
//     console.log(item);
// })


// append
// fs.appendFile(filepath,' and file is updated',(err)=>{
//     if(!err) 
//     console.log("file is updated");
// })

// delete
// fs.unlinkSync(filepath);