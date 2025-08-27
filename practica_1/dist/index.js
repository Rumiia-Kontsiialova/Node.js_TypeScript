// Задача 1
// 1.Установить TypeScript, создать новый проект и настроить `tsconfig.json`
// 2.Установите TypeScript глобально с помощью `npm install -g typescript`.
// 3.Создайте новый проект инициализацией `npm` с командой `npm init -y`.
// 4.Установите `typescript` и `ts-node` как зависимости разработки.
// 5.Настройте `tsconfig.json` с минимально необходимыми параметрами для компиляции.
// Написание функции с обработкой данных
// Напишите функцию `division`, которая принимает два числа в качестве параметров и возвращает их частное. 
// Используйте строгую типизацию.
function showCarInfo(car) {
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Year: ${car.year}`);
    console.log(`Electric: ${car.isElectric ? 'Yes' : 'No'}`);
}
const newCar = {
    make: 'BMW',
    model: 'X5',
    year: 2020,
    isElectric: false,
};
showCarInfo(newCar);
export {};
//# sourceMappingURL=index.js.map