const http = require("http");
const fs = require("fs");
const path = require("path");

var server = http.createServer(function(req,res){
    var fp = path.join(__dirname,"../images/luobei.png");
    var imgBuffer = fs.readFileSync(fp);
    var base64Data = imgBuffer.toString("base64");
    var imgSrc="data:images/jpg;base64,"+base64Data;
    var htmlStr ="<!DOCTYPE html><head></head>"+"<body><img src='"+imgSrc+"'/><body>"+"</html>";
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlStr);
    res.end();
}).listen(8081);   
console.log("Server is listen 8081") ;