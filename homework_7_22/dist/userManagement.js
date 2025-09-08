// Задание 3
// Вложенные пространства имен для управления пользователями
// Создайте файл `userManagement.ts`, в котором определите пространство имен `UserManagement`.
// Внутри него создайте вложенное пространство имен `Admin`. Внутри `Admin` создайте класс `AdminUser`, 
// который будет иметь свойства для имени, email и прав доступа (например, `isSuperAdmin`).
// Также создайте методы для изменения прав доступа.
// Используйте этот класс в файле `main.ts` для создания администратора и изменения его прав.
export var UserManagement;
(function (UserManagement) {
    // вложенное пространство:
    let Admin;
    (function (Admin) {
        // внутри класс:
        class AdminUser {
            name;
            email;
            isSuperAdmin;
            constructor(name, email, isSuperAdmin = false // по умолчанию обынчый админ
            ) {
                this.name = name;
                this.email = email;
                this.isSuperAdmin = isSuperAdmin;
            }
            // метод который делает супер админом
            promoteToSuperAdmin() {
                this.isSuperAdmin = true;
                console.log(`${this.name} you is a SuperAdmin!`);
            }
            // метод снимает права супер-админа
            demoteFromSuperAdmin() {
                this.isSuperAdmin = false;
                console.log(`${this.name} now you are NOT a SuperAdmin.`);
            }
            // метод показывает информацию о пользователе
            getInfo() {
                return `Имя: ${this.name}, Email: ${this.email}, Супер-админ: ${this.isSuperAdmin}`;
            }
        }
        Admin.AdminUser = AdminUser;
    })(Admin = UserManagement.Admin || (UserManagement.Admin = {}));
})(UserManagement || (UserManagement = {}));
//# sourceMappingURL=userManagement.js.map