const cp = require("child_process");

var p = cp.fork("childProcess1.js",["javascript"]);

p.on("close",function(code){
    console.log(code);
})

p.on("message",function(msg){
    console.log(typeof msg);
    console.log(msg);
})

p.send("parent");