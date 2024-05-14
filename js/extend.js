// 实现一个子类实例可以继承父类的所有方法

function Parent() {
  // 父类的构造函数实现
}

Parent.prototype.someMethod = function() {
  // 父类的一个方法
};

function Child() {
  Parent.call(this); // 调用父类的构造函数
}

// 建立原型链继承
Child.prototype = Object.create(Parent.prototype);

// 修正构造函数指向，确保它指向 Child
Child.prototype.constructor = Child;

// 给 Child 添加一些特定的方法
Child.prototype.childMethod = function() {
  // 子类特有的方法
};

// 测试继承
var childInstance = new Child();
childInstance.someMethod(); // 可以调用继承自 Parent 的方