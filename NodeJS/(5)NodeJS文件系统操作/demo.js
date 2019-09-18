const fs = require("fs");
const path = require("path");
const http = require("http");

var fileName = process.argv[2];

//readFile是一个异步方法
//回调函数在文件读取完成之后才执行
http.createServer(function(req,res){
    if(fileName == undefined){
        fs.readFile(process.argv[1],function (err,data) {
            if(err){
                console.log(err);
            }            
            else{
                var str=data.toString();
                res.end(str);
            }

        })
    }
    else{
        var fp = path.join(__dirname,fileName);
        if(fs.existsSync(fp)){
            fs.readFile(fp,function (err,data) {    
                if(err){
                    console.log(err);
                }            
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            res.end("文件不存在！");
        }
    }
}).listen(8081);

console.log("8081");

