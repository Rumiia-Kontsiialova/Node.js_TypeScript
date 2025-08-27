// Создать функцию, которая создает рандомное число
// Условия:
// Math.random() > 0.66 -> строка
// Math.random() > 0.33 -> число
// else -> throw
// + определить тип данных

function rndmNumb() : string | number {
const random: number = Math.random()
  if (random > 0.66) {
    return 'string';
  } else if (random > 0.33) {
    return 123
  } else {
    throw new Error('Error')
  }
}
const result: string | number = rndmNumb()
console.log(result)