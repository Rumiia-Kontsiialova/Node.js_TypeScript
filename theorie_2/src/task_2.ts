// 1.Напишите несколько функций с явно указанными типами параметров и возвращаемым типом
// ○ Создайте функцию, которая принимает два числа и возвращает их сумму. Укажите типы параметров и возвращаемого значения.
// ○ Напишите функцию, которая принимает строку и возвращает её в верхнем регистре.
// 2.Используйте Union типы для создания функции
// ○ Напишите функцию, которая принимает либо строку, либо число.
// ○ Если это строка, функция должна вернуть её длину.
// ○ Если это число, функция должна просто вернуть его.

function addNumbers(a: number, b: number) : number {
    return a + b;
}

function upperCase(str: string) : string {
    return str.toUpperCase();        // toUpperCase метод
}

function fc(value: string | number) : number {
    if(typeof value==='string') {
        return value.length;
} else {
    return value;
    }
}

console.log(addNumbers(5, 15))
console.log(upperCase('hello world'))
console.log(fc('typescript'))
console.log(fc(15))