// Задание 1
// Класс `Animal` и его наследник `Dog`
// Создайте класс `Animal`, который содержит свойства `name` (имя животного) и `species` (вид животного).
// Добавьте метод `sound()`, который выводит в консоль `"The animal makes a sound"`.
// Затем создайте класс-наследник `Dog`, который добавляет новое свойство `breed` (порода собаки).
// и переопределяет метод `sound()`, чтобы он выводил `"The dog barks"`.

// Базовый класс Animal
class Animal {
  constructor(public name: string, public species: string) {
    this.name = name;
    this.species = species;
  }

//   Добавьте метод `sound()`, который выводит в консоль `"The animal makes a sound"`
  sound() {
    console.log("The animal makes a sound");
  }
}

// Класс-наследник Dog
class Dog extends Animal {
  constructor( public name: string, public species: string, public breed: string) {
    super(name, species); // вызываем конструктор родителя
    this.breed = breed;   // переопределяет свойство
  }

  sound() {
    console.log("The dog barks");
  }
}

// Пример использования
const animal = new Animal("Generic Animal", "Unknown");
animal.sound(); // The animal makes a sound

const dog = new Dog("Badi", "Dog", "Labrador");
dog.sound(); // The dog barks
console.log(`${dog.name} is a ${dog.species} of breed ${dog.breed}`);
