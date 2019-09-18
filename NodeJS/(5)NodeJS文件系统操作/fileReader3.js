const http = require("http");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    //判断文件是否存在
    var fileName = process.argv[2];
    if(fileName==undefined){
        var fp = path.join(__dirname,"/fileReader2.js");
    }
    else{
        var fp = path.join(__dirname,"/"+fileName);
    }
    console.log("文件是否存在："+fs.existsSync(fp));
    //读取文件
    var streamReader=fs.createReadStream(fp);
    streamReader.pipe(res);
}).listen(8081);

console.log("server is listening 8081");