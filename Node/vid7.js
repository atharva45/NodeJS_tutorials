const http= require('http');

http.createServer((req,resp)=>{

    resp.write("this is atharva");
    resp.end();
}).listen(4500)

//

function data(req,resp)
{
    resp.write("this is aarva from data function");
    resp.end();
}

http.createServer(data).listen(4600);