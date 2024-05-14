//数字千分位处理，正则和非正则都要实现
function numToKilo(num) {
  const splittedNum = [];
  let temp = num.toString(); // 将数字转换为字符串
  while (temp.length > 0) {
    // 每次循环取字符串的最后三位，如果字符串长度大于3
    splittedNum.unshift(temp.length > 3 ? temp.substr(temp.length - 3) : temp);
    // 去掉已经处理过的最后三位，继续下一次循环
    temp = temp.substring(0, Math.max(0, temp.length - 3));
  }
  // 使用逗号连接所有处理过的数字片段
  return splittedNum.join(",");
}

/* 
\d{3}：匹配恰好三个数字。
(?=...)：是一个正向前查找，用于匹配后面跟着特定模式的位置，但不包括在匹配结果中。
https://leetcode.cn/problems/thousand-separator/solutions/401253/zheng-ze-wei-zhi-pi-pei-by-shetia/
 */
function numToKilo(num) {
  const regKilo = /(?!^)(?=(\d{3})+$)/g; // 修正正则表达式
  let numStr = num.toString();
  // 使用replace方法将匹配的三位数字组替换为添加了逗号的格式
  return numStr.replace(regKilo, ",");
}