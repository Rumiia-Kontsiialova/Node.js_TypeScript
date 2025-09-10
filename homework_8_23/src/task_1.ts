// Задание 1
// Обработка цепочки промисов с `async/await`
// Создайте несколько функций, которые возвращают промисы с разным временем выполнения.
// Напишите функцию, которая вызывает эти промисы поочерёдно, используя `await`, 
// и обрабатывает результаты каждой операции.
// Убедитесь, что цепочка промисов выполняется последовательно.

// формула для рандомного создания тайминга
function getRandomDelay(): number {
  return Math.floor(Math.random() * 2000) + 1000; 
}

// 1
function prom1(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => 
        resolve('Prom 1 completed'), getRandomDelay());
    });
}

// 2
function prom2(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => 
        resolve('Prom 2 completed'), getRandomDelay());
    });
}

// 3
function prom3(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => 
        resolve('Prom 3 completed'), getRandomDelay());
    });
}

// вызываем по очередно
async function callAllFunctions() {
    try {
        const result1 = await prom1();
        console.log(result1);

        const result2 = await prom2();
        console.log(result2);

        const result3 = await prom3();
        console.log(result3);
        
    } catch (error) {
        console.error('Error for call promise: ', error)
    }
}

callAllFunctions()
