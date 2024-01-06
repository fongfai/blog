/* 简要实现

JavaScript中实现深克隆的原理是通过递归地复制对象的所有属性，包括复杂对象内部的嵌套对象，直到只剩下基本数据类型（如字符串、数字、布尔值等）为止。深克隆解决了浅克隆只复制对象引用的问题，确保原始对象和克隆对象在内存中是完全独立的。

下面是实现深克隆的基本步骤：

检查被克隆的对象是否是基本数据类型，如果是，直接返回其值。
检查对象是否是日期（Date）或正则表达式（RegExp）类型的对象，因为这些类型的对象也需要特殊处理。
创建一个新对象或数组，用来存放克隆后的数据。
遍历原对象的所有可枚举属性，包括数组的每个元素。
对每个属性或元素递归调用深克隆函数。
处理循环引用的问题，避免无限递归。可以通过使用一个Map或其他结构来跟踪已经克隆过的对象。
返回新对象，保证新对象与原对象在结构和数据上完全一致，但在内存中是独立分离的。
*/

function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return null;
  if (typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);

  if (hash.has(obj)) return hash.get(obj); // 处理循环引用
  // 保留对象原型上的数据
  let cloneObj = new obj.constructor();
  hash.set(obj, cloneObj);

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 递归克隆每个属性值
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
// 使用例子
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
console.log(cloned); // {a: 1, b: {c: 2}}



/* 详细实现 */

const mapTag = "[object Map]";
const setTag = "[object Set]";
const arrayTag = "[object Array]";
const objectTag = "[object Object]";
const argsTag = "[object Arguments]";

const boolTag = "[object Boolean]";
const dateTag = "[object Date]";
const numberTag = "[object Number]";
const stringTag = "[object String]";
const symbolTag = "[object Symbol]";
const errorTag = "[object Error]";
const regexpTag = "[object RegExp]";
const funcTag = "[object Function]";

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];

function forEach(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}

function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}

function getType(target) {
  return Object.prototype.toString.call(target);
}

//保留对象原型上的数据
function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}

function cloneSymbol(targe) {
  return Object(Symbol.prototype.valueOf.call(targe));
}

function cloneReg(targe) {
  /* https://juejin.cn/post/6844903775384125448 */
  const reFlags = /\w*$/;
  const result = new targe.constructor(targe.source, reFlags.exec(targe));
  result.lastIndex = targe.lastIndex;
  return result;
}

function cloneFunction(func) {
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  if (func.prototype) {
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);
    if (body) {
      if (param) {
        const paramArr = param[0].split(",");
        return new Function(...paramArr, body[0]);
      } else {
        return new Function(body[0]);
      }
    } else {
      return null;
    }
  } else {
    return eval(funcString);
  }
}

function cloneOtherType(targe, type) {
  const Ctor = targe.constructor;
  switch (type) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Ctor(targe);
    case regexpTag:
      return cloneReg(targe);
    case symbolTag:
      return cloneSymbol(targe);
    case funcTag:
      return cloneFunction(targe);
    default:
      return null;
  }
}

function clone(target, map = new WeakMap()) {
  // 克隆原始类型
  if (!isObject(target)) {
    return target;
  }

  // 初始化
  const type = getType(target);
  let cloneTarget;
  if (deepTag.includes(type)) {
    cloneTarget = getInit(target);
  } else {
    return cloneOtherType(target, type);
  }

  // 防止循环引用
  if (map.get(target)) {
    return map.get(target);
  }
  map.set(target, cloneTarget);

  // 克隆set
  if (type === setTag) {
    target.forEach((value) => {
      cloneTarget.add(clone(value, map));
    });
    return cloneTarget;
  }

  // 克隆map
  if (type === mapTag) {
    target.forEach((value, key) => {
      cloneTarget.set(key, clone(value, map));
    });
    return cloneTarget;
  }

  // 克隆对象和数组
  //type === arrayTag || type === objectTag
  let cloneTarget = Array.isArray(target) ? [] : {};
  for (const key in target) {
    cloneTarget[key] = clone(target[key], map);
  }
  //克隆对象和数组： 循环性能优化替代
  // const keys = type === arrayTag ? undefined : Object.keys(target);
  // forEach(keys || target, (value, key) => {
  //     if (keys) {
  //         key = value;
  //     }
  //     cloneTarget[key] = clone(target[key], map);
  // });

  return cloneTarget;
}

/* 
作者：ConardLi
链接：https://juejin.cn/post/6844903929705136141
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
