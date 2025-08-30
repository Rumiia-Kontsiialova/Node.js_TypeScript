// Задание 5
// Наследование интерфейсов и работа с объектами
// Создайте интерфейс `Person` с полями `firstName` (строка) и `lastName` (строка).
// Создайте интерфейс `Student`, который наследует `Person` и добавляет поле `grade` (число).
// Создайте объект `student` этого типа и напишите функцию, которая выводит полное имя студента 
// и его оценку.

interface Person {
    firstName: string;
    lastName: string;
}

interface Student extends Person {
    grade: number;
}

const studentInfo : Student = {
    firstName: 'John',
    lastName: 'Johnson',
    grade: 1,
} 

function printStudentInfo(studentInfo : Student): void {
    for(const key in studentInfo) {
       console.log(`${key}: ${studentInfo[key as keyof Student]}`);
    }
}

printStudentInfo(studentInfo)
