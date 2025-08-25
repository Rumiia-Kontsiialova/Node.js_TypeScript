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

// Задание 5
// Создание интерфейса для объекта
// Создайте интерфейс `Student`, который описывает студента с полями `name` (строка) и `grade` (число).
// Напишите функцию `printStudentInfo`, которая принимает объект типа `Student` 
// и выводит информацию о студенте в формате: `"Студент: <name>, Оценка: <grade>"`.

interface Student {
    name: string;
    grade: number;
}

function printStudentInfo(student: Student) : void {
    console.log(`Student: ${student.name}`);
    console.log(`Grade: ${student.grade}`);
}

const student : Student = {
    name: 'John',
    grade: 1,
}

printStudentInfo(student);


// Задание 6
// Функция с типом `void`
// Напишите функцию `logMessage`, которая принимает строку 
// и выводит её в консоль без возвращаемого значения. Используйте тип `void`.

function logMessage(msg : string) : void {
    console.log(msg)
}

logMessage('Hello');

