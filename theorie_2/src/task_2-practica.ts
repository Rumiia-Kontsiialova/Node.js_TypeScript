// Типизация массива с числами
// 1.Создайте массив чисел `scores`, представляющий результаты тестов студентов.
// 2.Напишите функцию `averageScore`, которая принимает этот массив и возвращает средний балл.

const scores : number[] = [ 90, 50, 44, 32, 12 ];

function averageScore(scores: number[]) : number {
    const sum = scores.reduce((acc, score) => acc + score, 0);
    return sum / scores.length;
}

console.log(averageScore(scores));