const fs = require("fs");
const http = require("http");

var a = 1234565432;
var b = 23456543;

console.log('Hello world');

http.get("http://dummyjson.com/products/1",(res)=>{
    console.log("Data fetched sucessfully....!!")
    res.on('data', () => {}); 
});

setTimeout(()=>{
    console.log("Executed after 5sec....!!");
},5000);

fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log("File data: ", data);
});

var c = (function(){
    const result = a*b;
    console.log(result);
})();

