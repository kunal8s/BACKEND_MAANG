const crypto = require("node:crypto");

var a = 134565;
var b = 1234565432;

console.log("HELLO WORLD");

crypto.pbkdf2Sync("password","salt",5000000,50 ,"sha512"); // it takes the lots of time and next line are not executing till its execution 
// so it is type of blocking the execution 
console.log("First key is generated...!!");


crypto.pbkdf2("password","salt",500000,50,"sha512",(err,key)=>{
    console.log("Second key is generated...!!")
})


function multi(x,y){
    const result = a*b;
    return result;
}