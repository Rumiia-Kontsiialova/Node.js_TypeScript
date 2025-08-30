// Задание 1
// Объединение и пересечение типов
// Создайте два типа: `Admin` и `User`.
// Тип `Admin` должен включать поля `name` (строка) и `permissions` (массив строк), 
// а тип `User` должен включать поля `name` (строка) и `email` (строка).
// Создайте тип `AdminUser`, который объединяет свойства обоих типов, и создайте объект этого типа.

type Admin = {
    name: string;
    permissions: string[];
}

type User = {
    name: string;
    email: string;
}

type AdminUser = Admin & User;

const admin: AdminUser = {
    name: 'John',
    permissions: ['create', 'read', 'write', 'delete'],
    email: 'John@gmail.com'
}

console.log(admin)

