const fs = require("fs");
const path = require("path");
const http = require("http");

var fileName = process.argv[2];


http.createServer(function(req,res){
    if(fileName == undefined){
        fs.open(process.argv[1],"r+",function(err,fd){
            var stat=fs.statSync(process.argv[1]);
            var buffer = Buffer.alloc(stat.size);
            fs.read(fd,buffer,0,stat.size,0,function(err,by,buf){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(buffer.toString());
                    fs.closeSync(fd);
                }
            });

        });

    }
}).listen(8081);

console.log("8081");

