RightNow mostly server is created using the express framework
Will be coming in express

For now will create the server using the nodejs
as follows using http module
import http from 'http';
//create our server
const server = http.createServer((req,res)=>{
    console.log(req);
});

//our server is listening on port 8000 
server.listen(8000,()=>console.log("Server up"));

if we run this file we will get info about req
there you can find the url ->>>which is default url

when we want to provide response to user on browser :
res.write("<h1>Hello from Node.js server</h1>")

to end the response from server:
res.end("message");

Basically we have created a server and 
that is listening at port 8000
so when user hits localhost:8000 our server
takes req and provides the response that has 
been given inside our create server function


Inside browser->inspect->network
It shows the values of headers of response and request
we can set them using following functions
res.setHeader("Content-Type","text/html");
To set the statuscode and statusmessage
res.statuscode = 404;
res.statusmessage ="BAD";

shorthand for status (code,message, &header)
res.writeHead(202,"Good",{"Content-Type":"text/html"});

Routing in NodeJs:
First create a server and then listen on that server
with port 8000
use req.url to get the path or url from browser
console.log(req.url)
Based on condition of the path give appropriate response
 if(req.url ==='/'){
    res.end("<h1>Hello from Node.js Home</h1>");
    }
    else if(req.url ==='/About'){
        res.end("<h1> Node.js About</h1>");
    }
put this inside the createserver method