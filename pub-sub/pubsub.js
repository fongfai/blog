// 发布订阅模式  pub sub

// 版本一
{
  class PubSub {
    constructor() {
      // 维护事件及订阅行为
      this.events = {}
    }
    /**
     * 注册事件订阅行为
     * @param {String} type 事件类型
     * @param {Function} cb 回调函数
     */
    subscribe(type, cb) {
      if (!this.events[type]) {
        this.events[type] = []
      }
      this.events[type].push(cb)
    }
    /**
     * 发布事件
     * @param {String} type 事件类型
     * @param  {...any} args 参数列表
     */
    publish(type, ...args) {
      if (this.events[type]) {
        this.events[type].forEach(cb => {
          cb(...args)
        })
      }
    }
    /**
     * 移除某个事件的一个订阅行为
     * @param {String} type 事件类型
     * @param {Function} cb 回调函数
     */
    unsubscribe(type, cb) {
      if (this.events[type]) {
        const targetIndex = this.events[type].findIndex(item => item === cb)
        if (targetIndex !== -1) {
          this.events[type].splice(targetIndex, 1)
        }
        if (this.events[type].length === 0) {
          delete this.events[type]
        }
      }
    }
    /**
     * 移除某个事件的所有订阅行为
     * @param {String} type 事件类型
     */
    unsubscribeAll(type) {
      if (this.events[type]) {
        delete this.events[type]
      }
    }
  }
}

// 版本二

class PubSub {
  constructor() {
    this.messages = {};
    this.listeners = {};
  }
  // 添加发布者
  publish(type, content) {
    const existContent = this.messages[type];
    if (!existContent) {
      this.messages[type] = [];
    }
    this.messages[type].push(content);
  }
  // 添加订阅者
  subscribe(type, cb) {
    const existListener = this.listeners[type];
    if (!existListener) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(cb);
  }
  // 通知
  notify(type) {
    const messages = this.messages[type];
    const subscribers = this.listeners[type] || [];

    // 按消息发布顺序 广播给订阅者
    // subscribers.forEach((cb, index) => cb(messages[index]));

    // 将所有当前type下的信息广播给每个订阅者
    subscribers.forEach((cb, index) => {
      messages.forEach((msg, index) => {
        cb(msg)
      })
    });
  }
}

class Publisher {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }
  publish(type, content) {
    this.context.publish(type, content);
  }
}

class Subscriber {
  constructor(name, context) {
    this.name = name;
    this.context = context;
  }
  subscribe(type, cb) {
    this.context.subscribe(type, cb);
  }
}


const TYPE_A = 'music';
const TYPE_B = 'movie';
const TYPE_C = 'novel';

const pubsub = new PubSub();

const publisherA = new Publisher('publisherA', pubsub);
publisherA.publish(TYPE_A, 'we are young');
// publisherA.publish(TYPE_B, 'the silicon valley');

const publisherB = new Publisher('publisherB', pubsub);
publisherB.publish(TYPE_A, 'stronger');

// const publisherC = new Publisher('publisherC', pubsub);
// publisherC.publish(TYPE_C, 'a brief history of time');

const subscriberA = new Subscriber('subscriberA', pubsub);
subscriberA.subscribe(TYPE_A, res => {
  console.log('subscriberA received', res)
});

const subscriberA2 = new Subscriber('subscriberA2', pubsub);
subscriberA2.subscribe(TYPE_A, res => {
  console.log('subscriberA2 received', res)
});

// const subscriberB = new Subscriber('subscriberB', pubsub);
// subscriberB.subscribe(TYPE_C, res => {
//   console.log('subscriberB received', res)
// });
const subscriberC = new Subscriber('subscriberC', pubsub);
subscriberC.subscribe(TYPE_B, res => {
  console.log('subscriberC received', res)
});

pubsub.notify(TYPE_A);
// pubsub.notify(TYPE_B);
// pubsub.notify(TYPE_C);