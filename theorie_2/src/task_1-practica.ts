// Создание типизированного объекта
// 1.Создайте объект `car`, который будет описывать машину.
// 2.Объект должен содержать следующие свойства:
// ○ `brand` (строка)
// ○ `model` (строка)
// ○ `year` (число)
// ○ `isElectric` (булево значение)
// 3.Затем напишите функцию `describeCar`, которая принимает этот объект в качестве параметра 
// и возвращает строку с описанием машины в следующем формате: "Brand Model (Year), Electric: Yes/No".

interface Car {
    brand: string;
    model: string;
    year: number;
    isElectric: boolean;
}

const car: Car = {
    brand: 'BMW',
    model: 'x5',
    year: 2020,
    isElectric: false,
};

const car1: Car = {
    brand: 'Tesla',
    model: 'X',
    year: 2023,
    isElectric: true,
};

function printCar(car: Car) : void {
    const text = car.isElectric ? 'Yes' : 'No';
    console.log(`${car.brand} ${car.model} (${car.year}), Electric: ${text}`);
}

printCar(car);
printCar(car1);