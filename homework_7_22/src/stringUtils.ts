// Задание 1
// Модули для работы со строками
// Создайте файл `stringUtils.ts`, в котором определите функции:
// `capitalize`, которая делает первую букву строки заглавной.
// `reverseString`, которая переворачивает строку задом наперед.
// В файле `main.ts` импортируйте эти функции и протестируйте их на примерах строк.

  export function capitalize(str: string): string {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : ""; // оператор ?: вместо отдельного if.
    // str[0] такая запись невозможна из-за строгого режима TYPESCRIPT, поэтому использую charAt(0) всегда возвращает строку (пусть даже пустую), поэтому ошибки не будет.
  }

  export function reverseString(str: string): string {
    return str.split("").reverse().join("");
  }




