// Задание 3
// Создайте тип `CompareStrings` для функции, принимающей две строки 
// и возвращающей `boolean` (например, для проверки равенства строк). 
// Напишите функцию, соответствующую этому типу.

type CompareStrings = (str1: string, str2: string) => boolean;

const areStringEqual: CompareStrings = (str1, str2) => {
    return str1 === str2;
}

console.log(areStringEqual('hello', 'hello')); // чувствителен к регистру, т.е. если будет во второй строке Hello с большой буквы покажет false

