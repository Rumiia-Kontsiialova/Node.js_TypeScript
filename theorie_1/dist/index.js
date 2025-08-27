"use strict";
function greet(name, age) {
    return `Hello, my name is ${name}. I am ${age} years old`;
}
const resultGreet = greet('Rumiia', 31);
console.log(resultGreet);
console.log(greet('Rumiia', 31));
let count = 10;
let username = 'JohnDoe';
let isLoggedIn = false;
function add(a, b) {
    return a + b;
}
console.log(add(75436, 1));
const user = {
    name: 'Alice',
    age: '30',
};
console.log(user.name);
// Реализовать функцию нахождения площади круга, исходя из его радиуса. PI * r^2
function circleArea(radius) {
    if (radius < 0)
        throw new Error('The radius cannot be negative');
    return Math.PI * radius * radius; //Так же можно писать radius ** 2
}
const r = 5;
const cirArea = circleArea(r);
console.log(`Area of ​​a circle with ${r} = ${cirArea.toFixed(2)}`); // toFixed осталвяет нужное количество символов после запятой
const userObj = {
    name: 'John',
    age: 39,
    email: 'John@mail.com',
};
//# sourceMappingURL=index.js.map