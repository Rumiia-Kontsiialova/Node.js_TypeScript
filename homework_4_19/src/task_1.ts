// Задание 1
// Напишите стрелочную функцию `sumEvenNumbers`, которая принимает массив чисел и возвращает сумму всех четных чисел.

const sumEvenNumbers = (numbers: number[]): number  => {
    return numbers
        .filter(num => num % 2 === 0) // метод filter проверяет чтоб при делении на два остаток ноль
        .reduce((sum, num) => sum + num, 0); // reduce используется для суммирования в массиве
}

console.log(sumEvenNumbers([10, 5, 10, 7, 10, 3, 10]))