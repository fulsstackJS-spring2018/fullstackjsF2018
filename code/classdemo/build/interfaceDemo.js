"use strict";
function personLogger(person) {
    var str = "\n  *****************************\n  ID: " + person.id + "\n  Name: " + person.firstName + " " + person.lastName + "\n  Phone: " + person.landLine + "\n  *****************************\n  ";
    console.log(str);
}
var p = { id: 1, firstName: "Kurt", lastName: "Won", email: "@", landLine: "123" };
personLogger(p);
//# sourceMappingURL=c:/Users/lam/Dropbox/FAG/MEAN_Spring_2018/p1/typescript/classdemo/build/interfaceDemo.js.map