
let s: symbol = Symbol('t')
let s2: symbol = Symbol('t')

type A = {
  a: 1
}

interface Shape {
 x: number;
  y: number;
}

// 继承扩展
interface Rect extends A {
  width: number;
  height: number;
}
let c: Rect =  {
  width: 1,
  height:1,
  a: 1
}

let d = undefined!;

export {}

