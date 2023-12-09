/* 细节
为什么需要使用fn.apply
fn.apply主要用于帮我们修改函数运行的this指向,

setTimeout为什么要使用箭头函数
不使用箭头函数的话,setTimeout内部this将指向window

setTimeout不使用箭头函数如何实现debounce

const self = this
fn.apply(self,arguments)

哪里不能使用箭头函数
return function(){} !== return ()=>{} ,这里如果return一个箭头函数,内部this指向也将指向window
 */

function debounce(fn, delay, immediate = true) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    immediate && !timer && fn.apply(this, args);
    timer = setTimeout(() => { 
      timer = null;
      !immediate && fn.apply(this, args);
    }, delay);
  };
}

/* throttle */
function throttle(fn, delay, immediate = true) {
  let timer = null;
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        !immediate && fn.apply(this, args);
      }, delay);
      immediate && fn.apply(this, args);
    }
  };
}
