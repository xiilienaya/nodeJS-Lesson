const http = require("http");
    
var server = http.createServer(function(req,res){
    res.write("hello shinan");
    res.end();
});

server.listen(8081);
console.log("shinandashabi");