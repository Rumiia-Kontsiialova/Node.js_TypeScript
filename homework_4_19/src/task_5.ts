// Задание 5
// Создайте обобщенную функцию `make Triple`, которая принимает три аргумента одного типа 
// и возвращает массив из этих трёх элементов.

function makeTriple<T>(a: T, b:T, c:T): T[] {
    return [a, b, c];
}

console.log(makeTriple(3, 9, 18));
console.log(makeTriple('one', 'two', 'three'));