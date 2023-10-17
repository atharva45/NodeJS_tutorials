const fs=require('fs');
// fs.writeFileSync('apple.doc','this is a doc file');
const path = require('path');
const dirpath= path.join(__dirname);
//__dirpath gives path of the current directort
console.log(dirpath);

// for( i=0;i<5;i++)
// {
//     fs.writeFileSync(dirpath+"/hello"+i+".txt"," temp txt file");
// }

fs.readdir(dirpath,(err,fe)=>{
    fe.forEach((item)=>{
        console.log("file name is",item)
    })
})