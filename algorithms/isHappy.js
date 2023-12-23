/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  let arr = Array.from(n + '');
  let count = 100000;// 防止溢出
  while (arr.length) {
    count--;
    if(count === 0)  break
    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
      // console.log('---', arr[i], Math.pow(arr[i]))
      ans += Math.pow(arr[i], 2);
    }
    console.log(ans);
    if (ans === 1) {
      return true;
    }
    arr = Array.from(ans + '');
  }
  return false;
};

isHappy(19)