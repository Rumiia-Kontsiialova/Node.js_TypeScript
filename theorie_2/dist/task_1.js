"use strict";
let myString = 'My string';
let myNumber = 5.56;
let isAnswer = true;
// myNumber = 'dfgdfg';
let myNull = null;
// let myUndefined: undefined = undefined;
// let myUndefined: undefined;
let myUndefined;
console.log(myUndefined);
// myNull = 'hello';
myUndefined = 'hello';
let myString_2 = 'My string 2';
let myString_3 = 'My string 3';
// myString_3 = 5;
let myNull_2 = null;
myNull_2 = 34;
let myAny = true;
myAny = 7;
function describeString(value) {
    return `Это строка со значением: ${value}`;
}
function describeNumber(value) {
    return `Это число со значением: ${value}`;
}
function describeBoolean(value) {
    return `Это логическое значение: ${value}`;
}
function describeNull(value) {
    return `Это тип null со значением: ${value}`;
}
function describeUndefined(value) {
    return `Это тип undefined со значением: ${value}`;
}
function describeAny(value) {
    return `Это тип any со значением: ${value}`;
}
console.log(describeString('Hello, world'));
console.log(describeNumber(7));
console.log(describeBoolean(true));
console.log(describeNull(null));
console.log(describeUndefined(undefined));
console.log(describeAny('Это строка'));
console.log(describeAny(98725));
//# sourceMappingURL=task_1.js.map