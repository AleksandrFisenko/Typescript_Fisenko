/*
Напиши интерфейс для объекта  user, 
в котором будет id, 
name - строка, 
age (опциональное),  
friends - массив юзеров 
и метод getName - который консолит имя пользователя
*/
interface User {
  readonly id: number;
  name: string;
  age?: number;
  friends?: User[];
  getName(): string;
}

const u: User = {
  id: 444,
  name: 'Bob',
  getName() {
    return this.name;
  },
}

console.log(u)
console.log(u.getName())