// All is Object, in JS!


obj = {a: 1, b:2};
// {a: 1, b: 2}
Object.keys(obj);
// (2) ["a", "b"]0: "a"1: "b"length: 2__proto__: Array(0)

arr = [`1`,`2`];
// (2) ["1", "2"]
Object.keys(arr);
// (2) ["0", "1"]0: "0"1: "1"length: 2__proto__: Array(0)

Object.keys(obj).length;
// 2
Object.keys(arr).length;
// 2