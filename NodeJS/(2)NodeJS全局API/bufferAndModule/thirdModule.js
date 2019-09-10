//npm包管理器：会有大量第三方上传的模块
//他是一个远端的模块服务器

/**
 * npm install 模块
 * 回车，就回去npm服务器上寻找该模块，如果存在该模块
 * 就会下载到当前目录的node_modules文件夹中
 * (1)需要网络， （2）需要模块存在
 * 
 */
const now = require("date-now");
console.log(Date.now());
console.log(now());
console.log(now);