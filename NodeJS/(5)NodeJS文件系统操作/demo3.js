const fs = require("fs");
const path = require("path");
const http = require("http");

var fileName = process.argv[2];


http.createServer(function(req,res){
    if(fileName == undefined){
        var reader = fs.createReadStream(process.argv[1]);
        reader.pipe(res);

    }
}).listen(8081);

console.log("8081");

