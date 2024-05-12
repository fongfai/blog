// Function.prototype.bind = function () {
//   var args = arguments;
//   // 获取到新的上下文
//   var context = args[0];
//   // 保存当前的函数
//   var func = this;
//   // 获取其他的参数
//   var thisArgs = args.slice(1);// Array.prototype.slice.call(args, 1);
//   return function (...args) {
//     // 将两次获取到的参数合并
//     thisArgs = thisArgs.concat(args);// Array.prototype.push.apply(thisArgs, arguments);
//     // 使用apply改变上下文
//     return func.apply(context, thisArgs);
//   };
// };





Function.prototype.bind = function () {

  // 调用bind的函数
  const self = this;
  const [fn, ...args] = Array.from(arguments);
  console.log('fn', fn)
  return function (...selfArgs) {
    console.log('selfArgs', selfArgs)
    self.apply(fn, args.concat(selfArgs));
  }

}


function foo() {
  console.log(this.a)
}
var obj = { a: 1 }
var a = 2


foo.bind(obj, 'outer')('selffff')