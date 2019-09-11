const util = require("util");
const events = require("events");
const eventEmitter=events.EventEmitter;


function Radio(name,fm){
    eventEmitter.call(this);
    this.name=name;
    this.fm=fm;

}

Radio.prototype.play=function(){
    console.log(this.name+this.fm+"  open");
    setTimeout(function(){
        console.log("lalala");
    },2000)
}
Radio.prototype.stop=function(){
    console.log(this.name+this.fm+"  close");
}

//Radio.prototype.__proto__=eventEmitter.prototype;
util.inherits(Radio, eventEmitter);

var radio=new Radio("music radio","FM 106.7","open");
radio.on("hei",function(){
    radio.play();
    setTimeout(function(){
        radio.stop();
    },2500);
})
radio.emit("hei");

module.exports = {
    Radio : Radio
}

