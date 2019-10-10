const cp = require("child_process");

cp.exec("notepad",function(err,stdout,stderr){
    console.log(err);
    console.log(stdout);
    console.log(stderr);

})
//exec(命令，回调函数) 除了可以启动node的进程
//还可以执行shell命令，启动内容