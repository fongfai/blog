
// 爬楼梯有多少种爬法： 动态规划， 具体实现是滚动数组
var climbStairs = function(n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
      p = q;
      q = r;
      r = p + q;
  }
  return r;
};

// 爬楼梯通项公式就是斐波那契数列的通项公式   滚动数组实现
var fibonacci = function (n) {
  let n1 = 1; n2 = 1;
  for (let i = 2; i < n; i++) {
      [n1, n2] = [n2, n1 + n2]
  }
  return n2
}
fibonacci(30)


// 作者：力扣官方题解
// 链接：https://leetcode.cn/problems/climbing-stairs/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。