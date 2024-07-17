interface I1 {
  <T>(a: T): string;
}

const fn: I1 = <T>(a: T): string => {
  return ("Hi, " + a + "!");
}

console.log(fn('Bob'))


interface I2 {
  [index: number]: string;
}

const arr1: I2 = ['regre', 'ergge']
console.log(arr1)

interface I3 {
  [key: string]: boolean;
}
const dict: I3 = {
  "Bob": true,
  "Elena": false,
  "SerGay": true,
}
console.log(dict)

type RoflArr = [boolean, ...string[], boolean]
const roflArr: RoflArr = [true, 'eghre', 'ergreg', false]
console.log(roflArr)

type RoflFn = {
  <T>(a: T): T
}

interface HouseInterface<T> {
  id: number;
  name: string;
  price: number;
  username?: string;
  value?: T;
}

class House<T> implements HouseInterface<T> {
  id: number;
  name: string;
  price: number;
  username?: string;
  value: T;
  constructor(
    id: number, 
    name: string, 
    price: number, 
    value: T,
    username?: string, 
  ){
    this.id = id;
    this.name = name;
    this.price = price;
    this.value = value;
    this.username = username;
  }
}

console.log(new House(1, 'house1', 555, 55542215))
console.log(new House(1, 'house1', 555, true, 'Sergay'))


//Затипизируйте данную функцию:

function append<T>(el: T, list: T[]): T[] {
  return list.concat(el)
}

console.log(append("111", ['ergreg', 'ger433443']))