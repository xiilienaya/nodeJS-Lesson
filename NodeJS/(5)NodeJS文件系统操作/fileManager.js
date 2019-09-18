const path = require("path");
const fs = require("fs");

console.log("请输入要创建的文件夹：");

process.stdin.on("data",function(data){
    var cmd = (data.toString());
    var cmdArr = cmd.split(" ");
    console.log(cmdArr);
    switch(cmdArr[0]){
        case "mkdir":
            fs.mkdirSync(cmdArr[1].slice(0,-2));
            break;
        case "touch":
            var fp = path.join(__dirname,"/filedir/file.txt");
            fs.writeFileSync(fp,"hello node");
            break;
        case "delete":
            var fp2 = path.join(__dirname,"/filedir/file.txt");
            fs.unlinkSync(fp2);
            break;
        default:
            console.log("something error");
            break;
    }
})