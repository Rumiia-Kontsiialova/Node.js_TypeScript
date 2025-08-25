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
