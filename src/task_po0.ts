// 1
type x = { a: number, b: string }
type y = { a: string, c: boolean }
type z = x | y // 
const some: z = { a: 'dfs', c: true }
// type q = x & y
// const some2: q = { a: number | string, b: 'string', c: true }

//2
// type First = {
//   a: number
// }
// type Second = {
//   b: string
// } & First
// const x: Second = {
//   a: 1,
//   b: "ggg"
// }

// 3
// interface First {
//   a: number
// }
// interface First {
//   b: string
// }
// const x: First = {
//   a: 1,
//   b: "ggg"
// }

// 4
interface User {
  readonly id: number,
  name: string,
  age: number,
  hasFriends: boolean,
  friends?: Array<User>
}
interface Foo {
  (): void
}


// 5
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

let value: unknown = "Hello, World!";

if (isString(value)) {
  console.log(value.toUpperCase()); // "HELLO, WORLD!"
}

