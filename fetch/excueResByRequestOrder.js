/* 按触发顺序执行异步任务 
https://github.com/frontend9/fe9-library/issues/27
*/
/* 
example: 
页面上有一个按钮，每次点击它，都会发送一个ajax请求，
并且，用户可以在ajax返回之前点击它。
现在我们要实现一个功能，
以按钮的点击顺序展示ajax的响应结果。
*/

// request method
let count = 0;
// 模拟ajax请求，以随机时间返回一个比之前大一的自然数
const mockAjax = async () => {
    console.warn('send ajax');
    await new Promise((res, rej) => setTimeout(() => res(++count), Math.random() * 3000));
    console.warn('ajax return');
    return count;
};


// 然后，假设按钮的id为sendAjax，
<input id="sendAjax" type="button" value="Click" />

document.querySelector('#sendAjax').addEventListener('click', async () => {
  const result = await mockAjax();
  console.log(result);
});

class Queue{
  constructor(){
    super()
    this.queues = []

    this.results = []
  
    this.lock = false

    this.REQUEST_SIZE = 5

  }

  addRequest(request){
    this.queues.push(request)
    if(this.lock){
      return;
    }
    this.lock = true
    this.excuse()
  }

  async excuse(){
    while(this.queues.length){
      // single request
      const task = this.queues.shift()
      const result = await task()
      this.results.push(result)
      this._callback && this._callback(value);
      // concurrent request
      const batchTasks = this.queues.splice(0, this.REQUEST_SIZE)
      const results = await Promise.all(batchTasks.map(t => t()))
      this.results.push(result)

    }
    //
    this.lock = false
  }


}


const queue = new Queue();

document.querySelector('#sendAjax').addEventListener('click', async () => {
  queue.addRequest(mockAjax)
    
});