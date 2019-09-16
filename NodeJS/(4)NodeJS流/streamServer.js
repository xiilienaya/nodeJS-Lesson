const fs = require("fs");
const path = require("path");
const http = require("http");

http.createServer(function(req,res){
    var fp = path.join(__dirname,"/data.txt");
    var rs = fs.createReadStream(fp);
    rs.pipe(res);
}).listen(8081);

console.log("server is listening 8081")