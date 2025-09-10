// Задание 3
// Обработка ошибки в параллельных промисах
// Напишите функцию, которая вызывает три промиса параллельно с помощью `Promise.all`.
// Один из промисов должен намеренно завершиться с ошибкой через `reject`. 
// Обработайте эту ошибку с использованием `try/catch` и выведите соответствующее сообщение.

async function threePromises(): Promise<void> {
    
    const promise1 = new Promise<string>((resolve) =>
        setTimeout(() => resolve('Promise is success'), 1000)
    );
// здесь намеренно вызван reject
    const promise2 = new Promise<string>((_, reject) =>
        setTimeout(() => reject(new Error('Promise is failed')), 1500)
    );

    const promise3 = new Promise<string>((resolve) =>
        setTimeout(() => resolve('Promise is success'), 2000)
    );

    try {
        const results = await Promise.all([promise1, promise2, promise3]);
        console.log('Results: ', results);
    } catch (error) {
        if (error instanceof Error) {
            console.error('Error executing promises: ', error.message);
        } else {
            console.error('Unknown error: ', error);
        }
    }
}

threePromises();
