/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {

  let p = 0; // first
  let q = 0; // second
  let sum = 1;
  for(let i = 0; i < n.length; i++) {
    p = q;
    q = sum;
    sum = p+q;
  }
  return sum;
};



