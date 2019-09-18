const fs = require("fs");
const path = require("path");
const http =require("http");

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
    //
    if(fs.existsSync(fp)){
        var fid = fs.openSync(fp,"r+");
        var buffer=Buffer.alloc(1024);
        var len=fs.statSync(fp).size;

        fs.readSync(fid,buffer,0,len,0);
        var hc = buffer.toString();

        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(hc);
        res.end();

        fs.closeSync(fid);
    }
    else{
        console.log("文件不存在!");
    }


}).listen(8081);
console.log("server is listening 8081");