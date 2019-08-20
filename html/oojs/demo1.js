var Test = /** @class */ (function () {
    function Test() {
        this.age = 20;
    }
    Test.prototype.details = function () {
        return "hello, Your age is " + this.age;
    };
    return Test;
}());
var t = new Test();
console.log(t.details());
var user;
user = [100, 'Shantanu', 'Hyderabad', 5600];
console.log(user[1]);
var id;
id = 100;
id = '200';
console.log(id);
