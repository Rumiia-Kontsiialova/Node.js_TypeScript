// Задание 2
// Вложенные объекты и опциональные поля
// Создайте объект `Car` с полями `make` (строка), `model` (строка), 
// и вложенным объектом `engine`, который имеет поля `type` (строка) и `horsepower` (число).
// Добавьте опциональное поле `year` (число) для года выпуска машины.
// Напишите функцию, которая выводит информацию о машине.

type Engine = {
    type: string;
    horsepower: number;
};

type Car = {
    make: string;
    model: string;
    year?: number;  // опциональное поле
    engine: Engine; // вложенный объект
};

const carInfo: Car = {
    make: "BMW",
    model: "X6",
    year: 2024,
    engine: {
        type: "petrol",
        horsepower: 300,
    },
};

function printCarInfo(car: Car): void {
    console.log(`
        Make: ${car.make}. 
        Model: ${car.model}. 
        Year: ${car.year}. 
        Engine type: ${car.engine.type}. 
        Horsepower: ${car.engine.horsepower} 
        `);
}

printCarInfo(carInfo);
