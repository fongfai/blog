{

  console.time('start');

setTimeout(function () {
  console.log('setTimeout');
}, 10);

setImmediate(function () {
  console.log('setImmediate');
});

new Promise(function (resolve) {
  console.log('Promise');
  resolve();
  console.log('Promise-resolve');
}).then(function () {
  console.log('Promise-then');
  console.timeEnd('start')
});

console.log(6);

process.nextTick(function () {
  console.log('nextTick');
});

console.log(8);


}


{

  // https://juejin.cn/post/6844904119283482637#heading-7
  let bar = 0;
  function someAsyncApiCall(callback) {
    callback()
    // process.nextTick(callback);
  }
  someAsyncApiCall(() => {
    console.log('bar', bar); // 1
  });
  bar = 1;

}
