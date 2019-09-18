const fs = require("fs");
const path = require("path");
const http =require("http");

http.createServer(function(req,res){
    var fileName = process.argv[2];
    if(fileName==undefined){
        var fp = path.join(__dirname,"/fileReader1.js");
    }
    else{
        var fp = path.join(__dirname,"/"+fileName);
    }
    console.log("文件是否存在："+fs.existsSync(fp));
    var fc = fs.readFileSync(fp);
    // console.log(fc.toString());
    var str = fc.toString();
    //向网页写入内容
    res.writeHead(200,{"Context-Type":"text/html"});
    res.write(str);
    res.end();
}).listen(8081);

console.log("server is listening 8081");