// 第一个参数是需要进行防抖处理的函数，第二个参数是延迟时间，默认为1秒钟
// 这里多传一个参数，immediate用来决定是否要第一次立即执行, 默认为false
function debounce(fn, delay = 1000, immediate = false, resultCb) {
  // 实现防抖函数的核心是使用setTimeout
      // time变量用于保存setTimeout返回的Id
      let time = null
      // isImmediateInvoke变量用来记录是否立即执行, 默认为false
      let isImmediateInvoke = false
      
      // 将回调接收的参数保存到args数组中
      function _debounce(...args) {
          // 如果time不为0，也就是说有定时器存在，将该定时器清除
          if (time !== null) {
              clearTimeout(time)
          }
          
          // 当是第一次触发，并且需要触发第一次事件
          if (!isImmediateInvoke && immediate) {
              // 将函数的返回值保存到result中
              const result = fn.apply(this, args)
              if (typeof resultCb === 'function') {
                  // 当用户传递了resultCb函数时，执行该函数，并将结果以参数传递出去。
                  resultCb(result)
              }
              // 将isImmediateInvoke设置为true，这样不会影响到后面频繁触发的函数调用
              isImmediateInvoke = true;
          }
          
          time = setTimeout(() => {
              // 使用apply改变fn的this，同时将参数传递给fn
              fn.apply(this, args)  
              // 当定时器里的函数执行时，也就是说是频繁触发事件的最后一次事件
              // 将isImmediateInvoke设置为false，这样下一次的第一次触发事件才能被立即执行
              isImmediateInvoke = false
          }, delay)
      }
      
      // 防抖函数会返回另一个函数，该函数才是真正被调用的函数
      return _debounce
  }

  


  
// leading参数用来控制是否第一次立即执行，默认为true
function throttle(fn, interval, leading = true) {
  //该变量用于记录上一次函数的执行事件
  let lastTime = 0
  // 内部的控制是否立即执行的变量
  let isLeading = true
  
  const _throttle = function(...args) {
      // 获取当前时间
      const nowTime = new Date().getTime()
      
      // 第一次立即执行
      if (!leading && isLeading) {
          // 将lastTime设置为nowTime，这样就不会导致第一次时remainTime大于interval
          lastTime = nowTime
          // 将isLeading设置为false，这样就才不会对后续的lastTime产生影响。
          isLeading = false
      }
      
      // cd剩余时间
      const remainTime = nowTime - lastTime
      // 如果剩余时间大于间隔时间，也就是说可以再次执行函数
      if (remainTime - interval >= 0) {
          fn.apply(this, args)
          // 将上一次函数执行的时间设置为nowTime，这样下次才能重新进入cd
          lastTime = nowTime
      }
  }
  // 返回_throttle函数
  return _throttle
}
