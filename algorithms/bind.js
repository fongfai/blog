Function.prototype.bind = function () {
  var args = arguments;
  // 获取到新的上下文
  var context = args[0];
  // 保存当前的函数
  var func = this;
  // 获取其他的参数
  var thisArgs = args.slice(1);// Array.prototype.slice.call(args, 1);
  return function () {
    // 将两次获取到的参数合并
    thisArgs.push(arguments);// Array.prototype.push.apply(thisArgs, arguments);
    // 使用apply改变上下文
    return func.apply(context, thisArgs);
  };
};
