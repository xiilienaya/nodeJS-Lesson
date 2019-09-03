const http = require("http");

/*
    http协议，协议的结构，协议的请求响应方式过程
    状态码
*/ 
    
var server = http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type" : "text/plain"})
    res.write("hello world");
    //响应结束
    res.end();
});

server.listen(8080);
console.log("hello world");