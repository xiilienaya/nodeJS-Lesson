const http=require("http");
const fs=require("fs");
const path=require("path");
const url=require("url");


var server=http.createServer(function(req,res){
    var fp = __dirname + "\\view\\view.html";//将网页响应到客户端
    console.log(fp);
    
    var htmlcontent = fs.readFileSync(fp);//通过路径读取文件内容
    htmlcontent=htmlcontent.toString("utf8");
    console.log(htmlcontent);
    res.writeHead(200,{"Content-Type" : "text/html"});
    res.write(htmlcontent);
    res.end();
    
})

server.listen(8080);
console.log("server is listen 8080");