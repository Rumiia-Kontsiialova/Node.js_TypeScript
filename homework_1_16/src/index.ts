// Задание 1
// Функция приветствия
// Напишите функцию `greetUser`, которая принимает имя пользователя (строка) 
// и выводит приветственное сообщение в консоль: `"Привет, <name>!"`. Используйте строгую типизацию.

function greetUser(name: string) {
    console.log(`Привет, ${name}`)
}

// const userName: string = "Rumiia"; // const не обязательна, с ней вызов функции будет: greetUser(userName);

greetUser('Rumiia');
