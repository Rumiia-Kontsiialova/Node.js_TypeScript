// Задание 3
// Переопределение конструктора в классе `Vehicle`
// Создайте класс `Vehicle`, который содержит свойства `make` (марка) и `model` (модель).
// Добавьте конструктор, который инициализирует эти свойства.
// Затем создайте класс-наследник `Motorcycle`, который добавляет новое свойство `type` (тип мотоцикла) 
// и переопределяет конструктор для инициализации всех трех свойств.
// Убедитесь, что данные правильно инициализируются при создании объекта.

// Базовый класс Vehicle
class Vehicle {
  constructor(public make: string, public model: string) {
    this.make = make;
    this.model = model;
  }
}

// Класс-наследник Motorcycle
class Motorcycle extends Vehicle {
  type: string;

  constructor(public make: string, public model: string, type: string) {
    // вызываем конструктор родителя
    super(make, model);
    this.type = type;
  }
}

// Проверка
const vehicle = new Vehicle("Toyota", "Corolla");
console.log(vehicle); 
// Vehicle { make: 'Toyota', model: 'Corolla' }

const bike = new Motorcycle("Yamaha", "R1", "Sportbike");
console.log(bike);
// Motorcycle { make: 'Yamaha', model: 'R1', type: 'Sportbike' }
