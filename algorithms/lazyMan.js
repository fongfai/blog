class LazyManClass {
  constructor(name) {
    this.taskList = [];
    this.name = name;
    console.log(`Hi I am ${this.name}`);
    setTimeout(() => {
      this.run();
    }, 0);
  }
  eat(name) {
    var that = this;
    var fn = (function (n) {
      return function () {
        console.log(`I am eating ${n}`);
        // that.next();
      };
    })(name);
    this.taskList.push(fn);
    return this;
  }
  sleepFirst(time) {
    var that = this;
    var fn = (function (t) {
      return function () {
        setTimeout(() => {
          console.log(`等待了${t}秒...`);
          // that.next();
        }, t * 1000);
      };
    })(time);
    this.taskList.unshift(fn);
    return this;
  }
  sleep(time) {
    const fn = () =>
      new Promise((resolve, reject) =>
        setTimeout(() => {
          console.log(`等待了${time}秒...`);
          resolve();
        }, time * 1000)
      );
    this.taskList.push(fn);
    return this;
  }

  delay(s) {
    return () => {
      return new Promise((resolve) => {
        setTimeout(function () {
          console.log(`等待了${s}秒...`);
          resolve();
        }, s * 1000);
      });
    };
  }
  sleep2(s) {
    this.taskList.push(this.delay(s));
    // 这边还没有返回  同步就继续执行了
    return this;
  }

  async run() {
    // for (const iterator of this.taskList) {
    //   await iterator();
    // }
    for (let i = 0; i < this.taskList.length; i++) {
      const fn = this.taskList[i];
      console.log(fn);
      console.time("ttt");
      await fn();
      console.timeEnd("ttt");
    }
  }
}
function LazyMan(name) {
  return new LazyManClass(name);
}
LazyMan("Tony").eat("lunch").eat("dinner").sleep2(2).eat("junk food");
