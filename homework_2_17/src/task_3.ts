// Задание 3
// Объявление и типизация массивов объектов
// Создайте массив объектов `orders`, где каждый объект описывает заказ и содержит следующие свойства:  
// `orderId` (строка)  
// `amount` (число)  
// `status` (строка, может принимать значения "pending", "shipped" или "delivered")
// Напишите функцию `filterOrdersByStatus`, которая принимает этот массив и строку `status`, 
// и возвращает массив заказов, соответствующих указанному статусу.

interface Order {
    orderId: string;
    amount: number;
    status: 'pending' | 'shipped' | 'delivered';
}

const orders: Order[] = [
    { orderId: 'Order1', amount: 20, status: 'shipped' },
    { orderId: 'Order2', amount: 7, status: 'pending' },
    { orderId: 'Order3', amount: 33, status: 'delivered' },
    { orderId: 'Order4', amount: 15, status: 'shipped' },
    { orderId: 'Order5', amount: 2, status: 'delivered' },
    { orderId: 'Order6', amount: 11, status: 'pending' },
]

function filterOrdersByStatus(
    orders: Order[],
    status: "pending" | "shipped" | "delivered"
): Order[] {
    return orders.filter(order => order.status === status);  // здесь используем метод filter, a не forEach (forEach не возвращает новый массив, он просто перебирает элементы)
}

console.log(filterOrdersByStatus(orders, "shipped"));
console.log(filterOrdersByStatus(orders, "pending"));
console.log(filterOrdersByStatus(orders, "delivered"));
