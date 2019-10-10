const cp = require("child_process");

var childProcess = cp.spawn("node",["childProcess1.js"]);

var result="";

childProcess.stdout.on("data",function(chunk){
    console.log(chunk.toString("utf8"));
    result += chunk;
})

childProcess.stdout.on("close",function(code){
    console.log(result);
    console.log("退出码："+code);
})