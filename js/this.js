


var b = {
  a: 3,
  getA(){
    this.a  = 5;
    return function(){
      this.a
    }
  }
}


const c = b.getA()()

// 1。 c输出什么

// 2. 不修改b如何输出 5

// 3. 不修改b如何输出3