// Задание 5
// Массив объектов и функции
// Создайте интерфейс `Employee`, который включает поля `name` (строка) и `salary` (число).
// Создайте массив объектов `Employee`, затем напишите функцию, которая принимает этот массив 
// и возвращает массив зарплат всех сотрудников.

interface Employee {
    name: string;
    salary: number;
}

const employees : Employee[] = [
   { name: 'John', salary: 5500 },
   { name: 'Alice', salary: 6000 },
   { name: 'Bob', salary: 4500 },
];

function getSalary(employees : Employee[]): number[] {
    return employees.map(emp => emp.salary);
}

console.log(getSalary(employees)); // возвращает только суммы зарплат в массиве: [3000, 2500, 4000]