// https://juejin.cn/post/7077122129107353636

// /* nextTick执行顺序  */
{
  function tick() {
    console.log("tick");
  }

  function timer() {
    console.log("timer");
  }

  setTimeout(() => {
    timer();
  }, 0);

  console.log("start");

  new Promise((resolve, reject) => {
    console.log("promise1");
    resolve();
  }).then(() => {
    console.log("promise1-callback");
  });

  process.nextTick(() => {
    tick();
  });

  new Promise((resolve, reject) => {
    console.log("promise2");
    resolve();
  }).then(() => {
    console.log("promise2-callback");
  });
}

// // log顺序: tick timer

// /* setTimerout & setImmediate 谁快？ */
// {
//   function timer() {
//     console.log("timer");
//   }

//   function immediate() {
//     console.log("immediate");
//   }

//   setTimeout(() => {
//     timer();
//   }, 0);

//   setImmediate(() => {
//     immediate();
//   });
// }

/* {

  setImmediate(() => {
    console.log('immediate 开始')
    Promise.resolve().then(console.log('immediate' + 1));
    Promise.resolve().then(console.log('immediate' + 2));
    console.log('immediate 结束');
  });
  
  setTimeout(() => {
    console.log('timer 开始');
    Promise.resolve().then(console.log('timer' + 1));
    Promise.resolve().then(console.log('timer' + 2));
    console.log('timer 结束');
  }, 0);
  
} */
