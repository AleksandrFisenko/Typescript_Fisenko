// xd 1
function prop<T, O extends keyof T>(key: O, obj: T): T[O] {
  return obj[key];
}

console.log(prop("a", {a:232, b: "gggg"}))