var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () { console.log('Heyo!'); };
    return Greeting;
}());
var newGreet = new Greeting;
newGreet.greet();
var str1 = 7;
var str2 = str1;
console.log(typeof str2, str2);
