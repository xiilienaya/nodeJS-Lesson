function cicleFun(r) {
    function circumference() {
        var a= 2 * Math.PI * r;
        return a;
    }
    function area() {
        var b = Math.PI * r * r;
        return b;
    }
    var circle= {circumference: circumference, area: area}
    console.log(circle);
    return circle;

}

module.exports = {
    cicleFun: cicleFun
}