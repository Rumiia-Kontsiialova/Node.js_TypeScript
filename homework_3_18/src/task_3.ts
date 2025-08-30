// 3адание 3
// Интерфейс для функции с объектом
// Создайте интерфейс для функции `calculateDiscount`, которая принимает объект `Product` 
// с полями `name` (строка) и `price` (число), а также параметр `discount` (число).
// Функция должна возвращать новую цену продукта с учетом скидки.

interface Product {
    name: string;
    price: number;
    discount: number;
}

function calculateDiscount(product : Product) : void {
    const discountPrice = product.price - (product.price * product.discount) / 100;
    console.log(`
        Name: ${product.name}.
        Price: ${product.price}.
        Discount: ${product.discount}.
        Price with Discount ${discountPrice}.
        `)
}

const exampleProduct : Product = {
    name: 'Laptop',
    price: 850,
    discount: 20,
}

calculateDiscount(exampleProduct)