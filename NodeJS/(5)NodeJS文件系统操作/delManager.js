const fs = require("fs");
const path = require("path");

var fileName = process.argv[2];

var fp = path.join(__dirname,"/"+fileName);

var stat = fs.statSync(fp);
if(stat.isFile()){
    fs.unlinkSync(fp);
    console.log("文件已删除！");
}
else if(stat.isDirectory()){
    // var files = fs.readdirSync(fp);
    // console.log(files);
    deleteDir();
    // fs.unlinkSync(path.join(__dirname,"/"+fileName+"/"+files[0]));
    // fs.rmdirSync(path.join(__dirname,fileName));
    console.log("目录已清除！");
}
else{
    console.log("文件不存在！")
}

function deleteDir(){
    var files = fs.readdirSync(fp);
    console.log(files);
    for(var i=0;i<files.length;i++){
        var file = path.join(fp,files[i]);
        if(fs.statSync(file).isFile()){
            fs.unlinkSync(file);
            continue;
        }
        if (fs.statSync(file).isDirectory()){
            deleteDir();
        }
    }
    fs.rmdirSync(fp);
}
