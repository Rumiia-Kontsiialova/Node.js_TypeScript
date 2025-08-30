// Задание 6
// Интерфейс для функции с несколькими параметрами
// Создайте интерфейс для функции `concatStrings`, 
// которая принимает два параметра: `str1` и `str2` (оба строки) и возвращает их объединение.
// Реализуйте эту функцию и протестируйте её.

interface ConcatStrings {
    (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1, str2) => {
    return str1 + str2;
};


console.log(concatStrings("Type", "Script"));   //  склеит и выведет: TypeScript