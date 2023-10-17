const app=require('./app');

console.log("hello");
let a=4;
var z=[2,3,4,6,7,8,5,4];
console.log(z)
var b=6;
if(b==6)
{
    console.log("matched 6==6 ");
}
if(b==='6')
{

}
else{
    console.log("not matched '6'==6  as === also checks data type");
}

console.log(app.z());

var h=[1,2,3,4,5,6,7,8];
let result=h.filter((item)=>{
return item>4;
})

console.log(result)



