// Использование кортежей
// 1.Создайте кортеж `personInfo`, который содержит имя (строка) и возраст (число).
// 2.Затем напишите функцию `printPersonInfo`, которая принимает этот кортеж как параметр 
// и выводит его элементы в консоль.

const personInfo : [string, number] = ['John', 20];

function printPersonInfo(person: [string, number]) : void {
    const [name, age] = person;  // дестроктуризация
    console.log(`Name: ${name}, Age: ${age}`);
    // сonsole.log("Name: " + person[0] + ", Age: " + person[1]); без деструктуризации
}

printPersonInfo(personInfo);