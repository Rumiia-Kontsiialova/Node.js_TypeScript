// Задание 1
// Функция приветствия
// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) 
// и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.
function greetUser(name) {
    console.log("\u041F\u0440\u0438\u0432\u0435\u0442, ".concat(name));
}
// const userName: string = "Rumiia"; // const не обязательна, с ней вызов функции будет: greetUser(userName);
greetUser('Rumiia');
;
function printPersonInfo(person) {
    console.log("Name: ".concat(person.name));
    console.log("Age: ".concat(person.age));
    console.log("City: ".concat(person.city));
}
var newPerson = {
    name: 'Rumiia',
    age: 31,
    city: 'Magdeburg',
};
printPersonInfo(newPerson);
// Задание 3
// Простая типизация для числового параметра
// Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. 
// Используйте строгую типизацию.
function squareNumber(numb) {
    return numb * numb;
}
console.log(squareNumber(7));
//Задание 4
// Типизация функции с boolean
// Напишите функцию `isEven`, которая принимает число и возвращает `true`, 
// если число четное, и `false`, если нечетное. Используйте строгую типизацию.
function isEven(num) {
    return num % 2 === 0;
}
console.log(isEven(12));
console.log(isEven(21));
function printStudentInfo(student) {
    console.log("Student: ".concat(student.name));
    console.log("Grade: ".concat(student.grade));
}
var student = {
    name: 'John',
    grade: 1,
};
printStudentInfo(student);
// Задание 6
// Функция с типом `void`
// Напишите функцию `logMessage`, которая принимает строку 
// и выводит её в консоль без возвращаемого значения. Используйте тип `void`.
function logMessage(msg) {
    console.log(msg);
}
logMessage('Hello');
