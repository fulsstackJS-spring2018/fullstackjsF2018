"use strict";
var isDone = true;
isDone = false;
var count = 1;
count = 6;
var user = "Kurt Wonnegut";
var msg = "\n***************************\nHi " + user + " welcome today\n***************************\n";
console.log(msg);
var numbers = [1, 2, 3, 4, 5, 6, 7];
var numbers2 = [];
numbers2.push(2);
var numberString = 1;
numberString = "5";
function logInfo(info) {
    console.log(info);
}
console.log(logInfo(5));
//Enums
var skill = 0;
var skills;
(function (skills) {
    skills[skills["Low"] = 0] = "Low";
    skills[skills["Medium"] = 1] = "Medium";
    skills[skills["High"] = 2] = "High";
    skills[skills["Expert"] = 3] = "Expert";
})(skills || (skills = {}));
if (skill === skills.Medium) {
    //do something
}
//# sourceMappingURL=c:/Users/lam/Dropbox/FAG/MEAN_Spring_2018/p1/typescript/classdemo/build/typeDemo.js.map