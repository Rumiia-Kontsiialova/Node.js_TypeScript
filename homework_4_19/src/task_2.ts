// Задание 2
//  Определите интерфейс `StringToBooleanFunction` для функции, которая принимает строку 
// и возвращает `boolean` 
// (например, проверяет, является ли строка пустой). Реализуйте такую функцию.

interface StringToBooleanFunction {
    (input: string): boolean
}

// функция, которая проверяет, пустая ли строка
const isEmptyString: StringToBooleanFunction = (str) => {
  return str.trim() === ''; // trim() удаляет пробелы по краям, чтобы строка из пробелов не пропускалась
};
console.log(isEmptyString(""));           // true
console.log(isEmptyString("   "));        // true
console.log(isEmptyString("hello"));      // false