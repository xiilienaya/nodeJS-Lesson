const fs = require("fs");
const path = require("path");

var from = path.join(__dirname,"/from.txt");
var to = path.join(__dirname,"/to.txt");

var reader = fs.createReadStream(from);
var ws = fs.createWriteStream(to);

reader.pipe(ws);

reader.pipe(process.stdout);

