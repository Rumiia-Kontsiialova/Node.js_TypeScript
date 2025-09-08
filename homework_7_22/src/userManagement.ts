// Задание 3
// Вложенные пространства имен для управления пользователями
// Создайте файл `userManagement.ts`, в котором определите пространство имен `UserManagement`.
// Внутри него создайте вложенное пространство имен `Admin`. Внутри `Admin` создайте класс `AdminUser`, 
// который будет иметь свойства для имени, email и прав доступа (например, `isSuperAdmin`).
// Также создайте методы для изменения прав доступа.
// Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.

export namespace UserManagement {
    // вложенное пространство:
    export namespace Admin {
        // внутри класс:
        export class AdminUser {
            constructor(
                public name: string,
                public email: string,
                public isSuperAdmin: boolean = false   // по умолчанию обынчый админ
            ) {}

            // метод который делает супер админом
            promoteToSuperAdmin(): void {
            this.isSuperAdmin = true;
            console.log(`${this.name} you is a SuperAdmin!`);
            }

            // метод снимает права супер-админа
            demoteFromSuperAdmin(): void {
            this.isSuperAdmin = false;
            console.log(`${this.name} now you are NOT a SuperAdmin.`);
            }

            // метод показывает информацию о пользователе
            getInfo(): string {
            return `Имя: ${this.name}, Email: ${this.email}, Супер-админ: ${this.isSuperAdmin}`;
            }
        }

    }
}