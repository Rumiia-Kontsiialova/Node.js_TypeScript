// Задание 2
// Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку 
// и возвращает `boolean` (например, проверяет, является ли строка пустой). 
// Реализуйте такую функцию.

interface StringToBooleanFunction {
    (str: string): boolean
}