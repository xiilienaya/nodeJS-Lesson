var timer=setInterval(function(){
    console.log("I will loop forever!")
},500)

setTimeout(function(){
    console.log("Game over");
    clearInterval(timer);
},5000)