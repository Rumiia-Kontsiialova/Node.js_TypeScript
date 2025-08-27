// Задание 1
// Типизация функции с несколькими параметрами
// Напишите функцию `calculateTotal`, которая принимает три параметра:  
// `price` (число)  
// `quantity` (число)  
// `discount` (число, по умолчанию равен 0)

function calculateTotal(price: number, quantity: number, discount: number = 0) : number {
    const total = price * quantity;
    const totalWithDiscount = total - (total * discount) / 100;
    return totalWithDiscount;
}

console.log(calculateTotal(100, 5));  // здесь передается два параметра с учетом того, что discount по умолчанию равен 0
console.log(calculateTotal(100, 5, 20)); // третий параметр будет discount -20%
