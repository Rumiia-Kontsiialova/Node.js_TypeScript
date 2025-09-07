// Задание 2
// Абстрактный класс Shape с цветом
// Создайте абстрактный класс `ColoredShape`, который наследует `Shape` (из задания 4 на уроке) 
// и добавляет абстрактное поле `color`.
// Реализуйте классы `ColoredCircle` и `ColoredRectangle`, которые наследуют `ColoredShape`, 
// задают `color` и реализуют метод `calculateArea()`.
// Выведите площадь и цвет для каждого объекта.


abstract class Shape {
    abstract name: string;
    abstract calculateArea(): number;
}

// Абстрактный класс с цветом
abstract class ColoredShape extends Shape {
    abstract color: string;
}

// Класс ColoredCircle наследует ColoredShape
class ColoredCircle extends ColoredShape {
    name = 'ColoredCircle';
    
    constructor(public radius: number, public color: string) {
        super();
    }
    
    calculateArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Класс ColoredRectangle наследует ColoredShape
class ColoredRectangle extends ColoredShape {
    name = 'ColoredRectangle';
    
    constructor(public width: number, public height: number, public color: string) {
        super();
    }
    
    calculateArea(): number {
        return this.width * this.height;
    }
}

const coloredCircle = new ColoredCircle(5, 'white');
const coloredRectangle = new ColoredRectangle(15, 24, 'black');

console.log(`${coloredCircle.name} - color: ${coloredCircle.color}, area: ${coloredCircle.calculateArea()}`);
console.log(`${coloredRectangle.name} - color: ${coloredRectangle.color}, area: ${coloredRectangle.calculateArea()}`);