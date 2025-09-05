// Задание 1
// Абстрактный класс Animal
// Создайте абстрактный класс `Animal` с абстрактным методом `makeSound()`.
// Затем создайте классы `Dog` и `Cat`, которые наследуют `Animal` 
// и реализуют метод `makeSound()` по-своему (`Dog` должен возвращать "Bark", а `Cat` — "Meow").
// Создайте массив типа `Animal[]`, включающий объекты `Dog` и `Cat`, 
// и вызовите метод `makeSound()` для каждого элемента массива.

// Абстрактный класс Animal
abstract class Animal { 
  constructor(public name: string) {
    this.name = name;
  }

  // абстрактный метод — без реализации
  abstract makeSound(): string;
}

// Класс Dog
class Dog extends Animal {
  makeSound(): string {
    return "Bark";
  }
}

// Класс Cat
class Cat extends Animal {
  makeSound(): string {
    return "Meow";
  }
}

// массив животных(пример)
const animals: Animal[] = [
  new Dog("Rex"),
  new Cat("Musya"),
  new Dog("Badi"),
  new Cat("Lunna"),
];

// makeSound() для каждого
for (const animal of animals) {
  console.log(`${animal.name}: ${animal.makeSound()}`);
}


