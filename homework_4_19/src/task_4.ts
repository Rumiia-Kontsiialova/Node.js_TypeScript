// Задание 4
// Напишите обобщенную функцию `getLastElement`, которая принимает массив любого типа 
// и возвращает последний элемент этого массива.

function getLastElement<T>(arr: T[]): T {
    return arr[arr.length-1];
}

console.log(getLastElement([56, 78, 434, 97, 101]));
console.log(getLastElement(['one', 'two', 'three']));

