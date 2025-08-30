// Задача 4
// Работа с кортежами и объектами
// Создайте кортеж `productInfo`, который содержит:  
// название товара (строка)  
// его цену (число)  
// количество на складе (число)
// Напишите функцию `updateStock`, которая принимает объект `inventory` (где ключ — это название товара, 
// а значение — количество на складе) и кортеж `productInfo`, 
// обновляет количество товара в объекте `inventory` и возвращает обновленный объект.

const productInfo : [string, number, number] = ['Laptop', 500, 2];

function updateStock(
    inventory: { [key: string]: number },
    product: [string, number, number]
): { [key: string]: number } {
    inventory[product[0]] = product[2]; 
    return inventory;
}
let inventory = {
    Phone: 10,
    Tablet: 5
};

console.log(updateStock(inventory, productInfo));
// { Phone: 10, Tablet: 5, Laptop: 2 }