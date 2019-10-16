const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);

    if(urlObj.pathname == "/"){
        var fp = path.join(__dirname,"index.html");
        var fc = fs.readFileSync(fp);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fc);
    }else if(urlObj.pathname == "/upload"){
        var strData ="";
        req.setEncoding("binary");
        req.on("data",function(chunk){
            strData += chunk;
        })
        req.on("end",function(){
            var dataArr = strData.split("\r\n");
            var fileData = dataArr.slice(4,dataArr.length-2);
            fileData = fileData.join("\r\n");
            var buf = Buffer.from(fileData,"binary");
            var fp = path.join(__dirname,"/upload/file.png")
            fs.writeFileSync(fp,buf,{"encoding":"binary"});
            res.end("success");
        })
    }else if(urlObj.pathname == "/getlist"){
        getList(res);
        //console.log(list);
    }
    else if(urlObj.pathname == '/list'){
        var fp = path.join(__dirname,"list.html");
        var fileContent = fs.readFileSync(fp);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.end(fileContent);
    }else if(urlObj.pathname == '/upload/1.png'){
        showImg(res);
    }

    
}).listen(8081);

var list=[];
function getList(res){
    var fp = path.join(__dirname,"/upload");
    var files = fs.readdirSync(fp);
    var reg=/.(png|jpg)$/gi;
    for(var i=0;i<files.length;i++){
        if(files[i].match(reg)){
            list.push(files[i]);
        }
    }
    console.log(list);
    var listStr = JSON.stringify(list);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(listStr);
    res.end();
}

function showImg(res){   
    var imgPath = path.join(__dirname,"/upload/1.png");
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.write(imgContent);
    res.end();
}



console.log("server is listen 8081");