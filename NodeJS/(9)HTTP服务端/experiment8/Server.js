const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");

http.createServer(function(req,res){
    var urlObj = url.parse(req.url);
    var pathname = urlObj.pathname;

    if(pathname == '/'){
        showIndex(res);
    }
    else if(pathname == "/list"){
        showList(res);
    }else if(pathname == '/images.png'){
        showImg(res);
    }else if(pathname == '/upload' && req.method == 'POST'){
        uploadFile(req,res);
    }else if(pathname.indexOf('upload')>=0 && req.method == 'GET'){
        show(pathname,res);
    }else if(pathname == '/getlist'){
        getList(res);
    }

}).listen(8081);

function showIndex(res){
    let fp = path.join(__dirname,"index.html");
    let fc = fs.readFileSync(fp);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fc);
}
function showList(res){
    var fp = path.join(__dirname,"list.html");
    var fileContent = fs.readFileSync(fp);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fileContent);
}
function showImg(res){
    var imgPath = path.join(__dirname,"images.png");
    var imgContent = fs.readFileSync(imgPath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.write(imgContent);
    res.end();
}
function uploadFile(req,res){
    var datastr = "";
    req.setEncoding("binary");
    req.on("data",function(chunk){
        datastr += chunk;
    })
    req.on("end",function(){
        //console.log(datastr);
        var dataArr = datastr.split("\r\n");
        var fileData = dataArr.slice(4,dataArr.length-2);
        var imgData = "";
        for(var i=0;i<fileData.length;i++){
            imgData += fileData[i];
        }
        let fp = path.join(__dirname,"upload/file.png");
        fs.writeFileSync(fp,imgData,{"encoding":"binary"});
        res.end("success");
    })
}
function getList(res){
    var list = [];
    var fp = path.join(__dirname,"/upload");
    var files = fs.readdirSync(fp);
    var reg=/.(png|jpg)$/gi;
    for(var i=0;i<files.length;i++){
        if(files[i].match(reg)){
            list.push(files[i]);
        }
    }
    //console.log(list);
    var listStr = JSON.stringify(list);
    res.end(listStr);
}
function show(pathname,res){
    var imgSrc = path.join(__dirname,pathname);
    var imgContent = fs.readFileSync(imgSrc);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.end(imgContent);
}
console.log(__dirname);
console.log("8081");