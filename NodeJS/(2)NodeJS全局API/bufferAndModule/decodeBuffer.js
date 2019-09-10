var base64Str = "emhhbmdzYW46MTIzNDU2";
var buf1=Buffer.from(base64Str,"base64");
var str=buf1.toString("utf8");
console.log(str);