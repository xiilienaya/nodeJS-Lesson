var circle = {
    circumference : circumference=function(r){
        var a= 2*Math.PI*r;
        console.log("半径："+r);
        console.log("周长:"+a);
        return a;
    },
    area : area =function(r){
        var b=r*r*Math.PI;
        console.log("半径："+r);
        console.log("面积："+b);
        return b;
    }
}
 module.exports={
     circle : circle
 }