// 1.Создайте массив объектов `products`, где каждый объект описывает товар 
// и содержит следующие свойства: `name` (строка), `price` (число), и `inStock` (булево значение).
// 1.Напишите функцию `listAvailableProducts`, которая принимает этот массив и выводит названия товаров, 
// которые есть в наличии.

interface Product {
    name: string;
    price: number;
    inStock: boolean;
}

const products: Product[] = [
    { name: 'Laptop', price: 500, inStock: true },
    { name: 'Handy', price: 200, inStock: false },
    { name: 'Mouse', price: 100, inStock: true },
]

function listProduct(products: Product[]) : void {
    products.forEach(product => {
        if(product.inStock){
            console.log(product.name)
        }
        //  if(!product.inStock){
        //     console.log(product.name)
        // } этот вариант покажет Handy
    });
}

listProduct(products);