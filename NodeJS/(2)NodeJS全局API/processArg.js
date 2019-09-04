/*
1.传入命令行参数，是一个算术运算式
2.程序将算术运算式计算得到结果，并在控制台输出
3.程序判断一下是否传入了命令行参数，如果没有，控制输出“命令行参数错误”
*/
/*if(process.argv[2] != undefined) {
    console.log("%s=%s", process.argv[2], eval(process.argv[2]));
} 
else{
    console.log("命令行参数错误!");
}
*/
var arg=process.argv[2];
if(arg!=undefined){
    if(arg == "-h"){
       console.log("请输入算数表达式");
    }
    else{
        console.log(arg+"="+"%s",eval(arg));
    }
}
else{
    console.log("请输入算数表达式");
}
