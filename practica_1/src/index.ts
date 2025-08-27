// Задача 1
// 1.Установить TypeScript, создать новый проект и настроить `tsconfig.json`
// 2.Установите TypeScript глобально с помощью `npm install -g typescript`.
// 3.Создайте новый проект инициализацией `npm` с командой `npm init -y`.
// 4.Установите `typescript` и `ts-node` как зависимости разработки.
// 5.Настройте `tsconfig.json` с минимально необходимыми параметрами для компиляции.
// Написание функции с обработкой данных
// Напишите функцию `division`, которая принимает два числа в качестве параметров и возвращает их частное. 
// Используйте строгую типизацию.

// function division(a: number, b: number): number | string {
//     if (b === 0) {
//         throw new Error ('Деление на ноль невозможно');
//     }
// const result = a/b
//     if (!isFinite(result)) {
//         return ('Не может быть бесконечным');  // проверяет является ли результат конечным числом. 10 / 0 = Infinity (это «бесконечность» в JavaScript).
// }
// if (isNaN(a) || isNaN(b)) {  // isNan - not a number
//     return ('Число не может ранвться 0');
// }
// return result.toFixed(2);
// } 

// console.log(division(20, 0));


// Задача 2
// Интерфейсы для типизации сложных объектов
// 1.Создайте интерфейс `Car`, который описывает автомобиль с полями `make`, `model`, `year`, и `isElectric`.
// 2.Напишите функцию, которая принимает объект типа `Car` и выводит информацию об автомобиле.

interface Car {
    make: string;
    model: string;
    year: number;
    isElectric: boolean;
}

function showCarInfo(car: Car): void {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Electric: ${car.isElectric ? 'Yes' : 'No'}`);
}

const newCar: Car = {
    make: 'BMW',
    model: 'X5',
    year: 2020,
    isElectric: false,
}; 

showCarInfo(newCar);



