const fs = require("node:fs"); // node: tells this module is node core inbuilt module
const http = require("node:http");

var a = 1234565432;
var b = 23456543;

console.log('Hello world');
const data = fs.readFileSync("file.txt","utf-8");
console.log(data);

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

