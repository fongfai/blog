// b.js
function b () {
  console.log('b')
}

// 执行了特殊行为
Array.prototype.fun = () => {}

export default {
  b
}