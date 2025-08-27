function greet(name: string, age: number): string{
    return `Hello, my name is ${name}. I am ${age} years old`;
}

const resultGreet = greet('Rumiia', 31);
console.log(resultGreet);

console.log(greet('Rumiia', 31));

let count: number = 10;
let username: string = 'JohnDoe';
let isLoggedIn: boolean = false;

function add(a: number, b: number): number {
    return a + b;
}

console.log(add(75436, 1));

const user = {
    name: 'Alice',
    age: '30',
}

console.log(user.name);

// Реализовать функцию нахождения площади круга, исходя из его радиуса. PI * r^2
function circleArea(radius: number): number {
    if (radius < 0) 
        throw new Error('The radius cannot be negative');
        return Math.PI * radius * radius;  //Так же можно писать radius ** 2
}

const r: number = 5;
const cirArea: number = circleArea(r);

console.log(`Area of ​​a circle with ${r} = ${cirArea.toFixed(2)}`); // toFixed осталвяет нужное количество символов после запятой

// создаем интерфейс внутри указываем ключи и их тип данных
interface User {
    name: string;
    age: number;
    email: string;
}

const userObj: User = {
    name: 'John',
    age: 39,
    email: 'John@mail.com',
}

// вариант записи без интерфейса
const userObj2: { name: string, age: number, email: string } = {
    name: 'John',
    age: 39,
    email: 'John@mail.com',
}

function printUserInfo(user: { name: string, age: number, email: string }): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}

// вариант второй
function printUserInfo2(user: User): void {
    console.log(`Name: ${user.name}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}
printUserInfo(userObj);
printUserInfo2(userObj);

function message(textMessage: string): string{
    return `Текст сообщения: ${textMessage}`
}
console.log(message('Привет, Боб'));