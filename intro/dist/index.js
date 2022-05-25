"use strict";
//Basic Types
let id = 5;
let company = "Sirvan Doukchi";
let isPublished = true;
let x = "Hello";
let age = 787;
let ids = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [1, true, "Great"];
//Tuple Types
let person = [1, "Sirvs", false];
//Tuple Array
let employee;
employee = [
    [1, "Brad"],
    [2, "Rose"],
    [3, "Matt"],
];
//Union Type
let pid = 22;
pid = 54;
pid = "fifty four";
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
