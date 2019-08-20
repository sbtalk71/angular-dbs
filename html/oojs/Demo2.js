"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(id, name, city, salary) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.salary = salary;
    }
    Person.prototype.details = function () {
        return this.id + ' ' + this.name + ' ' + this.city + ' ' + this.salary;
    };
    return Person;
}());
var p = new Person(100, 'Shantanu', 'Hyderabad', 34000);
console.log(p.details());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(id, name, city, salary, age) {
        var _this = _super.call(this, id, name, city, salary) || this;
        _this.id = id;
        _this.name = name;
        _this.city = city;
        _this.salary = salary;
        _this.age = age;
        return _this;
    }
    Emp.prototype.details = function () {
        return _super.prototype.details.call(this) + ' ' + this.age;
    };
    return Emp;
}(Person));
exports.Emp = Emp;
var e = new Emp(201, 'John', 'Bangalore', 56000, 56);
console.log(e.details());
