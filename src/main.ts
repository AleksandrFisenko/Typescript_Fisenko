// xd 1
function prop<T, O extends keyof T>(key: O, obj: T): T[O] {
  return obj[key];
}

console.log(prop("a", {a:232, b: "gggg"}))


// Опишите типы для следующей функции:

interface Fun<T> {
  (value: T): T;
}

export function createMap<T>(list: T[]) {

  return function(cb: Fun<T>) {
    const result:T[] = [];
    for (let el of list) {
      result.push(cb(el))
    }
    return result;
  }
}

const mapNums = createMap([1, 2, 3])
const result = mapNums((num) => num + 2)

console.log(result)