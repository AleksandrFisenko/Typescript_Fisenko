// есть функция - которая возвращает кортеж
// в кортеже первый элемент всегда строка, второй - аргумент функции (может быть абсолютно любого типа)

// const fu = (a) => ['hi', a]
// нужно ее типизировать

type Tuple<T> = [string, T]

type Fun = {
  <T>(a: T): Tuple<T>
}

const fu: Fun = (a) => ['hi', a]

console.log(fu(1))
console.log(fu('1'))
console.log(fu(true))
