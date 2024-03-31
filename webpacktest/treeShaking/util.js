// utils.js
export function sum(x, y) {
  return x + y;
}

export function sub(x, y) {
  return x - y;
}


export function combine(a, b){
  return {
    ...a,
    ...b
  }
}