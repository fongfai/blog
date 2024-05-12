console.time('start');

setTimeout(function() {
  console.log('setTimeout');
}, 10);

setImmediate(function() {
  console.log('setImmediate');
});

new Promise(function(resolve) {
  console.log('Promise');
  resolve();
  console.log('Promise-resolve');
}).then(function() {
  console.log('Promise-then');
  console.timeEnd('start')
});

console.log(6);

process.nextTick(function() {
  console.log('nextTick');
});

console.log(8);

