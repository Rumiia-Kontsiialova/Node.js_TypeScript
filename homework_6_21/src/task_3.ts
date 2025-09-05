// Задание 3
// Абстрактный класс Appliance
// Создайте абстрактный класс `Appliance` с абстрактными методами `turnOn()` и `turnOff()`.
// Затем создайте классы `WashingMachine` и `Refrigerator`, которые наследуют `Appliance` 
// и реализуют методы `turnOn()` и `turnOff()`, выводя соответствующие сообщения.
// Создайте массив типа `Appliance[]`, добавьте в него объекты `WashingMachine` и `Refrigerator`, 
// и вызовите методы `turnOn()` и `turnOff()` для каждого элемента.


// Абстрактный класс Appliance
abstract class Appliance {
  constructor(public name: string) {
    this.name = name;
  }

  abstract turnOn(): string;  // on
  abstract turnOff(): string; // off
}

// Класс WashingMachine
class WashingMachine extends Appliance {
  turnOn(): string {
    return `${this.name} ON`;
  }

  turnOff(): string {
    return `${this.name} OFF`;
  }
}

// Класс Refrigerator
class Refrigerator extends Appliance {
  turnOn(): string {
    return `${this.name} ON`;
  }

  turnOff(): string {
    return `${this.name} OFF`;
  }
}

// Массив устройств
const appliances: Appliance[] = [
  new WashingMachine("LG Washing Machine"),
  new Refrigerator("Samsung Refrigerator")
];

// Выводим в одну строку для каждого
for (const appliance of appliances) {
  console.log(`${appliance.turnOn()} → ${appliance.turnOff()}`);
}
