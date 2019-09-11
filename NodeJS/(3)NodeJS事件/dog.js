const events=require("events");
const eventEmitter=events.EventEmitter;


function dog(name,energy){
    eventEmitter.call(this);
    this.name=name;
    this.energy=energy;
    var This=this;
    var timer=setInterval(function(){
        This.emit("bark");
        if(This.energy >0){
            This.energy=This.energy-1;
        }
        else{
            clearInterval(timer);
        }
    },1000)
    
}
dog.prototype.__proto__ = eventEmitter.prototype;
var Dog=new dog("Taidi",5);
Dog.on("bark",function(){
    console.log(this.name+"  bark!!"+"  "+this.energy);
})

