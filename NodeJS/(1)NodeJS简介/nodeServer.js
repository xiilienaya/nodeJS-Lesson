const http = require("http");
//实例化server
var server = new http.Server();

//server监听客户端请求
server.on("request",function(req,res){ //请求对象，返回对象
    res.end("hello wrold");
})
//server监听端口
server.listen(8082);
console.log("shinandashabi");