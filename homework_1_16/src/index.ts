// Задание 1
// Функция приветствия
// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) 
// и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.

function greetUser(name: string) {
    console.log(`Привет, ${name}`)
}

// const userName: string = "Rumiia"; // const не обязательна, с ней вызов функции будет: greetUser(userName);

greetUser('Rumiia');

// Задание 2
// Типизация функции с объектом в качестве параметра
// Создайте интерфейс `Person`, который описывает человека с полями `name`, `age`, и `city`.
// Напишите функцию `printPersonInfo`, которая принимает объект типа `Person` 
// и выводит информацию о человеке в формате: `"Имя: <name>, Возраст: <age>, Город: <city>"`.

interface Person {
    name: string;
    age: number;
    city: string;
};

function printPersonInfo (person: Person) : void {
    console.log(`Name: ${person.name}`);
    console.log(`Age: ${person.age}`);
    console.log(`City: ${person.city}`);
}

const newPerson: Person = {
    name: 'Rumiia',
    age: 31,
    city: 'Magdeburg',
}

 printPersonInfo(newPerson);

// Задание 3
// Простая типизация для числового параметра
// Напишите функцию `squareNumber`, которая принимает число и возвращает его квадрат. 
// Используйте строгую типизацию.

function squareNumber(numb: number) : number {
    return numb * numb;
}

console.log(squareNumber(7));

//Задание 4
// Типизация функции с boolean
// Напишите функцию `isEven`, которая принимает число и возвращает `true`, 
// если число четное, и `false`, если нечетное. Используйте строгую типизацию.

function isEven(num: number) : boolean {
    return num % 2 === 0;
}

console.log(isEven(12));
console.log(isEven(21));

