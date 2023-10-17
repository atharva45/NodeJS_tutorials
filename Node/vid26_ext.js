module.exports=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send('pls provide age');
    } 
    else{
        next(); 
    }
}