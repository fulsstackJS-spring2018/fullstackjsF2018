"use strict";
var Person = /** @class */ (function () {
    function Person(name, _email) {
        this._email = _email;
        this.id = Person.nextId++;
        this._name = name;
    }
    Object.defineProperty(Person.prototype, "getName", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setName", {
        set: function (n) {
            this._name = n;
        },
        enumerable: true,
        configurable: true
    });
    Person.nextId = 100;
    return Person;
}());
var p1 = new Person("Kurt Wonnegut", "kw@s.dk");
var p2 = new Person("Kurt Wonnegut", "kw@s.dk");
var p3 = new Person("Kurt Wonnegut", "kw@s.dk");
console.log(p1.id, p1.getName);
console.log(p3.id, p3.getName);
//# sourceMappingURL=c:/Users/lam/Dropbox/FAG/MEAN_Spring_2018/p1/typescript/classdemo/build/classDemo.js.map