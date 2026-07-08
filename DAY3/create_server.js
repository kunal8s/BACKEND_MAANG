const http = require("node:http"); // node: bcs http is native/core module 

// http is a class then if u do http.createserver then an instannce of server is given to yyou 
const server = http.createServer((req,res)=>{
    if(req.url==="/getsecret"){
        return res.end("There is no secret data...!!") // without return it moves to last .end and server will crash bcs attempting 2nd response in same http req
    }
    res.end("Hello from server end...!!"); // res send by server if any request hit on it 
});

server.listen(3000);    // port number and then res given if server is listening 
